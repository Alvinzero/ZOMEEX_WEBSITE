'use strict';

// Run with: JSDOM_PACKAGE=/path/to/node_modules/jsdom node --test tests/insights-ajax.test.cjs
// Keep jsdom outside this WordPress checkout when no project-level package is installed.
// Set INSIGHTS_TEST_URL=http://localhost:8000/news/ to also check the WordPress HTML response.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const { JSDOM, VirtualConsole } = require(process.env.JSDOM_PACKAGE || 'jsdom');

const source = fs.readFileSync(path.join(__dirname, '../wp-content/themes/woodmart-child/assets/zomeex-insights.js'), 'utf8');
const archiveUrl = 'https://zomeex.test/insights/';

function escape(value) {
  return String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
}

function pageHtml(state = {}) {
  const action = state.action || archiveUrl;
  const topics = state.topics || [];
  const products = state.products || [];
  const hiddenLanguage = state.lang ? `<input type="hidden" name="lang" value="${escape(state.lang)}">` : '';
  const hiddenSearch = state.search ? `<input type="hidden" name="insight_search" value="${escape(state.search)}">` : '';
  const checkbox = (name, value, selected) => `<input id="${name}-${value}" type="checkbox" name="insight_${name}[]" value="${value}"${selected.includes(value) ? ' checked' : ''}>`;
  return `<!doctype html><html><body>
    <header id="site-header">Site header</header>
    <main class="zomeex-insights-page">
      <header id="insights-hero">
        <form class="zomeex-insights-search" action="${escape(action)}">
          ${hiddenLanguage}<input id="insight-search" type="search" name="insight_search" value="${escape(state.search || '')}">
          <button type="submit">Search</button>
        </form>
        <nav class="zomeex-insights-hot-tags"><a id="hot-product" href="${archiveUrl}?insight_product=jars">Jars</a></nav>
      </header>
      <nav class="zomeex-insights-topics">
        <a id="topic-compliance-link" href="${archiveUrl}?insight_topic=compliance"><span>Compliance</span></a>
        <a id="topic-design-link" href="${archiveUrl}?insight_topic=design"><span>Design</span></a>
      </nav>
      <div class="zomeex-insights-feedback screen-reader-text" role="status" aria-live="polite">
        <span data-zomeex-insights-message></span><button type="button" data-zomeex-insights-retry hidden>Try again</button>
      </div>
      <div class="zomeex-insights-archive__main" aria-busy="false">
        <h2>Latest articles</h2><p class="zomeex-insights-result-count">${escape(state.count || '6 articles')}</p>
        <article class="zomeex-insight-card" data-result="${escape(state.result || 'original')}">
          <a id="article-media" class="zomeex-insight-card__media" href="https://zomeex.test/article/packaging/">Article image</a>
          <a id="article-badge" class="zomeex-insight-card__badge" href="${archiveUrl}?insight_topic=compliance">Compliance</a>
          <h3><a id="article-title" href="https://zomeex.test/article/packaging/">${escape(state.result || 'original')}</a></h3>
          <a id="article-read" class="zomeex-insight-card__read" href="https://zomeex.test/article/packaging/">Read article</a>
        </article>
        <nav class="zomeex-content-pagination"><a id="pagination-next" href="${escape(state.next || `${archiveUrl}?paged=2`)}">Next</a></nav>
        <div class="zomeex-insights-empty"><a id="empty-clear" href="${archiveUrl}">Clear filters</a></div>
        ${state.extraResults || ''}
      </div>
      <aside class="zomeex-insights-filters"><form action="${escape(action)}">
        ${hiddenLanguage}${hiddenSearch}
        <div class="zomeex-insights-filters__head"><a id="clear-all" href="${archiveUrl}">Clear all</a></div>
        ${checkbox('topic', 'compliance', topics)}${checkbox('topic', 'design', topics)}
        ${checkbox('product', 'jars', products)}${checkbox('product', 'pouches', products)}
        <input id="period-all" type="radio" name="insight_period" value=""${!state.period ? ' checked' : ''}>
        <input id="period-30d" type="radio" name="insight_period" value="30d"${state.period === '30d' ? ' checked' : ''}>
        <select id="insight-sort" name="insight_sort">
          ${['newest', 'oldest', 'title'].map(value => `<option value="${value}"${(state.sort || 'newest') === value ? ' selected' : ''}>${value}</option>`).join('')}
        </select><button type="submit">Apply filters</button>
      </form></aside>
    </main>
  </body></html>`;
}

