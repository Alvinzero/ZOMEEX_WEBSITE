(function () {
  'use strict';

  var page = document.querySelector('.zomeex-insights-page');
  if (!page || !window.fetch || !window.AbortController || !window.DOMParser || !window.history.pushState) return;

  var results = page.querySelector('.zomeex-insights-archive__main');
  var filters = page.querySelector('.zomeex-insights-filters form');
  var search = page.querySelector('.zomeex-insights-search');
  var feedback = page.querySelector('.zomeex-insights-feedback');
  if (!results || !filters || !search || !feedback) return;

  var message = feedback.querySelector('[data-zomeex-insights-message]');
  var retry = feedback.querySelector('[data-zomeex-insights-retry]');
  var base = new URL(search.action, window.location.href);
  var requestId = 0;
  var controller = null;
  var changeTimer = null;
  var scrollTimer = null;
  var entryCounter = 0;
  var activeEntry = (window.history.state && window.history.state.zomeexInsights && window.history.state.zomeexInsights.key) || nextEntry();
  var scrollPositions = new Map();
  var restoringHistory = false;
  var failedRequest = null;
  var status = { kind: '', count: '' };
  var copy = {
    en: { loading: 'Updating articles…', error: 'Could not update articles. Your previous results are still shown.', retry: 'Try again', done: 'Articles updated.' },
    'zh-CN': { loading: '正在更新文章…', error: '文章更新失败，当前仍显示之前的结果。请重试。', retry: '重试', done: '文章已更新。' },
    ru: { loading: 'Обновление статей…', error: 'Не удалось обновить статьи. Показаны предыдущие результаты.', retry: 'Повторить', done: 'Статьи обновлены.' },
    de: { loading: 'Artikel werden aktualisiert…', error: 'Artikel konnten nicht aktualisiert werden. Die bisherigen Ergebnisse bleiben sichtbar.', retry: 'Erneut versuchen', done: 'Artikel aktualisiert.' },
    fr: { loading: 'Mise à jour des articles…', error: 'Impossible de mettre à jour les articles. Les résultats précédents restent affichés.', retry: 'Réessayer', done: 'Articles mis à jour.' }
  };

  function renderStatus() {
    var locale = window.zomeexI18n ? window.zomeexI18n.getLocale() : 'en';
    var text = copy[locale] || copy.en;
    message.textContent = status.kind === 'done' ? text.done + (status.count ? ' ' + status.count : '') : (text[status.kind] || '');
    retry.textContent = text.retry;
    retry.hidden = status.kind !== 'error';
    feedback.classList.toggle('screen-reader-text', status.kind !== 'error');
  }

  function setStatus(kind, count) {
    status = { kind: kind, count: count || '' };
    renderStatus();
  }

  function isInsightsUrl(url) {
    return url.origin === base.origin && url.pathname.replace(/\/$/, '') === base.pathname.replace(/\/$/, '') &&
      (!base.searchParams.has('page_id') || url.searchParams.get('page_id') === base.searchParams.get('page_id'));
  }

  function preserveLanguage(url) {
    var language = new URL(window.location.href).searchParams.get('lang');
    if (language && !url.searchParams.has('lang')) url.searchParams.set('lang', language);
    return url;
  }

  function formUrl(form) {
    var url = new URL(form.action, window.location.href);
    var data = new FormData(form);
    // Keep action routing parameters while preserving all values of multi-select filters.
    Array.from(data.keys()).forEach(function (key) { url.searchParams.delete(key); });
    data.forEach(function (value, key) {
      if (typeof value === 'string' && value.trim() && !(key === 'insight_sort' && value === 'newest')) {
        url.searchParams.append(key, value.trim());
      }
    });
    url.searchParams.delete('paged');
    return preserveLanguage(url);
  }

  function nextEntry() {
    return String(Date.now()) + ':' + (++entryCounter);
  }

  function saveScroll() {
    var scroll = [window.scrollX, window.scrollY];
    scrollPositions.set(activeEntry, scroll);
    var state = Object.assign({}, window.history.state || {});
    state.zomeexInsights = { key: activeEntry, scroll: scroll };
    window.history.replaceState(state, '', window.location.href);
  }

  function syncForm(current, incoming) {
    Array.from(current.elements).forEach(function (field) {
      if (!field.id) return;
      var source = incoming.querySelector('#' + field.id);
      if (!source) return;
      if (field.type === 'checkbox' || field.type === 'radio') field.checked = source.checked;
      else if (field.tagName === 'INPUT' || field.tagName === 'SELECT') field.value = source.value;
    });
    current.querySelectorAll('input[type="hidden"]').forEach(function (field) { field.remove(); });
    incoming.querySelectorAll('input[type="hidden"]').forEach(function (field) {
      current.appendChild(document.importNode(field, true));
    });
    current.action = incoming.action;
  }

  async function update(url, options) {
    options = options || {};
    window.clearTimeout(changeTimer);
    if (!isInsightsUrl(url)) return;
    if (controller) controller.abort();
    var id = ++requestId;
    var currentController = new AbortController();
    controller = currentController;
    var timeout = window.setTimeout(function () { currentController.abort(); }, 15000);
    restoringHistory = Boolean(options.pop);
    if (!options.pop) saveScroll();
    failedRequest = null;
    results.setAttribute('aria-busy', 'true');
    setStatus('loading');

    try {
      var response = await window.fetch(url.href, {
        credentials: 'same-origin', signal: currentController.signal, headers: { 'Accept': 'text/html' }
      });
      if (!response.ok || !isInsightsUrl(new URL(response.url || url.href))) throw new Error('Invalid insights response');
      var html = await response.text();
      if (id !== requestId) return;
      var incoming = new DOMParser().parseFromString(html, 'text/html');
      var incomingResults = incoming.querySelector('.zomeex-insights-archive__main');
      var incomingFilters = incoming.querySelector('.zomeex-insights-filters form');
      var incomingSearch = incoming.querySelector('.zomeex-insights-search');
      if (!incomingResults || !incomingFilters || !incomingSearch) throw new Error('Missing insights content');

      var active = document.activeElement;
      var restoreFocus = results.contains(active);
      var anchor = options.anchor && page.contains(options.anchor) && !results.contains(options.anchor) ? options.anchor : null;
      var anchorTop = anchor ? anchor.getBoundingClientRect().top : 0;
      var scroll = options.scroll || [window.scrollX, window.scrollY];
      incomingResults.querySelectorAll('script').forEach(function (script) { script.remove(); });
      results.replaceChildren.apply(results, Array.from(incomingResults.childNodes).map(function (node) { return document.importNode(node, true); }));
      syncForm(filters, incomingFilters);
      syncForm(search, incomingSearch);
      if (window.zomeexI18n) window.zomeexI18n.translate();
      if (restoreFocus) {
        var heading = results.querySelector('h2');
        if (heading) { heading.setAttribute('tabindex', '-1'); heading.focus({ preventScroll: true }); }
      }
      if (!options.pop && url.href !== window.location.href) {
        var state = Object.assign({}, window.history.state || {});
        activeEntry = nextEntry();
        state.zomeexInsights = { key: activeEntry, scroll: scroll };
        window.history.pushState(state, '', url.href);
      }
      if (anchor && !options.pop) scroll[1] += anchor.getBoundingClientRect().top - anchorTop;
      window.scrollTo(scroll[0], scroll[1]);
      if (!options.pop) saveScroll();
      var count = results.querySelector('.zomeex-insights-result-count');
      setStatus('done', count ? count.textContent.trim() : '');
    } catch (error) {
      if (id !== requestId) return;
      // Keep the page, selections and prior results available when the request fails.
      failedRequest = { url: url, options: options };
      setStatus('error');
    } finally {
      window.clearTimeout(timeout);
      if (id === requestId) {
        controller = null;
        restoringHistory = false;
        results.setAttribute('aria-busy', 'false');
      }
    }
  }

  page.addEventListener('click', function (event) {
    var link = event.target.closest('a[href]');
    if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || link.hasAttribute('download') || (link.target && link.target !== '_self')) return;
    if (!link.matches('.zomeex-insights-topics a, .zomeex-insights-hot-tags a, .zomeex-insights-filters__head a, .zomeex-insight-card__badge, .zomeex-content-pagination a, .zomeex-insights-empty a')) return;
    var url = preserveLanguage(new URL(link.href, window.location.href));
    if (!isInsightsUrl(url)) return;
    event.preventDefault();
    update(url, { anchor: link });
  });

  page.addEventListener('submit', function (event) {
    if (event.target !== filters && event.target !== search) return;
    event.preventDefault();
    update(formUrl(event.target), { anchor: document.activeElement });
  });

  filters.addEventListener('change', function (event) {
    if (!event.target.matches('input[type="checkbox"], input[type="radio"], select')) return;
    window.clearTimeout(changeTimer);
    // Invalidate the previous response immediately, including during the short multi-select debounce.
    ++requestId;
    if (controller) { controller.abort(); controller = null; }
    var anchor = event.target;
    changeTimer = window.setTimeout(function () { update(formUrl(filters), { anchor: anchor }); }, 120);
  });

  retry.addEventListener('click', function () {
    if (failedRequest) update(failedRequest.url, failedRequest.options);
  });

  window.addEventListener('popstate', function (event) {
    var url = new URL(window.location.href);
    if (!isInsightsUrl(url)) return;
    var saved = event.state && event.state.zomeexInsights;
    window.clearTimeout(scrollTimer);
    activeEntry = saved && saved.key ? saved.key : nextEntry();
    update(url, { pop: true, scroll: scrollPositions.get(activeEntry) || (saved && saved.scroll) });
  });
  window.addEventListener('scroll', function () {
    if (restoringHistory) return;
    // Remember reading positions immediately; persist after scrolling stops to avoid history write limits.
    scrollPositions.set(activeEntry, [window.scrollX, window.scrollY]);
    window.clearTimeout(scrollTimer);
    scrollTimer = window.setTimeout(function () { if (!restoringHistory) saveScroll(); }, 400);
  }, { passive: true });
  window.addEventListener('pagehide', function () {
    window.clearTimeout(scrollTimer);
    if (!restoringHistory) saveScroll();
  });
  window.addEventListener('zomeex:localechange', renderStatus);
  saveScroll();
}());
