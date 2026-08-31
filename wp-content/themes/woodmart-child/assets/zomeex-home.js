(function () {
  'use strict';

  var body = document.body;
  var header = document.querySelector('[data-site-header]');
  var announcement = document.querySelector('[data-announcement]');
  var menuButton = document.querySelector('[data-menu-toggle]');
  var mobileNav = document.querySelector('[data-mobile-nav]');
  var searchButton = document.querySelector('[data-search-toggle]');
  var searchPanel = document.querySelector('[data-search-panel]');
  var searchInput = document.querySelector('#zomeex-search-input');
  var languageRoot = document.querySelector('.zomeex-language-switcher');
  var lastFocusedElement = null;

  var syncLanguageTrigger = function () {
    var trigger = languageRoot?.querySelector('a.gt_switcher-popup');
    var image = trigger?.querySelector('img');
    var languageName = trigger?.querySelector('span:first-of-type')?.textContent?.trim();

    if (!trigger || !image?.alt) return;

    var languageCode = image.alt.toLowerCase();
    var compactCodes = { 'zh-cn': 'ZH', 'zh-tw': 'ZH-TW', iw: 'HE' };
    trigger.dataset.languageCode = compactCodes[languageCode] || languageCode.slice(0, 2).toUpperCase();
    if (languageName) trigger.setAttribute('aria-label', 'Language: ' + languageName);
  };

  if (languageRoot) {
    syncLanguageTrigger();
    new MutationObserver(syncLanguageTrigger).observe(languageRoot, { childList: true, subtree: true });
  }

  if (window.sessionStorage.getItem('zomeex-announcement-dismissed') === '1' && announcement) {
    announcement.hidden = true;
  }

  document.querySelector('[data-dismiss-announcement]')?.addEventListener('click', function () {
    if (announcement) announcement.hidden = true;
    window.sessionStorage.setItem('zomeex-announcement-dismissed', '1');
  });

  var syncHeader = function () {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 18);
  };
  var hero = document.querySelector('.zomeex-hero');
  if ('IntersectionObserver' in window && hero) {
    var observer = new IntersectionObserver(function (entries) {
      if (entries[0]) header?.classList.toggle('is-scrolled', !entries[0].isIntersecting);
    }, { threshold: 0, rootMargin: '-18px 0px 0px' });
    observer.observe(hero);
  }
  syncHeader();

  var setMenu = function (open) {
    if (!menuButton || !mobileNav) return;
    if (open) lastFocusedElement = document.activeElement;
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    mobileNav.hidden = !open;
    body.classList.toggle('zomeex-menu-open', open);
    if (open) mobileNav.querySelector('a')?.focus();
    else if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') lastFocusedElement.focus();
  };
  menuButton?.addEventListener('click', function () {
    setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
  });
  mobileNav?.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () { setMenu(false); });
  });

  var setSearch = function (open) {
    if (!searchButton || !searchPanel) return;
    searchButton.setAttribute('aria-expanded', String(open));
    searchButton.setAttribute('aria-label', open ? 'Close search' : 'Open search');
    searchPanel.hidden = !open;
    if (open) window.requestAnimationFrame(function () { searchInput?.focus(); });
  };
  searchButton?.addEventListener('click', function () {
    setSearch(searchButton.getAttribute('aria-expanded') !== 'true');
  });

  document.addEventListener('click', function (event) {
    var target = event.target;
    if (searchButton?.getAttribute('aria-expanded') === 'true' && !searchPanel?.contains(target) && !searchButton?.contains(target)) {
      setSearch(false);
    }
    if (menuButton?.getAttribute('aria-expanded') === 'true' && !mobileNav?.contains(target) && !menuButton?.contains(target)) {
      setMenu(false);
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key !== 'Escape') return;
    if (menuButton?.getAttribute('aria-expanded') === 'true') setMenu(false);
    if (searchButton?.getAttribute('aria-expanded') === 'true') {
      setSearch(false);
      searchButton.focus();
    }
  });

  document.querySelectorAll('[data-horizontal-track]').forEach(function (track) {
    track.addEventListener('wheel', function (event) {
      if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
        event.preventDefault();
        track.scrollLeft += event.deltaY;
      }
    }, { passive: false });
  });
}());