function deferred() {
  let resolve;
  let reject;
  const promise = new Promise((fulfill, fail) => { resolve = fulfill; reject = fail; });
  return { promise, resolve, reject };
}

function fixture(t, state = {}) {
  const dom = new JSDOM(pageHtml(state), {
    url: state.url || archiveUrl,
    runScripts: 'outside-only',
    virtualConsole: new VirtualConsole()
  });
  const { window } = dom;
  const { document } = window;
  const requests = [];
  const pushes = [];
  const scrolls = [];
  const translations = [];
  const timers = new Map();
  let now = 0;
  let nextTimer = 0;
  let locale = state.locale || 'en';

  // A manual clock avoids wall-clock waits for the debounce and request timeout.
  window.setTimeout = (callback, delay = 0, ...arguments_) => {
    const id = ++nextTimer;
    timers.set(id, { callback, arguments_, at: now + Number(delay) });
    return id;
  };
  window.clearTimeout = id => timers.delete(id);
  function advance(milliseconds) {
    const until = now + milliseconds;
    while (true) {
      const due = [...timers].filter(([, timer]) => timer.at <= until).sort((a, b) => a[1].at - b[1].at)[0];
      if (!due) break;
      const [id, timer] = due;
      timers.delete(id);
      now = timer.at;
      timer.callback(...timer.arguments_);
    }
    now = until;
  }

  window.fetch = (url, options) => {
    const pending = deferred();
    const request = {
      url: new URL(url),
      options,
      reject: pending.reject,
      respond(responseState = {}, responseOptions = {}) {
        pending.resolve({
          ok: responseOptions.ok ?? true,
          url: responseOptions.url || url,
          text: () => responseOptions.body || Promise.resolve(pageHtml(responseState))
        });
      }
    };
    // Deliberately do not reject automatically on abort: canceled work can still finish.
    requests.push(request);
    return pending.promise;
  };
  window.scrollTo = (x, y) => {
    scrolls.push([x, y]);
    Object.defineProperties(window, {
      scrollX: { configurable: true, value: x },
      scrollY: { configurable: true, value: y }
    });
  };
  window.scrollTo(12, 420);
  scrolls.length = 0;
  window.zomeexI18n = {
    getLocale: () => locale,
    translate: () => translations.push({ locale, result: result() })
  };
  const originalPush = window.history.pushState.bind(window.history);
  const originalReplace = window.history.replaceState.bind(window.history);
  window.history.pushState = (historyState, title, url) => {
    pushes.push({ state: historyState, url: new URL(url, window.location.href).href });
    originalPush(historyState, title, url);
  };
  window.eval(source);
  t.after(() => dom.window.close());

  function query(selector) { return document.querySelector(selector); }
  function result() { return query('[data-result]').dataset.result; }
  function click(selector, options = {}) {
    const event = new window.MouseEvent('click', { bubbles: true, cancelable: true, button: 0, ...options });
    let intercepted;
    // Observe the page handler before suppressing jsdom's unimplemented native navigation.
    const observe = current => { intercepted = current.defaultPrevented; current.preventDefault(); };
    document.addEventListener('click', observe, { once: true });
    query(selector).dispatchEvent(event);
    return intercepted;
  }
  function submit(selector) {
    const event = new window.Event('submit', { bubbles: true, cancelable: true });
    query(selector).dispatchEvent(event);
    assert.equal(event.defaultPrevented, true, 'archive forms should use the asynchronous handler');
  }
  function change(selector, value) {
    const field = query(selector);
    if (field.type === 'checkbox' || field.type === 'radio') field.checked = value;
    else field.value = value;
    field.dispatchEvent(new window.Event('change', { bubbles: true }));
  }
  function pop(url, historyState) {
    // Moving the URL stands in for the browser's back/forward navigation itself.
    originalReplace(historyState, '', url);
    window.dispatchEvent(new window.PopStateEvent('popstate', { state: historyState }));
  }
  function setLocale(value) {
    locale = value;
    window.dispatchEvent(new window.Event('zomeex:localechange'));
  }
  return { window, query, requests, pushes, scrolls, translations, advance, click, submit, change, pop, setLocale, result };
}

