(function () {
  'use strict';

  var labelsByLocale = {
    en: {
      emoji: 'Show emojis', send: 'Send message', header: "Let's chat on WhatsApp",
      message: 'How can I help you?', field: 'WhatsApp Message', placeholder: 'Write your message...', close: 'Close chat'
    },
    'zh-CN': {
      emoji: '选择表情', send: '发送消息', header: '在 WhatsApp 上聊聊',
      message: '我可以如何帮助你？', field: 'WhatsApp 消息', placeholder: '写下你的消息……', close: '关闭聊天'
    },
    ru: {
      emoji: 'Показать эмодзи', send: 'Отправить сообщение', header: 'Напишите нам в WhatsApp',
      message: 'Чем мы можем вам помочь?', field: 'Сообщение в WhatsApp', placeholder: 'Введите сообщение…', close: 'Закрыть чат'
    },
    de: {
      emoji: 'Emojis anzeigen', send: 'Nachricht senden', header: 'Schreiben Sie uns auf WhatsApp',
      message: 'Wie können wir Ihnen helfen?', field: 'WhatsApp-Nachricht', placeholder: 'Nachricht schreiben …', close: 'Chat schließen'
    },
    fr: {
      emoji: 'Afficher les emojis', send: 'Envoyer le message', header: 'Échangeons sur WhatsApp',
      message: 'Comment pouvons-nous vous aider ?', field: 'Message WhatsApp', placeholder: 'Écrivez votre message…', close: 'Fermer le chat'
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

  function repair(root) {
    var scope = root && root.nodeType === 1 ? root : document;
    var labels = getLabels();

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
