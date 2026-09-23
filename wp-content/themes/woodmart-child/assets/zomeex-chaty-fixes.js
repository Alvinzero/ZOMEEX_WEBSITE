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

    revealChatyWhenSafe();
  }

  /* Chaty's own initialize/label animation fires right after mount — exactly
   * when the subscribe popup is visible — and reads as a dark
   * expand-and-collapse flash through the scrim. Hold the reveal until the
   * gate releases (popup closed), with a fallback so the widget can never be
   * trapped if the gate script is blocked. */
  var chatyRevealScheduled = false;

  function revealChaty() {
    var widget = document.querySelector('.chaty-widget');
    if (widget && widget.querySelector('.chaty-channel a')) widget.classList.add('zomeex-chaty-ready');
  }

  function revealChatyWhenSafe() {
    if (chatyRevealScheduled) return;
    chatyRevealScheduled = true;
    if (window.zomeexSubscribeGate === 'released' || !document.querySelector('[data-zomeex-startup-gate]')) {
      revealChaty();
      return;
    }
    window.addEventListener('zomeex:subscribe-gate', function handler(event) {
      if ((event.detail && event.detail.state) === 'released') {
        window.removeEventListener('zomeex:subscribe-gate', handler);
        revealChaty();
      }
    });
    window.setTimeout(revealChaty, 8000);
  }

  function boot() {
    repair(document);

    var repairScheduled = false;
    var observer = new MutationObserver(function (mutations) {
      var hasAddedNodes = mutations.some(function (mutation) { return mutation.addedNodes.length > 0; });
      if (hasAddedNodes && !repairScheduled) {
        repairScheduled = true;
        var flush = function () {
          repairScheduled = false;
          repair(document);
        };
        if ('requestAnimationFrame' in window) window.requestAnimationFrame(flush);
        else window.setTimeout(flush, 0);
      }
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