// Drain promise continuations without allowing native timers or network requests.
async function settle() {
  for (let index = 0; index < 8; index += 1) await Promise.resolve();
}

test('only the latest request may replace results, even when an aborted response body arrives late', async t => {
  const f = fixture(t);
  f.click('#topic-compliance-link span');
  const oldBody = deferred();
  f.requests[0].respond({}, { body: oldBody.promise });
  await settle();

  f.click('#topic-design-link');
  assert.equal(f.requests[0].options.signal.aborted, true);
  assert.equal(f.result(), 'original');
  assert.equal(f.query('.zomeex-insights-archive__main').getAttribute('aria-busy'), 'true');
  f.requests[1].respond({ result: 'newest design', topics: ['design'] });
  await settle();
  oldBody.resolve(pageHtml({ result: 'obsolete compliance', topics: ['compliance'] }));
  await settle();

  assert.equal(f.result(), 'newest design');
  assert.equal(f.query('#topic-design').checked, true);
  assert.equal(f.query('#topic-compliance').checked, false);
  assert.equal(f.pushes.length, 1);
  assert.equal(new URL(f.window.location.href).searchParams.get('insight_topic'), 'design');
  assert.equal(f.query('[data-zomeex-insights-retry]').hidden, true);
  assert.equal(f.query('.zomeex-insights-archive__main').getAttribute('aria-busy'), 'false');
});

test('a checkbox change invalidates old work immediately and batches successive selections', async t => {
  const f = fixture(t);
  f.click('#topic-compliance-link');
  f.change('#topic-compliance', true);
  assert.equal(f.requests[0].options.signal.aborted, true);
  f.requests[0].respond({ result: 'obsolete', topics: ['compliance'] });
  await settle();
  assert.equal(f.result(), 'original', 'a stale response cannot apply during the debounce');

  f.advance(119);
  assert.equal(f.requests.length, 1);
  f.change('#topic-design', true);
  f.advance(119);
  assert.equal(f.requests.length, 1);
  f.advance(1);
  assert.equal(f.requests.length, 2);
  assert.deepEqual(f.requests[1].url.searchParams.getAll('insight_topic[]'), ['compliance', 'design']);
  f.requests[1].respond({ result: 'both topics', topics: ['compliance', 'design'] });
  await settle();
  assert.equal(f.result(), 'both topics');
  assert.equal(f.pushes.length, 1);
});

