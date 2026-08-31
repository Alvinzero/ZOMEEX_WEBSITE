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
  var languageRoot = document.querySelector('[data-locale-switcher]');
  var lastFocusedElement = null;

  var setLanguageMenu = function (open) {
    if (!languageRoot) return;
    var trigger = languageRoot.querySelector('.zomeex-locale__trigger');
    var menu = languageRoot.querySelector('.zomeex-locale__menu');
    if (!trigger || !menu) return;
    trigger.setAttribute('aria-expanded', String(open));
    menu.hidden = !open;
  };

  var languageFromCookie = function () {
    var match = document.cookie.match(/(?:^|; )googtrans=\/[^/]+\/([^;]+)/);
    return match ? decodeURIComponent(match[1]) : 'en';
  };

  var applyLanguage = function (language, code) {
    if (!languageRoot) return;
    var source = languageRoot.dataset.sourceLanguage || 'en';
    var current = languageRoot.querySelector('[data-locale-current]');
    if (current) current.textContent = code;
    languageRoot.dataset.activeLanguage = language;
    setLanguageMenu(false);
    document.cookie = 'googtrans=/' + source + '/' + language + ';path=/';
    if (typeof window.doGTranslate === 'function') {
      window.doGTranslate(source + '|' + language);
    } else if (language !== source) {
      // GTranslate may be injected after the first paint; reload lets it read
      // the selected cookie during local previews and deferred script loads.
      window.location.reload();
    }
  };

  if (languageRoot) {
    var activeLanguage = languageFromCookie();
    var activeOption = languageRoot.querySelector('[data-language="' + activeLanguage + '"]') || languageRoot.querySelector('[data-language="en"]');
    var current = languageRoot.querySelector('[data-locale-current]');
    if (current && activeOption) current.textContent = activeOption.dataset.languageCode || 'EN';
    languageRoot.querySelector('.zomeex-locale__trigger')?.addEventListener('click', function () {
      var trigger = languageRoot.querySelector('.zomeex-locale__trigger');
      setLanguageMenu(trigger?.getAttribute('aria-expanded') !== 'true');
    });
    languageRoot.querySelectorAll('[data-language]').forEach(function (option) {
      option.addEventListener('click', function () {
        applyLanguage(option.dataset.language, option.dataset.languageCode || 'EN');
      });
    });
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

  document.querySelectorAll('[data-nav-dropdown]').forEach(function (dropdown) {
    var trigger = dropdown.querySelector('[data-nav-dropdown-toggle]');
    var panel = dropdown.querySelector('[data-nav-dropdown-panel]');
    if (!trigger || !panel) return;
    trigger.addEventListener('click', function () {
      var open = trigger.getAttribute('aria-expanded') !== 'true';
      document.querySelectorAll('[data-nav-dropdown]').forEach(function (other) {
        var otherTrigger = other.querySelector('[data-nav-dropdown-toggle]');
        var otherPanel = other.querySelector('[data-nav-dropdown-panel]');
        if (otherTrigger && otherPanel) {
          otherTrigger.setAttribute('aria-expanded', 'false');
          otherPanel.hidden = true;
        }
      });
      trigger.setAttribute('aria-expanded', String(open));
      panel.hidden = !open;
    });
  });

  document.querySelectorAll('[data-mobile-nav-toggle]').forEach(function (trigger) {
    var panel = document.getElementById(trigger.getAttribute('aria-controls'));
    if (!panel) return;
    trigger.addEventListener('click', function () {
      var open = trigger.getAttribute('aria-expanded') !== 'true';
      trigger.setAttribute('aria-expanded', String(open));
      panel.hidden = !open;
      var symbol = trigger.querySelector('span[aria-hidden="true"]');
      if (symbol) symbol.textContent = open ? '-' : '+';
    });
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
    if (languageRoot && !languageRoot.contains(target)) setLanguageMenu(false);
    document.querySelectorAll('[data-nav-dropdown]').forEach(function (dropdown) {
      if (!dropdown.contains(target)) {
        dropdown.querySelector('[data-nav-dropdown-toggle]')?.setAttribute('aria-expanded', 'false');
        var panel = dropdown.querySelector('[data-nav-dropdown-panel]');
        if (panel) panel.hidden = true;
      }
    });
  });

  document.addEventListener('keydown', function (event) {
    if (event.key !== 'Escape') return;
    if (menuButton?.getAttribute('aria-expanded') === 'true') setMenu(false);
    if (languageRoot?.querySelector('.zomeex-locale__trigger')?.getAttribute('aria-expanded') === 'true') setLanguageMenu(false);
    document.querySelectorAll('[data-nav-dropdown]').forEach(function (dropdown) {
      dropdown.querySelector('[data-nav-dropdown-toggle]')?.setAttribute('aria-expanded', 'false');
      var panel = dropdown.querySelector('[data-nav-dropdown-panel]');
      if (panel) panel.hidden = true;
    });
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
