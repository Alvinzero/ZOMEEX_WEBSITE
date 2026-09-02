(function () {
  'use strict';

  var storageKey = 'zomeex-quote-items';
  var draftKey = 'zomeex-quote-draft';
  var maxQuantity = 999999;
  var i18n = window.zomeexI18n || null;

  var locale = function () {
    return i18n && typeof i18n.getLocale === 'function' ? i18n.getLocale() : 'en';
  };

  var t = function (key, fallback) {
    return i18n && typeof i18n.t === 'function' ? i18n.t(key, locale()) : fallback;
  };

  var productAddedMessage = function (title) {
    var suffix = t('dynamic.productAdded', 'added to your quote list.');
    return locale() === 'zh-CN' ? title + suffix : locale() === 'ru' ? title + ' ' + suffix : locale() === 'de' ? title + ' ' + suffix : locale() === 'fr' ? title + ' ' + suffix : title + ' ' + suffix;
  };

  var getStorage = function (kind) {
    try {
      return window[kind];
    } catch (error) {
      return null;
    }
  };

  var safeUrl = function (value) {
    if (!value) return '';
    try {
      var parsed = new window.URL(String(value), window.location.origin);
      if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') return '';
      return parsed.href;
    } catch (error) {
      return '';
    }
  };

  var normalizeQuantity = function (value) {
    var quantity = Number(value);
    if (!isFinite(quantity) || quantity < 1) return 1;
    return Math.min(maxQuantity, Math.floor(quantity));
  };

  var normalizeItem = function (item) {
    if (!item || typeof item !== 'object') return null;
    var id = Number(item.id);
    var title = String(item.title || '').trim().slice(0, 200);
    if (!isFinite(id) || id <= 0 || Math.floor(id) !== id || !title) return null;
    return {
      id: id,
      title: title,
      url: safeUrl(item.url),
      image: safeUrl(item.image),
      sku: String(item.sku || '').trim().slice(0, 80),
      quantity: normalizeQuantity(item.quantity)
    };
  };

  var readItems = function () {
    var storage = getStorage('localStorage');
    if (!storage) return [];
    try {
      var parsed = JSON.parse(storage.getItem(storageKey) || '[]');
      if (!Array.isArray(parsed)) return [];
      var seen = {};
      return parsed.reduce(function (items, item) {
        var normalized = normalizeItem(item);
        if (normalized && !seen[normalized.id]) {
          seen[normalized.id] = true;
          items.push(normalized);
        }
        return items;
      }, []);
    } catch (error) {
      return [];
    }
  };

  var writeItems = function (items) {
    var normalizedItems = [];
    var seen = {};
    (Array.isArray(items) ? items : []).forEach(function (item) {
      var normalized = normalizeItem(item);
      if (normalized && !seen[normalized.id]) {
        seen[normalized.id] = true;
        normalizedItems.push(normalized);
      }
    });
    var storage = getStorage('localStorage');
    if (storage) {
      try {
        storage.setItem(storageKey, JSON.stringify(normalizedItems));
      } catch (error) {
        // Private browsing can disable storage. The current page still works.
      }
    }
    return normalizedItems;
  };

  var escapeHtml = function (value) {
    return String(value == null ? '' : value).replace(/[&<>'"]/g, function (character) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;' }[character];
    });
  };

  var updateCount = function () {
    var count = readItems().length;
    document.querySelectorAll('[data-quote-count]').forEach(function (element) {
      element.textContent = String(count);
      element.hidden = count === 0;
    });
  };

  var showFeedback = function (message) {
    document.querySelectorAll('[data-quote-feedback]').forEach(function (element) {
      element.textContent = message;
      element.hidden = false;
      window.clearTimeout(element._zomeexFeedbackTimer);
      element._zomeexFeedbackTimer = window.setTimeout(function () {
        element.hidden = true;
      }, 2600);
    });
  };

  var addProduct = function (button) {
    var item = normalizeItem({
      id: button.dataset.productId,
      title: button.dataset.productTitle || 'Product',
      url: button.dataset.productUrl || '',
      image: button.dataset.productImage || '',
      sku: button.dataset.productSku || '',
      quantity: 1
    });
    if (!item) return;

    var items = readItems();
    var existing = items.find(function (entry) { return entry.id === item.id; });
    if (existing) {
      existing.quantity = normalizeQuantity(existing.quantity + 1);
    } else {
      items.push(item);
    }
    writeItems(items);
    updateCount();
    showFeedback(productAddedMessage(item.title));
    button.classList.add('is-added');
    var label = button.querySelector('[data-quote-label]');
    if (label) label.textContent = t('catalog.added', 'Added');
    window.setTimeout(function () { button.classList.remove('is-added'); }, 1200);
    window.setTimeout(function () { if (label) label.textContent = t('catalog.addToQuote', 'Add to quote'); }, 1200);
  };

  document.querySelectorAll('[data-quote-add]').forEach(function (button) {
    button.addEventListener('click', function (event) {
      event.preventDefault();
      addProduct(button);
    });
  });

  var updateHiddenItems = function () {
    var hidden = document.querySelector('#zomeex-quote-items');
    if (hidden) hidden.value = JSON.stringify(readItems());
  };

  var renderQuoteList = function () {
    var list = document.querySelector('[data-quote-list]');
    if (!list) return;
    var empty = document.querySelector('[data-quote-empty]');
    var items = readItems();
    list.innerHTML = '';
    if (empty) empty.hidden = items.length !== 0;

    items.forEach(function (item) {
      var row = document.createElement('article');
      var itemUrl = item.url || '#';
      row.className = 'zomeex-quote-line';
      row.dataset.productId = String(item.id);
      row.innerHTML = '<a class="zomeex-quote-line__media" href="' + escapeHtml(itemUrl) + '">' +
        (item.image ? '<img src="' + escapeHtml(item.image) + '" alt="' + escapeHtml(item.title) + '" loading="lazy" width="120" height="120">' : '') +
        '</a><div class="zomeex-quote-line__info"><a href="' + escapeHtml(itemUrl) + '"><strong>' + escapeHtml(item.title) + '</strong></a>' +
        (item.sku ? '<small>SKU ' + escapeHtml(item.sku) + '</small>' : '<small>' + escapeHtml(t('dynamic.skuConfirm', 'SKU to confirm')) + '</small>') +
        '</div><label class="zomeex-quote-line__quantity"><span>' + escapeHtml(t('dynamic.quantity', 'Quantity')) + '</span><input type="number" min="1" max="999999" inputmode="numeric" value="' + escapeHtml(item.quantity) + '" data-quote-quantity></label>' +
        '<button class="zomeex-quote-line__remove" type="button" data-quote-remove aria-label="' + escapeHtml(t('dynamic.remove', 'Remove') + ' ' + item.title) + '">' + escapeHtml(t('dynamic.remove', 'Remove')) + '</button>';
      list.appendChild(row);
    });

    list.querySelectorAll('[data-quote-quantity]').forEach(function (input) {
      input.addEventListener('change', function () {
        var row = input.closest('[data-product-id]');
        var id = Number(row?.dataset.productId || 0);
        var itemsNow = readItems();
        var itemNow = itemsNow.find(function (entry) { return entry.id === id; });
        if (itemNow) {
          itemNow.quantity = normalizeQuantity(input.value);
          input.value = String(itemNow.quantity);
          writeItems(itemsNow);
          updateCount();
          updateHiddenItems();
        }
      });
    });

    list.querySelectorAll('[data-quote-remove]').forEach(function (button) {
      button.addEventListener('click', function () {
        var row = button.closest('[data-product-id]');
        var id = Number(row?.dataset.productId || 0);
        writeItems(readItems().filter(function (entry) { return entry.id !== id; }));
        renderQuoteList();
        updateCount();
      });
    });
    updateHiddenItems();
  };

  var clearButton = document.querySelector('[data-quote-clear]');
  clearButton?.addEventListener('click', function () {
    writeItems([]);
    renderQuoteList();
    updateCount();
  });

  var readDraft = function () {
    var storage = getStorage('sessionStorage');
    if (!storage) return null;
    try {
      var draft = JSON.parse(storage.getItem(draftKey) || 'null');
      return draft && typeof draft === 'object' ? draft : null;
    } catch (error) {
      return null;
    }
  };

  var writeDraft = function (form) {
    var storage = getStorage('sessionStorage');
    if (!storage) return;
    var draft = {};
    form.querySelectorAll('[name]').forEach(function (field) {
      if (field.type === 'hidden' || field.name === 'zomeex_quote_honeypot') return;
      draft[field.name] = field.value;
    });
    try {
      storage.setItem(draftKey, JSON.stringify(draft));
    } catch (error) {
      // Private browsing can disable session storage.
    }
  };

  var clearDraft = function () {
    var storage = getStorage('sessionStorage');
    if (!storage) return;
    try {
      storage.removeItem(draftKey);
    } catch (error) {
      // Ignore storage failures.
    }
  };

  var form = document.querySelector('[data-quote-form]');
  if (form) {
    var draft = readDraft();
    if (draft) {
      form.querySelectorAll('[name]').forEach(function (field) {
        if (field.type !== 'hidden' && field.name !== 'zomeex_quote_honeypot' && Object.prototype.hasOwnProperty.call(draft, field.name)) {
          field.value = String(draft[field.name]).slice(0, field.maxLength > 0 ? field.maxLength : 3000);
        }
      });
    }
    form.addEventListener('input', function () { writeDraft(form); });
    form.addEventListener('change', function () { writeDraft(form); });
    form.addEventListener('submit', function (event) {
      updateHiddenItems();
      if (form.dataset.submitting === '1') {
        event.preventDefault();
        return;
      }
      form.dataset.submitting = '1';
      var submit = form.querySelector('[data-quote-submit]');
      if (submit) {
        submit.disabled = true;
        submit.setAttribute('aria-busy', 'true');
        submit.classList.add('is-submitting');
        var submitLabel = submit.querySelector('[data-quote-submit-label]');
        if (submitLabel) submitLabel.textContent = t('quote.sending', 'Sending...');
      }
    });
  }

  if (document.querySelector('[data-quote-success]')) {
    writeItems([]);
    clearDraft();
  }

  window.addEventListener('pageshow', function () {
    var submit = document.querySelector('[data-quote-submit]');
    if (submit && !document.querySelector('[data-quote-success]')) {
      submit.disabled = false;
      submit.removeAttribute('aria-busy');
      submit.classList.remove('is-submitting');
      var submitLabel = submit.querySelector('[data-quote-submit-label]');
      if (submitLabel) submitLabel.textContent = t('quote.send', 'Send quote request');
    }
  });

  var refreshQuoteSurface = function () {
    updateCount();
    renderQuoteList();
  };
  window.addEventListener('storage', function (event) {
    if (!event.key || event.key === storageKey) refreshQuoteSurface();
  });
  document.addEventListener('visibilitychange', function () {
    if (!document.hidden) refreshQuoteSurface();
  });
  window.addEventListener('zomeex:localechange', function () {
    refreshQuoteSurface();
    var submitLabel = document.querySelector('[data-quote-submit-label]');
    if (submitLabel && document.querySelector('[data-quote-submit]')?.getAttribute('aria-busy') !== 'true') {
      submitLabel.textContent = t('quote.send', 'Send quote request');
    }
  });

  document.querySelectorAll('[data-product-gallery-image]').forEach(function (thumbnail) {
    thumbnail.addEventListener('click', function (event) {
      var mainImage = document.querySelector('.zomeex-product__main-media img');
      if (!mainImage) return;
      event.preventDefault();
      var imageUrl = safeUrl(thumbnail.dataset.productGalleryImage || thumbnail.href);
      if (!imageUrl) return;
      mainImage.src = imageUrl;
      document.querySelectorAll('[data-product-gallery-image]').forEach(function (item) {
        item.classList.remove('is-active');
      });
      thumbnail.classList.add('is-active');
    });
  });

  refreshQuoteSurface();
}());