test('network failure keeps previous results and selections, and retry repeats the failed request', async t => {
  const f = fixture(t);
  const originalResults = f.query('.zomeex-insights-archive__main').innerHTML;
  const originalHero = f.query('#insights-hero');
  const originalForm = f.query('.zomeex-insights-filters form');
  f.change('#product-jars', true);
  f.advance(120);
  const failedUrl = f.requests[0].url.href;
  f.requests[0].reject(new TypeError('Network unavailable'));
  await settle();

  assert.equal(f.query('.zomeex-insights-archive__main').innerHTML, originalResults);
  assert.equal(f.query('#product-jars').checked, true);
  assert.equal(f.window.location.href, archiveUrl);
  assert.equal(f.pushes.length, 0);
  assert.equal(f.query('.zomeex-insights-archive__main').getAttribute('aria-busy'), 'false');
  assert.equal(f.query('[data-zomeex-insights-retry]').hidden, false);
  assert.equal(f.query('.zomeex-insights-feedback').classList.contains('screen-reader-text'), false);
  assert.match(f.query('[data-zomeex-insights-message]').textContent, /previous results are still shown/);

  f.click('[data-zomeex-insights-retry]');
  assert.equal(f.requests[1].url.href, failedUrl);
  assert.equal(f.query('[data-zomeex-insights-retry]').hidden, true);
  f.requests[1].respond({ result: 'jars after retry', products: ['jars'], count: '2 articles' });
  await settle();
  assert.equal(f.result(), 'jars after retry');
  assert.equal(f.query('#product-jars').checked, true);
  assert.equal(f.query('#insights-hero'), originalHero);
  assert.equal(f.query('.zomeex-insights-filters form'), originalForm);
  assert.equal(f.pushes.length, 1);
  assert.equal(f.query('[data-zomeex-insights-message]').textContent, 'Articles updated. 2 articles');
});

test('form submission preserves all checked values and routing, trims search, and resets pagination', async t => {
  const action = `${archiveUrl}?page_id=74&paged=5&insight_topic%5B%5D=stale`;
  const f = fixture(t, {
    action,
    url: `${archiveUrl}?page_id=74&lang=de&paged=5`,
    topics: ['compliance', 'design'], products: ['jars', 'pouches'], search: '  packaging  '
  });
  f.submit('.zomeex-insights-filters form');
  const request = f.requests[0];
  assert.deepEqual(request.url.searchParams.getAll('insight_topic[]'), ['compliance', 'design']);
  assert.deepEqual(request.url.searchParams.getAll('insight_product[]'), ['jars', 'pouches']);
  assert.equal(request.url.searchParams.get('page_id'), '74');
  assert.equal(request.url.searchParams.get('insight_search'), 'packaging');
  assert.equal(request.url.searchParams.get('lang'), 'de');
  assert.equal(request.url.searchParams.has('paged'), false);
  assert.equal(request.url.searchParams.has('insight_period'), false);
  assert.equal(request.url.searchParams.has('insight_sort'), false);
  assert.equal(request.options.credentials, 'same-origin');
  assert.equal(request.options.headers.Accept, 'text/html');
  request.respond({ action, result: 'multi-filter results', topics: ['compliance', 'design'], products: ['jars', 'pouches'], lang: 'de', search: 'packaging' });
  await settle();
  assert.equal(f.result(), 'multi-filter results');
  assert.equal(f.query('.zomeex-insights-filters form input[name="lang"]').value, 'de');
  assert.equal(f.query('#insight-search').value, 'packaging');
});

test('clearing filters resets the controls and URL while retaining the current language', async t => {
  const f = fixture(t, {
    url: `${archiveUrl}?insight_topic=compliance&insight_product=jars&insight_search=packaging&paged=3&lang=fr`,
    lang: 'fr', topics: ['compliance'], products: ['jars'], search: 'packaging', period: '30d', sort: 'oldest'
  });
  assert.equal(f.click('#clear-all'), true);
  assert.deepEqual([...f.requests[0].url.searchParams], [['lang', 'fr']]);
  assert.equal(f.result(), 'original');
  f.requests[0].respond({ result: 'all articles', lang: 'fr' });
  await settle();

  assert.equal(f.result(), 'all articles');
  assert.equal(f.query('#topic-compliance').checked, false);
  assert.equal(f.query('#product-jars').checked, false);
  assert.equal(f.query('#period-all').checked, true);
  assert.equal(f.query('#insight-sort').value, 'newest');
  assert.equal(f.query('#insight-search').value, '');
  assert.equal(f.query('.zomeex-insights-filters input[name="insight_search"]'), null);
  assert.deepEqual([...new URL(f.window.location.href).searchParams], [['lang', 'fr']]);
  assert.equal(f.pushes.length, 1);
});

