(function () {
  'use strict';

  var storageKey = 'zomeex-quote-items';
  var readItems = function () {
    try {
      var parsed = JSON.parse(window.localStorage.getItem(storageKey) || '[]');
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      return [];
    }
  };

  var writeItems = function (items) {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(items));
    } catch (error) {
      // Private browsing can disable storage. The current page still works.
    }
  };

  var escapeHtml = function (value) {
    return String(value || '').replace(/[&<>'"]/g, function (character) {
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
    var item = {
      id: Number(button.dataset.productId || 0),
      title: button.dataset.productTitle || 'Product',
      url: button.dataset.productUrl || '',
      image: button.dataset.productImage || '',
      sku: button.dataset.productSku || '',
      quantity: 1
    };
    if (!item.id) return;

    var items = readItems();
    var existing = items.find(function (entry) { return Number(entry.id) === item.id; });
    if (existing) {
      existing.quantity = Math.min(999999, Math.max(1, Number(existing.quantity || 1) + 1));
    } else {
      items.push(item);
    }
    writeItems(items);
    updateCount();
    showFeedback(item.title + ' added to your quote list.');
    button.classList.add('is-added');
    var label = button.querySelector('[data-quote-label]');
    if (label) label.textContent = 'Added';
    window.setTimeout(function () { button.classList.remove('is-added'); }, 1200);
    window.setTimeout(function () { if (label) label.textContent = 'Add to quote'; }, 1200);
  };

  document.querySelectorAll('[data-quote-add]').forEach(function (button) {
    button.addEventListener('click', function (event) {
      event.preventDefault();
      addProduct(button);
    });
  });

  var renderQuoteList = function () {
    var list = document.querySelector('[data-quote-list]');
    if (!list) return;
    var empty = document.querySelector('[data-quote-empty]');
    var items = readItems();
    list.innerHTML = '';
    if (empty) empty.hidden = items.length !== 0;

    items.forEach(function (item) {
      var row = document.createElement('article');
      row.className = 'zomeex-quote-line';
      row.dataset.productId = item.id;
      row.innerHTML = '<a class="zomeex-quote-line__media" href="' + escapeHtml(item.url) + '">' +
        (item.image ? '<img src="' + escapeHtml(item.image) + '" alt="' + escapeHtml(item.title) + '" loading="lazy" width="120" height="120">' : '') +
        '</a><div class="zomeex-quote-line__info"><a href="' + escapeHtml(item.url) + '"><strong>' + escapeHtml(item.title) + '</strong></a>' +
        (item.sku ? '<small>SKU ' + escapeHtml(item.sku) + '</small>' : '<small>SKU to confirm</small>') +
        '</div><label class="zomeex-quote-line__quantity"><span>Quantity</span><input type="number" min="1" max="999999" value="' + escapeHtml(item.quantity || 1) + '" data-quote-quantity></label>' +
        '<button class="zomeex-quote-line__remove" type="button" data-quote-remove aria-label="Remove ' + escapeHtml(item.title) + '">Remove</button>';
      list.appendChild(row);
    });

    list.querySelectorAll('[data-quote-quantity]').forEach(function (input) {
      input.addEventListener('change', function () {
        var row = input.closest('[data-product-id]');
        var id = Number(row?.dataset.productId || 0);
        var itemsNow = readItems();
        var itemNow = itemsNow.find(function (entry) { return Number(entry.id) === id; });
        if (itemNow) {
          itemNow.quantity = Math.min(999999, Math.max(1, Number(input.value || 1)));
          input.value = itemNow.quantity;
          writeItems(itemsNow);
          updateHiddenItems();
        }
      });
    });

    list.querySelectorAll('[data-quote-remove]').forEach(function (button) {
      button.addEventListener('click', function () {
        var row = button.closest('[data-product-id]');
        var id = Number(row?.dataset.productId || 0);
        writeItems(readItems().filter(function (entry) { return Number(entry.id) !== id; }));
        renderQuoteList();
        updateCount();
      });
    });
    updateHiddenItems();
  };

  var updateHiddenItems = function () {
    var hidden = document.querySelector('#zomeex-quote-items');
    if (hidden) hidden.value = JSON.stringify(readItems());
  };

  var clearButton = document.querySelector('[data-quote-clear]');
  clearButton?.addEventListener('click', function () {
    writeItems([]);
    renderQuoteList();
    updateCount();
  });

  var form = document.querySelector('[data-quote-form]');
  form?.addEventListener('submit', function () {
    updateHiddenItems();
  });

  if (document.querySelector('[data-quote-success]')) {
    writeItems([]);
  }

  document.querySelectorAll('[data-product-gallery-image]').forEach(function (thumbnail) {
    thumbnail.addEventListener('click', function (event) {
      var mainImage = document.querySelector('.zomeex-product__main-media img');
      if (!mainImage) return;
      event.preventDefault();
      mainImage.src = thumbnail.dataset.productGalleryImage || thumbnail.href;
      document.querySelectorAll('[data-product-gallery-image]').forEach(function (item) {
        item.classList.remove('is-active');
      });
      thumbnail.classList.add('is-active');
    });
  });

  updateCount();
  renderQuoteList();
}());
