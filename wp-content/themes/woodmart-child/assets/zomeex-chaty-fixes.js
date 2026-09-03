(function () {
  'use strict';

  var labelsByLocale = {
    en: {
      emoji: 'Show emojis', send: 'Send message', header: "Let's chat on WhatsApp",
      message: 'How can I help you?', field: 'WhatsApp Message', placeholder: 'Write your message...', close: 'Close chat',
      ageTitle: 'Are you 21 or older?', ageYoung: 'You look younger than your age.', ageRequirement: 'You must be 21 years old or older to access this website. Please verify your age.',
      ageDenied: 'Access denied', ageDeniedCopy: 'Access is restricted because of your age.', ageAllowed: 'I am 21 or older', ageForbidden: 'I am under 21'
    },
    'zh-CN': {
      emoji: '选择表情', send: '发送消息', header: '在 WhatsApp 上聊聊',
      message: '我可以如何帮助你？', field: 'WhatsApp 消息', placeholder: '写下你的消息……', close: '关闭聊天',
      ageTitle: '您是否年满 21 岁？', ageYoung: '您看起来比实际年龄年轻。', ageRequirement: '访问本网站需要年满 21 岁，请确认您的年龄。',
      ageDenied: '无法访问', ageDeniedCopy: '由于年龄限制，您无法访问本网站。', ageAllowed: '我已年满 21 岁', ageForbidden: '我未满 21 岁'
    },
    ru: {
      emoji: 'Показать эмодзи', send: 'Отправить сообщение', header: 'Напишите нам в WhatsApp',
      message: 'Чем мы можем вам помочь?', field: 'Сообщение в WhatsApp', placeholder: 'Введите сообщение…', close: 'Закрыть чат',
      ageTitle: 'Вам уже исполнился 21 год?', ageYoung: 'Вы выглядите моложе своего возраста.', ageRequirement: 'Для доступа к сайту вам должно быть не менее 21 года. Подтвердите свой возраст.',
      ageDenied: 'Доступ запрещён', ageDeniedCopy: 'Доступ ограничен возрастными требованиями.', ageAllowed: 'Мне уже есть 21 год', ageForbidden: 'Мне ещё нет 21 года'
    },
    de: {
      emoji: 'Emojis anzeigen', send: 'Nachricht senden', header: 'Schreiben Sie uns auf WhatsApp',
      message: 'Wie können wir Ihnen helfen?', field: 'WhatsApp-Nachricht', placeholder: 'Nachricht schreiben …', close: 'Chat schließen',
      ageTitle: 'Sind Sie mindestens 21 Jahre alt?', ageYoung: 'Sie sehen jünger aus, als Sie sind.', ageRequirement: 'Für den Zugriff auf diese Website müssen Sie mindestens 21 Jahre alt sein. Bitte bestätigen Sie Ihr Alter.',
      ageDenied: 'Zugriff verweigert', ageDeniedCopy: 'Der Zugriff ist aufgrund der Altersbeschränkung nicht möglich.', ageAllowed: 'Ich bin mindestens 21 Jahre alt', ageForbidden: 'Ich bin unter 21 Jahre alt'
    },
    fr: {
      emoji: 'Afficher les emojis', send: 'Envoyer le message', header: 'Échangeons sur WhatsApp',
      message: 'Comment pouvons-nous vous aider ?', field: 'Message WhatsApp', placeholder: 'Écrivez votre message…', close: 'Fermer le chat',
      ageTitle: 'Avez-vous au moins 21 ans ?', ageYoung: 'Vous faites plus jeune que votre âge.', ageRequirement: 'Vous devez avoir au moins 21 ans pour accéder à ce site. Veuillez confirmer votre âge.',
      ageDenied: 'Accès refusé', ageDeniedCopy: 'L’accès est limité en raison de votre âge.', ageAllowed: 'J’ai 21 ans ou plus', ageForbidden: 'J’ai moins de 21 ans'
    }
  };

  function getLocale() {
    if (window.zomeexI18n && typeof window.zomeexI18n.getLocale === 'function') {
      return window.zomeexI18n.getLocale();
    }

    return document.documentElement.lang || 'en';
  }

  function getLabels() {
    var locale = String(getLocale() || 'en').replace('_', '-');
    if (locale.indexOf('-') > 0 && !labelsByLocale[locale]) locale = locale.split('-')[0];
    return labelsByLocale[locale] || labelsByLocale.en;
  }

  function setText(selector, value) {
    var element = document.querySelector(selector);
    if (element && value && element.textContent !== value) element.textContent = value;
  }

  function localizeAgeGate(labels) {
    setText('.wd-age-verify-text h4', labels.ageTitle);
    var copy = document.querySelectorAll('.wd-age-verify-text p:not(.zomeex-age-logo)');
    if (copy[0]) copy[0].textContent = labels.ageYoung;
    if (copy[1]) copy[1].textContent = labels.ageRequirement;
    setText('.wd-age-verify-text-error h4', labels.ageDenied);
    setText('.wd-age-verify-text-error p', labels.ageDeniedCopy);
    setText('.wd-age-verify-allowed', labels.ageAllowed);
    setText('.wd-age-verify-forbidden', labels.ageForbidden);
  }

  function localizeChaty(labels) {
    setText('.chaty-whatsapp-header .header-wp-title', labels.header);
    setText('.chaty-whatsapp-message-content p', labels.message);
    setText('.chaty-whatsapp-footer label[for="chaty_whatsapp_input"]', labels.field);
    var input = document.querySelector('#chaty_whatsapp_input');
    if (input) {
      input.placeholder = labels.placeholder;
      input.setAttribute('aria-label', labels.field);
    }
    document.querySelectorAll('.chaty-whatsapp-form .whatsapp-form-close-btn').forEach(function (button) {
      button.setAttribute('aria-label', labels.close);
      button.setAttribute('title', labels.close);
    });
  }

  function hasAgeConfirmation() {
    return /(?:^|;\s*)woodmart_age_verify=confirmed(?:;|$)/.test(document.cookie || '');
  }

  function activateAgeGate() {
    var gate = document.querySelector('.wd-age-verify');
    if (!gate || !document.body) return;

    if (hasAgeConfirmation()) {
      gate.classList.add('zomeex-age-gate-hidden');
      gate.classList.remove('zomeex-age-gate-ready');
      document.body.classList.remove('zomeex-age-gate-active');
      return;
    }

    gate.classList.remove('zomeex-age-gate-hidden');
    gate.classList.add('zomeex-age-gate-ready');
    document.body.classList.add('zomeex-age-gate-active');

    var allowed = gate.querySelector('.wd-age-verify-allowed');
    if (allowed && !allowed.dataset.zomeexAgeBound) {
      allowed.dataset.zomeexAgeBound = '1';
      allowed.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        document.cookie = 'woodmart_age_verify=confirmed; path=/; max-age=2592000';
        gate.classList.add('zomeex-age-gate-hidden');
        document.body.classList.remove('zomeex-age-gate-active');
      }, true);
    }

    var forbidden = gate.querySelector('.wd-age-verify-forbidden');
    if (forbidden && !forbidden.dataset.zomeexAgeBound) {
      forbidden.dataset.zomeexAgeBound = '1';
      forbidden.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        gate.classList.add('wd-forbidden');
      }, true);
    }
  }

  function repair(root) {
    var scope = root && root.nodeType === 1 ? root : document;
    var labels = getLabels();

    activateAgeGate();
    localizeAgeGate(labels);
    localizeChaty(labels);

    scope.querySelectorAll('.chaty-wp-emoji-input .hide-cht-svg-bg').forEach(function (element) {
      if (/chaty_settings\.lang\.emoji_picker/.test(element.textContent || '')) {
        element.textContent = labels.emoji;
      }
    });

    scope.querySelectorAll('.chaty-whatsapp-button-button .hide-cht-svg-bg').forEach(function (element) {
      if (String(element.textContent || '').trim() === 'undefined') {
        element.textContent = labels.send;
      }
    });

    scope.querySelectorAll('.chaty-whatsapp-button-button').forEach(function (button) {
      button.setAttribute('aria-label', labels.send);
      button.setAttribute('title', labels.send);
    });
  }

  function boot() {
    repair(document);

    var observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        mutation.addedNodes.forEach(function (node) {
          if (node.nodeType === 1) repair(node);
        });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
    window.addEventListener('zomeex:localechange', function () { repair(document); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
}());