test('pagination keeps filters and language; back and forward restore results and scroll without pushing history', async t => {
  const firstUrl = `${archiveUrl}?insight_topic%5B%5D=compliance&lang=ru`;
  const next = `${archiveUrl}?insight_topic%5B%5D=compliance&paged=2`;
  const f = fixture(t, { url: firstUrl, lang: 'ru', topics: ['compliance'], next });
  assert.equal(f.click('#pagination-next'), true);
  assert.equal(f.requests[0].url.searchParams.get('paged'), '2');
  assert.deepEqual(f.requests[0].url.searchParams.getAll('insight_topic[]'), ['compliance']);
  assert.equal(f.requests[0].url.searchParams.get('lang'), 'ru');
  f.requests[0].respond({ result: 'page two', lang: 'ru', topics: ['compliance'] });
  await settle();
  const secondUrl = f.window.location.href;
  assert.equal(f.pushes.length, 1);
  assert.deepEqual(Array.from(f.pushes[0].state.zomeexInsights.scroll), [12, 420]);

  f.pop(firstUrl, { zomeexInsights: { scroll: [7, 240] } });
  assert.equal(f.requests[1].url.href, firstUrl);
  f.requests[1].respond({ result: 'page one restored', lang: 'ru', topics: ['compliance'] });
  await settle();
  assert.equal(f.result(), 'page one restored');
  assert.deepEqual(f.scrolls.at(-1), [7, 240]);
  assert.equal(f.pushes.length, 1);
  assert.equal(f.window.location.href, firstUrl);

  f.pop(secondUrl, { zomeexInsights: { scroll: [12, 510] } });
  f.requests[2].respond({ result: 'page two restored', lang: 'ru', topics: ['compliance'] });
  await settle();
  assert.equal(f.result(), 'page two restored');
  assert.deepEqual(f.scrolls.at(-1), [12, 510]);
  assert.equal(f.pushes.length, 1);
});

test('search and links retain language, replacement content is translated, and feedback responds to locale changes', async t => {
  const f = fixture(t, { url: `${archiveUrl}?lang=zh-CN`, locale: 'zh-CN' });
  f.query('#insight-search').value = '  child resistant  ';
  f.submit('.zomeex-insights-search');
  assert.equal(f.requests[0].url.searchParams.get('lang'), 'zh-CN');
  assert.equal(f.requests[0].url.searchParams.get('insight_search'), 'child resistant');
  assert.equal(f.query('[data-zomeex-insights-message]').textContent, '正在更新文章…');
  f.requests[0].respond({ result: 'searched', lang: 'zh-CN', search: 'child resistant' });
  await settle();
  assert.equal(f.translations.length, 1);
  assert.equal(f.translations[0].locale, 'zh-CN');
  assert.equal(f.translations[0].result, 'searched');
  assert.match(f.query('[data-zomeex-insights-message]').textContent, /^文章已更新。/);

  f.click('#hot-product');
  assert.equal(f.requests[1].url.searchParams.get('lang'), 'zh-CN');
  f.requests[1].reject(new TypeError('offline'));
  await settle();
  assert.equal(f.query('[data-zomeex-insights-retry]').textContent, '重试');
  f.setLocale('de');
  assert.equal(f.query('[data-zomeex-insights-retry]').textContent, 'Erneut versuchen');
  assert.match(f.query('[data-zomeex-insights-message]').textContent, /bisherigen Ergebnisse bleiben sichtbar/);
  assert.equal(new URL(f.window.location.href).searchParams.get('lang'), 'zh-CN');
});

