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
  var i18n = window.zomeexI18n || null;

  var currentLocale = function () {
    return i18n && typeof i18n.getLocale === 'function' ? i18n.getLocale() : 'en';
  };

  var interfaceText = function (key, fallback) {
    return i18n && typeof i18n.t === 'function' ? i18n.t(key, currentLocale()) : fallback;
  };

  var safeStorage = function (kind) {
    try {
      return window[kind];
    } catch (error) {
      return null;
    }
  };

  var setLanguageMenu = function (open) {
    if (!languageRoot) return;
    var trigger = languageRoot.querySelector('.zomeex-locale__trigger');
    var menu = languageRoot.querySelector('.zomeex-locale__menu');
    if (!trigger || !menu) return;
    trigger.setAttribute('aria-expanded', String(open));
    menu.hidden = !open;
  };

  var languageFromCookie = function () {
    if (i18n && typeof i18n.getLocale === 'function') return i18n.getLocale();
    var match = document.cookie.match(/(?:^|; )googtrans=\/[^/]+\/([^;]+)/);
    if (!match) return 'en';
    try {
      return decodeURIComponent(match[1]);
    } catch (error) {
      return 'en';
    }
  };

  var applyLanguage = function (language, code, flag) {
    if (!languageRoot) return;
    var current = languageRoot.querySelector('[data-locale-current]');
    if (current) current.textContent = code;
    var currentFlag = languageRoot.querySelector('[data-locale-current-flag]');
    if (currentFlag && flag) currentFlag.src = flag;
    languageRoot.dataset.activeLanguage = language;
    languageRoot.querySelectorAll('[data-language]').forEach(function (option) {
      option.dataset.active = option.dataset.language === language ? 'true' : 'false';
    });
    setLanguageMenu(false);
    if (i18n && typeof i18n.setLocale === 'function') i18n.setLocale(language);
  };

  if (languageRoot) {
    var activeLanguage = languageFromCookie();
    var activeOption = languageRoot.querySelector('[data-language="en"]');
    languageRoot.querySelectorAll('[data-language]').forEach(function (option) {
      if (option.dataset.language === activeLanguage) activeOption = option;
    });
    var current = languageRoot.querySelector('[data-locale-current]');
    if (current && activeOption) current.textContent = activeOption.dataset.languageCode || 'EN';
    var currentFlag = languageRoot.querySelector('[data-locale-current-flag]');
    if (currentFlag && activeOption?.dataset.languageFlag) currentFlag.src = activeOption.dataset.languageFlag;
    languageRoot.querySelectorAll('[data-language]').forEach(function (option) {
      option.dataset.active = option === activeOption ? 'true' : 'false';
    });
    languageRoot.querySelector('.zomeex-locale__trigger')?.addEventListener('click', function () {
      var trigger = languageRoot.querySelector('.zomeex-locale__trigger');
      setLanguageMenu(trigger?.getAttribute('aria-expanded') !== 'true');
    });
    languageRoot.querySelectorAll('[data-language]').forEach(function (option) {
      option.addEventListener('click', function () {
        applyLanguage(option.dataset.language, option.dataset.languageCode || 'EN', option.dataset.languageFlag);
      });
    });
  }

  var sessionStorage = safeStorage('sessionStorage');
  var announcementDismissed = false;
  if (sessionStorage) {
    try {
      announcementDismissed = sessionStorage.getItem('zomeex-announcement-dismissed') === '1';
    } catch (error) {
      announcementDismissed = false;
    }
  }
  if (announcementDismissed && announcement) announcement.hidden = true;

  document.querySelector('[data-dismiss-announcement]')?.addEventListener('click', function () {
    if (announcement) announcement.hidden = true;
    if (sessionStorage) {
      try {
        sessionStorage.setItem('zomeex-announcement-dismissed', '1');
      } catch (error) {
        // Ignore storage failures in private browsing.
      }
    }
  });

  var updateQuoteCount = function () {
    var count = 0;
    var storage = safeStorage('localStorage');
    if (storage) {
      try {
        var items = JSON.parse(storage.getItem('zomeex-quote-items') || '[]');
        count = Array.isArray(items) ? items.filter(function (item) {
          var id = Number(item?.id);
          return item && typeof item === 'object' && isFinite(id) && id > 0 && Math.floor(id) === id && String(item.title || '').trim();
        }).length : 0;
      } catch (error) {
        count = 0;
      }
    }
    document.querySelectorAll('[data-quote-count]').forEach(function (element) {
      element.textContent = String(count);
      element.hidden = count === 0;
    });
  };

  var updateCartCount = function (count) {
    count = Number(count);
    if (!isFinite(count) || count < 0) count = 0;
    count = Math.floor(count);
    document.querySelectorAll('[data-cart-count]').forEach(function (element) {
      element.textContent = String(count);
      element.hidden = count === 0;
      var locale = currentLocale();
      var cartLabel = {
        'zh-CN': count + ' 件商品在购物车中',
        ru: count + ' товаров в корзине',
        de: count + ' Artikel im Warenkorb',
        fr: count + ' article(s) dans le panier'
      }[locale] || count + ' items in cart';
      element.setAttribute('aria-label', cartLabel);
    });
  };

  var syncCartCount = function () {
    var source = document.querySelector('.wd-cart-number');
    var match = source && source.textContent ? source.textContent.match(/\d+/) : null;
    if (match) updateCartCount(match[0]);
  };

  updateCartCount(document.querySelector('[data-cart-count]')?.textContent || 0);
  document.addEventListener('wc_fragments_refreshed', syncCartCount);
  document.addEventListener('added_to_cart', syncCartCount);
  document.addEventListener('removed_from_cart', syncCartCount);
  if (window.jQuery) {
    window.jQuery(document.body).on('wc_fragments_refreshed added_to_cart removed_from_cart updated_wc_div', syncCartCount);
  }
  updateQuoteCount();
  window.addEventListener('storage', function (event) {
    if (!event.key || event.key === 'zomeex-quote-items') updateQuoteCount();
  });
  document.addEventListener('visibilitychange', function () {
    if (!document.hidden) updateQuoteCount();
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
    menuButton.setAttribute('aria-label', open ? interfaceText('nav.closeMenu', 'Close menu') : interfaceText('nav.openMenu', 'Open menu'));
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

  var hoverCapable = window.matchMedia('(hover: hover) and (pointer: fine)');
  var dropdownCloseTimers = new WeakMap();
  var closeDropdown = function (dropdown) {
    var dropdownTrigger = dropdown.querySelector('[data-nav-dropdown-toggle]');
    var dropdownPanel = dropdown.querySelector('[data-nav-dropdown-panel]');
    if (dropdownTrigger && dropdownPanel) {
      dropdownTrigger.setAttribute('aria-expanded', 'false');
      dropdownPanel.hidden = true;
    }
  };
  var closeOtherDropdowns = function (currentDropdown) {
    document.querySelectorAll('[data-nav-dropdown]').forEach(function (other) {
      if (other !== currentDropdown) closeDropdown(other);
    });
  };
  var openDropdown = function (dropdown) {
    var timer = dropdownCloseTimers.get(dropdown);
    if (timer) window.clearTimeout(timer);
    closeOtherDropdowns(dropdown);
    var dropdownTrigger = dropdown.querySelector('[data-nav-dropdown-toggle]');
    var dropdownPanel = dropdown.querySelector('[data-nav-dropdown-panel]');
    if (dropdownTrigger && dropdownPanel) {
      dropdownTrigger.setAttribute('aria-expanded', 'true');
      dropdownPanel.hidden = false;
    }
  };
  var scheduleDropdownClose = function (dropdown) {
    var timer = window.setTimeout(function () {
      if (!dropdown.matches(':hover') && !dropdown.contains(document.activeElement)) closeDropdown(dropdown);
    }, 140);
    dropdownCloseTimers.set(dropdown, timer);
  };

  document.querySelectorAll('[data-nav-dropdown]').forEach(function (dropdown) {
    var trigger = dropdown.querySelector('[data-nav-dropdown-toggle]');
    var panel = dropdown.querySelector('[data-nav-dropdown-panel]');
    if (!trigger || !panel) return;
    trigger.addEventListener('click', function (event) {
      /* Pointer users get an immediate hover state; keep click for keyboard. */
      if (hoverCapable.matches && event.detail > 0) {
        openDropdown(dropdown);
        return;
      }
      var open = trigger.getAttribute('aria-expanded') !== 'true';
      if (open) openDropdown(dropdown);
      else closeDropdown(dropdown);
    });
    trigger.addEventListener('mouseenter', function () {
      if (hoverCapable.matches) openDropdown(dropdown);
    });
    dropdown.addEventListener('mouseleave', function () {
      if (hoverCapable.matches) scheduleDropdownClose(dropdown);
    });
    dropdown.addEventListener('mouseenter', function () {
      var timer = dropdownCloseTimers.get(dropdown);
      if (timer) window.clearTimeout(timer);
    });
    trigger.addEventListener('focus', function () {
      openDropdown(dropdown);
    });
    dropdown.addEventListener('focusout', function () {
      if (!dropdown.contains(document.activeElement)) scheduleDropdownClose(dropdown);
    });
    trigger.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        event.preventDefault();
        trigger.setAttribute('aria-expanded', 'false');
        panel.hidden = true;
        trigger.focus();
        return;
      }
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        if (trigger.getAttribute('aria-expanded') !== 'true') trigger.click();
        panel.querySelector('a[href]')?.focus();
      }
    });
    panel.addEventListener('keydown', function (event) {
      if (event.key !== 'Escape') return;
      event.preventDefault();
      trigger.setAttribute('aria-expanded', 'false');
      panel.hidden = true;
      trigger.focus();
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
    searchButton.setAttribute('aria-label', open ? 'Close search' : interfaceText('nav.openSearch', 'Open search'));
    searchPanel.hidden = !open;
    if (open) window.requestAnimationFrame(function () { searchInput?.focus(); });
  };
  searchButton?.addEventListener('click', function () {
    setSearch(searchButton.getAttribute('aria-expanded') !== 'true');
  });

  window.addEventListener('zomeex:localechange', function () {
    updateCartCount(document.querySelector('[data-cart-count]')?.textContent || 0);
    if (menuButton?.getAttribute('aria-expanded') === 'true') {
      menuButton.setAttribute('aria-label', interfaceText('nav.closeMenu', 'Close menu'));
    }
    if (searchButton?.getAttribute('aria-expanded') === 'true') {
      searchButton.setAttribute('aria-label', 'Close search');
    }
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
    if (menuButton?.getAttribute('aria-expanded') === 'true' && event.key === 'Tab') {
      var focusable = mobileNav?.querySelectorAll('a[href], button:not([disabled])');
      if (focusable && focusable.length) {
        var first = focusable[0];
        var last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
      return;
    }
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

  /* Application tabs use native buttons and panels so the same interaction
   * works with mouse, keyboard and touch without a dependency. */
  var applicationTabs = document.querySelectorAll('[data-application-tab]');
  var applicationPanels = document.querySelectorAll('[data-application-panel]');
  var activateApplication = function (slug, focusTab) {
    applicationTabs.forEach(function (tab) {
      var active = tab.dataset.applicationTab === slug;
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
      if (active && focusTab) tab.focus();
    });
    applicationPanels.forEach(function (panel) {
      panel.hidden = panel.dataset.applicationPanel !== slug;
    });
  };
  applicationTabs.forEach(function (tab, index) {
    tab.addEventListener('click', function () { activateApplication(tab.dataset.applicationTab, false); });
    tab.addEventListener('keydown', function (event) {
      if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft' && event.key !== 'Home' && event.key !== 'End') return;
      event.preventDefault();
      var nextIndex = event.key === 'Home' ? 0 : event.key === 'End' ? applicationTabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + applicationTabs.length) % applicationTabs.length;
      activateApplication(applicationTabs[nextIndex].dataset.applicationTab, true);
    });
  });

  /* Deep links from the Products menu open the matching application panel. */
  var applicationHash = (window.location.hash || '').replace(/^#/, '');
  if (applicationHash.indexOf('zomeex-application-panel-') === 0) {
    var applicationSlug = applicationHash.replace('zomeex-application-panel-', '');
    var matchingTab = document.querySelector('[data-application-tab="' + applicationSlug.replace(/"/g, '') + '"]');
    if (matchingTab) {
      activateApplication(matchingTab.dataset.applicationTab, false);
      window.requestAnimationFrame(function () {
        document.getElementById(applicationHash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }
}());
