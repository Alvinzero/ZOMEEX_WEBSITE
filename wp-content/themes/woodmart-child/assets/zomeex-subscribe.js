(function () {
  'use strict';

  var config = window.zomeexSubscribe || {};
  var modal = document.querySelector('[data-zomeex-subscribe]');
  if (!modal) return;

  var dialog = modal.querySelector('.zomeex-subscribe__dialog');
  var form = modal.querySelector('[data-subscribe-form]');
  var email = modal.querySelector('input[name="email"]');
  var honeypot = modal.querySelector('input[name="company_website"]');
  var submit = modal.querySelector('[data-subscribe-submit]');
  var status = modal.querySelector('[data-subscribe-status]');
  var success = modal.querySelector('[data-subscribe-success]');
  var previousFocus = null;
  var open = false;
  var DISMISSED_KEY = 'zomeex-subscribe-dismissed-until';
  var SUBSCRIBED_KEY = 'zomeex-subscribe-complete';
  var dismissFor = 14 * 24 * 60 * 60 * 1000;

  function storage() {
    try {
      var target = window.localStorage;
      var key = '__zomeex_subscribe_test__';
      target.setItem(key, '1');
      target.removeItem(key);
      return target;
    } catch (error) {
      return null;
    }
  }

  function locale() {
    if (window.zomeexI18n && typeof window.zomeexI18n.getLocale === 'function') {
      return window.zomeexI18n.getLocale();
    }
    return document.documentElement.lang || 'en';
  }

  function translate(key) {
    if (window.zomeexI18n && typeof window.zomeexI18n.t === 'function') {
      return window.zomeexI18n.t(key, locale());
    }
    return key;
  }

  function setText(selector, key) {
    var element = modal.querySelector(selector);
    if (element) element.textContent = translate(key);
  }

  function setStatus(key, type) {
    status.dataset.messageKey = key;
    status.dataset.status = type || 'neutral';
    status.textContent = translate(key);
  }

  function localize() {
    var close = modal.querySelector('.zomeex-subscribe__close');
    if (close) close.setAttribute('aria-label', translate('subscribe.close'));
    setText('#zomeex-subscribe-title', 'subscribe.title');
    setText('#zomeex-subscribe-copy', 'subscribe.copy');
    setText('label[for="zomeex-subscribe-email"]', 'subscribe.email');
    if (email) email.setAttribute('placeholder', translate('subscribe.placeholder'));
    submit.textContent = submit.disabled ? translate('subscribe.loading') : translate('subscribe.submit');
    setText('[data-subscribe-success] h3', 'subscribe.successTitle');
    setText('[data-subscribe-success] p', 'subscribe.successCopy');
    setText('[data-subscribe-success] button', 'subscribe.continue');
    setText('.zomeex-subscribe__skip', 'subscribe.skip');
    setText('.zomeex-subscribe__consent-text', 'subscribe.consent');
    setText('.zomeex-subscribe__consent a', 'subscribe.privacy');
    setText('.zomeex-subscribe__visual figcaption', 'subscribe.visualCaption');
    setStatus(status.dataset.messageKey || 'subscribe.helper', status.dataset.status || 'neutral');
  }

  function focusable() {
    return Array.prototype.filter.call(
      dialog.querySelectorAll('button:not([disabled]), a[href], input:not([disabled]):not([tabindex="-1"])'),
      function (element) { return element.offsetParent !== null; }
    );
  }

  function rememberDismissal() {
    var target = storage();
    if (!target || config.preview) return;
    target.setItem(DISMISSED_KEY, String(Date.now() + dismissFor));
  }

  function closeModal(options) {
    if (!open) return;
    options = options || {};
    open = false;
    modal.hidden = true;
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('zomeex-subscribe-open');
    if (options.remember !== false) rememberDismissal();
    if (previousFocus && typeof previousFocus.focus === 'function') previousFocus.focus({ preventScroll: true });
  }

  function showModal() {
    if (open) return;
    previousFocus = document.activeElement;
    open = true;
    modal.hidden = false;
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('zomeex-subscribe-open');
    localize();
    window.requestAnimationFrame(function () { dialog.focus({ preventScroll: true }); });
  }

  function shouldShow() {
    if (config.preview) return true;
    var target = storage();
    if (!target || target.getItem(SUBSCRIBED_KEY) === '1') return !target;
    return Number(target.getItem(DISMISSED_KEY) || 0) < Date.now();
  }

  function markSubscribed() {
    var target = storage();
    if (target) {
      target.setItem(SUBSCRIBED_KEY, '1');
      target.removeItem(DISMISSED_KEY);
    }
  }

  function showSuccess() {
    markSubscribed();
    modal.dataset.state = 'success';
    form.setAttribute('aria-busy', 'false');
    form.hidden = true;
    success.hidden = false;
    success.focus({ preventScroll: true });
  }

  function errorKey(code) {
    if (code === 'security') return 'subscribe.securityError';
    if (code === 'rate_limit') return 'subscribe.rateError';
    if (code === 'save_failed') return 'subscribe.saveError';
    return 'subscribe.invalidEmail';
  }

  function submitForm(event) {
    event.preventDefault();
    email.setAttribute('aria-invalid', 'false');
    if (!email.value.trim() || !email.validity.valid) {
      email.setAttribute('aria-invalid', 'true');
      setStatus('subscribe.invalidEmail', 'error');
      email.focus();
      return;
    }

    submit.disabled = true;
    form.setAttribute('aria-busy', 'true');
    submit.textContent = translate('subscribe.loading');
    setStatus('subscribe.loading', 'neutral');

    var body = new URLSearchParams();
    body.set('action', 'zomeex_subscribe');
    body.set('nonce', config.nonce || '');
    body.set('email', email.value.trim());
    body.set('company_website', honeypot ? honeypot.value : '');
    body.set('locale', locale());
    body.set('source_url', window.location.href);

    window.fetch(config.ajaxUrl || '/wp-admin/admin-ajax.php', {
      method: 'POST',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
      body: body.toString()
    }).then(function (response) {
      return response.json().then(function (payload) {
        if (!response.ok || !payload.success) {
          var code = payload && payload.data && payload.data.code ? payload.data.code : 'save_failed';
          throw new Error(code);
        }
        return payload;
      });
    }).then(showSuccess).catch(function (error) {
      var code = error && error.message ? error.message : 'save_failed';
      setStatus(errorKey(code), 'error');
      submit.disabled = false;
      form.setAttribute('aria-busy', 'false');
      submit.textContent = translate('subscribe.submit');
    });
  }

  modal.querySelectorAll('[data-subscribe-dismiss]').forEach(function (control) {
    control.addEventListener('click', function () { closeModal(); });
  });
  form.addEventListener('submit', submitForm);
  email.addEventListener('input', function () {
    if (email.getAttribute('aria-invalid') === 'true') {
      email.setAttribute('aria-invalid', 'false');
      setStatus('subscribe.helper', 'neutral');
    }
  });

  document.addEventListener('keydown', function (event) {
    if (!open) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      closeModal();
      return;
    }
    if (event.key !== 'Tab') return;
    var controls = focusable();
    if (!controls.length) return;
    var first = controls[0];
    var last = controls[controls.length - 1];
    var active = document.activeElement;
    var focusIsOutside = !dialog.contains(active);
    if (event.shiftKey && (active === first || active === dialog || focusIsOutside)) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && (active === last || active === dialog || focusIsOutside)) {
      event.preventDefault();
      first.focus();
    }
  });

  window.addEventListener('zomeex:localechange', localize);
  localize();
  if (shouldShow()) window.setTimeout(showModal, config.preview ? 80 : 950);
}());