test('article detail links and modified clicks retain native browser navigation', t => {
  const f = fixture(t);
  for (const selector of ['#article-media', '#article-title', '#article-read']) {
    assert.equal(f.click(selector), false, `${selector} should remain a detail-page link`);
  }
  for (const modifier of ['metaKey', 'ctrlKey', 'shiftKey', 'altKey']) {
    assert.equal(f.click('#topic-compliance-link', { [modifier]: true }), false, `${modifier} should remain native`);
  }
  assert.equal(f.click('#topic-compliance-link', { button: 1 }), false);
  f.query('#topic-compliance-link').target = '_blank';
  assert.equal(f.click('#topic-compliance-link'), false);
  f.query('#topic-compliance-link').removeAttribute('target');
  f.query('#topic-compliance-link').setAttribute('download', 'articles.html');
  assert.equal(f.click('#topic-compliance-link'), false);
  assert.equal(f.requests.length, 0);
  assert.equal(f.pushes.length, 0);
});

test('unusable HTTP or HTML responses keep results available for retry', async t => {
  for (const [name, responseOptions] of [
    ['HTTP failure', { ok: false }],
    ['redirect away from archive', { url: 'https://zomeex.test/login/' }],
    ['missing archive markup', { body: Promise.resolve('<h1>Maintenance</h1>') }]
  ]) {
    await t.test(name, async subtest => {
      const f = fixture(subtest);
      f.click('#topic-design-link');
      f.requests[0].respond({ result: 'should not render' }, responseOptions);
      await settle();
      assert.equal(f.result(), 'original');
      assert.equal(f.query('[data-zomeex-insights-retry]').hidden, false);
      assert.equal(f.query('.zomeex-insights-archive__main').getAttribute('aria-busy'), 'false');
      assert.equal(f.pushes.length, 0);
    });
  }
});

test('retry after a failed popstate restores its saved scroll without adding history', async t => {
  const f = fixture(t, { url: `${archiveUrl}?paged=2` });
  f.pop(archiveUrl, { zomeexInsights: { scroll: [0, 90] } });
  f.requests[0].reject(new TypeError('offline'));
  await settle();
  assert.equal(f.result(), 'original');
  f.click('[data-zomeex-insights-retry]');
  f.requests[1].respond({ result: 'back navigation retried' });
  await settle();
  assert.equal(f.result(), 'back navigation retried');
  assert.deepEqual(f.scrolls.at(-1), [0, 90]);
  assert.equal(f.pushes.length, 0);
});

test('real history back and forward restore the latest reading position before scroll persistence', async t => {
  const f = fixture(t);
  f.click('#topic-design-link');
  f.requests[0].respond({ result: 'design articles', topics: ['design'] });
  await settle();
  const filteredUrl = f.window.location.href;
  assert.equal(f.window.history.length, 2);

  f.window.scrollTo(12, 700);
  f.window.dispatchEvent(new f.window.Event('scroll'));
  // Traverse immediately: the application's 400 ms scroll persistence has not run.
  f.window.history.back();
  f.advance(0);
  assert.equal(f.window.location.href, archiveUrl);
  assert.equal(f.requests[1].url.href, archiveUrl);
  f.requests[1].respond({ result: 'all articles restored' });
  await settle();
  assert.equal(f.result(), 'all articles restored');
  assert.deepEqual(f.scrolls.at(-1), [12, 420]);

  f.window.history.forward();
  f.advance(0);
  assert.equal(f.window.location.href, filteredUrl);
  assert.equal(f.requests[2].url.href, filteredUrl);
  f.requests[2].respond({ result: 'design articles restored', topics: ['design'] });
  await settle();
  assert.equal(f.result(), 'design articles restored');
  assert.deepEqual(f.scrolls.at(-1), [12, 700]);
  assert.equal(f.window.history.length, 2);
  assert.equal(f.pushes.length, 1);
});

test('scrolling old content during a pending real history traversal cannot overwrite the destination position', async t => {
  const f = fixture(t);
  f.window.scrollTo(12, 260);
  f.window.dispatchEvent(new f.window.Event('scroll'));
  f.advance(400);
  f.click('#topic-design-link');
  f.requests[0].respond({ result: 'design articles', topics: ['design'] });
  await settle();
  const filteredUrl = f.window.location.href;
  f.window.scrollTo(12, 700);
  f.window.dispatchEvent(new f.window.Event('scroll'));
  f.advance(400);

  f.window.history.back();
  f.advance(0);
  assert.equal(f.window.location.href, archiveUrl);
  assert.equal(f.result(), 'design articles', 'old content remains visible while the destination request is pending');
  f.window.scrollTo(12, 940);
  f.window.dispatchEvent(new f.window.Event('scroll'));
  f.advance(400);
  f.requests[1].respond({ result: 'all articles restored' });
  await settle();
  assert.deepEqual(f.scrolls.at(-1), [12, 260]);

  // Visit both entries again so a corrupted in-memory reading position cannot go unnoticed.
  f.window.history.forward();
  f.advance(0);
  assert.equal(f.window.location.href, filteredUrl);
  f.requests[2].respond({ result: 'design articles restored', topics: ['design'] });
  await settle();
  assert.deepEqual(f.scrolls.at(-1), [12, 700]);
  f.window.history.back();
  f.advance(0);
  f.requests[3].respond({ result: 'all articles restored again' });
  await settle();
  assert.deepEqual(f.scrolls.at(-1), [12, 260]);
  assert.equal(f.result(), 'all articles restored again');
  assert.equal(f.window.history.length, 2);
  assert.equal(f.pushes.length, 1);
});

test('WordPress preserves canonical Chinese language in form values, actions, and topic links', {
  skip: process.env.INSIGHTS_TEST_URL ? false : 'Set INSIGHTS_TEST_URL to enable the WordPress HTTP regression',
  timeout: 30000
}, async t => {
  for (const requestedLanguage of ['zh-CN', 'zh-cn']) {
    await t.test(`lang=${requestedLanguage} returns zh-CN`, async subtest => {
      const url = new URL(process.env.INSIGHTS_TEST_URL);
      url.searchParams.set('lang', requestedLanguage);
      const response = await fetch(url, {
        headers: { Accept: 'text/html' },
        signal: AbortSignal.timeout(10000)
      });
      assert.equal(response.ok, true, `WordPress should return an archive, received HTTP ${response.status}`);
      const dom = new JSDOM(await response.text(), {
        url: response.url,
        virtualConsole: new VirtualConsole()
      });
      subtest.after(() => dom.window.close());
      const { document } = dom.window;
      const page = document.querySelector('.zomeex-insights-page');
      assert.ok(page, 'the response should contain the WordPress insights archive');

      for (const selector of ['.zomeex-insights-search', '.zomeex-insights-filters form']) {
        const form = page.querySelector(selector);
        assert.ok(form, `${selector} should exist in the server response`);
        const languageFields = form.querySelectorAll('input[type="hidden"][name="lang"]');
        assert.equal(languageFields.length, 1, `${selector} should carry one hidden language value`);
        assert.equal(languageFields[0].value, 'zh-CN', `${selector} should retain canonical language case`);
        assert.deepEqual(new URL(form.action).searchParams.getAll('lang'), ['zh-CN'], `${selector} action should retain canonical language case`);
      }

      const topicLinks = [...page.querySelectorAll('.zomeex-insights-topics__list a')];
      assert.ok(topicLinks.length > 0, 'the archive fixture should expose topic navigation links');
      const topicBadges = [...page.querySelectorAll('.zomeex-insight-card__badge')]
        .filter(link => new URL(link.href).searchParams.has('insight_topic'));
      for (const link of [...topicLinks, ...topicBadges]) {
        const linkUrl = new URL(link.href);
        assert.ok(linkUrl.searchParams.has('insight_topic'), 'topic links should carry their category filter');
        assert.deepEqual(linkUrl.searchParams.getAll('lang'), ['zh-CN'], `topic link should retain canonical language case: ${link.textContent.trim()}`);
      }
    });
  }
});
