(function () {
  'use strict';

  var STORAGE_KEY = 'zomeex-locale';
  var DEFAULT_LOCALE = 'en';
  var LOCALES = ['en', 'zh-CN', 'ru', 'de', 'fr'];

  /* Fixed interface copy only. Product names, SKUs and editorial content stay
   * owned by WordPress and are intentionally outside this dictionary. */
  var DICTIONARY = {
    en: {
      'nav.products': 'Products',
      'nav.solutions': 'Solutions',
      'nav.insights': 'Insights',
      'nav.about': 'About',
      'nav.search': 'Search',
      'nav.account': 'Account',
      'nav.cart': 'Cart',
      'nav.quoteList': 'Quote list',
      'nav.openQuoteList': 'Open quote list',
      'nav.openSearch': 'Open search',
      'nav.closeMenu': 'Close menu',
      'nav.openMenu': 'Open menu',
      'nav.accountTools': 'Account tools',
      'nav.languageSelector': 'Language selector',
      'nav.selectLanguage': 'Select language',
      'nav.chooseLanguage': 'Choose language',
      'nav.dismissAnnouncement': 'Dismiss announcement',
      'nav.productCatalogue': 'Product catalogue',
      'nav.viewAllProducts': 'View all products',
      'nav.chooseSystem': 'Choose the system behind your brief.',
      'nav.oemProjects': 'OEM / ODM projects',
      'nav.oemProjectsHint': 'From product concept to market-ready',
      'nav.packagingCompliance': 'Packaging and compliance',
      'nav.packagingComplianceHint': 'Formats, documentation, and market context',
      'nav.equipmentIntegration': 'Equipment integration',
      'nav.equipmentIntegrationHint': 'Connect hardware and filling workflows',
      'nav.talkBrief': 'Talk through a brief',
      'nav.talkBriefHint': 'Share target market and quantity',
      'search.productsInsights': 'Search products and insights',
      'search.byProduct': 'Search by product, SKU, or use',
      'search.submit': 'Search',
      'announcement.samples': 'Samples and OEM/ODM support available',
      'footer.explore': 'Explore',
      'footer.startBrief': 'Start a brief',
      'footer.requestQuote': 'Request a quote',
      'footer.allRights': 'All rights reserved.',
      'footer.disclaimer': 'Product information is subject to confirmation.',
      'home.browseProducts': 'Browse products',
      'home.requestQuote': 'Request a quote',
      'home.productDetail': 'Product detail',
      'home.exploreFamilies': 'Explore by product family',
      'home.explore': 'Explore',
      'home.findStartingPoint': 'Find the right starting point for the project.',
      'home.startProjectBrief': 'Start a project brief',
      'home.featuredProducts': 'Featured products',
      'home.productImagePending': 'Product image pending',
      'home.productSystem': 'Product system',
      'home.projectRoute': 'A project route with the decisions in order.',
      'home.workingProof': 'Working proof points',
      'home.currentSite': 'What the current site already says',
      'home.legacyPlaceholder': 'These points are carried forward from the legacy website as content placeholders. Confirm wording, documents, and scope before publishing.',
      'home.legacyVerify': 'Legacy copy / verify',
      'home.bringConversation': 'What to bring into the first conversation.',
      'home.quotePath': 'Choose the quote path that matches your starting point.',
      'home.buildQuoteList': 'Build a quote list',
      'home.notesBuild': 'Notes from the build',
      'home.viewInsights': 'View insights',
      'home.readNote': 'Read note',
      'home.needBuild': 'Need a build that fits your market?',
      'home.talkTeam': 'Talk to the team',
      'catalog.directory': 'Product directory',
      'catalog.openQuote': 'Open quote list',
      'catalog.lede': 'A clear starting point for hardware, packaging, and equipment briefs. Commercial terms are confirmed against your market and volume.',
      'catalog.allProducts': 'All products',
      'catalog.productPortals': 'Product portals',
      'catalog.subcategories': 'Subcategories',
      'catalog.filters': 'Catalogue filters',
      'catalog.searchLabel': 'Search',
      'catalog.sortLabel': 'Sort',
      'catalog.latest': 'Latest',
      'catalog.nameAZ': 'Name A-Z',
      'catalog.oldest': 'Oldest',
      'catalog.applyFilters': 'Apply filters',
      'catalog.quoteOnRequest': 'Quote on request',
      'catalog.imagePending': 'Image pending',
      'catalog.viewDetails': 'View details',
      'catalog.addToQuote': 'Add to quote',
      'catalog.added': 'Added',
      'catalog.noMatching': 'No matching products',
      'catalog.tryAnother': 'Try another term or start with a portal.',
      'catalog.reset': 'Reset directory',
      'catalog.startQuote': 'Start a quote',
      'catalog.talkTeam': 'Talk to the team',
      'product.breadcrumb': 'Products',
      'product.detail': 'Product detail',
      'product.images': 'Product images',
      'product.addToList': 'Add to quote list',
      'product.related': 'Related routes',
      'product.specification': 'Specification notes',
      'product.designed': 'Designed to be scoped clearly.',
      'product.attributes': 'Product attributes',
      'product.technicalSheet': 'Technical sheet',
      'product.toConfirm': 'To confirm against your brief',
      'product.finishFormat': 'Finish / format',
      'product.availableOptions': 'Available options reviewed with sales',
      'product.customization': 'Customization and MOQ',
      'product.leadCompliance': 'Lead time and compliance',
      'product.quoteNote': 'Pricing, MOQ, lead time and compliance documents are confirmed after we review your destination market and volume.',
      'quote.masthead': 'Quote request / structured brief',
      'quote.title': 'Turn a shortlist into a clear next step.',
      'quote.lede': 'Tell us what you are building, where it will launch, and the volume you are planning. We will confirm fit, documentation and commercial terms with you.',
      'quote.received': 'Brief received',
      'quote.thanks': 'Thanks. Your reference is',
      'quote.receivedRef': 'received',
      'quote.review': 'The team will review your products and market context before replying. Keep this reference for follow-up.',
      'quote.continue': 'Continue browsing',
      'quote.required': 'Please complete the required fields before sending your brief.',
      'quote.invalid': 'Some fields are too long or contain an unsupported value. Please review and try again.',
      'quote.security': 'This form has expired. Please refresh the page and try again.',
      'quote.spam': 'We could not accept this request. Please try again.',
      'quote.save': 'We could not save this brief. Please try again or email the team directly.',
      'quote.yourList': 'Your quote list',
      'quote.clearList': 'Clear list',
      'quote.noProducts': 'No products selected',
      'quote.startDirectory': 'Start with the directory.',
      'quote.addProducts': 'Add products here to keep your brief focused, or send a general project note below.',
      'quote.context': 'Project context',
      'quote.focus': 'Where should we focus?',
      'quote.buildRequirements': 'Build requirements',
      'quote.prepare': 'What should we prepare?',
      'quote.beforeSend': 'Before you send',
      'quote.sharperReply': 'A useful brief makes the next reply sharper.',
      'quote.send': 'Send quote request',
      'quote.sending': 'Sending...',
      'quote.name': 'Name',
      'quote.company': 'Company',
      'quote.email': 'Work email',
      'quote.country': 'Country / region',
      'quote.role': 'Your role',
      'quote.targetMarket': 'Target market',
      'quote.quantity': 'Estimated quantity',
      'quote.timeline': 'Target timeline',
      'quote.customization': 'Customization, finish or packaging',
      'quote.samples': 'Samples',
      'quote.anythingElse': 'Anything else',
      'quote.selectOne': 'Select one',
      'quote.targetMarketPlaceholder': 'e.g. EU, US, Canada',
      'quote.quantityPlaceholder': 'Units per order or year',
      'quote.customizationPlaceholder': 'Colors, branding, format, technical requirements',
      'quote.notesPlaceholder': 'Additional context',
      'quote.privacy': 'Your details are used to respond to this request. We do not publish your brief.',
      'account.kicker': 'Customer account',
      'account.title': 'Account',
      'account.lede': 'Sign in to review your account details and order history.',
      'cart.kicker': 'Shopping cart',
      'cart.title': 'Cart',
      'cart.lede': 'Review selected items before continuing with the standard WooCommerce flow.',
      'content.home': 'Home',
      'content.insights': 'Insights',
      'content.about': 'About ZOMEEX',
      'content.contact': 'Contact ZOMEEX',
      'content.browse': 'Browse products',
      'content.contactTeam': 'Contact the team',
      'content.articleImagePending': 'Article image pending',
      'content.allNotes': 'All notes',
      'content.readNote': 'Read note',
      'content.previous': 'Previous',
      'content.next': 'Next',
      'content.error404': 'Error 404 / route not found',
      'content.notFoundTitle': 'Let us get you back to the right system.',
      'content.notFoundCopy': 'The page may have moved, or the product route may need a fresh search. Browse the catalogue or send the team a project brief and we will help you find the right path.',
      'content.startQuoteBrief': 'Start a quote brief',
      'dynamic.skuConfirm': 'SKU to confirm',
      'dynamic.quantity': 'Quantity',
      'dynamic.remove': 'Remove',
      'dynamic.productAdded': 'added to your quote list.',
      'home.heroTitle': 'Hardware and packaging with the structure in view.',
      'home.heroLede': 'Explore vape hardware, packaging, and OEM/ODM support built for teams that need clear options before they commit.',
      'home.vapeLabel': 'Canna vape devices',
      'home.vapeDescription': 'Devices, batteries, pods, and dab tools.',
      'home.packLabel': 'Packaging systems',
      'home.packDescription': 'Bags, boxes, and presentation-ready formats.',
      'home.switchLabel': 'Equipment integration',
      'home.switchDescription': 'HNB, NRT, GMO-based systems, and machinery.',
      'home.boostLabel': 'Business and compliance support',
      'home.boostDescription': 'OEM/ODM, market planning, and compliance support.',
      'home.buildHardware': 'Build a hardware range',
      'home.buildHardwareCopy': 'Start with device format, oil compatibility, target market, and the parts your launch needs around it.',
      'home.pairPackaging': 'Pair the product with packaging',
      'home.pairPackagingCopy': 'Bring bags, boxes, child-resistant formats, and presentation details into one product decision.',
      'home.connectRoute': 'Connect the production route',
      'home.connectRouteCopy': 'Map equipment, HNB, NRT, and system requirements before committing to a format or workflow.',
      'home.setOemRoute': 'Set an OEM or ODM route',
      'home.setOemRouteCopy': 'Use a defined brief to align product direction, customization, and target-market questions with the team.',
      'home.oneStop': 'One-stop supply',
      'home.oneStopCopy': 'Products, accessories, packaging, and logistics in one place.',
      'home.customPaths': 'Custom product paths',
      'home.customPathsCopy': 'Semi-private molds and OEM/ODM options for a defined brief.',
      'home.auditedChain': 'Audited supply chain',
      'home.auditedChainCopy': 'Audited factories, consistent quality, and fast delivery.',
      'home.marketContext': 'EU + US market context',
      'home.marketContextCopy': '10+ years in EU and US vape and cannabis markets.',
      'home.productDirection': 'Product direction',
      'home.productDirectionCopy': 'Format, intended use, and the product families you are comparing.',
      'home.targetMarket': 'Target market',
      'home.targetMarketCopy': 'Where the product will launch and any requirements already known to your team.',
      'home.customizationScope': 'Customization scope',
      'home.customizationScopeCopy': 'Branding, color, finish, packaging, or product changes that are still under review.',
      'home.referenceMaterial': 'Reference material',
      'home.referenceMaterialCopy': 'Artwork, samples, drawings, or product links if they are available. A complete pack is not required.',
      'home.optionsQuestion': 'Already have product options?',
      'home.optionsCopy': 'Browse product detail pages, add the relevant items to your Quote List, then send the list with your requirements.',
      'home.definingQuestion': 'Still defining the project?',
      'home.definingCopy': 'Send a focused brief when you need help choosing the format, product path, packaging, or OEM and ODM direction.',
      'home.defineBrief': 'Define the brief',
      'home.defineBriefCopy': 'Product direction, target market, and volume.',
      'home.confirmFormat': 'Confirm the format',
      'home.confirmFormatCopy': 'Hardware, packaging, finishes, and product fit.',
      'home.sampleProof': 'Sample or proof',
      'home.sampleProofCopy': 'Review the options and align the open details.',
      'home.productionRoute': 'Production route',
      'home.productionRouteCopy': 'Move the confirmed scope into the next commercial conversation.'
    },
    'zh-CN': {
      'nav.products': '产品', 'nav.solutions': '解决方案', 'nav.insights': '行业洞察', 'nav.about': '关于我们', 'nav.search': '搜索', 'nav.account': '账户', 'nav.cart': '购物车', 'nav.quoteList': '询价清单', 'nav.openQuoteList': '打开询价清单', 'nav.openSearch': '打开搜索', 'nav.closeMenu': '关闭菜单', 'nav.openMenu': '打开菜单', 'nav.accountTools': '账户工具', 'nav.languageSelector': '语言选择', 'nav.selectLanguage': '选择语言', 'nav.chooseLanguage': '选择语言', 'nav.dismissAnnouncement': '关闭提示', 'nav.productCatalogue': '产品目录', 'nav.viewAllProducts': '查看全部产品', 'nav.chooseSystem': '从需求出发，选择合适的产品体系。', 'nav.oemProjects': 'OEM / ODM 项目', 'nav.oemProjectsHint': '从产品概念到上市准备', 'nav.packagingCompliance': '包装与合规', 'nav.packagingComplianceHint': '包装形式、文件与市场背景', 'nav.equipmentIntegration': '设备整合', 'nav.equipmentIntegrationHint': '衔接硬件与灌装流程', 'nav.talkBrief': '沟通项目需求', 'nav.talkBriefHint': '分享目标市场与数量', 'search.productsInsights': '搜索产品与洞察', 'search.byProduct': '按产品、SKU 或用途搜索', 'search.submit': '搜索', 'announcement.samples': '提供样品及 OEM/ODM 支持', 'footer.explore': '探索', 'footer.startBrief': '提交需求', 'footer.requestQuote': '申请报价', 'footer.allRights': '版权所有。', 'footer.disclaimer': '产品信息以最终确认结果为准。', 'home.browseProducts': '浏览产品', 'home.requestQuote': '申请报价', 'home.productDetail': '产品详情', 'home.exploreFamilies': '按产品系列探索', 'home.explore': '探索', 'home.findStartingPoint': '找到适合项目的起点。', 'home.startProjectBrief': '提交项目需求', 'home.featuredProducts': '精选产品', 'home.productImagePending': '产品图片待补充', 'home.productSystem': '产品体系', 'home.projectRoute': '按顺序推进项目决策。', 'home.workingProof': '现有业务要点', 'home.currentSite': '现有网站已呈现的能力', 'home.legacyPlaceholder': '以下内容沿用旧网站，暂作为演示占位。正式发布前请确认文案、文件和适用范围。', 'home.legacyVerify': '旧文案 / 待确认', 'home.bringConversation': '首次沟通前可以准备什么。', 'home.quotePath': '选择适合当前阶段的询价路径。', 'home.buildQuoteList': '建立询价清单', 'home.notesBuild': '项目与制造笔记', 'home.viewInsights': '查看洞察', 'home.readNote': '阅读笔记', 'home.needBuild': '需要适配目标市场的产品方案？', 'home.talkTeam': '联系团队', 'catalog.directory': '产品目录', 'catalog.openQuote': '打开询价清单', 'catalog.lede': '从硬件、包装和设备需求开始梳理。商业条款将结合目标市场与采购数量确认。', 'catalog.allProducts': '全部产品', 'catalog.productPortals': '产品入口', 'catalog.subcategories': '子分类', 'catalog.filters': '目录筛选', 'catalog.searchLabel': '搜索', 'catalog.sortLabel': '排序', 'catalog.latest': '最新', 'catalog.nameAZ': '名称 A-Z', 'catalog.oldest': '最早', 'catalog.applyFilters': '应用筛选', 'catalog.quoteOnRequest': '按需报价', 'catalog.imagePending': '图片待补充', 'catalog.viewDetails': '查看详情', 'catalog.addToQuote': '加入询价', 'catalog.added': '已加入', 'catalog.noMatching': '没有匹配的产品', 'catalog.tryAnother': '请尝试其他关键词，或从产品入口开始。', 'catalog.reset': '重置目录', 'catalog.startQuote': '开始询价', 'catalog.talkTeam': '联系团队', 'product.breadcrumb': '产品', 'product.detail': '产品详情', 'product.images': '产品图片', 'product.addToList': '加入询价清单', 'product.related': '相关产品路径', 'product.specification': '规格说明', 'product.designed': '让需求范围清晰可控。', 'product.attributes': '产品属性', 'product.technicalSheet': '技术资料', 'product.toConfirm': '结合需求确认', 'product.finishFormat': '表面 / 形式', 'product.availableOptions': '可选方案由销售团队确认', 'product.customization': '定制与 MOQ', 'product.leadCompliance': '交期与合规', 'product.quoteNote': '价格、MOQ、交期和合规文件将在确认目标市场与采购数量后提供。', 'quote.masthead': '申请报价 / 结构化需求', 'quote.title': '把产品清单变成清晰的下一步。', 'quote.lede': '告诉我们你要做什么、在哪个市场上市以及预计数量。我们会与你确认产品匹配度、文件和商业条款。', 'quote.received': '已收到需求', 'quote.thanks': '感谢提交。你的参考编号是', 'quote.receivedRef': '已收到', 'quote.review': '团队会先核对产品与市场背景，再回复你。请保留此编号以便跟进。', 'quote.continue': '继续浏览', 'quote.required': '发送需求前，请完成必填项。', 'quote.invalid': '部分字段过长或包含不支持的内容，请检查后重试。', 'quote.security': '表单已过期，请刷新页面后重试。', 'quote.spam': '请求未能提交，请重试。', 'quote.save': '需求保存失败，请重试或直接邮件联系团队。', 'quote.yourList': '你的询价清单', 'quote.clearList': '清空清单', 'quote.noProducts': '尚未选择产品', 'quote.startDirectory': '从产品目录开始。', 'quote.addProducts': '在这里添加产品，让需求更聚焦；也可以直接在下方提交项目说明。', 'quote.context': '项目背景', 'quote.focus': '我们应该重点了解什么？', 'quote.buildRequirements': '方案要求', 'quote.prepare': '需要我们准备什么？', 'quote.beforeSend': '发送前确认', 'quote.sharperReply': '清晰的需求有助于获得更准确的回复。', 'quote.send': '发送询价请求', 'quote.sending': '正在发送...', 'quote.name': '姓名', 'quote.company': '公司', 'quote.email': '工作邮箱', 'quote.country': '国家 / 地区', 'quote.role': '你的职位', 'quote.targetMarket': '目标市场', 'quote.quantity': '预计数量', 'quote.timeline': '目标时间', 'quote.customization': '定制、表面处理或包装', 'quote.samples': '样品', 'quote.anythingElse': '其他说明', 'quote.selectOne': '请选择', 'quote.targetMarketPlaceholder': '例如：欧盟、美国、加拿大', 'quote.quantityPlaceholder': '每单或每年的数量', 'quote.customizationPlaceholder': '颜色、品牌、形式、技术要求', 'quote.notesPlaceholder': '补充背景信息', 'quote.privacy': '你的信息仅用于回复本次请求，我们不会公开你的项目需求。', 'account.kicker': '客户账户', 'account.title': '账户', 'account.lede': '登录后查看账户信息和订单记录。', 'cart.kicker': '购物车', 'cart.title': '购物车', 'cart.lede': '确认已选内容，然后继续使用标准 WooCommerce 流程。', 'content.home': '首页', 'content.insights': '行业洞察', 'content.about': '关于 ZOMEEX', 'content.contact': '联系 ZOMEEX', 'content.browse': '浏览产品', 'content.contactTeam': '联系团队', 'content.articleImagePending': '文章图片待补充', 'content.allNotes': '全部笔记', 'content.readNote': '阅读笔记', 'content.previous': '上一页', 'content.next': '下一页', 'content.error404': '错误 404 / 找不到页面', 'content.notFoundTitle': '回到正确的产品体系。', 'content.notFoundCopy': '页面可能已移动，或者产品路径需要重新搜索。你可以浏览目录或提交项目需求，我们会帮你找到合适的方向。', 'content.startQuoteBrief': '开始提交需求', 'dynamic.skuConfirm': 'SKU 待确认', 'dynamic.quantity': '数量', 'dynamic.remove': '移除', 'dynamic.productAdded': '已加入你的询价清单。'
    },
    ru: {
      'nav.products': 'Продукты', 'nav.solutions': 'Решения', 'nav.insights': 'Аналитика', 'nav.about': 'О компании', 'nav.search': 'Поиск', 'nav.account': 'Аккаунт', 'nav.cart': 'Корзина', 'nav.quoteList': 'Список запроса', 'nav.openQuoteList': 'Открыть список запроса', 'nav.openSearch': 'Открыть поиск', 'nav.closeMenu': 'Закрыть меню', 'nav.openMenu': 'Открыть меню', 'nav.accountTools': 'Инструменты аккаунта', 'nav.languageSelector': 'Выбор языка', 'nav.selectLanguage': 'Выбрать язык', 'nav.chooseLanguage': 'Выберите язык', 'nav.dismissAnnouncement': 'Закрыть уведомление', 'nav.productCatalogue': 'Каталог продуктов', 'nav.viewAllProducts': 'Все продукты', 'nav.chooseSystem': 'Выберите систему под вашу задачу.', 'nav.oemProjects': 'Проекты OEM / ODM', 'nav.oemProjectsHint': 'От концепции до готового к запуску продукта', 'nav.packagingCompliance': 'Упаковка и соответствие требованиям', 'nav.packagingComplianceHint': 'Форматы, документы и требования рынка', 'nav.equipmentIntegration': 'Интеграция оборудования', 'nav.equipmentIntegrationHint': 'Свяжем оборудование и процессы наполнения', 'nav.talkBrief': 'Обсудить задачу', 'nav.talkBriefHint': 'Укажите рынок и объем', 'search.productsInsights': 'Поиск продуктов и материалов', 'search.byProduct': 'По продукту, SKU или назначению', 'search.submit': 'Найти', 'announcement.samples': 'Доступны образцы и поддержка OEM/ODM', 'footer.explore': 'Разделы', 'footer.startBrief': 'Отправить задачу', 'footer.requestQuote': 'Запросить расчет', 'footer.allRights': 'Все права защищены.', 'footer.disclaimer': 'Информация о продукте требует подтверждения.', 'home.browseProducts': 'Смотреть продукты', 'home.requestQuote': 'Запросить расчет', 'home.productDetail': 'О продукте', 'home.exploreFamilies': 'По категориям продуктов', 'home.explore': 'Смотреть', 'home.findStartingPoint': 'Найдите правильную точку старта проекта.', 'home.startProjectBrief': 'Отправить задачу', 'home.featuredProducts': 'Избранные продукты', 'home.productImagePending': 'Изображение готовится', 'home.productSystem': 'Система продукта', 'home.projectRoute': 'Проектный путь с решениями по порядку.', 'home.workingProof': 'Текущие подтверждающие пункты', 'home.currentSite': 'Что уже заявлено на текущем сайте', 'home.legacyPlaceholder': 'Эти пункты перенесены со старого сайта как демонстрационные материалы. Перед публикацией подтвердите формулировки, документы и область применения.', 'home.legacyVerify': 'Старый текст / проверить', 'home.bringConversation': 'Что подготовить к первой беседе.', 'home.quotePath': 'Выберите путь запроса под ваш этап.', 'home.buildQuoteList': 'Собрать список запроса', 'home.notesBuild': 'Заметки о продукте и производстве', 'home.viewInsights': 'Смотреть материалы', 'home.readNote': 'Читать материал', 'home.needBuild': 'Нужна сборка под ваш рынок?', 'home.talkTeam': 'Связаться с командой', 'catalog.directory': 'Каталог продуктов', 'catalog.openQuote': 'Открыть список запроса', 'catalog.lede': 'Начните с аппаратных решений, упаковки и оборудования. Коммерческие условия подтверждаются с учетом рынка и объема.', 'catalog.allProducts': 'Все продукты', 'catalog.productPortals': 'Разделы продуктов', 'catalog.subcategories': 'Подкатегории', 'catalog.filters': 'Фильтры каталога', 'catalog.searchLabel': 'Поиск', 'catalog.sortLabel': 'Сортировка', 'catalog.latest': 'Сначала новые', 'catalog.nameAZ': 'По имени A-Z', 'catalog.oldest': 'Сначала старые', 'catalog.applyFilters': 'Применить фильтры', 'catalog.quoteOnRequest': 'Расчет по запросу', 'catalog.imagePending': 'Изображение готовится', 'catalog.viewDetails': 'Подробнее', 'catalog.addToQuote': 'Добавить в запрос', 'catalog.added': 'Добавлено', 'catalog.noMatching': 'Подходящие продукты не найдены', 'catalog.tryAnother': 'Попробуйте другой запрос или начните с раздела.', 'catalog.reset': 'Сбросить каталог', 'catalog.startQuote': 'Начать запрос', 'catalog.talkTeam': 'Связаться с командой', 'product.breadcrumb': 'Продукты', 'product.detail': 'О продукте', 'product.images': 'Изображения продукта', 'product.addToList': 'Добавить в список запроса', 'product.related': 'Связанные направления', 'product.specification': 'Спецификация', 'product.designed': 'Чтобы задачу можно было точно определить.', 'product.attributes': 'Атрибуты продукта', 'product.technicalSheet': 'Технический лист', 'product.toConfirm': 'Подтверждается по вашей задаче', 'product.finishFormat': 'Отделка / формат', 'product.availableOptions': 'Доступные варианты согласуются с отделом продаж', 'product.customization': 'Кастомизация и MOQ', 'product.leadCompliance': 'Сроки и соответствие требованиям', 'product.quoteNote': 'Цена, MOQ, сроки и документы соответствия подтверждаются после анализа рынка и объема.', 'quote.masthead': 'Запрос расчета / структурированная задача', 'quote.title': 'Превратите список продуктов в понятный следующий шаг.', 'quote.lede': 'Расскажите, что вы создаете, где продукт выйдет на рынок и какой объем планируется. Мы подтвердим соответствие, документы и коммерческие условия.', 'quote.received': 'Задача получена', 'quote.thanks': 'Спасибо. Ваш номер запроса', 'quote.receivedRef': 'получен', 'quote.review': 'Команда изучит продукты и контекст рынка перед ответом. Сохраните номер для связи.', 'quote.continue': 'Продолжить просмотр', 'quote.required': 'Заполните обязательные поля перед отправкой задачи.', 'quote.invalid': 'Некоторые поля слишком длинные или содержат недопустимое значение. Проверьте и повторите.', 'quote.security': 'Форма устарела. Обновите страницу и повторите.', 'quote.spam': 'Не удалось принять запрос. Повторите попытку.', 'quote.save': 'Не удалось сохранить задачу. Повторите или напишите команде напрямую.', 'quote.yourList': 'Ваш список запроса', 'quote.clearList': 'Очистить список', 'quote.noProducts': 'Продукты не выбраны', 'quote.startDirectory': 'Начните с каталога.', 'quote.addProducts': 'Добавьте продукты, чтобы сфокусировать задачу, или отправьте общее описание ниже.', 'quote.context': 'Контекст проекта', 'quote.focus': 'На чем сосредоточиться?', 'quote.buildRequirements': 'Требования к сборке', 'quote.prepare': 'Что подготовить?', 'quote.beforeSend': 'Перед отправкой', 'quote.sharperReply': 'Четкая задача помогает получить более точный ответ.', 'quote.send': 'Отправить запрос', 'quote.sending': 'Отправка...', 'quote.name': 'Имя', 'quote.company': 'Компания', 'quote.email': 'Рабочая почта', 'quote.country': 'Страна / регион', 'quote.role': 'Ваша роль', 'quote.targetMarket': 'Целевой рынок', 'quote.quantity': 'Планируемый объем', 'quote.timeline': 'Срок запуска', 'quote.customization': 'Кастомизация, отделка или упаковка', 'quote.samples': 'Образцы', 'quote.anythingElse': 'Дополнительно', 'quote.selectOne': 'Выберите', 'quote.targetMarketPlaceholder': 'например, ЕС, США, Канада', 'quote.quantityPlaceholder': 'Единиц за заказ или год', 'quote.customizationPlaceholder': 'Цвет, бренд, формат, технические требования', 'quote.notesPlaceholder': 'Дополнительный контекст', 'quote.privacy': 'Данные используются для ответа на запрос. Мы не публикуем вашу задачу.', 'account.kicker': 'Аккаунт клиента', 'account.title': 'Аккаунт', 'account.lede': 'Войдите, чтобы просмотреть данные аккаунта и историю заказов.', 'cart.kicker': 'Корзина', 'cart.title': 'Корзина', 'cart.lede': 'Проверьте выбранные позиции перед стандартным процессом WooCommerce.', 'content.home': 'Главная', 'content.insights': 'Аналитика', 'content.about': 'О ZOMEEX', 'content.contact': 'Контакты ZOMEEX', 'content.browse': 'Смотреть продукты', 'content.contactTeam': 'Связаться с командой', 'content.articleImagePending': 'Изображение статьи готовится', 'content.allNotes': 'Все материалы', 'content.readNote': 'Читать материал', 'content.previous': 'Назад', 'content.next': 'Далее', 'content.error404': 'Ошибка 404 / маршрут не найден', 'content.notFoundTitle': 'Вернем вас к нужной системе.', 'content.notFoundCopy': 'Страница могла измениться, или продукт нужно найти заново. Откройте каталог или отправьте задачу, и команда подскажет следующий шаг.', 'content.startQuoteBrief': 'Начать задачу', 'dynamic.skuConfirm': 'SKU уточняется', 'dynamic.quantity': 'Количество', 'dynamic.remove': 'Удалить', 'dynamic.productAdded': 'добавлен в список запроса.'
    },
    de: {
      'nav.products': 'Produkte', 'nav.solutions': 'Lösungen', 'nav.insights': 'Insights', 'nav.about': 'Über uns', 'nav.search': 'Suche', 'nav.account': 'Konto', 'nav.cart': 'Warenkorb', 'nav.quoteList': 'Anfrageliste', 'nav.openQuoteList': 'Anfrageliste öffnen', 'nav.openSearch': 'Suche öffnen', 'nav.closeMenu': 'Menü schließen', 'nav.openMenu': 'Menü öffnen', 'nav.accountTools': 'Kontowerkzeuge', 'nav.languageSelector': 'Sprachauswahl', 'nav.selectLanguage': 'Sprache auswählen', 'nav.chooseLanguage': 'Sprache auswählen', 'nav.dismissAnnouncement': 'Hinweis schließen', 'nav.productCatalogue': 'Produktkatalog', 'nav.viewAllProducts': 'Alle Produkte ansehen', 'nav.chooseSystem': 'Wählen Sie das passende System für Ihre Anfrage.', 'nav.oemProjects': 'OEM / ODM Projekte', 'nav.oemProjectsHint': 'Von der Produktidee bis zur Marktreife', 'nav.packagingCompliance': 'Verpackung und Compliance', 'nav.packagingComplianceHint': 'Formate, Dokumente und Marktanforderungen', 'nav.equipmentIntegration': 'Integration von Anlagen', 'nav.equipmentIntegrationHint': 'Hardware und Abfüllprozesse verbinden', 'nav.talkBrief': 'Anfrage besprechen', 'nav.talkBriefHint': 'Zielmarkt und Menge teilen', 'search.productsInsights': 'Produkte und Insights suchen', 'search.byProduct': 'Nach Produkt, SKU oder Anwendung suchen', 'search.submit': 'Suchen', 'announcement.samples': 'Muster und OEM/ODM-Unterstützung verfügbar', 'footer.explore': 'Entdecken', 'footer.startBrief': 'Anfrage starten', 'footer.requestQuote': 'Angebot anfordern', 'footer.allRights': 'Alle Rechte vorbehalten.', 'footer.disclaimer': 'Produktinformationen vorbehaltlich Bestätigung.', 'home.browseProducts': 'Produkte ansehen', 'home.requestQuote': 'Angebot anfordern', 'home.productDetail': 'Produktdetail', 'home.exploreFamilies': 'Nach Produktfamilie entdecken', 'home.explore': 'Entdecken', 'home.findStartingPoint': 'Finden Sie den passenden Einstieg für Ihr Projekt.', 'home.startProjectBrief': 'Projektanfrage starten', 'home.featuredProducts': 'Ausgewählte Produkte', 'home.productImagePending': 'Produktbild folgt', 'home.productSystem': 'Produktsystem', 'home.projectRoute': 'Ein Projektablauf mit Entscheidungen in der richtigen Reihenfolge.', 'home.workingProof': 'Aktuelle Nachweise', 'home.currentSite': 'Was die aktuelle Website bereits zeigt', 'home.legacyPlaceholder': 'Diese Punkte stammen als Demo-Platzhalter von der bisherigen Website. Formulierungen, Dokumente und Umfang vor der Veröffentlichung bestätigen.', 'home.legacyVerify': 'Alte Angaben / prüfen', 'home.bringConversation': 'Was Sie zum ersten Gespräch mitbringen können.', 'home.quotePath': 'Wählen Sie den passenden Weg für Ihre Anfrage.', 'home.buildQuoteList': 'Anfrageliste erstellen', 'home.notesBuild': 'Notizen zu Produkt und Fertigung', 'home.viewInsights': 'Insights ansehen', 'home.readNote': 'Notiz lesen', 'home.needBuild': 'Brauchen Sie eine Lösung für Ihren Markt?', 'home.talkTeam': 'Team kontaktieren', 'catalog.directory': 'Produktkatalog', 'catalog.openQuote': 'Anfrageliste öffnen', 'catalog.lede': 'Ein klarer Einstieg für Anfragen zu Hardware, Verpackung und Anlagen. Die kommerziellen Bedingungen werden für Markt und Menge bestätigt.', 'catalog.allProducts': 'Alle Produkte', 'catalog.productPortals': 'Produktbereiche', 'catalog.subcategories': 'Unterkategorien', 'catalog.filters': 'Katalogfilter', 'catalog.searchLabel': 'Suche', 'catalog.sortLabel': 'Sortieren', 'catalog.latest': 'Neueste', 'catalog.nameAZ': 'Name A-Z', 'catalog.oldest': 'Älteste', 'catalog.applyFilters': 'Filter anwenden', 'catalog.quoteOnRequest': 'Angebot auf Anfrage', 'catalog.imagePending': 'Bild folgt', 'catalog.viewDetails': 'Details ansehen', 'catalog.addToQuote': 'Zur Anfrage hinzufügen', 'catalog.added': 'Hinzugefügt', 'catalog.noMatching': 'Keine passenden Produkte', 'catalog.tryAnother': 'Versuchen Sie einen anderen Begriff oder starten Sie mit einem Bereich.', 'catalog.reset': 'Katalog zurücksetzen', 'catalog.startQuote': 'Anfrage starten', 'catalog.talkTeam': 'Team kontaktieren', 'product.breadcrumb': 'Produkte', 'product.detail': 'Produktdetail', 'product.images': 'Produktbilder', 'product.addToList': 'Zur Anfrageliste hinzufügen', 'product.related': 'Verwandte Wege', 'product.specification': 'Spezifikationshinweise', 'product.designed': 'Damit der Umfang klar definiert werden kann.', 'product.attributes': 'Produkteigenschaften', 'product.technicalSheet': 'Technisches Datenblatt', 'product.toConfirm': 'Mit Ihrer Anfrage zu bestätigen', 'product.finishFormat': 'Oberfläche / Format', 'product.availableOptions': 'Verfügbare Optionen werden mit dem Vertrieb geprüft', 'product.customization': 'Anpassung und MOQ', 'product.leadCompliance': 'Lieferzeit und Compliance', 'product.quoteNote': 'Preis, MOQ, Lieferzeit und Compliance-Dokumente werden nach Prüfung von Zielmarkt und Menge bestätigt.', 'quote.masthead': 'Angebotsanfrage / strukturierte Anfrage', 'quote.title': 'Von der Auswahlliste zum klaren nächsten Schritt.', 'quote.lede': 'Teilen Sie uns mit, was Sie entwickeln, wo es auf den Markt kommt und welche Menge Sie planen. Wir bestätigen Eignung, Dokumente und kommerzielle Bedingungen.', 'quote.received': 'Anfrage erhalten', 'quote.thanks': 'Danke. Ihre Referenz lautet', 'quote.receivedRef': 'erhalten', 'quote.review': 'Das Team prüft Produkte und Marktkontext vor der Antwort. Bewahren Sie diese Referenz für Rückfragen auf.', 'quote.continue': 'Weiter stöbern', 'quote.required': 'Bitte füllen Sie die Pflichtfelder aus, bevor Sie Ihre Anfrage senden.', 'quote.invalid': 'Einige Felder sind zu lang oder enthalten einen ungültigen Wert. Bitte prüfen und erneut versuchen.', 'quote.security': 'Dieses Formular ist abgelaufen. Bitte aktualisieren Sie die Seite und versuchen Sie es erneut.', 'quote.spam': 'Diese Anfrage konnte nicht angenommen werden. Bitte erneut versuchen.', 'quote.save': 'Die Anfrage konnte nicht gespeichert werden. Bitte erneut versuchen oder direkt schreiben.', 'quote.yourList': 'Ihre Anfrageliste', 'quote.clearList': 'Liste leeren', 'quote.noProducts': 'Keine Produkte ausgewählt', 'quote.startDirectory': 'Mit dem Katalog starten.', 'quote.addProducts': 'Fügen Sie Produkte hinzu, um Ihre Anfrage zu fokussieren, oder senden Sie unten eine allgemeine Projektnotiz.', 'quote.context': 'Projektkontext', 'quote.focus': 'Worauf sollen wir uns konzentrieren?', 'quote.buildRequirements': 'Anforderungen', 'quote.prepare': 'Was sollen wir vorbereiten?', 'quote.beforeSend': 'Vor dem Senden', 'quote.sharperReply': 'Eine klare Anfrage führt zu einer präziseren Antwort.', 'quote.send': 'Anfrage senden', 'quote.sending': 'Wird gesendet...', 'quote.name': 'Name', 'quote.company': 'Unternehmen', 'quote.email': 'Arbeits-E-Mail', 'quote.country': 'Land / Region', 'quote.role': 'Ihre Rolle', 'quote.targetMarket': 'Zielmarkt', 'quote.quantity': 'Geplante Menge', 'quote.timeline': 'Zeitrahmen', 'quote.customization': 'Anpassung, Oberfläche oder Verpackung', 'quote.samples': 'Muster', 'quote.anythingElse': 'Weitere Angaben', 'quote.selectOne': 'Bitte auswählen', 'quote.targetMarketPlaceholder': 'z. B. EU, USA, Kanada', 'quote.quantityPlaceholder': 'Einheiten pro Bestellung oder Jahr', 'quote.customizationPlaceholder': 'Farben, Branding, Format, technische Anforderungen', 'quote.notesPlaceholder': 'Zusätzlicher Kontext', 'quote.privacy': 'Ihre Angaben werden zur Beantwortung dieser Anfrage verwendet. Ihre Anfrage wird nicht veröffentlicht.', 'account.kicker': 'Kundenkonto', 'account.title': 'Konto', 'account.lede': 'Melden Sie sich an, um Kontodaten und Bestellhistorie zu prüfen.', 'cart.kicker': 'Warenkorb', 'cart.title': 'Warenkorb', 'cart.lede': 'Prüfen Sie die Auswahl, bevor Sie mit dem Standardablauf von WooCommerce fortfahren.', 'content.home': 'Startseite', 'content.insights': 'Insights', 'content.about': 'Über ZOMEEX', 'content.contact': 'ZOMEEX kontaktieren', 'content.browse': 'Produkte ansehen', 'content.contactTeam': 'Team kontaktieren', 'content.articleImagePending': 'Artikelbild folgt', 'content.allNotes': 'Alle Notizen', 'content.readNote': 'Notiz lesen', 'content.previous': 'Zurück', 'content.next': 'Weiter', 'content.error404': 'Fehler 404 / Route nicht gefunden', 'content.notFoundTitle': 'Zurück zum passenden System.', 'content.notFoundCopy': 'Die Seite wurde möglicherweise verschoben oder die Produktroute benötigt eine neue Suche. Öffnen Sie den Katalog oder senden Sie eine Projektskizze.', 'content.startQuoteBrief': 'Anfrage starten', 'dynamic.skuConfirm': 'SKU wird bestätigt', 'dynamic.quantity': 'Menge', 'dynamic.remove': 'Entfernen', 'dynamic.productAdded': 'wurde zur Anfrageliste hinzugefügt.'
    },
    fr: {
      'nav.products': 'Produits', 'nav.solutions': 'Solutions', 'nav.insights': 'Insights', 'nav.about': 'À propos', 'nav.search': 'Rechercher', 'nav.account': 'Compte', 'nav.cart': 'Panier', 'nav.quoteList': 'Liste de devis', 'nav.openQuoteList': 'Ouvrir la liste de devis', 'nav.openSearch': 'Ouvrir la recherche', 'nav.closeMenu': 'Fermer le menu', 'nav.openMenu': 'Ouvrir le menu', 'nav.accountTools': 'Outils du compte', 'nav.languageSelector': 'Sélecteur de langue', 'nav.selectLanguage': 'Choisir la langue', 'nav.chooseLanguage': 'Choisir la langue', 'nav.dismissAnnouncement': 'Fermer l’annonce', 'nav.productCatalogue': 'Catalogue produits', 'nav.viewAllProducts': 'Voir tous les produits', 'nav.chooseSystem': 'Choisissez le système adapté à votre cahier des charges.', 'nav.oemProjects': 'Projets OEM / ODM', 'nav.oemProjectsHint': 'Du concept produit à la mise sur le marché', 'nav.packagingCompliance': 'Emballage et conformité', 'nav.packagingComplianceHint': 'Formats, documents et contexte marché', 'nav.equipmentIntegration': 'Intégration des équipements', 'nav.equipmentIntegrationHint': 'Relier le matériel et les flux de remplissage', 'nav.talkBrief': 'Parler du projet', 'nav.talkBriefHint': 'Partager le marché cible et les volumes', 'search.productsInsights': 'Rechercher des produits et des insights', 'search.byProduct': 'Par produit, SKU ou usage', 'search.submit': 'Rechercher', 'announcement.samples': 'Échantillons et accompagnement OEM/ODM disponibles', 'footer.explore': 'Explorer', 'footer.startBrief': 'Démarrer un brief', 'footer.requestQuote': 'Demander un devis', 'footer.allRights': 'Tous droits réservés.', 'footer.disclaimer': 'Les informations produit restent à confirmer.', 'home.browseProducts': 'Voir les produits', 'home.requestQuote': 'Demander un devis', 'home.productDetail': 'Détail produit', 'home.exploreFamilies': 'Explorer par famille de produits', 'home.explore': 'Explorer', 'home.findStartingPoint': 'Trouvez le bon point de départ pour votre projet.', 'home.startProjectBrief': 'Démarrer un brief projet', 'home.featuredProducts': 'Produits à la une', 'home.productImagePending': 'Image produit à venir', 'home.productSystem': 'Système produit', 'home.projectRoute': 'Un parcours projet avec les décisions dans le bon ordre.', 'home.workingProof': 'Éléments actuels à confirmer', 'home.currentSite': 'Ce que le site actuel présente déjà', 'home.legacyPlaceholder': 'Ces éléments sont repris de l’ancien site comme contenus de démonstration. Confirmez les formulations, documents et périmètre avant publication.', 'home.legacyVerify': 'Ancien texte / à vérifier', 'home.bringConversation': 'À préparer pour le premier échange.', 'home.quotePath': 'Choisissez le parcours adapté à votre point de départ.', 'home.buildQuoteList': 'Créer une liste de devis', 'home.notesBuild': 'Notes produit et fabrication', 'home.viewInsights': 'Voir les insights', 'home.readNote': 'Lire la note', 'home.needBuild': 'Besoin d’une solution adaptée à votre marché ?', 'home.talkTeam': 'Parler à l’équipe', 'catalog.directory': 'Catalogue produits', 'catalog.openQuote': 'Ouvrir la liste de devis', 'catalog.lede': 'Un point de départ clair pour le matériel, l’emballage et les équipements. Les conditions commerciales sont confirmées selon le marché et les volumes.', 'catalog.allProducts': 'Tous les produits', 'catalog.productPortals': 'Familles produits', 'catalog.subcategories': 'Sous-catégories', 'catalog.filters': 'Filtres du catalogue', 'catalog.searchLabel': 'Rechercher', 'catalog.sortLabel': 'Trier', 'catalog.latest': 'Les plus récents', 'catalog.nameAZ': 'Nom A-Z', 'catalog.oldest': 'Les plus anciens', 'catalog.applyFilters': 'Appliquer les filtres', 'catalog.quoteOnRequest': 'Devis sur demande', 'catalog.imagePending': 'Image à venir', 'catalog.viewDetails': 'Voir le détail', 'catalog.addToQuote': 'Ajouter au devis', 'catalog.added': 'Ajouté', 'catalog.noMatching': 'Aucun produit correspondant', 'catalog.tryAnother': 'Essayez un autre terme ou commencez par une famille.', 'catalog.reset': 'Réinitialiser le catalogue', 'catalog.startQuote': 'Démarrer un devis', 'catalog.talkTeam': 'Parler à l’équipe', 'product.breadcrumb': 'Produits', 'product.detail': 'Détail produit', 'product.images': 'Images produit', 'product.addToList': 'Ajouter à la liste de devis', 'product.related': 'Parcours associés', 'product.specification': 'Notes de spécification', 'product.designed': 'Pour cadrer clairement le besoin.', 'product.attributes': 'Attributs du produit', 'product.technicalSheet': 'Fiche technique', 'product.toConfirm': 'À confirmer selon votre brief', 'product.finishFormat': 'Finition / format', 'product.availableOptions': 'Options disponibles à étudier avec l’équipe commerciale', 'product.customization': 'Personnalisation et MOQ', 'product.leadCompliance': 'Délais et conformité', 'product.quoteNote': 'Le prix, le MOQ, les délais et les documents de conformité sont confirmés après étude du marché et des volumes.', 'quote.masthead': 'Demande de devis / brief structuré', 'quote.title': 'Transformez une sélection en prochaine étape claire.', 'quote.lede': 'Dites-nous ce que vous développez, où le produit sera lancé et quels volumes sont prévus. Nous confirmerons l’adéquation, les documents et les conditions commerciales.', 'quote.received': 'Brief reçu', 'quote.thanks': 'Merci. Votre référence est', 'quote.receivedRef': 'reçue', 'quote.review': 'L’équipe étudiera vos produits et le contexte marché avant de répondre. Conservez cette référence pour le suivi.', 'quote.continue': 'Continuer la navigation', 'quote.required': 'Complétez les champs obligatoires avant d’envoyer votre brief.', 'quote.invalid': 'Certains champs sont trop longs ou contiennent une valeur non prise en charge. Vérifiez puis réessayez.', 'quote.security': 'Ce formulaire a expiré. Actualisez la page puis réessayez.', 'quote.spam': 'Nous n’avons pas pu accepter cette demande. Réessayez.', 'quote.save': 'Impossible d’enregistrer ce brief. Réessayez ou écrivez directement à l’équipe.', 'quote.yourList': 'Votre liste de devis', 'quote.clearList': 'Vider la liste', 'quote.noProducts': 'Aucun produit sélectionné', 'quote.startDirectory': 'Commencez par le catalogue.', 'quote.addProducts': 'Ajoutez des produits pour cibler votre brief, ou envoyez une note générale ci-dessous.', 'quote.context': 'Contexte du projet', 'quote.focus': 'Sur quoi devons-nous nous concentrer ?', 'quote.buildRequirements': 'Besoins de fabrication', 'quote.prepare': 'Que devons-nous préparer ?', 'quote.beforeSend': 'Avant l’envoi', 'quote.sharperReply': 'Un brief précis permet une réponse plus utile.', 'quote.send': 'Envoyer la demande', 'quote.sending': 'Envoi...', 'quote.name': 'Nom', 'quote.company': 'Entreprise', 'quote.email': 'E-mail professionnel', 'quote.country': 'Pays / région', 'quote.role': 'Votre rôle', 'quote.targetMarket': 'Marché cible', 'quote.quantity': 'Quantité estimée', 'quote.timeline': 'Calendrier cible', 'quote.customization': 'Personnalisation, finition ou emballage', 'quote.samples': 'Échantillons', 'quote.anythingElse': 'Autres informations', 'quote.selectOne': 'Sélectionner', 'quote.targetMarketPlaceholder': 'ex. UE, États-Unis, Canada', 'quote.quantityPlaceholder': 'Unités par commande ou par an', 'quote.customizationPlaceholder': 'Couleurs, marque, format, exigences techniques', 'quote.notesPlaceholder': 'Contexte complémentaire', 'quote.privacy': 'Vos informations servent à répondre à cette demande. Votre brief ne sera pas publié.', 'account.kicker': 'Compte client', 'account.title': 'Compte', 'account.lede': 'Connectez-vous pour consulter les informations de votre compte et vos commandes.', 'cart.kicker': 'Panier', 'cart.title': 'Panier', 'cart.lede': 'Vérifiez les articles sélectionnés avant de poursuivre avec le parcours WooCommerce.', 'content.home': 'Accueil', 'content.insights': 'Insights', 'content.about': 'À propos de ZOMEEX', 'content.contact': 'Contacter ZOMEEX', 'content.browse': 'Voir les produits', 'content.contactTeam': 'Contacter l’équipe', 'content.articleImagePending': 'Image d’article à venir', 'content.allNotes': 'Toutes les notes', 'content.readNote': 'Lire la note', 'content.previous': 'Précédent', 'content.next': 'Suivant', 'content.error404': 'Erreur 404 / page introuvable', 'content.notFoundTitle': 'Revenons au bon système.', 'content.notFoundCopy': 'La page a peut-être changé, ou le produit doit être recherché à nouveau. Parcourez le catalogue ou envoyez un brief projet pour trouver la bonne direction.', 'content.startQuoteBrief': 'Démarrer un brief', 'dynamic.skuConfirm': 'SKU à confirmer', 'dynamic.quantity': 'Quantité', 'dynamic.remove': 'Supprimer', 'dynamic.productAdded': 'a été ajouté à votre liste de devis.'
    }
  };

  var EXTRA_BY_SOURCE = {
    'zh-CN': {
      'Hardware and packaging with the structure in view.': '硬件与包装，让项目结构清晰可见。',
      'Explore vape hardware, packaging, and OEM/ODM support built for teams that need clear options before they commit.': '探索适合专业团队的雾化硬件、包装和 OEM/ODM 支持，在确定方案前先看清选择。',
      'Choose the part of the brief that is already clear. Each portal keeps the next product, packaging, or production decision connected to the same project.': '从已经明确的部分开始。每个产品入口都会把下一步的产品、包装或生产决策放回同一个项目中。',
      'Bring the market, product direction, quantity, and open questions. The conversation can start before every detail is final.': '带上市场、产品方向、数量和待确认问题。无需等所有细节确定后再开始沟通。',
      'Not every item has to be settled. These details help the team give your project a useful first direction.': '不必一次确定所有内容。以下信息有助于团队给出有用的初步方向。',
      'View insights': '查看洞察',
      'What the current site already says': '现有网站已呈现的能力',
      'What to bring into the first conversation.': '首次沟通前可以准备什么。',
      'One-stop supply': '一站式供应',
      'Products, accessories, packaging, and logistics in one place.': '产品、配件、包装与物流集中对接。',
      'Custom product paths': '灵活定制路径',
      'Semi-private molds and OEM/ODM options for a defined brief.': '围绕明确需求提供半私模与 OEM/ODM 方案。',
      'Audited supply chain': '经过审核的供应链',
      'Audited factories, consistent quality, and fast delivery.': '审核工厂、稳定品质与快速交付。',
      'EU + US market context': '欧美市场经验',
      '10+ years in EU and US vape and cannabis markets.': '深耕欧美雾化与大麻市场超过 10 年。',
      'Product direction': '产品方向',
      'Format, intended use, and the product families you are comparing.': '正在比较的形式、用途和产品系列。',
      'Target market': '目标市场',
      'Where the product will launch and any requirements already known to your team.': '产品计划上市的地区，以及团队已经掌握的要求。',
      'Customization scope': '定制范围',
      'Branding, color, finish, packaging, or product changes that are still under review.': '仍在评估的品牌、颜色、表面、包装或产品变化。',
      'Reference material': '参考资料',
      'Artwork, samples, drawings, or product links if they are available. A complete pack is not required.': '如有现成的设计稿、样品、图纸或产品链接，可以一并提供，不必一次准备完整资料包。',
      'Already have product options?': '已经有产品方向？',
      'Browse product detail pages, add the relevant items to your Quote List, then send the list with your requirements.': '浏览产品详情，将相关产品加入询价清单，再连同需求一起发送。',
      'Still defining the project?': '项目还在定义中？',
      'Send a focused brief when you need help choosing the format, product path, packaging, or OEM and ODM direction.': '如果需要协助选择形式、产品路径、包装或 OEM/ODM 方向，可以先提交一份聚焦的需求。',
      'Define the brief': '明确项目需求',
      'Product direction, target market, and volume.': '产品方向、目标市场与数量。',
      'Confirm the format': '确认产品形式',
      'Hardware, packaging, finishes, and product fit.': '硬件、包装、表面处理与产品匹配。',
      'Sample or proof': '样品与验证',
      'Review the options and align the open details.': '评估方案并对齐未确定细节。',
      'Production route': '生产路径',
      'Move the confirmed scope into the next commercial conversation.': '将已确认范围带入下一步商务沟通。',
      'Need a build that fits your market?': '需要适配目标市场的产品方案？',
      'Talk to the team': '联系团队',
      'Real product media / 01': '真实产品图 / 01',
      'Hardware, packaging, and OEM/ODM support for teams building the next version.': '为持续打造产品的团队提供硬件、包装与 OEM/ODM 支持。',
      'Share your target market, product family, and quantity.': '分享目标市场、产品系列和采购数量。',
      'Plan the product and the market together.': '同步规划产品与目标市场。',
      'Send a structured brief for product selection, OEM / ODM development, packaging, equipment or documentation support.': '提交结构化需求，获取产品选择、OEM/ODM 开发、包装、设备或文件支持。',
      'Talk to the team.': '联系团队。',
      'The faster route starts with four details.': '四项信息，让沟通更高效。',
      'Useful context': '有用信息',
      'Product family or format': '产品系列或形式',
      'Target country or region': '目标国家或地区',
      'Expected order volume': '预计采购数量',
      'Branding, packaging or sample needs': '品牌、包装或样品需求',
      'Legacy demo contact data. Confirm routing and business hours before production launch.': '旧网站演示联系信息。正式上线前请确认邮件流向和工作时间。',
      'Product, technology and manufacturing notes.': '产品、技术与制造笔记。',
      'Practical context for teams comparing vape hardware, packaging formats and OEM/ODM routes.': '为比较雾化硬件、包装形式和 OEM/ODM 路径的团队提供实用背景。',
      'All notes': '全部笔记',
      'Insights are being prepared.': '洞察内容正在准备中。',
      'Browse the product directory while the next product and manufacturing note is prepared.': '下一篇产品与制造笔记准备期间，你可以先浏览产品目录。',
      'Continue the brief': '继续完善需求',
      'Need a product route for your market?': '需要适配目标市场的产品路径？',
      'Save a product shortlist or tell us the target format, market and expected volume.': '保存产品清单，或告诉我们目标形式、市场与预计数量。',
      'This note is being refreshed with clearer product and market context. Contact the team if you need a specification review for a current project.': '这篇笔记正在补充更清晰的产品与市场背景。如需当前项目的规格评估，请联系团队。',
      'Let us get you back to the right system.': '回到正确的产品体系。',
      'The page may have moved, or the product route may need a fresh search. Browse the catalogue or send the team a project brief and we will help you find the right path.': '页面可能已移动，或者产品路径需要重新搜索。你可以浏览目录或提交项目需求，我们会帮你找到合适的方向。',
      'Start a quote brief': '开始提交需求',
      'Shopping cart': '购物车',
      'Review selected items before continuing with the standard WooCommerce flow.': '确认已选内容，然后继续使用标准 WooCommerce 流程。',
      'Customer account': '客户账户',
      'Sign in to review your account details and order history.': '登录后查看账户信息和订单记录。'
    },
    ru: {
      'Hardware and packaging with the structure in view.': 'Аппаратные решения и упаковка для ясного проекта.',
      'Explore vape hardware, packaging, and OEM/ODM support built for teams that need clear options before they commit.': 'Изучите аппаратные решения, упаковку и поддержку OEM/ODM, чтобы команда видела варианты до принятия решения.',
      'Choose the part of the brief that is already clear. Each portal keeps the next product, packaging, or production decision connected to the same project.': 'Начните с уже понятной части задачи. Каждый раздел связывает следующее решение по продукту, упаковке или производству с одним проектом.',
      'Bring the market, product direction, quantity, and open questions. The conversation can start before every detail is final.': 'Укажите рынок, направление продукта, объем и открытые вопросы. Обсуждение можно начать до финализации всех деталей.',
      'Not every item has to be settled. These details help the team give your project a useful first direction.': 'Не обязательно решить все сразу. Эти данные помогут команде задать полезное направление проекта.',
      'View insights': 'Смотреть материалы', 'What the current site already says': 'Что уже заявлено на сайте', 'What to bring into the first conversation.': 'Что подготовить к первой беседе.', 'One-stop supply': 'Комплексные поставки', 'Products, accessories, packaging, and logistics in one place.': 'Продукты, аксессуары, упаковка и логистика в одном месте.', 'Custom product paths': 'Индивидуальные продуктовые маршруты', 'Semi-private molds and OEM/ODM options for a defined brief.': 'Полуприватные формы и варианты OEM/ODM под четкую задачу.', 'Audited supply chain': 'Проверенная цепочка поставок', 'Audited factories, consistent quality, and fast delivery.': 'Проверенные фабрики, стабильное качество и быстрая доставка.', 'EU + US market context': 'Опыт рынков ЕС и США', '10+ years in EU and US vape and cannabis markets.': 'Более 10 лет на рынках вейп- и cannabis-продуктов ЕС и США.', 'Product direction': 'Направление продукта', 'Format, intended use, and the product families you are comparing.': 'Формат, назначение и сравниваемые семейства продуктов.', 'Target market': 'Целевой рынок', 'Where the product will launch and any requirements already known to your team.': 'Где продукт выйдет на рынок и какие требования уже известны команде.', 'Customization scope': 'Объем кастомизации', 'Branding, color, finish, packaging, or product changes that are still under review.': 'Бренд, цвет, отделка, упаковка и изменения продукта, которые еще обсуждаются.', 'Reference material': 'Материалы для ориентира', 'Artwork, samples, drawings, or product links if they are available. A complete pack is not required.': 'Макеты, образцы, чертежи или ссылки на продукты, если они есть. Полный пакет не обязателен.', 'Already have product options?': 'Варианты продукта уже выбраны?', 'Browse product detail pages, add the relevant items to your Quote List, then send the list with your requirements.': 'Откройте страницы продуктов, добавьте нужные позиции в список запроса и отправьте его вместе с требованиями.', 'Still defining the project?': 'Проект еще формируется?', 'Send a focused brief when you need help choosing the format, product path, packaging, or OEM and ODM direction.': 'Отправьте краткую задачу, если нужна помощь с форматом, продуктом, упаковкой или направлением OEM/ODM.', 'Define the brief': 'Определить задачу', 'Product direction, target market, and volume.': 'Направление продукта, рынок и объем.', 'Confirm the format': 'Подтвердить формат', 'Hardware, packaging, finishes, and product fit.': 'Оборудование, упаковка, отделка и соответствие продукта.', 'Sample or proof': 'Образец или проверка', 'Review the options and align the open details.': 'Проверить варианты и согласовать открытые детали.', 'Production route': 'Производственный маршрут', 'Move the confirmed scope into the next commercial conversation.': 'Перевести подтвержденный объем в следующий коммерческий этап.', 'Need a build that fits your market?': 'Нужна сборка под ваш рынок?', 'Talk to the team': 'Связаться с командой', 'Real product media / 01': 'Реальные фото продукта / 01', 'Hardware, packaging, and OEM/ODM support for teams building the next version.': 'Аппаратные решения, упаковка и поддержка OEM/ODM для команд, создающих следующий продукт.', 'Share your target market, product family, and quantity.': 'Укажите целевой рынок, семейство продукта и объем.', 'Plan the product and the market together.': 'Планируйте продукт и рынок вместе.', 'Send a structured brief for product selection, OEM / ODM development, packaging, equipment or documentation support.': 'Отправьте структурированную задачу для выбора продукта, OEM/ODM, упаковки, оборудования или документов.', 'Talk to the team.': 'Свяжитесь с командой.', 'The faster route starts with four details.': 'Быстрый путь начинается с четырех деталей.', 'Useful context': 'Полезный контекст', 'Product family or format': 'Семейство продукта или формат', 'Target country or region': 'Целевая страна или регион', 'Expected order volume': 'Планируемый объем заказа', 'Branding, packaging or sample needs': 'Потребности в брендинге, упаковке или образцах', 'Legacy demo contact data. Confirm routing and business hours before production launch.': 'Демонстрационные контакты со старого сайта. Перед запуском подтвердите маршрутизацию и часы работы.', 'Product, technology and manufacturing notes.': 'Заметки о продуктах, технологиях и производстве.', 'Practical context for teams comparing vape hardware, packaging formats and OEM/ODM routes.': 'Практический контекст для команд, сравнивающих вейп-оборудование, упаковку и маршруты OEM/ODM.', 'All notes': 'Все материалы', 'Insights are being prepared.': 'Материалы готовятся.', 'Browse the product directory while the next product and manufacturing note is prepared.': 'Пока готовится следующий материал, откройте каталог продуктов.', 'Continue the brief': 'Продолжить задачу', 'Need a product route for your market?': 'Нужен продуктовый маршрут для вашего рынка?', 'Save a product shortlist or tell us the target format, market and expected volume.': 'Сохраните список продуктов или укажите формат, рынок и планируемый объем.', 'This note is being refreshed with clearer product and market context. Contact the team if you need a specification review for a current project.': 'Материал дополняется ясным контекстом продукта и рынка. Свяжитесь с командой для проверки спецификации текущего проекта.', 'Let us get you back to the right system.': 'Вернем вас к нужной системе.', 'The page may have moved, or the product route may need a fresh search. Browse the catalogue or send the team a project brief and we will help you find the right path.': 'Страница могла измениться, или продукт нужно найти заново. Откройте каталог или отправьте задачу, и команда подскажет путь.', 'Start a quote brief': 'Начать задачу', 'Shopping cart': 'Корзина', 'Review selected items before continuing with the standard WooCommerce flow.': 'Проверьте выбранные позиции перед стандартным процессом WooCommerce.', 'Customer account': 'Аккаунт клиента', 'Sign in to review your account details and order history.': 'Войдите, чтобы просмотреть данные аккаунта и историю заказов.'
    },
    de: {
      'Hardware and packaging with the structure in view.': 'Hardware und Verpackung mit klarer Projektstruktur.', 'Explore vape hardware, packaging, and OEM/ODM support built for teams that need clear options before they commit.': 'Entdecken Sie Hardware, Verpackung und OEM/ODM-Unterstützung für Teams, die vor der Entscheidung klare Optionen brauchen.', 'Choose the part of the brief that is already clear. Each portal keeps the next product, packaging, or production decision connected to the same project.': 'Starten Sie mit dem bereits klaren Teil Ihrer Anfrage. Jeder Bereich verbindet die nächste Produkt-, Verpackungs- oder Produktionsentscheidung mit demselben Projekt.', 'Bring the market, product direction, quantity, and open questions. The conversation can start before every detail is final.': 'Bringen Sie Markt, Produktrichtung, Menge und offene Fragen mit. Das Gespräch kann beginnen, bevor jedes Detail feststeht.', 'Not every item has to be settled. These details help the team give your project a useful first direction.': 'Nicht alles muss sofort feststehen. Diese Angaben helfen dem Team, eine nützliche erste Richtung zu geben.', 'View insights': 'Insights ansehen', 'What the current site already says': 'Was die aktuelle Website bereits zeigt', 'What to bring into the first conversation.': 'Was Sie zum ersten Gespräch mitbringen können.', 'One-stop supply': 'Alles aus einer Hand', 'Products, accessories, packaging, and logistics in one place.': 'Produkte, Zubehör, Verpackung und Logistik aus einer Hand.', 'Custom product paths': 'Individuelle Produktwege', 'Semi-private molds and OEM/ODM options for a defined brief.': 'Semi-private Formen und OEM/ODM-Optionen für eine klare Anfrage.', 'Audited supply chain': 'Geprüfte Lieferkette', 'Audited factories, consistent quality, and fast delivery.': 'Geprüfte Fabriken, konstante Qualität und schnelle Lieferung.', 'EU + US market context': 'Erfahrung in EU- und US-Märkten', '10+ years in EU and US vape and cannabis markets.': 'Über 10 Jahre Erfahrung in den Vape- und Cannabis-Märkten der EU und USA.', 'Product direction': 'Produktrichtung', 'Format, intended use, and the product families you are comparing.': 'Format, Verwendungszweck und verglichene Produktfamilien.', 'Target market': 'Zielmarkt', 'Where the product will launch and any requirements already known to your team.': 'Wo das Produkt startet und welche Anforderungen Ihrem Team bereits bekannt sind.', 'Customization scope': 'Anpassungsumfang', 'Branding, color, finish, packaging, or product changes that are still under review.': 'Branding, Farbe, Oberfläche, Verpackung oder Produktänderungen in Prüfung.', 'Reference material': 'Referenzmaterial', 'Artwork, samples, drawings, or product links if they are available. A complete pack is not required.': 'Vorhandene Layouts, Muster, Zeichnungen oder Produktlinks. Ein vollständiges Paket ist nicht nötig.', 'Already have product options?': 'Haben Sie bereits Produktoptionen?', 'Browse product detail pages, add the relevant items to your Quote List, then send the list with your requirements.': 'Öffnen Sie Produktdetails, fügen Sie relevante Artikel zur Anfrageliste hinzu und senden Sie sie mit Ihren Anforderungen.', 'Still defining the project?': 'Projekt noch in Klärung?', 'Send a focused brief when you need help choosing the format, product path, packaging, or OEM and ODM direction.': 'Senden Sie eine fokussierte Anfrage, wenn Sie Unterstützung bei Format, Produktweg, Verpackung oder OEM/ODM benötigen.', 'Define the brief': 'Anfrage definieren', 'Product direction, target market, and volume.': 'Produktrichtung, Zielmarkt und Menge.', 'Confirm the format': 'Format bestätigen', 'Hardware, packaging, finishes, and product fit.': 'Hardware, Verpackung, Oberflächen und Produktpassung.', 'Sample or proof': 'Muster oder Prüfung', 'Review the options and align the open details.': 'Optionen prüfen und offene Details abstimmen.', 'Production route': 'Produktionsweg', 'Move the confirmed scope into the next commercial conversation.': 'Den bestätigten Umfang in das nächste Geschäftsgespräch überführen.', 'Need a build that fits your market?': 'Brauchen Sie eine Lösung für Ihren Markt?', 'Talk to the team': 'Team kontaktieren', 'Real product media / 01': 'Echte Produktbilder / 01', 'Hardware, packaging, and OEM/ODM support for teams building the next version.': 'Hardware, Verpackung und OEM/ODM-Unterstützung für Teams, die die nächste Produktversion entwickeln.', 'Share your target market, product family, and quantity.': 'Teilen Sie Zielmarkt, Produktfamilie und Menge.', 'Plan the product and the market together.': 'Produkt und Markt gemeinsam planen.', 'Send a structured brief for product selection, OEM / ODM development, packaging, equipment or documentation support.': 'Senden Sie eine strukturierte Anfrage für Produktauswahl, OEM/ODM, Verpackung, Anlagen oder Dokumente.', 'Talk to the team.': 'Sprechen Sie mit dem Team.', 'The faster route starts with four details.': 'Der schnellere Weg beginnt mit vier Angaben.', 'Useful context': 'Nützlicher Kontext', 'Product family or format': 'Produktfamilie oder Format', 'Target country or region': 'Zielland oder Region', 'Expected order volume': 'Erwartete Bestellmenge', 'Branding, packaging or sample needs': 'Bedarf an Branding, Verpackung oder Mustern', 'Legacy demo contact data. Confirm routing and business hours before production launch.': 'Demo-Kontaktdaten der bisherigen Website. Routing und Geschäftszeiten vor dem Start bestätigen.', 'Product, technology and manufacturing notes.': 'Notizen zu Produkt, Technologie und Fertigung.', 'Practical context for teams comparing vape hardware, packaging formats and OEM/ODM routes.': 'Praxisnahe Informationen für Teams, die Vape-Hardware, Verpackungsformate und OEM/ODM-Wege vergleichen.', 'All notes': 'Alle Notizen', 'Insights are being prepared.': 'Insights werden vorbereitet.', 'Browse the product directory while the next product and manufacturing note is prepared.': 'Sehen Sie sich den Produktkatalog an, während der nächste Beitrag vorbereitet wird.', 'Continue the brief': 'Anfrage fortsetzen', 'Need a product route for your market?': 'Suchen Sie einen Produktweg für Ihren Markt?', 'Save a product shortlist or tell us the target format, market and expected volume.': 'Speichern Sie eine Produktauswahl oder nennen Sie Zielformat, Markt und erwartete Menge.', 'This note is being refreshed with clearer product and market context. Contact the team if you need a specification review for a current project.': 'Diese Notiz wird um klareren Produkt- und Marktkontext ergänzt. Für eine Spezifikationsprüfung kontaktieren Sie das Team.', 'Let us get you back to the right system.': 'Zurück zum passenden System.', 'The page may have moved, or the product route may need a fresh search. Browse the catalogue or send the team a project brief and we will help you find the right path.': 'Die Seite wurde möglicherweise verschoben oder die Produktroute benötigt eine neue Suche. Öffnen Sie den Katalog oder senden Sie eine Projektskizze.', 'Start a quote brief': 'Anfrage starten', 'Shopping cart': 'Warenkorb', 'Review selected items before continuing with the standard WooCommerce flow.': 'Prüfen Sie die Auswahl, bevor Sie mit dem Standardablauf von WooCommerce fortfahren.', 'Customer account': 'Kundenkonto', 'Sign in to review your account details and order history.': 'Melden Sie sich an, um Kontodaten und Bestellhistorie zu prüfen.'
    },
    fr: {
      'Hardware and packaging with the structure in view.': 'Matériel et emballage avec une structure de projet claire.', 'Explore vape hardware, packaging, and OEM/ODM support built for teams that need clear options before they commit.': 'Découvrez le matériel, l’emballage et l’accompagnement OEM/ODM pour comparer clairement les options avant de décider.', 'Choose the part of the brief that is already clear. Each portal keeps the next product, packaging, or production decision connected to the same project.': 'Commencez par la partie déjà définie. Chaque famille relie la prochaine décision produit, emballage ou production au même projet.', 'Bring the market, product direction, quantity, and open questions. The conversation can start before every detail is final.': 'Apportez le marché, l’orientation produit, les volumes et les questions ouvertes. L’échange peut commencer avant la finalisation de chaque détail.', 'Not every item has to be settled. These details help the team give your project a useful first direction.': 'Tout n’a pas besoin d’être arrêté. Ces informations aident l’équipe à donner une première direction utile.', 'View insights': 'Voir les insights', 'What the current site already says': 'Ce que le site actuel présente déjà', 'What to bring into the first conversation.': 'À préparer pour le premier échange.', 'One-stop supply': 'Approvisionnement complet', 'Products, accessories, packaging, and logistics in one place.': 'Produits, accessoires, emballage et logistique au même endroit.', 'Custom product paths': 'Parcours produit personnalisés', 'Semi-private molds and OEM/ODM options for a defined brief.': 'Moules semi-privés et options OEM/ODM pour un brief défini.', 'Audited supply chain': 'Chaîne d’approvisionnement auditée', 'Audited factories, consistent quality, and fast delivery.': 'Usines auditées, qualité constante et livraison rapide.', 'EU + US market context': 'Expérience des marchés UE et États-Unis', '10+ years in EU and US vape and cannabis markets.': 'Plus de 10 ans sur les marchés vape et cannabis de l’UE et des États-Unis.', 'Product direction': 'Orientation produit', 'Format, intended use, and the product families you are comparing.': 'Format, usage prévu et familles de produits comparées.', 'Target market': 'Marché cible', 'Where the product will launch and any requirements already known to your team.': 'Lieu de lancement et exigences déjà connues de votre équipe.', 'Customization scope': 'Périmètre de personnalisation', 'Branding, color, finish, packaging, or product changes that are still under review.': 'Marque, couleur, finition, emballage ou changements produit encore à l’étude.', 'Reference material': 'Documents de référence', 'Artwork, samples, drawings, or product links if they are available. A complete pack is not required.': 'Maquettes, échantillons, plans ou liens produit disponibles. Un dossier complet n’est pas nécessaire.', 'Already have product options?': 'Vous avez déjà des options produit ?', 'Browse product detail pages, add the relevant items to your Quote List, then send the list with your requirements.': 'Consultez les fiches produit, ajoutez les références à votre liste de devis, puis envoyez-la avec vos besoins.', 'Still defining the project?': 'Le projet est encore en définition ?', 'Send a focused brief when you need help choosing the format, product path, packaging, or OEM and ODM direction.': 'Envoyez un brief ciblé si vous avez besoin d’aide pour choisir le format, le parcours produit, l’emballage ou l’orientation OEM/ODM.', 'Define the brief': 'Définir le brief', 'Product direction, target market, and volume.': 'Orientation produit, marché cible et volumes.', 'Confirm the format': 'Confirmer le format', 'Hardware, packaging, finishes, and product fit.': 'Matériel, emballage, finitions et adéquation produit.', 'Sample or proof': 'Échantillon ou validation', 'Review the options and align the open details.': 'Évaluez les options et alignez les détails ouverts.', 'Production route': 'Parcours de production', 'Move the confirmed scope into the next commercial conversation.': 'Faire passer le périmètre confirmé à l’étape commerciale suivante.', 'Need a build that fits your market?': 'Besoin d’une solution adaptée à votre marché ?', 'Talk to the team': 'Parler à l’équipe', 'Real product media / 01': 'Visuels produit réels / 01', 'Hardware, packaging, and OEM/ODM support for teams building the next version.': 'Matériel, emballage et accompagnement OEM/ODM pour les équipes qui développent la prochaine version.', 'Share your target market, product family, and quantity.': 'Partagez votre marché cible, votre famille produit et vos volumes.', 'Plan the product and the market together.': 'Planifier le produit et le marché ensemble.', 'Send a structured brief for product selection, OEM / ODM development, packaging, equipment or documentation support.': 'Envoyez un brief structuré pour la sélection produit, le développement OEM/ODM, l’emballage, les équipements ou les documents.', 'Talk to the team.': 'Parlez à l’équipe.', 'The faster route starts with four details.': 'Le parcours le plus rapide commence par quatre informations.', 'Useful context': 'Contexte utile', 'Product family or format': 'Famille produit ou format', 'Target country or region': 'Pays ou région cible', 'Expected order volume': 'Volume de commande prévu', 'Branding, packaging or sample needs': 'Besoins en marque, emballage ou échantillons', 'Legacy demo contact data. Confirm routing and business hours before production launch.': 'Coordonnées de démonstration de l’ancien site. Confirmez le routage et les horaires avant le lancement.', 'Product, technology and manufacturing notes.': 'Notes produit, technologie et fabrication.', 'Practical context for teams comparing vape hardware, packaging formats and OEM/ODM routes.': 'Un contexte pratique pour comparer le matériel vape, les formats d’emballage et les parcours OEM/ODM.', 'All notes': 'Toutes les notes', 'Insights are being prepared.': 'Les insights sont en préparation.', 'Browse the product directory while the next product and manufacturing note is prepared.': 'Parcourez le catalogue pendant la préparation de la prochaine note produit et fabrication.', 'Continue the brief': 'Poursuivre le brief', 'Need a product route for your market?': 'Besoin d’un parcours produit pour votre marché ?', 'Save a product shortlist or tell us the target format, market and expected volume.': 'Enregistrez une sélection ou indiquez le format cible, le marché et les volumes prévus.', 'This note is being refreshed with clearer product and market context. Contact the team if you need a specification review for a current project.': 'Cette note est enrichie avec un contexte produit et marché plus clair. Contactez l’équipe pour revoir une spécification en cours.', 'Let us get you back to the right system.': 'Revenons au bon système.', 'The page may have moved, or the product route may need a fresh search. Browse the catalogue or send the team a project brief and we will help you find the right path.': 'La page a peut-être changé ou le produit doit être recherché à nouveau. Parcourez le catalogue ou envoyez un brief projet.', 'Start a quote brief': 'Démarrer un brief', 'Shopping cart': 'Panier', 'Review selected items before continuing with the standard WooCommerce flow.': 'Vérifiez les articles sélectionnés avant de poursuivre avec le parcours WooCommerce.', 'Customer account': 'Compte client', 'Sign in to review your account details and order history.': 'Connectez-vous pour consulter les informations de votre compte et vos commandes.'
    }
  };

  var EXTRA_PATCH_BY_SOURCE = {
    'zh-CN': {
      'Build a hardware range': '打造完整硬件系列',
      'Start with device format, oil compatibility, target market, and the parts your launch needs around it.': '从设备形式、油品兼容性和目标市场出发，确定上市所需的配套部件。',
      'Pair the product with packaging': '让产品与包装协同',
      'Bring bags, boxes, child-resistant formats, and presentation details into one product decision.': '将袋装、盒装、防儿童开启形式和品牌呈现细节纳入同一个产品决策。',
      'Connect the production route': '衔接生产路径',
      'Map equipment, HNB, NRT, and system requirements before committing to a format or workflow.': '在确定形式或流程前，先梳理设备、HNB、NRT 和系统要求。',
      'Set an OEM or ODM route': '建立 OEM 或 ODM 路径',
      'Use a defined brief to align product direction, customization, and target-market questions with the team.': '用清晰的需求对齐产品方向、定制范围和目标市场问题。',
      'Canna vape devices': '大麻雾化设备', 'Devices, batteries, pods, and dab tools.': '设备、电池、烟弹和 dab 工具。', 'Packaging systems': '包装体系', 'Bags, boxes, and presentation-ready formats.': '袋装、盒装及适合品牌呈现的包装形式。', 'Equipment integration': '设备整合', 'HNB, NRT, GMO-based systems, and machinery.': 'HNB、NRT、GMO 系统及相关机械设备。', 'Business and compliance support': '商业与合规支持', 'OEM/ODM, market planning, and compliance support.': 'OEM/ODM、市场规划与合规支持。', 'Quote on request': '按需报价', 'Quote on request.': '按需报价。', 'Packaging types': '包装类型', 'Shop by application': '按应用场景浏览', 'Free dieline guidance': '免费刀模指导', 'Packaging FAQ': '包装常见问题', 'Product interest': '感兴趣的产品', 'Artwork / dieline files': '设计稿 / 刀模文件', 'Up to 3 files, 10 MB each. PDF, AI, EPS, SVG, PNG, JPG or WEBP.': '最多上传 3 个文件，每个不超过 10 MB。支持 PDF、AI、EPS、SVG、PNG、JPG 或 WEBP。', 'I agree that ZOMEEX may use these details and files to respond to this enquiry.': '我同意 ZOMEEX 使用这些信息和文件来回复本次询价。'
    },
    ru: {
      'Build a hardware range': 'Создать линейку оборудования', 'Start with device format, oil compatibility, target market, and the parts your launch needs around it.': 'Начните с формата устройства, совместимости с маслом, рынка и комплектующих для запуска.', 'Pair the product with packaging': 'Подобрать упаковку к продукту', 'Bring bags, boxes, child-resistant formats, and presentation details into one product decision.': 'Объедините пакеты, коробки, детозащитные форматы и детали презентации в одном решении.', 'Connect the production route': 'Связать производственный маршрут', 'Map equipment, HNB, NRT, and system requirements before committing to a format or workflow.': 'Сопоставьте оборудование, HNB, NRT и системные требования до выбора формата или процесса.', 'Set an OEM or ODM route': 'Задать путь OEM или ODM', 'Use a defined brief to align product direction, customization, and target-market questions with the team.': 'Используйте четкую задачу, чтобы согласовать продукт, кастомизацию и вопросы рынка.', 'Canna vape devices': 'Вейп-устройства для cannabis', 'Devices, batteries, pods, and dab tools.': 'Устройства, батареи, картриджи и dab-инструменты.', 'Packaging systems': 'Системы упаковки', 'Bags, boxes, and presentation-ready formats.': 'Пакеты, коробки и форматы для презентации.', 'Equipment integration': 'Интеграция оборудования', 'HNB, NRT, GMO-based systems, and machinery.': 'HNB, NRT, GMO-системы и оборудование.', 'Business and compliance support': 'Бизнес и соответствие требованиям', 'OEM/ODM, market planning, and compliance support.': 'OEM/ODM, планирование рынка и поддержка соответствия.', 'Quote on request': 'Расчет по запросу', 'Quote on request.': 'Расчет по запросу.', 'Packaging types': 'Типы упаковки', 'Shop by application': 'По применению', 'Free dieline guidance': 'Бесплатная помощь с высечкой', 'Packaging FAQ': 'FAQ по упаковке', 'Product interest': 'Интересующий продукт', 'Artwork / dieline files': 'Макеты / файлы высечки', 'Up to 3 files, 10 MB each. PDF, AI, EPS, SVG, PNG, JPG or WEBP.': 'До 3 файлов, по 10 МБ каждый. PDF, AI, EPS, SVG, PNG или JPG/WEBP.', 'I agree that ZOMEEX may use these details and files to respond to this enquiry.': 'Я согласен(на), что ZOMEEX может использовать эти данные и файлы для ответа на запрос.'
    },
    de: {
      'Build a hardware range': 'Eine Hardware-Serie entwickeln', 'Start with device format, oil compatibility, target market, and the parts your launch needs around it.': 'Starten Sie mit Geräteformat, Ölkompatibilität, Zielmarkt und den Komponenten für den Launch.', 'Pair the product with packaging': 'Das Produkt mit Verpackung verbinden', 'Bring bags, boxes, child-resistant formats, and presentation details into one product decision.': 'Binden Sie Beutel, Schachteln, kindersichere Formate und Präsentationsdetails in eine Entscheidung ein.', 'Connect the production route': 'Den Produktionsweg verbinden', 'Map equipment, HNB, NRT, and system requirements before committing to a format or workflow.': 'Ordnen Sie Anlagen, HNB, NRT und Systemanforderungen vor der Wahl von Format oder Ablauf.', 'Set an OEM or ODM route': 'Einen OEM- oder ODM-Weg festlegen', 'Use a defined brief to align product direction, customization, and target-market questions with the team.': 'Mit einer klaren Anfrage Produktrichtung, Anpassung und Zielmarktfragen im Team abstimmen.', 'Canna vape devices': 'Vape-Geräte für Cannabis', 'Devices, batteries, pods, and dab tools.': 'Geräte, Akkus, Pods und Dab-Tools.', 'Packaging systems': 'Verpackungssysteme', 'Bags, boxes, and presentation-ready formats.': 'Beutel, Schachteln und präsentationsfertige Formate.', 'Equipment integration': 'Anlagenintegration', 'HNB, NRT, GMO-based systems, and machinery.': 'HNB, NRT, GMO-basierte Systeme und Maschinen.', 'Business and compliance support': 'Business- und Compliance-Support', 'OEM/ODM, market planning, and compliance support.': 'OEM/ODM, Marktplanung und Compliance-Unterstützung.', 'Quote on request': 'Angebot auf Anfrage', 'Quote on request.': 'Angebot auf Anfrage.', 'Packaging types': 'Verpackungsarten', 'Shop by application': 'Nach Anwendung', 'Free dieline guidance': 'Kostenlose Stanzlinien-Hilfe', 'Packaging FAQ': 'Verpackungs-FAQ', 'Product interest': 'Produktinteresse', 'Artwork / dieline files': 'Artwork- / Stanzlinien-Dateien', 'Up to 3 files, 10 MB each. PDF, AI, EPS, SVG, PNG, JPG or WEBP.': 'Bis zu 3 Dateien, je 10 MB. PDF, AI, EPS, SVG, PNG, JPG oder WEBP.', 'I agree that ZOMEEX may use these details and files to respond to this enquiry.': 'Ich stimme zu, dass ZOMEEX diese Angaben und Dateien zur Beantwortung der Anfrage verwenden darf.'
    },
    fr: {
      'Build a hardware range': 'Développer une gamme de matériel', 'Start with device format, oil compatibility, target market, and the parts your launch needs around it.': 'Commencez par le format, la compatibilité huile, le marché cible et les composants du lancement.', 'Pair the product with packaging': 'Associer le produit à son emballage', 'Bring bags, boxes, child-resistant formats, and presentation details into one product decision.': 'Réunissez sachets, boîtes, formats sécurité enfant et détails de présentation dans une même décision.', 'Connect the production route': 'Relier le parcours de production', 'Map equipment, HNB, NRT, and system requirements before committing to a format or workflow.': 'Cartographiez les équipements, HNB, NRT et exigences système avant de choisir un format ou un flux.', 'Set an OEM or ODM route': 'Définir un parcours OEM ou ODM', 'Use a defined brief to align product direction, customization, and target-market questions with the team.': 'Utilisez un brief défini pour aligner orientation produit, personnalisation et questions marché.', 'Canna vape devices': 'Dispositifs vape cannabis', 'Devices, batteries, pods, and dab tools.': 'Dispositifs, batteries, pods et outils dab.', 'Packaging systems': 'Systèmes d’emballage', 'Bags, boxes, and presentation-ready formats.': 'Sachets, boîtes et formats prêts à présenter.', 'Equipment integration': 'Intégration des équipements', 'HNB, NRT, GMO-based systems, and machinery.': 'HNB, NRT, systèmes à base de GMO et machines.', 'Business and compliance support': 'Accompagnement business et conformité', 'OEM/ODM, market planning, and compliance support.': 'OEM/ODM, planification marché et accompagnement conformité.', 'Quote on request': 'Devis sur demande', 'Quote on request.': 'Devis sur demande.', 'Packaging types': 'Types d’emballage', 'Shop by application': 'Par application', 'Free dieline guidance': 'Aide gratuite pour les tracés', 'Packaging FAQ': 'FAQ emballage', 'Product interest': 'Produit recherché', 'Artwork / dieline files': 'Fichiers artwork / tracé', 'Up to 3 files, 10 MB each. PDF, AI, EPS, SVG, PNG, JPG or WEBP.': 'Jusqu’à 3 fichiers, 10 Mo chacun. PDF, AI, EPS, SVG, PNG, JPG ou WEBP.', 'I agree that ZOMEEX may use these details and files to respond to this enquiry.': 'J’accepte que ZOMEEX utilise ces informations et fichiers pour répondre à cette demande.'
    }
  };
  Object.keys(EXTRA_PATCH_BY_SOURCE).forEach(function (locale) {
    EXTRA_BY_SOURCE[locale] = Object.assign(EXTRA_BY_SOURCE[locale] || {}, EXTRA_PATCH_BY_SOURCE[locale]);
  });

  /* Form and navigation additions stay in the same source-key translation
   * layer, keeping the WordPress templates readable while avoiding machine
   * translated fragments in the five supported locales. */
  var FORM_EXTRA_BY_SOURCE = {
    'zh-CN': {
      'Destination market and expected volume': '目标市场与预计数量',
      'Product family or format': '产品系列或形式',
      'Branding, packaging or equipment needs': '品牌、包装或设备需求',
      'Sample and timing expectations': '样品与时间要求'
    },
    ru: {
      'Destination market and expected volume': 'Целевой рынок и ожидаемый объем',
      'Product family or format': 'Семейство продукта или формат',
      'Branding, packaging or equipment needs': 'Потребности в брендинге, упаковке или оборудовании',
      'Sample and timing expectations': 'Требования к образцам и срокам'
    },
    de: {
      'Destination market and expected volume': 'Zielmarkt und erwartete Menge',
      'Product family or format': 'Produktfamilie oder Format',
      'Branding, packaging or equipment needs': 'Bedarf an Branding, Verpackung oder Anlagen',
      'Sample and timing expectations': 'Muster- und Terminerwartungen'
    },
    fr: {
      'Destination market and expected volume': 'Marché cible et volumes prévus',
      'Product family or format': 'Famille produit ou format',
      'Branding, packaging or equipment needs': 'Besoins en marque, emballage ou équipement',
      'Sample and timing expectations': 'Attentes concernant les échantillons et les délais'
    }
  };
  Object.keys(FORM_EXTRA_BY_SOURCE).forEach(function (locale) {
    EXTRA_BY_SOURCE[locale] = Object.assign(EXTRA_BY_SOURCE[locale] || {}, FORM_EXTRA_BY_SOURCE[locale]);
  });

  var HOMEPAGE_EXTRA_BY_SOURCE = {
    'zh-CN': {
      'Factory-direct project review': '工厂直连项目评估', 'Market-specific documentation': '按市场提供文件支持', 'Artwork and dieline guidance': '设计稿与刀模指导', 'Samples available to discuss': '可沟通样品方案', 'Packaging formats for the next decision.': '为下一步决策准备的包装形式。', 'Explore PACK': '探索 PACK', 'Request a dieline': '申请刀模', 'Design resources': '设计资源', 'Bring the artwork. We will help with the format.': '带上设计稿，我们帮你确定包装形式。', 'Share your dimensions, closure and target market. The team can review an existing dieline or advise on the next file to prepare.': '分享尺寸、封口形式和目标市场。团队可以检查现有刀模，或建议下一步需要准备的文件。', 'Request dieline guidance': '申请刀模指导', 'Physical reference': '实物参考', 'Need to compare the feel?': '需要比较实物质感？', 'Ask about a sample kit for the formats and finishes relevant to your brief.': '根据你的需求，咨询相关形式和表面处理的样品包。', 'Claim a sample kit': '申请样品包', 'Shop by application.': '按应用场景浏览。', 'Start with the product context': '从产品应用出发', 'Application route': '应用路径', 'Compare a focused set of formats for this use case, then send the market, volume and finish details with your brief.': '先比较适合该用途的包装形式，再在需求中提交市场、数量和表面处理信息。', 'Discuss this application': '沟通该应用场景', 'Need a closer look?': '想进一步了解？', 'Request a physical sample kit.': '申请实物样品包。', 'Share your target market and format. We will confirm the available pack and shipping route.': '分享目标市场和包装形式，我们会确认可提供的样品包及寄送方式。', 'Request sample kit': '申请样品包', 'Packaging applications': '包装应用场景', 'Custom Mylar Bags & Pouches': '定制 Mylar 袋与软包装', 'Pre-Roll Packaging': '预卷包装', 'Custom Printed Paper Boxes': '定制印刷纸盒', 'Jars & Glass Containers': '罐装与玻璃容器', 'Tins & Metal Containers': '马口铁与金属容器', 'Bottles & Tubes': '瓶装与管装', 'Flower & Hemp Packaging': '花材与麻类包装', 'Pre-Roll & Joint Packaging': '预卷与卷烟包装', 'Edibles & Gummies Packaging': '食品与软糖包装', 'Vape & Cartridge Packaging': '雾化器与烟弹包装', 'Concentrates & Wax Packaging': '浓缩物与蜡制品包装', 'THC Beverages & Tincture Packaging': 'THC 饮品与酊剂包装'
    },
    ru: {
      'Factory-direct project review': 'Проверка проекта напрямую с фабрикой', 'Market-specific documentation': 'Документы с учетом рынка', 'Artwork and dieline guidance': 'Помощь с макетом и высечкой', 'Samples available to discuss': 'Обсудим доступные образцы', 'Packaging formats for the next decision.': 'Форматы упаковки для следующего решения.', 'Explore PACK': 'Открыть PACK', 'Request a dieline': 'Запросить высечку', 'Design resources': 'Ресурсы для дизайна', 'Bring the artwork. We will help with the format.': 'Передайте макет, а мы поможем выбрать формат.', 'Share your dimensions, closure and target market. The team can review an existing dieline or advise on the next file to prepare.': 'Укажите размеры, тип закрытия и целевой рынок. Команда проверит высечку или подскажет следующий файл.', 'Request dieline guidance': 'Запросить помощь с высечкой', 'Physical reference': 'Физический образец', 'Need to compare the feel?': 'Нужно сравнить фактуру?', 'Ask about a sample kit for the formats and finishes relevant to your brief.': 'Запросите образцы форматов и отделки для вашей задачи.', 'Claim a sample kit': 'Запросить набор образцов', 'Shop by application.': 'По сфере применения.', 'Start with the product context': 'Начните с контекста продукта', 'Application route': 'Сценарий применения', 'Compare a focused set of formats for this use case, then send the market, volume and finish details with your brief.': 'Сравните подходящие форматы, затем укажите рынок, объем и отделку в запросе.', 'Discuss this application': 'Обсудить применение', 'Need a closer look?': 'Хотите рассмотреть ближе?', 'Request a physical sample kit.': 'Запросить физический набор образцов.', 'Share your target market and format. We will confirm the available pack and shipping route.': 'Укажите рынок и формат. Мы подтвердим доступный набор и способ доставки.', 'Request sample kit': 'Запросить образцы', 'Packaging applications': 'Сценарии упаковки', 'Custom Mylar Bags & Pouches': 'Кастомные Mylar-пакеты и паучи', 'Pre-Roll Packaging': 'Упаковка для pre-roll', 'Custom Printed Paper Boxes': 'Печатные бумажные коробки', 'Jars & Glass Containers': 'Банки и стеклянные контейнеры', 'Tins & Metal Containers': 'Жестяные и металлические контейнеры', 'Bottles & Tubes': 'Бутылки и тубы', 'Flower & Hemp Packaging': 'Упаковка для flower и hemp', 'Pre-Roll & Joint Packaging': 'Упаковка для pre-roll и joint', 'Edibles & Gummies Packaging': 'Упаковка для edibles и gummies', 'Vape & Cartridge Packaging': 'Упаковка для вейпов и картриджей', 'Concentrates & Wax Packaging': 'Упаковка для концентратов и воска', 'THC Beverages & Tincture Packaging': 'Упаковка для напитков и тинктур THC'
    },
    de: {
      'Factory-direct project review': 'Projektprüfung direkt ab Werk', 'Market-specific documentation': 'Marktspezifische Dokumentation', 'Artwork and dieline guidance': 'Artwork- und Stanzlinien-Hilfe', 'Samples available to discuss': 'Muster nach Absprache verfügbar', 'Packaging formats for the next decision.': 'Verpackungsformate für die nächste Entscheidung.', 'Explore PACK': 'PACK entdecken', 'Request a dieline': 'Stanzlinie anfragen', 'Design resources': 'Design-Ressourcen', 'Bring the artwork. We will help with the format.': 'Bringen Sie das Artwork mit. Wir helfen beim Format.', 'Share your dimensions, closure and target market. The team can review an existing dieline or advise on the next file to prepare.': 'Teilen Sie Maße, Verschluss und Zielmarkt. Das Team prüft vorhandene Stanzlinien oder empfiehlt die nächste Datei.', 'Request dieline guidance': 'Stanzlinien-Hilfe anfragen', 'Physical reference': 'Physische Referenz', 'Need to compare the feel?': 'Möchten Sie die Haptik vergleichen?', 'Ask about a sample kit for the formats and finishes relevant to your brief.': 'Fragen Sie nach einem Musterpaket für die passenden Formate und Oberflächen.', 'Claim a sample kit': 'Musterpaket anfragen', 'Shop by application.': 'Nach Anwendung.', 'Start with the product context': 'Mit dem Produktkontext starten', 'Application route': 'Anwendungsweg', 'Compare a focused set of formats for this use case, then send the market, volume and finish details with your brief.': 'Vergleichen Sie passende Formate und nennen Sie Markt, Menge und Oberfläche in Ihrer Anfrage.', 'Discuss this application': 'Anwendung besprechen', 'Need a closer look?': 'Möchten Sie genauer hinsehen?', 'Request a physical sample kit.': 'Physisches Musterpaket anfragen.', 'Share your target market and format. We will confirm the available pack and shipping route.': 'Teilen Sie Zielmarkt und Format. Wir bestätigen Musterpaket und Versandweg.', 'Request sample kit': 'Musterpaket anfragen', 'Packaging applications': 'Verpackungsanwendungen', 'Custom Mylar Bags & Pouches': 'Individuelle Mylar-Beutel und Pouches', 'Pre-Roll Packaging': 'Pre-Roll-Verpackung', 'Custom Printed Paper Boxes': 'Individuell bedruckte Pappschachteln', 'Jars & Glass Containers': 'Gläser und Glasbehälter', 'Tins & Metal Containers': 'Dosen und Metallbehälter', 'Bottles & Tubes': 'Flaschen und Tuben', 'Flower & Hemp Packaging': 'Verpackung für Flower und Hemp', 'Pre-Roll & Joint Packaging': 'Pre-Roll- und Joint-Verpackung', 'Edibles & Gummies Packaging': 'Verpackung für Edibles und Gummies', 'Vape & Cartridge Packaging': 'Vape- und Cartridge-Verpackung', 'Concentrates & Wax Packaging': 'Verpackung für Konzentrate und Wax', 'THC Beverages & Tincture Packaging': 'Verpackung für THC-Getränke und Tinkturen'
    },
    fr: {
      'Factory-direct project review': 'Revue de projet directe usine', 'Market-specific documentation': 'Documentation adaptée au marché', 'Artwork and dieline guidance': 'Aide artwork et tracés', 'Samples available to discuss': 'Échantillons disponibles sur demande', 'Packaging formats for the next decision.': 'Des formats d’emballage pour la prochaine décision.', 'Explore PACK': 'Explorer PACK', 'Request a dieline': 'Demander un tracé', 'Design resources': 'Ressources design', 'Bring the artwork. We will help with the format.': 'Apportez le visuel, nous vous aiderons à choisir le format.', 'Share your dimensions, closure and target market. The team can review an existing dieline or advise on the next file to prepare.': 'Partagez les dimensions, la fermeture et le marché cible. L’équipe peut vérifier un tracé existant ou indiquer le prochain fichier à préparer.', 'Request dieline guidance': 'Demander une aide au tracé', 'Physical reference': 'Référence physique', 'Need to compare the feel?': 'Besoin de comparer le rendu ?', 'Ask about a sample kit for the formats and finishes relevant to your brief.': 'Demandez un kit d’échantillons des formats et finitions adaptés à votre brief.', 'Claim a sample kit': 'Demander un kit d’échantillons', 'Shop by application.': 'Par application.', 'Start with the product context': 'Commencer par le contexte produit', 'Application route': 'Parcours d’application', 'Compare a focused set of formats for this use case, then send the market, volume and finish details with your brief.': 'Comparez les formats adaptés, puis indiquez marché, volumes et finition dans votre brief.', 'Discuss this application': 'Parler de cette application', 'Need a closer look?': 'Besoin d’un aperçu plus précis ?', 'Request a physical sample kit.': 'Demander un kit d’échantillons physiques.', 'Share your target market and format. We will confirm the available pack and shipping route.': 'Partagez votre marché et votre format. Nous confirmerons le kit disponible et le mode d’expédition.', 'Request sample kit': 'Demander un kit d’échantillons', 'Packaging applications': 'Applications d’emballage', 'Custom Mylar Bags & Pouches': 'Sachets et poches Mylar personnalisés', 'Pre-Roll Packaging': 'Emballage pre-roll', 'Custom Printed Paper Boxes': 'Boîtes papier imprimées sur mesure', 'Jars & Glass Containers': 'Pots et contenants en verre', 'Tins & Metal Containers': 'Boîtes métal et fer-blanc', 'Bottles & Tubes': 'Flacons et tubes', 'Flower & Hemp Packaging': 'Emballage flower et hemp', 'Pre-Roll & Joint Packaging': 'Emballage pre-roll et joint', 'Edibles & Gummies Packaging': 'Emballage edibles et gummies', 'Vape & Cartridge Packaging': 'Emballage vape et cartouches', 'Concentrates & Wax Packaging': 'Emballage concentrés et wax', 'THC Beverages & Tincture Packaging': 'Emballage boissons et teintures THC'
    }
  };
  Object.keys(HOMEPAGE_EXTRA_BY_SOURCE).forEach(function (locale) {
    EXTRA_BY_SOURCE[locale] = Object.assign(EXTRA_BY_SOURCE[locale] || {}, HOMEPAGE_EXTRA_BY_SOURCE[locale]);
  });

  /* Homepage P0-P2 additions use explicit source strings so demo evidence,
   * stepper states and editorial placeholders remain readable in every
   * supported locale without relying on machine translation. */
  var HOMEPAGE_P0_P2_EXTRA_BY_SOURCE = {
    'zh-CN': {
      'DEMO DATA': '演示数据', 'Demo evidence only.': '仅供演示。', 'Certificates, test reports, market scope and material claims must be confirmed by ZOMEEX before publication.': '证书、测试报告、市场范围和材料声明须由 ZOMEEX 确认后方可发布。', 'Factory video placeholder': '工厂视频占位', 'Replace with approved production footage before launch.': '正式上线前替换为已确认的工厂视频。', 'Demo data.': '演示数据。', 'Factory figures, inspection language and certifications require approval before publishing.': '工厂数据、检验描述和认证信息须审核后方可发布。', 'Preview / Coming soon': '预览 / 即将上线', 'Article image pending': '文章图片待补充', 'Read article': '阅读文章', 'Coming soon': '即将上线', 'Some fields need attention. Review the brief and try again.': '部分字段需要检查，请核对需求后重试。', 'This brief has expired. Refresh the page and try again.': '此需求已过期，请刷新页面后重试。', 'We could not save this brief. Please try again or contact the team directly.': '需求保存失败，请重试或直接联系团队。', 'Step 1 / Project': '第 1 步 / 项目', 'Step 2 / Requirements': '第 2 步 / 要求', 'Step 3 / Contact': '第 3 步 / 联系方式', 'Project': '项目', 'Requirements': '要求', 'Contact': '联系方式', 'What are you sourcing?': '你正在寻找什么？', 'What should we prepare?': '需要我们准备什么？', 'Where should we send the reply?': '我们应将回复发送到哪里？', 'Continue to requirements': '继续填写要求', 'Continue to contact': '继续填写联系方式', 'Submit inquiry': '提交询价', 'Back': '返回', 'Product interest': '感兴趣的产品', 'Target market': '目标市场', 'Estimated quantity': '预计数量', 'Not sure yet': '暂未确定', 'Role': '职位', 'WhatsApp / phone': 'WhatsApp / 电话', 'Message': '补充说明', 'Artwork / dieline upload': '上传设计稿 / 刀模文件', 'Name': '姓名', 'Company': '公司', 'Business email': '商务邮箱', 'Country / region': '国家 / 地区', 'Preview / Coming soon': '预览 / 即将上线', 'I agree that ZOMEEX may use these details and files to respond to this enquiry.': '我同意 ZOMEEX 使用这些信息和文件回复本次询价。'
    },
    ru: {
      'DEMO DATA': 'ДЕМО-ДАННЫЕ', 'Demo evidence only.': 'Только демонстрационные данные.', 'Certificates, test reports, market scope and material claims must be confirmed by ZOMEEX before publication.': 'Сертификаты, отчеты об испытаниях, рынок и заявления о материалах требуют подтверждения ZOMEEX.', 'Factory video placeholder': 'Заглушка видео фабрики', 'Replace with approved production footage before launch.': 'До запуска замените этот блок утвержденными кадрами производства.', 'Demo data.': 'Демо-данные.', 'Factory figures, inspection language and certifications require approval before publishing.': 'Данные фабрики, формулировки проверок и сертификаты требуют согласования.', 'Preview / Coming soon': 'Предпросмотр / Скоро', 'Article image pending': 'Изображение статьи готовится', 'Read article': 'Читать статью', 'Coming soon': 'Скоро', 'Some fields need attention. Review the brief and try again.': 'Проверьте некоторые поля и повторите попытку.', 'This brief has expired. Refresh the page and try again.': 'Запрос устарел. Обновите страницу и повторите попытку.', 'We could not save this brief. Please try again or contact the team directly.': 'Не удалось сохранить запрос. Повторите попытку или свяжитесь с командой.', 'Step 1 / Project': 'Шаг 1 / Проект', 'Step 2 / Requirements': 'Шаг 2 / Требования', 'Step 3 / Contact': 'Шаг 3 / Контакты', 'Project': 'Проект', 'Requirements': 'Требования', 'Contact': 'Контакты', 'What are you sourcing?': 'Что вы ищете?', 'What should we prepare?': 'Что подготовить?', 'Where should we send the reply?': 'Куда отправить ответ?', 'Continue to requirements': 'К требованиям', 'Continue to contact': 'К контактам', 'Submit inquiry': 'Отправить запрос', 'Back': 'Назад', 'Product interest': 'Интересующий продукт', 'Target market': 'Целевой рынок', 'Estimated quantity': 'Ожидаемый объем', 'Not sure yet': 'Пока не знаю', 'Role': 'Роль', 'WhatsApp / phone': 'WhatsApp / телефон', 'Message': 'Сообщение', 'Artwork / dieline upload': 'Загрузка макета / высечки', 'Name': 'Имя', 'Company': 'Компания', 'Business email': 'Рабочий e-mail', 'Country / region': 'Страна / регион', 'I agree that ZOMEEX may use these details and files to respond to this enquiry.': 'Я согласен, что ZOMEEX может использовать эти данные и файлы для ответа на запрос.'
    },
    de: {
      'DEMO DATA': 'DEMO-DATEN', 'Demo evidence only.': 'Nur Demo-Daten.', 'Certificates, test reports, market scope and material claims must be confirmed by ZOMEEX before publication.': 'Zertifikate, Prüfberichte, Marktumfang und Materialangaben müssen vor der Veröffentlichung von ZOMEEX bestätigt werden.', 'Factory video placeholder': 'Platzhalter für Fabrikvideo', 'Replace with approved production footage before launch.': 'Vor dem Start durch freigegebenes Produktionsmaterial ersetzen.', 'Demo data.': 'Demo-Daten.', 'Factory figures, inspection language and certifications require approval before publishing.': 'Fabrikzahlen, Prüfformulierungen und Zertifikate benötigen eine Freigabe.', 'Preview / Coming soon': 'Vorschau / Bald verfügbar', 'Article image pending': 'Artikelbild folgt', 'Read article': 'Artikel lesen', 'Coming soon': 'Bald verfügbar', 'Some fields need attention. Review the brief and try again.': 'Einige Felder benötigen Ihre Aufmerksamkeit. Prüfen Sie den Brief und versuchen Sie es erneut.', 'This brief has expired. Refresh the page and try again.': 'Dieser Brief ist abgelaufen. Aktualisieren Sie die Seite und versuchen Sie es erneut.', 'We could not save this brief. Please try again or contact the team directly.': 'Der Brief konnte nicht gespeichert werden. Versuchen Sie es erneut oder kontaktieren Sie das Team.', 'Step 1 / Project': 'Schritt 1 / Projekt', 'Step 2 / Requirements': 'Schritt 2 / Anforderungen', 'Step 3 / Contact': 'Schritt 3 / Kontakt', 'Project': 'Projekt', 'Requirements': 'Anforderungen', 'Contact': 'Kontakt', 'What are you sourcing?': 'Was suchen Sie?', 'What should we prepare?': 'Was sollen wir vorbereiten?', 'Where should we send the reply?': 'Wohin sollen wir antworten?', 'Continue to requirements': 'Zu den Anforderungen', 'Continue to contact': 'Zu den Kontaktdaten', 'Submit inquiry': 'Anfrage senden', 'Back': 'Zurück', 'Product interest': 'Produktinteresse', 'Target market': 'Zielmarkt', 'Estimated quantity': 'Erwartete Menge', 'Not sure yet': 'Noch nicht sicher', 'Role': 'Rolle', 'WhatsApp / phone': 'WhatsApp / Telefon', 'Message': 'Nachricht', 'Artwork / dieline upload': 'Artwork / Stanzlinie hochladen', 'Name': 'Name', 'Company': 'Unternehmen', 'Business email': 'Geschäftliche E-Mail', 'Country / region': 'Land / Region', 'I agree that ZOMEEX may use these details and files to respond to this enquiry.': 'Ich stimme zu, dass ZOMEEX diese Angaben und Dateien zur Beantwortung der Anfrage verwenden darf.'
    },
    fr: {
      'DEMO DATA': 'DONNÉES DE DÉMO', 'Demo evidence only.': 'Données de démonstration uniquement.', 'Certificates, test reports, market scope and material claims must be confirmed by ZOMEEX before publication.': 'Les certificats, rapports de test, marchés et déclarations matière doivent être confirmés par ZOMEEX avant publication.', 'Factory video placeholder': 'Emplacement vidéo usine', 'Replace with approved production footage before launch.': 'Remplacez cet emplacement par une vidéo de production approuvée avant le lancement.', 'Demo data.': 'Données de démo.', 'Factory figures, inspection language and certifications require approval before publishing.': 'Les chiffres usine, formulations de contrôle et certifications doivent être validés.', 'Preview / Coming soon': 'Aperçu / Bientôt disponible', 'Article image pending': 'Image de l’article à venir', 'Read article': 'Lire l’article', 'Coming soon': 'Bientôt disponible', 'Some fields need attention. Review the brief and try again.': 'Certains champs doivent être vérifiés. Relisez votre brief puis réessayez.', 'This brief has expired. Refresh the page and try again.': 'Ce brief a expiré. Actualisez la page puis réessayez.', 'We could not save this brief. Please try again or contact the team directly.': 'Impossible d’enregistrer ce brief. Réessayez ou contactez directement l’équipe.', 'Step 1 / Project': 'Étape 1 / Projet', 'Step 2 / Requirements': 'Étape 2 / Besoins', 'Step 3 / Contact': 'Étape 3 / Contact', 'Project': 'Projet', 'Requirements': 'Besoins', 'Contact': 'Contact', 'What are you sourcing?': 'Que recherchez-vous ?', 'What should we prepare?': 'Que devons-nous préparer ?', 'Where should we send the reply?': 'Où envoyer notre réponse ?', 'Continue to requirements': 'Passer aux besoins', 'Continue to contact': 'Passer au contact', 'Submit inquiry': 'Envoyer la demande', 'Back': 'Retour', 'Product interest': 'Produit recherché', 'Target market': 'Marché cible', 'Estimated quantity': 'Quantité estimée', 'Not sure yet': 'Pas encore défini', 'Role': 'Rôle', 'WhatsApp / phone': 'WhatsApp / téléphone', 'Message': 'Message', 'Artwork / dieline upload': 'Importer artwork / tracé', 'Name': 'Nom', 'Company': 'Entreprise', 'Business email': 'E-mail professionnel', 'Country / region': 'Pays / région', 'I agree that ZOMEEX may use these details and files to respond to this enquiry.': 'J’accepte que ZOMEEX utilise ces informations et fichiers pour répondre à cette demande.'
    }
  };
  Object.keys(HOMEPAGE_P0_P2_EXTRA_BY_SOURCE).forEach(function (locale) {
    EXTRA_BY_SOURCE[locale] = Object.assign(EXTRA_BY_SOURCE[locale] || {}, HOMEPAGE_P0_P2_EXTRA_BY_SOURCE[locale]);
  });

  var HOMEPAGE_RFQ_PATHS_EXTRA_BY_SOURCE = {
    'zh-CN': {
      'Start with the product you know.': '从你熟悉的产品开始。',
      'Each route opens a focused catalogue. If your brief spans categories, use the project form below.': '每个入口都会打开对应的产品目录；如果需求涉及多个类别，请使用下方项目表单。',
      'View full catalogue': '查看完整产品目录',
      'Mylar Bags & Pouches': 'Mylar 袋与软包装',
      'Barrier bags and retail pouches': '高阻隔袋与零售软包装',
      'Pre-Roll Packaging': '预卷包装',
      'Wraps and presentation packs': '卷材包装与展示包装',
      'Printed Paper Boxes': '印刷纸盒',
      'Cartons and rigid boxes': '折叠纸盒与硬盒',
      'Vape Hardware': '雾化硬件',
      'Devices and oil systems': '设备与油仓系统',
      'Accessories': '配件',
      'Parts and finishing details': '零部件与表面处理',
      'Production Machines': '生产设备',
      'Filling and production equipment': '灌装与生产设备',
      'Tell us what you are building.': '告诉我们你正在开发什么。',
      'Start with three useful details. Add the rest only when it helps the conversation.': '先提供三个关键信息，其余内容可按项目需要补充。',
      'Choose a format, market and volume in about 30 seconds.': '约 30 秒即可选择产品形式、目标市场与预计数量。',
      'Add artwork or timing when you are ready. Your text stays in this session.': '准备好后可补充设计稿或时间要求；文字草稿会保留在本次会话中。',
      'These three details give the team a useful first direction.': '这三个信息可以帮助团队快速判断项目方向。',
      'Optional details help us tailor the first reply.': '补充这些可选信息，有助于我们准备更有针对性的首次回复。',
      'We use these details only to respond to your enquiry.': '这些信息仅用于回复你的询价。'
    },
    ru: {
      'Start with the product you know.': 'Начните со знакомого продукта.',
      'Each route opens a focused catalogue. If your brief spans categories, use the project form below.': 'Каждый пункт открывает отдельный каталог. Для комплексного проекта используйте форму ниже.',
      'View full catalogue': 'Весь каталог',
      'Mylar Bags & Pouches': 'Mylar-пакеты и паучи',
      'Barrier bags and retail pouches': 'Барьерные и розничные пакеты',
      'Pre-Roll Packaging': 'Упаковка для pre-roll',
      'Wraps and presentation packs': 'Обертки и презентационные упаковки',
      'Printed Paper Boxes': 'Печатные бумажные коробки',
      'Cartons and rigid boxes': 'Картонные и жесткие коробки',
      'Vape Hardware': 'Оборудование для вейпов',
      'Devices and oil systems': 'Устройства и системы для масел',
      'Accessories': 'Аксессуары',
      'Parts and finishing details': 'Детали и варианты отделки',
      'Production Machines': 'Производственное оборудование',
      'Filling and production equipment': 'Оборудование для наполнения и производства',
      'Tell us what you are building.': 'Расскажите, что вы разрабатываете.',
      'Start with three useful details. Add the rest only when it helps the conversation.': 'Начните с трех ключевых деталей, а остальное добавьте по мере необходимости.',
      'Choose a format, market and volume in about 30 seconds.': 'Выберите формат, рынок и объем примерно за 30 секунд.',
      'Add artwork or timing when you are ready. Your text stays in this session.': 'Когда будете готовы, добавьте макет или сроки. Текст сохранится в этой сессии.',
      'These three details give the team a useful first direction.': 'Эти три детали помогут команде определить направление проекта.',
      'Optional details help us tailor the first reply.': 'Дополнительная информация поможет подготовить более точный первый ответ.',
      'We use these details only to respond to your enquiry.': 'Эти данные используются только для ответа на ваш запрос.'
    },
    de: {
      'Start with the product you know.': 'Starten Sie mit dem bekannten Produkt.',
      'Each route opens a focused catalogue. If your brief spans categories, use the project form below.': 'Jeder Einstieg öffnet einen passenden Katalog. Für kategorieübergreifende Projekte nutzen Sie das Formular darunter.',
      'View full catalogue': 'Gesamten Katalog ansehen',
      'Mylar Bags & Pouches': 'Mylar-Beutel und Pouches',
      'Barrier bags and retail pouches': 'Barrierebeutel und Retail-Pouches',
      'Pre-Roll Packaging': 'Pre-Roll-Verpackung',
      'Wraps and presentation packs': 'Wraps und Präsentationsverpackungen',
      'Printed Paper Boxes': 'Bedruckte Papierboxen',
      'Cartons and rigid boxes': 'Faltschachteln und starre Boxen',
      'Vape Hardware': 'Vape-Hardware',
      'Devices and oil systems': 'Geräte und Ölsysteme',
      'Accessories': 'Zubehör',
      'Parts and finishing details': 'Teile und Veredelungsdetails',
      'Production Machines': 'Produktionsmaschinen',
      'Filling and production equipment': 'Abfüll- und Produktionsanlagen',
      'Tell us what you are building.': 'Erzählen Sie uns von Ihrem Projekt.',
      'Start with three useful details. Add the rest only when it helps the conversation.': 'Beginnen Sie mit drei wichtigen Angaben und ergänzen Sie weitere Details nach Bedarf.',
      'Choose a format, market and volume in about 30 seconds.': 'Wählen Sie Format, Zielmarkt und Menge in etwa 30 Sekunden.',
      'Add artwork or timing when you are ready. Your text stays in this session.': 'Ergänzen Sie Artwork oder Zeitplan, sobald Sie bereit sind. Der Text bleibt in dieser Sitzung erhalten.',
      'These three details give the team a useful first direction.': 'Diese drei Angaben geben dem Team eine klare erste Richtung.',
      'Optional details help us tailor the first reply.': 'Optionale Angaben helfen uns, die erste Antwort gezielt vorzubereiten.',
      'We use these details only to respond to your enquiry.': 'Wir verwenden diese Angaben nur zur Beantwortung Ihrer Anfrage.'
    },
    fr: {
      'Start with the product you know.': 'Commencez par le produit que vous connaissez.',
      'Each route opens a focused catalogue. If your brief spans categories, use the project form below.': 'Chaque entrée ouvre un catalogue ciblé. Pour un projet couvrant plusieurs catégories, utilisez le formulaire ci-dessous.',
      'View full catalogue': 'Voir tout le catalogue',
      'Mylar Bags & Pouches': 'Sachets et poches Mylar',
      'Barrier bags and retail pouches': 'Sachets barrière et poches retail',
      'Pre-Roll Packaging': 'Emballage pre-roll',
      'Wraps and presentation packs': 'Étuis et emballages de présentation',
      'Printed Paper Boxes': 'Boîtes papier imprimées',
      'Cartons and rigid boxes': 'Étuis carton et boîtes rigides',
      'Vape Hardware': 'Matériel de vape',
      'Devices and oil systems': 'Appareils et systèmes pour huiles',
      'Accessories': 'Accessoires',
      'Parts and finishing details': 'Pièces et détails de finition',
      'Production Machines': 'Machines de production',
      'Filling and production equipment': 'Équipements de remplissage et production',
      'Tell us what you are building.': 'Parlez-nous de votre projet.',
      'Start with three useful details. Add the rest only when it helps the conversation.': 'Commencez par trois informations clés, puis ajoutez les détails utiles à votre projet.',
      'Choose a format, market and volume in about 30 seconds.': 'Choisissez le format, le marché et le volume en une trentaine de secondes.',
      'Add artwork or timing when you are ready. Your text stays in this session.': 'Ajoutez votre artwork ou vos délais quand vous le souhaitez. Le texte reste enregistré pendant cette session.',
      'These three details give the team a useful first direction.': 'Ces trois informations donnent à l’équipe une première direction claire.',
      'Optional details help us tailor the first reply.': 'Ces informations facultatives nous aident à personnaliser notre première réponse.',
      'We use these details only to respond to your enquiry.': 'Ces informations servent uniquement à répondre à votre demande.'
    }
  };
  Object.keys(HOMEPAGE_RFQ_PATHS_EXTRA_BY_SOURCE).forEach(function (locale) {
    EXTRA_BY_SOURCE[locale] = Object.assign(EXTRA_BY_SOURCE[locale] || {}, HOMEPAGE_RFQ_PATHS_EXTRA_BY_SOURCE[locale]);
  });

  var HOMEPAGE_LAYOUT_EXTRA_BY_SOURCE = {
    'zh-CN': {
      'See the format before the final brief.': '最终确认需求前，先看清包装形式。',
      'Compare flexible, rigid and hardware-led routes as one coordinated packaging system.': '将软包装、硬质包装与硬件配套方案放在同一个包装体系中比较。',
      'Explore all products': '浏览全部产品',
      'Flexible film': '软包装薄膜',
      'Rigid presentation': '硬质包装',
      'Hardware fit': '硬件配套',
      'Flexible film packaging example': '软包装薄膜示例',
      'Rigid presentation packaging example': '硬质包装示例',
      'Hardware fit packaging example': '硬件配套包装示例',
      'Review the visible finish and the functional requirement in the same production conversation.': '在同一次生产沟通中，同步确认视觉工艺与功能要求。'
    },
    ru: {
      'See the format before the final brief.': 'Увидьте формат до финального брифа.',
      'Compare flexible, rigid and hardware-led routes as one coordinated packaging system.': 'Сравните гибкую, жесткую упаковку и решения для оборудования в рамках единой системы.',
      'Explore all products': 'Все продукты',
      'Flexible film': 'Гибкая упаковка',
      'Rigid presentation': 'Жесткая упаковка',
      'Hardware fit': 'Совместимость с оборудованием',
      'Flexible film packaging example': 'Пример гибкой упаковки',
      'Rigid presentation packaging example': 'Пример жесткой упаковки',
      'Hardware fit packaging example': 'Пример упаковки для оборудования',
      'Review the visible finish and the functional requirement in the same production conversation.': 'Обсудите визуальную отделку и функциональные требования в рамках одного производственного проекта.'
    },
    de: {
      'See the format before the final brief.': 'Das Format vor dem finalen Brief sehen.',
      'Compare flexible, rigid and hardware-led routes as one coordinated packaging system.': 'Vergleichen Sie flexible, starre und hardwarebezogene Lösungen als abgestimmtes Verpackungssystem.',
      'Explore all products': 'Alle Produkte entdecken',
      'Flexible film': 'Flexible Verpackung',
      'Rigid presentation': 'Starre Präsentation',
      'Hardware fit': 'Hardware-Abstimmung',
      'Flexible film packaging example': 'Beispiel für flexible Verpackung',
      'Rigid presentation packaging example': 'Beispiel für starre Verpackung',
      'Hardware fit packaging example': 'Beispiel für Hardware-Abstimmung',
      'Review the visible finish and the functional requirement in the same production conversation.': 'Stimmen Sie sichtbare Veredelung und funktionale Anforderungen in einem Produktionsgespräch ab.'
    },
    fr: {
      'See the format before the final brief.': 'Visualisez le format avant de finaliser le brief.',
      'Compare flexible, rigid and hardware-led routes as one coordinated packaging system.': 'Comparez les solutions souples, rigides et liées au matériel dans un système d’emballage cohérent.',
      'Explore all products': 'Explorer tous les produits',
      'Flexible film': 'Emballage souple',
      'Rigid presentation': 'Présentation rigide',
      'Hardware fit': 'Intégration du matériel',
      'Flexible film packaging example': 'Exemple d’emballage souple',
      'Rigid presentation packaging example': 'Exemple d’emballage rigide',
      'Hardware fit packaging example': 'Exemple d’intégration du matériel',
      'Review the visible finish and the functional requirement in the same production conversation.': 'Examinez la finition visible et les exigences fonctionnelles lors d’un même échange de production.'
    }
  };
  Object.keys(HOMEPAGE_LAYOUT_EXTRA_BY_SOURCE).forEach(function (locale) {
    EXTRA_BY_SOURCE[locale] = Object.assign(EXTRA_BY_SOURCE[locale] || {}, HOMEPAGE_LAYOUT_EXTRA_BY_SOURCE[locale]);
  });

  var HOMEPAGE_MEDIA_EXTRA_BY_SOURCE = {
    'zh-CN': { 'DEMO MEDIA': '演示媒体', 'Client confirmation is required before launch.': '正式上线前需要甲方确认。' },
    ru: { 'DEMO MEDIA': 'ДЕМО-МЕДИА', 'Client confirmation is required before launch.': 'Перед запуском требуется подтверждение клиента.' },
    de: { 'DEMO MEDIA': 'DEMO-MEDIEN', 'Client confirmation is required before launch.': 'Vor dem Start ist die Bestätigung des Kunden erforderlich.' },
    fr: { 'DEMO MEDIA': 'MÉDIA DE DÉMO', 'Client confirmation is required before launch.': 'La confirmation du client est requise avant le lancement.' }
  };
  Object.keys(HOMEPAGE_MEDIA_EXTRA_BY_SOURCE).forEach(function (locale) {
    EXTRA_BY_SOURCE[locale] = Object.assign(EXTRA_BY_SOURCE[locale] || {}, HOMEPAGE_MEDIA_EXTRA_BY_SOURCE[locale]);
  });

  var CATALOG_EXTRA_BY_SOURCE = {
    'zh-CN': { 'Apply': '应用', 'Search products': '搜索产品', 'Sort products': '产品排序', 'Filter by series': '按系列筛选', 'products': '个产品' },
    ru: { 'Apply': 'Применить', 'Search products': 'Поиск продуктов', 'Sort products': 'Сортировать продукты', 'Filter by series': 'Фильтр по серии', 'products': 'продуктов' },
    de: { 'Apply': 'Anwenden', 'Search products': 'Produkte suchen', 'Sort products': 'Produkte sortieren', 'Filter by series': 'Nach Serie filtern', 'products': 'Produkte' },
    fr: { 'Apply': 'Appliquer', 'Search products': 'Rechercher des produits', 'Sort products': 'Trier les produits', 'Filter by series': 'Filtrer par famille', 'products': 'produits' }
  };
  Object.keys(CATALOG_EXTRA_BY_SOURCE).forEach(function (locale) {
    EXTRA_BY_SOURCE[locale] = Object.assign(EXTRA_BY_SOURCE[locale] || {}, CATALOG_EXTRA_BY_SOURCE[locale]);
  });

  var INSIGHTS_EXTRA_BY_SOURCE = {
    'zh-CN': {
      'Resources & Blog': '资源与博客',
      'Cannabis Packaging Insights, Compliance & Design Guides': '大麻包装洞察、合规与设计指南',
      'Practical notes for teams comparing packaging formats, materials, regulations and retail presentation.': '为比较包装形式、材料、法规和零售展示方案的团队提供实用参考。',
      'Search articles, topics or keywords': '搜索文章、主题或关键词',
      'Search articles': '搜索文章',
      'Popular searches': '热门搜索',
      'Explore by Topic': '按主题浏览',
      'View all articles': '查看全部文章',
      'Browse articles': '浏览文章',
      'Featured Articles': '精选文章',
      'Start with a recent note from the ZOMEEX team.': '从 ZOMEEX 团队近期发布的内容开始。',
      'Latest Articles': '最新文章',
      'Product updates, practical guides and industry notes.': '产品更新、实用指南与行业动态。',
      'Search Results': '搜索结果',
      'Articles matching the filters you selected.': '符合当前筛选条件的文章。',
      'Filter by': '筛选条件',
      'Clear all': '清除全部',
      'Topic': '主题',
      'Product type': '产品类型',
      'Date': '日期',
      'Sort by': '排序方式',
      'Publication date': '发布日期',
      'Sort articles': '文章排序',
      'Products Updates': '产品更新',
      'Solution': '解决方案',
      'Technology': '技术',
      'hot knife dab tool': '热刀 Dab 工具',
      '510 hot knife': '510 热刀',
      'hot dab tool': '热 Dab 工具',
      'melt knife': '融化热刀',
      'wax dab tool': '蜡制品 Dab 工具',
      'All topics': '全部主题',
      'All product types': '全部产品类型',
      'All time': '所有时间',
      'Last 30 days': '最近 30 天',
      'Last 3 months': '最近 3 个月',
      'Last 6 months': '最近 6 个月',
      'Newest': '最新',
      'Oldest': '最早',
      'Title A–Z': '标题 A–Z',
      'Apply filters': '应用筛选',
      'No articles match these filters.': '没有符合这些筛选条件的文章。',
      'Try a broader search or clear the filters to browse every published article.': '请尝试扩大搜索范围，或清除筛选以浏览所有已发布文章。',
      'Clear filters': '清除筛选'
    },
    ru: {
      'Resources & Blog': 'Ресурсы и блог',
      'Cannabis Packaging Insights, Compliance & Design Guides': 'Об упаковке каннабиса: соответствие требованиям и дизайн',
      'Practical notes for teams comparing packaging formats, materials, regulations and retail presentation.': 'Практические материалы для сравнения форматов упаковки, материалов, требований и розничной презентации.',
      'Search articles, topics or keywords': 'Поиск статей, тем и ключевых слов',
      'Search articles': 'Поиск статей',
      'Popular searches': 'Популярные запросы',
      'Explore by Topic': 'По темам',
      'View all articles': 'Все статьи',
      'Browse articles': 'Посмотреть статьи',
      'Featured Articles': 'Рекомендуемые статьи',
      'Start with a recent note from the ZOMEEX team.': 'Начните с недавней публикации команды ZOMEEX.',
      'Latest Articles': 'Новые статьи',
      'Product updates, practical guides and industry notes.': 'Обновления продуктов, практические руководства и новости отрасли.',
      'Search Results': 'Результаты поиска',
      'Articles matching the filters you selected.': 'Статьи по выбранным фильтрам.',
      'Filter by': 'Фильтры',
      'Clear all': 'Сбросить все',
      'Topic': 'Тема',
      'Product type': 'Тип продукта',
      'Date': 'Дата',
      'Sort by': 'Сортировка',
      'Publication date': 'Дата публикации',
      'Sort articles': 'Сортировка статей',
      'Products Updates': 'Обновления продуктов',
      'Solution': 'Решение',
      'Technology': 'Технологии',
      'hot knife dab tool': 'Нагреваемый даб-инструмент',
      '510 hot knife': 'Нагреваемый инструмент 510',
      'hot dab tool': 'Нагреваемый даб-инструмент',
      'melt knife': 'Melt Knife',
      'wax dab tool': 'Даб-инструмент для воска',
      'All topics': 'Все темы',
      'All product types': 'Все типы продуктов',
      'All time': 'За все время',
      'Last 30 days': 'За последние 30 дней',
      'Last 3 months': 'За последние 3 месяца',
      'Last 6 months': 'За последние 6 месяцев',
      'Newest': 'Сначала новые',
      'Oldest': 'Сначала старые',
      'Title A–Z': 'По названию А–Я',
      'Apply filters': 'Применить фильтры',
      'No articles match these filters.': 'По этим фильтрам статьи не найдены.',
      'Try a broader search or clear the filters to browse every published article.': 'Расширьте поиск или сбросьте фильтры, чтобы увидеть все опубликованные статьи.',
      'Clear filters': 'Сбросить фильтры'
    },
    de: {
      'Resources & Blog': 'Ressourcen & Blog',
      'Cannabis Packaging Insights, Compliance & Design Guides': 'Einblicke in Cannabisverpackungen, Compliance und Design',
      'Practical notes for teams comparing packaging formats, materials, regulations and retail presentation.': 'Praktische Hinweise für Teams, die Verpackungsformate, Materialien, Vorschriften und Präsentation vergleichen.',
      'Search articles, topics or keywords': 'Artikel, Themen oder Stichwörter suchen',
      'Search articles': 'Artikel suchen',
      'Popular searches': 'Beliebte Suchbegriffe',
      'Explore by Topic': 'Nach Thema entdecken',
      'View all articles': 'Alle Artikel ansehen',
      'Browse articles': 'Artikel ansehen',
      'Featured Articles': 'Empfohlene Artikel',
      'Start with a recent note from the ZOMEEX team.': 'Beginnen Sie mit einem aktuellen Beitrag des ZOMEEX-Teams.',
      'Latest Articles': 'Neueste Artikel',
      'Product updates, practical guides and industry notes.': 'Produktneuigkeiten, praktische Leitfäden und Branchennotizen.',
      'Search Results': 'Suchergebnisse',
      'Articles matching the filters you selected.': 'Artikel passend zu Ihren Filtern.',
      'Filter by': 'Filtern nach',
      'Clear all': 'Alle zurücksetzen',
      'Topic': 'Thema',
      'Product type': 'Produkttyp',
      'Date': 'Zeitraum',
      'Sort by': 'Sortieren nach',
      'Publication date': 'Veröffentlichungsdatum',
      'Sort articles': 'Artikel sortieren',
      'Products Updates': 'Produktneuigkeiten',
      'Solution': 'Lösungen',
      'Technology': 'Technologie',
      'hot knife dab tool': 'Beheiztes Dab-Werkzeug',
      '510 hot knife': '510 Hot Knife',
      'hot dab tool': 'Beheiztes Dab-Werkzeug',
      'melt knife': 'Melt Knife',
      'wax dab tool': 'Dab-Werkzeug für Wax',
      'All topics': 'Alle Themen',
      'All product types': 'Alle Produkttypen',
      'All time': 'Gesamter Zeitraum',
      'Last 30 days': 'Letzte 30 Tage',
      'Last 3 months': 'Letzte 3 Monate',
      'Last 6 months': 'Letzte 6 Monate',
      'Newest': 'Neueste zuerst',
      'Oldest': 'Älteste zuerst',
      'Title A–Z': 'Titel A–Z',
      'Apply filters': 'Filter anwenden',
      'No articles match these filters.': 'Keine Artikel entsprechen diesen Filtern.',
      'Try a broader search or clear the filters to browse every published article.': 'Erweitern Sie die Suche oder setzen Sie die Filter zurück, um alle veröffentlichten Artikel anzusehen.',
      'Clear filters': 'Filter zurücksetzen'
    },
    fr: {
      'Resources & Blog': 'Ressources et blog',
      'Cannabis Packaging Insights, Compliance & Design Guides': 'Emballage du cannabis : conformité, design et conseils',
      'Practical notes for teams comparing packaging formats, materials, regulations and retail presentation.': 'Des conseils pratiques pour comparer formats, matériaux, réglementations et présentation en magasin.',
      'Search articles, topics or keywords': 'Rechercher des articles, thèmes ou mots-clés',
      'Search articles': 'Rechercher des articles',
      'Popular searches': 'Recherches populaires',
      'Explore by Topic': 'Explorer par thème',
      'View all articles': 'Voir tous les articles',
      'Browse articles': 'Parcourir les articles',
      'Featured Articles': 'Articles à la une',
      'Start with a recent note from the ZOMEEX team.': 'Commencez par une publication récente de l’équipe ZOMEEX.',
      'Latest Articles': 'Articles récents',
      'Product updates, practical guides and industry notes.': 'Actualités produits, guides pratiques et informations du secteur.',
      'Search Results': 'Résultats de recherche',
      'Articles matching the filters you selected.': 'Articles correspondant aux filtres sélectionnés.',
      'Filter by': 'Filtrer par',
      'Clear all': 'Tout effacer',
      'Topic': 'Thème',
      'Product type': 'Type de produit',
      'Date': 'Période',
      'Sort by': 'Trier par',
      'Publication date': 'Date de publication',
      'Sort articles': 'Trier les articles',
      'Products Updates': 'Actualités produits',
      'Solution': 'Solutions',
      'Technology': 'Technologie',
      'hot knife dab tool': 'Outil dab chauffant',
      '510 hot knife': 'Hot knife 510',
      'hot dab tool': 'Outil dab chauffant',
      'melt knife': 'Melt Knife',
      'wax dab tool': 'Outil dab pour concentrés',
      'All topics': 'Tous les thèmes',
      'All product types': 'Tous les types de produits',
      'All time': 'Toutes les dates',
      'Last 30 days': '30 derniers jours',
      'Last 3 months': '3 derniers mois',
      'Last 6 months': '6 derniers mois',
      'Newest': 'Plus récents',
      'Oldest': 'Plus anciens',
      'Title A–Z': 'Titre A–Z',
      'Apply filters': 'Appliquer les filtres',
      'No articles match these filters.': 'Aucun article ne correspond à ces filtres.',
      'Try a broader search or clear the filters to browse every published article.': 'Élargissez la recherche ou effacez les filtres pour parcourir tous les articles publiés.',
      'Clear filters': 'Effacer les filtres'
    }
  };
  Object.keys(INSIGHTS_EXTRA_BY_SOURCE).forEach(function (locale) {
    EXTRA_BY_SOURCE[locale] = Object.assign(EXTRA_BY_SOURCE[locale] || {}, INSIGHTS_EXTRA_BY_SOURCE[locale]);
  });

  var PRODUCT_EXTRA_BY_SOURCE = {
    'zh-CN': {
      'A configurable product route for teams building against a defined market brief.': '面向明确市场需求、可按项目配置的产品路径。',
      'Private label, color, finish and packaging routes can be discussed for qualified projects. Minimum order quantities are set by format, tooling and destination market.': '符合条件的项目可讨论贴牌、颜色、表面处理和包装方案。MOQ 将根据形式、模具和目标市场确定。',
      'Current status:': '当前状态：',
      'Lead time, sample timing and available documentation are confirmed once the brief and market are known. We do not publish unverified certificates or delivery promises.': '明确需求与市场后，我们会确认交期、样品周期和可提供的文件。未经核实的证书和交付承诺不会直接发布。',
      'Use the quote list to tell us the target use, market, finish and expected volume. The team will confirm the technical and commercial fit before production.': '请在询价清单中说明用途、市场、表面处理和预计数量。团队会在生产前确认技术与商业匹配。'
    },
    ru: {
      'A configurable product route for teams building against a defined market brief.': 'Настраиваемый продуктовый путь для команды с четкой задачей по рынку.',
      'Private label, color, finish and packaging routes can be discussed for qualified projects. Minimum order quantities are set by format, tooling and destination market.': 'Для подходящих проектов обсуждаются private label, цвет, отделка и упаковка. MOQ зависит от формата, оснастки и рынка назначения.',
      'Current status:': 'Текущий статус:',
      'Lead time, sample timing and available documentation are confirmed once the brief and market are known. We do not publish unverified certificates or delivery promises.': 'Сроки, образцы и доступные документы подтверждаются после уточнения задачи и рынка. Мы не публикуем непроверенные сертификаты и обещания поставки.',
      'Use the quote list to tell us the target use, market, finish and expected volume. The team will confirm the technical and commercial fit before production.': 'Укажите в списке запроса назначение, рынок, отделку и объем. Команда подтвердит техническое и коммерческое соответствие до производства.'
    },
    de: {
      'A configurable product route for teams building against a defined market brief.': 'Ein konfigurierbarer Produktweg für Teams mit einer klaren Marktanfrage.',
      'Private label, color, finish and packaging routes can be discussed for qualified projects. Minimum order quantities are set by format, tooling and destination market.': 'Für geeignete Projekte können Private Label, Farbe, Oberfläche und Verpackung besprochen werden. MOQ richten sich nach Format, Werkzeug und Zielmarkt.',
      'Current status:': 'Aktueller Status:',
      'Lead time, sample timing and available documentation are confirmed once the brief and market are known. We do not publish unverified certificates or delivery promises.': 'Lieferzeit, Musterzeitpunkt und verfügbare Dokumente werden nach Klärung von Anfrage und Markt bestätigt. Ungeprüfte Zertifikate und Lieferzusagen veröffentlichen wir nicht.',
      'Use the quote list to tell us the target use, market, finish and expected volume. The team will confirm the technical and commercial fit before production.': 'Nennen Sie in der Anfrageliste Anwendung, Markt, Oberfläche und erwartete Menge. Das Team bestätigt die technische und kaufmännische Passung vor der Produktion.'
    },
    fr: {
      'A configurable product route for teams building against a defined market brief.': 'Un parcours produit configurable pour les équipes disposant d’un brief marché défini.',
      'Private label, color, finish and packaging routes can be discussed for qualified projects. Minimum order quantities are set by format, tooling and destination market.': 'Pour les projets qualifiés, nous pouvons étudier le private label, la couleur, la finition et l’emballage. Les MOQ dépendent du format, de l’outillage et du marché cible.',
      'Current status:': 'Statut actuel :',
      'Lead time, sample timing and available documentation are confirmed once the brief and market are known. We do not publish unverified certificates or delivery promises.': 'Les délais, le calendrier des échantillons et les documents disponibles sont confirmés après étude du brief et du marché. Nous ne publions pas de certificats ni de promesses de livraison non vérifiés.',
      'Use the quote list to tell us the target use, market, finish and expected volume. The team will confirm the technical and commercial fit before production.': 'Utilisez la liste de devis pour préciser l’usage, le marché, la finition et les volumes prévus. L’équipe confirmera l’adéquation technique et commerciale avant la production.'
    }
  };
  Object.keys(PRODUCT_EXTRA_BY_SOURCE).forEach(function (locale) {
    EXTRA_BY_SOURCE[locale] = Object.assign(EXTRA_BY_SOURCE[locale] || {}, PRODUCT_EXTRA_BY_SOURCE[locale]);
  });

  var WOOCOMMERCE_EXTRA_BY_SOURCE = {
    en: {
      'Before proceed to checkout you must add some products to your shopping cart. You will find a lot of interesting products on our "Shop" page.': 'Before proceeding to checkout, add products to your shopping cart. Browse the catalogue to see the available options.',
      'Before proceeding to checkout you must add some products to your shopping cart. You will find a lot of interesting products on our "Shop" page.': 'Before proceeding to checkout, add products to your shopping cart. Browse the catalogue to see the available options.'
    },
    'zh-CN': {
      'Username or email address': '用户名或邮箱地址', 'Password': '密码', 'Remember me': '记住我', 'Log in': '登录', 'Lost your password?': '忘记密码？', 'Register': '注册', 'Orders': '订单', 'Downloads': '下载', 'Addresses': '地址', 'Account details': '账户详情', 'Logout': '退出登录', 'Hello': '你好', 'From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.': '你可以在账户面板查看最近订单、管理收货与账单地址，并修改密码和账户信息。', 'Product': '产品', 'Price': '价格', 'Quantity': '数量', 'Subtotal': '小计', 'Remove this item': '移除此商品', 'Cart totals': '购物车合计', 'Proceed to checkout': '继续结算', 'Update cart': '更新购物车', 'Coupon code': '优惠码', 'Apply coupon': '使用优惠码', 'Your cart is currently empty.': '购物车当前为空。', 'Before proceed to checkout you must add some products to your shopping cart. You will find a lot of interesting products on our "Shop" page.': '继续结算前，请先将产品加入购物车。你可以在产品目录中查看可选产品。', 'Return to shop': '返回商店'
    },
    ru: {
      'Username or email address': 'Имя пользователя или электронная почта', 'Password': 'Пароль', 'Remember me': 'Запомнить меня', 'Log in': 'Войти', 'Lost your password?': 'Забыли пароль?', 'Register': 'Регистрация', 'Orders': 'Заказы', 'Downloads': 'Загрузки', 'Addresses': 'Адреса', 'Account details': 'Данные аккаунта', 'Logout': 'Выйти', 'Hello': 'Здравствуйте', 'From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.': 'В панели аккаунта можно просматривать заказы, управлять адресами доставки и оплаты, менять пароль и данные аккаунта.', 'Product': 'Продукт', 'Price': 'Цена', 'Quantity': 'Количество', 'Subtotal': 'Подытог', 'Remove this item': 'Удалить позицию', 'Cart totals': 'Итого в корзине', 'Proceed to checkout': 'Перейти к оформлению', 'Update cart': 'Обновить корзину', 'Coupon code': 'Код купона', 'Apply coupon': 'Применить купон', 'Your cart is currently empty.': 'Корзина пуста.', 'Before proceed to checkout you must add some products to your shopping cart. You will find a lot of interesting products on our "Shop" page.': 'Перед оформлением заказа добавьте товары в корзину. Выберите подходящие варианты в каталоге.', 'Return to shop': 'Вернуться в каталог'
    },
    de: {
      'Username or email address': 'Benutzername oder E-Mail-Adresse', 'Password': 'Passwort', 'Remember me': 'Angemeldet bleiben', 'Log in': 'Anmelden', 'Lost your password?': 'Passwort vergessen?', 'Register': 'Registrieren', 'Orders': 'Bestellungen', 'Downloads': 'Downloads', 'Addresses': 'Adressen', 'Account details': 'Kontodetails', 'Logout': 'Abmelden', 'Hello': 'Hallo', 'From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.': 'In Ihrem Konto können Sie Bestellungen ansehen, Liefer- und Rechnungsadressen verwalten sowie Passwort und Kontodaten ändern.', 'Product': 'Produkt', 'Price': 'Preis', 'Quantity': 'Menge', 'Subtotal': 'Zwischensumme', 'Remove this item': 'Artikel entfernen', 'Cart totals': 'Warenkorbsumme', 'Proceed to checkout': 'Zur Kasse', 'Update cart': 'Warenkorb aktualisieren', 'Coupon code': 'Gutscheincode', 'Apply coupon': 'Gutschein anwenden', 'Your cart is currently empty.': 'Ihr Warenkorb ist leer.', 'Before proceed to checkout you must add some products to your shopping cart. You will find a lot of interesting products on our "Shop" page.': 'Fügen Sie Artikel in den Warenkorb, bevor Sie zur Kasse gehen. Im Katalog finden Sie passende Produkte.', 'Return to shop': 'Zum Katalog'
    },
    fr: {
      'Username or email address': 'Nom d’utilisateur ou e-mail', 'Password': 'Mot de passe', 'Remember me': 'Se souvenir de moi', 'Log in': 'Se connecter', 'Lost your password?': 'Mot de passe oublié ?', 'Register': 'S’inscrire', 'Orders': 'Commandes', 'Downloads': 'Téléchargements', 'Addresses': 'Adresses', 'Account details': 'Détails du compte', 'Logout': 'Se déconnecter', 'Hello': 'Bonjour', 'From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.': 'Depuis votre compte, consultez vos commandes, gérez vos adresses de livraison et de facturation, et modifiez vos informations.', 'Product': 'Produit', 'Price': 'Prix', 'Quantity': 'Quantité', 'Subtotal': 'Sous-total', 'Remove this item': 'Supprimer cet article', 'Cart totals': 'Total du panier', 'Proceed to checkout': 'Passer à la commande', 'Update cart': 'Mettre à jour le panier', 'Coupon code': 'Code promo', 'Apply coupon': 'Appliquer le code', 'Your cart is currently empty.': 'Votre panier est vide.', 'Before proceed to checkout you must add some products to your shopping cart. You will find a lot of interesting products on our "Shop" page.': 'Ajoutez des articles au panier avant de passer la commande. Consultez le catalogue pour découvrir les produits disponibles.', 'Return to shop': 'Retour au catalogue'
    }
  };
  Object.keys(WOOCOMMERCE_EXTRA_BY_SOURCE).forEach(function (locale) {
    EXTRA_BY_SOURCE[locale] = Object.assign(EXTRA_BY_SOURCE[locale] || {}, WOOCOMMERCE_EXTRA_BY_SOURCE[locale]);
  });

  var CN_WOOCOMMERCE_EXTRA_BY_SOURCE = {
    en: {
      '登录': 'Log in', '用户名或电邮地址': 'Username or email address', '必填': 'Required', '密码': 'Password', '记住我': 'Remember me', '忘记密码?': 'Lost your password?', '注册': 'Register', '邮箱地址': 'Email address', '用于设置新密码的链接将发送至您的电子邮件地址。': 'A link to set a new password will be sent to your email address.', '或者': 'Or', '您的购物车目前是空的。': 'Your cart is currently empty.', '返回商店': 'Return to shop', '您的个人资料将用于在您体验本网站的整个过程中为您提供支持、管理对您帐户的访问，以及用于在我们的隐私政策中描述的其他用途。': 'Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.'
    },
    ru: {
      '登录': 'Войти', '用户名或电邮地址': 'Имя пользователя или электронная почта', '必填': 'Обязательно', '密码': 'Пароль', '记住我': 'Запомнить меня', '忘记密码?': 'Забыли пароль?', '注册': 'Регистрация', '邮箱地址': 'Электронная почта', '用于设置新密码的链接将发送至您的电子邮件地址。': 'Ссылка для создания нового пароля будет отправлена на вашу электронную почту.', '或者': 'Или', '您的购物车目前是空的。': 'Корзина пуста.', '返回商店': 'Вернуться в каталог', '您的个人资料将用于在您体验本网站的整个过程中为您提供支持、管理对您帐户的访问，以及用于在我们的隐私政策中描述的其他用途。': 'Ваши данные используются для работы с сайтом, управления аккаунтом и других целей, описанных в политике конфиденциальности.'
    },
    de: {
      '登录': 'Anmelden', '用户名或电邮地址': 'Benutzername oder E-Mail-Adresse', '必填': 'Erforderlich', '密码': 'Passwort', '记住我': 'Angemeldet bleiben', '忘记密码?': 'Passwort vergessen?', '注册': 'Registrieren', '邮箱地址': 'E-Mail-Adresse', '用于设置新密码的链接将发送至您的电子邮件地址。': 'Ein Link zum Festlegen eines neuen Passworts wird an Ihre E-Mail-Adresse gesendet.', '或者': 'Oder', '您的购物车目前是空的。': 'Ihr Warenkorb ist leer.', '返回商店': 'Zum Katalog', '您的个人资料将用于在您体验本网站的整个过程中为您提供支持、管理对您帐户的访问，以及用于在我们的隐私政策中描述的其他用途。': 'Ihre Daten werden zur Unterstützung Ihrer Nutzung, zur Verwaltung des Kontos und für weitere Zwecke gemäß unserer Datenschutzrichtlinie verwendet.'
    },
    fr: {
      '登录': 'Se connecter', '用户名或电邮地址': 'Nom d’utilisateur ou e-mail', '必填': 'Obligatoire', '密码': 'Mot de passe', '记住我': 'Se souvenir de moi', '忘记密码?': 'Mot de passe oublié ?', '注册': 'S’inscrire', '邮箱地址': 'Adresse e-mail', '用于设置新密码的链接将发送至您的电子邮件地址。': 'Un lien pour définir un nouveau mot de passe sera envoyé à votre adresse e-mail.', '或者': 'Ou', '您的购物车目前是空的。': 'Votre panier est vide.', '返回商店': 'Retour au catalogue', '您的个人资料将用于在您体验本网站的整个过程中为您提供支持、管理对您帐户的访问，以及用于在我们的隐私政策中描述的其他用途。': 'Vos données servent à accompagner votre utilisation du site, gérer votre compte et d’autres finalités décrites dans notre politique de confidentialité.'
    }
  };

  /* Navigation labels are explicit so the expanded menu keeps its hierarchy
   * when a visitor switches locale; the product and editorial copy remains
   * owned by WordPress content. */
  var NAV_LABELS = {
    en: {
      'nav.products': 'Products',
      'nav.childResistant': 'Child-resistant',
      'nav.solutions': 'Solutions',
      'nav.designTools': 'Design & Tools',
      'nav.resourcesBlog': 'Resources & Blog',
      'nav.aboutContact': 'About & Contact'
    },
    'zh-CN': {
      'nav.products': '产品',
      'nav.childResistant': '儿童安全',
      'nav.solutions': '解决方案',
      'nav.designTools': '设计与工具',
      'nav.resourcesBlog': '资源与博客',
      'nav.aboutContact': '关于与联系'
    },
    ru: {
      'nav.products': 'Продукты',
      'nav.childResistant': 'Защита от детей',
      'nav.solutions': 'Решения',
      'nav.designTools': 'Дизайн и инструменты',
      'nav.resourcesBlog': 'Ресурсы и блог',
      'nav.aboutContact': 'О компании и контакты'
    },
    de: {
      'nav.products': 'Produkte',
      'nav.childResistant': 'Kindersicher',
      'nav.solutions': 'Lösungen',
      'nav.designTools': 'Design & Tools',
      'nav.resourcesBlog': 'Ressourcen & Blog',
      'nav.aboutContact': 'Über uns & Kontakt'
    },
    fr: {
      'nav.products': 'Produits',
      'nav.childResistant': 'Sécurité enfant',
      'nav.solutions': 'Solutions',
      'nav.designTools': 'Design et outils',
      'nav.resourcesBlog': 'Ressources et blog',
      'nav.aboutContact': 'À propos et contact'
    }
  };
  Object.keys(NAV_LABELS).forEach(function (locale) {
    DICTIONARY[locale] = Object.assign(DICTIONARY[locale] || {}, NAV_LABELS[locale]);
  });

  var SUBSCRIBE_LABELS = {
    en: {
      'subscribe.close': 'Close sample request offer',
      'subscribe.eyebrow': 'Exclusive B2B offer',
      'subscribe.title': 'Get Free Cannabis',
      'subscribe.titleAccent': 'Packaging Samples',
      'subscribe.copy': 'Explore materials, structures, finishes and child-resistant options before you order. Request a curated packaging sample kit with matching dielines — at no cost.',
      'subscribe.subhead': 'Custom dielines included',
      'subscribe.email': 'Business email',
      'subscribe.placeholder': 'Enter your business email',
      'subscribe.submit': 'Request free sample kit',
      'subscribe.loading': 'Requesting...',
      'subscribe.helper': 'We respect your privacy. No spam.',
      'subscribe.successTitle': 'Sample request received.',
      'subscribe.successCopy': 'Our packaging team will follow up to confirm your sample kit and dieline needs.',
      'subscribe.continue': 'Continue browsing',
      'subscribe.skip': 'No thanks, continue browsing',
      'subscribe.consent': 'For licensed cannabis businesses and packaging professionals. By continuing, you confirm that you meet applicable age and business requirements.',
      'subscribe.privacy': 'Privacy policy',
      'subscribe.visualTitle': 'Custom packaging development',
      'subscribe.materials': 'Material options',
      'subscribe.materialNote': 'Paperboard & more',
      'subscribe.structures': 'Custom structures',
      'subscribe.structuresNote': 'Styles & exact dielines',
      'subscribe.childResistant': 'Child-resistant options',
      'subscribe.childResistantNote': 'For your market',
      'subscribe.visualAlt': 'A packaging dieline beside finished ZOMEEX sample boxes, pouch and jar',
      'subscribe.invalidEmail': 'Enter a valid business email to continue.',
      'subscribe.securityError': 'This form has expired. Refresh the page and try again.',
      'subscribe.rateError': 'Too many attempts. Please try again later.',
      'subscribe.saveError': 'We could not send your sample request. Please try again.'
    },
    'zh-CN': {
      'subscribe.close': '关闭样品申请弹窗',
      'subscribe.eyebrow': '专属 B2B 礼遇',
      'subscribe.title': '免费领取大麻',
      'subscribe.titleAccent': '包装样品',
      'subscribe.copy': '在下单前了解材料、结构、表面工艺与儿童安全选项。申请包含匹配刀模的精选包装样品套装，无需付费。',
      'subscribe.subhead': '包含定制刀模',
      'subscribe.email': '商务邮箱',
      'subscribe.placeholder': '请输入你的商务邮箱',
      'subscribe.submit': '申请免费样品套装',
      'subscribe.loading': '正在提交申请...',
      'subscribe.helper': '我们尊重你的隐私，不发送垃圾邮件。',
      'subscribe.successTitle': '样品申请已收到。',
      'subscribe.successCopy': '我们的包装团队会联系你，确认样品套装与刀模需求。',
      'subscribe.continue': '继续浏览',
      'subscribe.skip': '暂不申请，继续浏览',
      'subscribe.consent': '面向持牌大麻企业与包装专业人士。继续操作即表示你确认符合适用的年龄与业务要求。',
      'subscribe.privacy': '隐私政策',
      'subscribe.visualTitle': '定制包装开发',
      'subscribe.materials': '材料选项',
      'subscribe.materialNote': '纸张、纸板等材料',
      'subscribe.structures': '定制结构',
      'subscribe.structuresNote': '多种样式与匹配刀模',
      'subscribe.childResistant': '儿童安全选项',
      'subscribe.childResistantNote': '适配目标市场',
      'subscribe.visualAlt': '包装刀模与 ZOMEEX 成品样品盒、袋和罐的组合',
      'subscribe.invalidEmail': '请输入有效的商务邮箱。',
      'subscribe.securityError': '表单已过期，请刷新页面后重试。',
      'subscribe.rateError': '尝试次数过多，请稍后再试。',
      'subscribe.saveError': '暂时无法提交样品申请，请重试。'
    },
    ru: {
      'subscribe.close': 'Закрыть предложение о наборе образцов',
      'subscribe.eyebrow': 'Эксклюзивное предложение для бизнеса',
      'subscribe.title': 'Бесплатные образцы',
      'subscribe.titleAccent': 'упаковки для каннабиса',
      'subscribe.copy': 'Оцените материалы, конструкции, отделку и варианты с защитой от детей до заказа. Запросите бесплатный набор образцов с подходящими развертками упаковки.',
      'subscribe.subhead': 'Индивидуальные развертки включены',
      'subscribe.email': 'Рабочая почта',
      'subscribe.placeholder': 'Введите рабочую почту',
      'subscribe.submit': 'Запросить бесплатный набор',
      'subscribe.loading': 'Отправка запроса...',
      'subscribe.helper': 'Мы уважаем вашу конфиденциальность. Никакого спама.',
      'subscribe.successTitle': 'Запрос образцов получен.',
      'subscribe.successCopy': 'Наша команда свяжется с вами, чтобы уточнить набор образцов и требования к разверткам.',
      'subscribe.continue': 'Продолжить просмотр',
      'subscribe.skip': 'Нет, продолжить просмотр',
      'subscribe.consent': 'Для лицензированных компаний в сфере каннабиса и специалистов по упаковке. Продолжая, вы подтверждаете соответствие возрастным и деловым требованиям вашего рынка.',
      'subscribe.privacy': 'Политика конфиденциальности',
      'subscribe.visualTitle': 'Разработка индивидуальной упаковки',
      'subscribe.materials': 'Варианты материалов',
      'subscribe.materialNote': 'Бумага и картон и другие материалы',
      'subscribe.structures': 'Индивидуальные конструкции',
      'subscribe.structuresNote': 'Разные формы, точные развертки',
      'subscribe.childResistant': 'Варианты с защитой от детей',
      'subscribe.childResistantNote': 'Для вашего рынка',
      'subscribe.visualAlt': 'Развертка упаковки рядом с готовыми коробками, пакетом и банкой ZOMEEX',
      'subscribe.invalidEmail': 'Введите действующий рабочий адрес электронной почты.',
      'subscribe.securityError': 'Срок действия формы истек. Обновите страницу и повторите попытку.',
      'subscribe.rateError': 'Слишком много попыток. Повторите позже.',
      'subscribe.saveError': 'Не удалось отправить запрос. Попробуйте еще раз.'
    },
    de: {
      'subscribe.close': 'Angebot für Muster schließen',
      'subscribe.eyebrow': 'Exklusives B2B-Angebot',
      'subscribe.title': 'Kostenlose Muster für',
      'subscribe.titleAccent': 'Cannabisverpackungen',
      'subscribe.copy': 'Prüfen Sie Materialien, Konstruktionen, Veredelungen und kindersichere Optionen vor Ihrer Bestellung. Fordern Sie ein Musterpaket mit passenden Stanzkonturen kostenlos an.',
      'subscribe.subhead': 'Individuelle Stanzkonturen inklusive',
      'subscribe.email': 'Geschäftliche E-Mail',
      'subscribe.placeholder': 'Ihre geschäftliche E-Mail',
      'subscribe.submit': 'Kostenloses Musterpaket anfordern',
      'subscribe.loading': 'Anfrage wird gesendet...',
      'subscribe.helper': 'Ihre Daten bleiben geschützt. Kein Spam.',
      'subscribe.successTitle': 'Musteranfrage erhalten.',
      'subscribe.successCopy': 'Unser Verpackungsteam meldet sich, um Musterpaket und Stanzkonturen abzustimmen.',
      'subscribe.continue': 'Weiter ansehen',
      'subscribe.skip': 'Nein danke, weiter zur Website',
      'subscribe.consent': 'Für lizenzierte Cannabisunternehmen und Verpackungsprofis. Mit dem Fortfahren bestätigen Sie, dass Sie die geltenden Alters- und Geschäftsanforderungen erfüllen.',
      'subscribe.privacy': 'Datenschutzerklärung',
      'subscribe.visualTitle': 'Individuelle Verpackungsentwicklung',
      'subscribe.materials': 'Materialoptionen',
      'subscribe.materialNote': 'Karton und mehr',
      'subscribe.structures': 'Individuelle Konstruktionen',
      'subscribe.structuresNote': 'Verschiedene Formen, exakte Stanzkonturen',
      'subscribe.childResistant': 'Kindersichere Optionen',
      'subscribe.childResistantNote': 'Für Ihren Markt',
      'subscribe.visualAlt': 'Stanzkontur neben fertigen ZOMEEX-Musterboxen, einem Beutel und einem Glas',
      'subscribe.invalidEmail': 'Geben Sie eine gültige geschäftliche E-Mail-Adresse ein.',
      'subscribe.securityError': 'Das Formular ist abgelaufen. Aktualisieren Sie die Seite und versuchen Sie es erneut.',
      'subscribe.rateError': 'Zu viele Versuche. Bitte versuchen Sie es später erneut.',
      'subscribe.saveError': 'Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut.'
    },
    fr: {
      'subscribe.close': 'Fermer l’offre d’échantillons',
      'subscribe.eyebrow': 'Offre B2B exclusive',
      'subscribe.title': 'Échantillons gratuits',
      'subscribe.titleAccent': 'd’emballages de cannabis',
      'subscribe.copy': 'Évaluez les matériaux, structures, finitions et options de sécurité enfant avant de commander. Demandez gratuitement un kit d’échantillons avec les découpes correspondantes.',
      'subscribe.subhead': 'Découpes personnalisées incluses',
      'subscribe.email': 'E-mail professionnel',
      'subscribe.placeholder': 'Votre e-mail professionnel',
      'subscribe.submit': 'Demander le kit gratuit',
      'subscribe.loading': 'Envoi de la demande...',
      'subscribe.helper': 'Nous respectons votre vie privée. Pas de spam.',
      'subscribe.successTitle': 'Demande d’échantillons reçue.',
      'subscribe.successCopy': 'Notre équipe emballage vous contactera pour confirmer le kit et les découpes souhaités.',
      'subscribe.continue': 'Continuer la visite',
      'subscribe.skip': 'Non merci, continuer la visite',
      'subscribe.consent': 'Pour les entreprises du cannabis agréées et les professionnels de l’emballage. En poursuivant, vous confirmez respecter les conditions d’âge et d’activité applicables.',
      'subscribe.privacy': 'Politique de confidentialité',
      'subscribe.visualTitle': 'Développement d’emballages sur mesure',
      'subscribe.materials': 'Options de matériaux',
      'subscribe.materialNote': 'Carton et autres matériaux',
      'subscribe.structures': 'Structures sur mesure',
      'subscribe.structuresNote': 'Formats et découpes précis',
      'subscribe.childResistant': 'Options de sécurité enfant',
      'subscribe.childResistantNote': 'Pour votre marché',
      'subscribe.visualAlt': 'Un tracé de découpe avec des boîtes, un sachet et un pot d’échantillons ZOMEEX',
      'subscribe.invalidEmail': 'Saisissez une adresse e-mail professionnelle valide.',
      'subscribe.securityError': 'Ce formulaire a expiré. Actualisez la page et réessayez.',
      'subscribe.rateError': 'Trop de tentatives. Veuillez réessayer plus tard.',
      'subscribe.saveError': 'Impossible d’envoyer votre demande. Veuillez réessayer.'
    }
  };
  Object.keys(SUBSCRIBE_LABELS).forEach(function (locale) {
    DICTIONARY[locale] = Object.assign(DICTIONARY[locale] || {}, SUBSCRIBE_LABELS[locale]);
  });

  Object.keys(CN_WOOCOMMERCE_EXTRA_BY_SOURCE).forEach(function (locale) {
    EXTRA_BY_SOURCE[locale] = Object.assign(EXTRA_BY_SOURCE[locale] || {}, CN_WOOCOMMERCE_EXTRA_BY_SOURCE[locale]);
  });

  var ACCOUNT_EXTRA_BY_SOURCE = {
    en: {
      'Anti-spam': 'Anti-spam', 'Or': 'Or', 'Registration': 'Registration', 'Registering for this site allows you to access your order status and history.': 'Registering for this site allows you to access your order status and history.', 'Just fill in the fields below, and we will get a new account set up for you in no time.': 'Just fill in the fields below, and we will get a new account set up for you in no time.', 'We will only ask you for information necessary to make the purchase process faster and easier.': 'We will only ask you for information necessary to make the purchase process faster and easier.', "Registering for this site allows you to access your order status and history. Just fill in the fields below, and we'll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier.": "Registering for this site allows you to access your order status and history. Just fill in the fields below, and we'll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier."
    },
    'zh-CN': {
      'Anti-spam': '反垃圾验证', 'Or': '或', 'Registration': '注册', 'Registering for this site allows you to access your order status and history.': '注册后，你可以查看订单状态和历史记录。', 'Just fill in the fields below, and we will get a new account set up for you in no time.': '填写下方信息，我们会快速为你创建账户。', 'We will only ask you for information necessary to make the purchase process faster and easier.': '我们只会收集让购买流程更快捷、更方便所必需的信息。', "Registering for this site allows you to access your order status and history. Just fill in the fields below, and we'll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier.": '注册后，你可以查看订单状态和历史记录。填写下方信息，我们会快速为你创建账户。我们只会收集让购买流程更快捷、更方便所必需的信息。', '隐私政策': '隐私政策', '您的个人资料将用于在您体验本网站的整个过程中为您提供支持、管理对您帐户的访问，以及用于在我们的': '你的个人资料将用于支持你使用本网站、管理账户访问，以及', '中描述的其他用途。': '中描述的其他用途。'
    },
    ru: {
      'Anti-spam': 'Антиспам', 'Or': 'Или', 'Registration': 'Регистрация', 'Registering for this site allows you to access your order status and history.': 'Регистрация позволит просматривать статус и историю заказов.', 'Just fill in the fields below, and we will get a new account set up for you in no time.': 'Заполните поля ниже, и мы быстро создадим аккаунт.', 'We will only ask you for information necessary to make the purchase process faster and easier.': 'Мы запрашиваем только данные, необходимые для удобного оформления.', "Registering for this site allows you to access your order status and history. Just fill in the fields below, and we'll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier.": 'Регистрация позволит просматривать статус и историю заказов. Заполните поля ниже, и мы быстро создадим аккаунт. Мы запрашиваем только необходимые для удобного оформления данные.', '隐私政策': 'политике конфиденциальности', '您的个人资料将用于在您体验本网站的整个过程中为您提供支持、管理对您帐户的访问，以及用于在我们的': 'Ваши данные используются для работы с сайтом и управления аккаунтом, а также описанных в ', '中描述的其他用途。': ' целях.'
    },
    de: {
      'Anti-spam': 'Anti-Spam', 'Or': 'Oder', 'Registration': 'Registrierung', 'Registering for this site allows you to access your order status and history.': 'Nach der Registrierung können Sie Bestellstatus und -historie einsehen.', 'Just fill in the fields below, and we will get a new account set up for you in no time.': 'Füllen Sie die Felder aus, und wir richten Ihr Konto schnell ein.', 'We will only ask you for information necessary to make the purchase process faster and easier.': 'Wir fragen nur die Angaben ab, die den Kauf schneller und einfacher machen.', '隐私政策': 'Datenschutzrichtlinie', '您的个人资料将用于在您体验本网站的整个过程中为您提供支持、管理对您帐户的访问，以及用于在我们的': 'Ihre Daten werden zur Nutzung der Website und Verwaltung Ihres Kontos sowie für weitere Zwecke gemäß unserer ', '中描述的其他用途。': ' verwendet.'
    },
    fr: {
      'Anti-spam': 'Anti-spam', 'Or': 'Ou', 'Registration': 'Inscription', 'Registering for this site allows you to access your order status and history.': 'L’inscription vous permet de consulter le statut et l’historique de vos commandes.', 'Just fill in the fields below, and we will get a new account set up for you in no time.': 'Remplissez les champs ci-dessous pour créer rapidement votre compte.', 'We will only ask you for information necessary to make the purchase process faster and easier.': 'Nous demandons uniquement les informations nécessaires pour simplifier vos achats.', '隐私政策': 'politique de confidentialité', '您的个人资料将用于在您体验本网站的整个过程中为您提供支持、管理对您帐户的访问，以及用于在我们的': 'Vos données servent à utiliser le site et gérer votre compte, ainsi qu’aux autres finalités décrites dans notre ', '中描述的其他用途。': '.'
    }
  };
  Object.keys(ACCOUNT_EXTRA_BY_SOURCE).forEach(function (locale) {
    EXTRA_BY_SOURCE[locale] = Object.assign(EXTRA_BY_SOURCE[locale] || {}, ACCOUNT_EXTRA_BY_SOURCE[locale]);
  });

  var ACCOUNT_FULL_EXTRA_BY_SOURCE = {
    de: {
      "Registering for this site allows you to access your order status and history. Just fill in the fields below, and we'll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier.": 'Nach der Registrierung können Sie Bestellstatus und -historie einsehen. Füllen Sie die Felder aus, und wir richten Ihr Konto schnell ein. Wir fragen nur die Angaben ab, die den Kauf einfacher machen.'
    },
    fr: {
      "Registering for this site allows you to access your order status and history. Just fill in the fields below, and we'll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier.": 'L’inscription vous permet de consulter vos commandes. Remplissez les champs ci-dessous pour créer rapidement votre compte. Nous demandons uniquement les informations nécessaires pour simplifier vos achats.'
    }
  };
  Object.keys(ACCOUNT_FULL_EXTRA_BY_SOURCE).forEach(function (locale) {
    EXTRA_BY_SOURCE[locale] = Object.assign(EXTRA_BY_SOURCE[locale] || {}, ACCOUNT_FULL_EXTRA_BY_SOURCE[locale]);
  });

  /* Full-coverage additions collected from a rendered-page audit: mega menu,
   * hero, homepage sections, form options and footer. Keeps every fixed
   * interface string translatable without machine translation. */
  var FULL_COVERAGE_EXTRA_BY_SOURCE = {
    'zh-CN': {
            "Packaging built for your next": "为您的下一个市场打造",
      "market.": "包装。",
"Shop by product type": "按产品类型选购",
      "Flexible Packaging": "软包装",
      "Paper Packaging": "纸质包装",
      "Bottles & Containers": "瓶装与容器",
      "Metal Packaging": "金属包装",
      "Retail Displays & Merch": "零售展示与周边",
      "By application": "按应用场景",
      "Download Free Dielines": "下载免费刀模",
      "Artwork Proof Checklist": "设计稿校对清单",
      "Compliance Guides": "合规指南",
      "Market and documentation context to review.": "市场与文件背景，供你查阅。",
      "Featured / Quick order": "精选 / 快速下单",
      "Order a Free Sample Kit": "申请免费样品包",
      "Feel the materials and quality before placing a bulk order.": "批量下单前，先亲手感受材质与工艺。",
      "Claim free sample kit": "领取免费样品包",
      "Need quick help?": "需要快速协助？",
      "Start a conversation with our team": "与我们的团队开始沟通",
      "Child-resistant systems": "儿童防护体系",
      "Match the format to the market.": "让包装形式匹配目标市场。",
      "Start a CR brief": "发起儿童防护需求",
      "CR packaging formats": "儿童防护包装形式",
      "Child-Resistant Mylar Bags": "儿童防护 Mylar 袋",
      "Barrier pouches with a CR route for flower and edibles.": "高阻隔软袋，为花材与食品提供儿童防护方案。",
      "Child-Resistant Paper Boxes": "儿童防护纸盒",
      "Printed cartons with a CR structure for retail presentation.": "印刷折叠纸盒，儿童防护结构，适合零售陈列。",
      "Child-Resistant Jars & Bottles": "儿童防护罐与瓶",
      "Rigid formats for concentrates, capsules and liquid lines.": "硬质包装形式，适配浓缩物、胶囊与液体产品线。",
      "Child-Resistant Tubes": "儿童防护管",
      "Unit-dose and pre-roll tubes with a CR closure path.": "单剂量与预卷管，提供儿童防护封口方案。",
      "How a CR brief moves": "儿童防护需求的推进流程",
      "Share the destination market": "告诉我们目标市场",
      "The review route depends on where the pack will sell.": "评估路径取决于包装的销售地区。",
      "Match bag, box, jar or tube": "匹配袋、盒、罐或管",
      "Choose the format first, then print and closure.": "先定形式，再定印刷与封口。",
      "Review documentation": "核查文件资料",
      "Lock files against the market before production.": "生产前按目标市场锁定文件。",
      "Market-specific review": "按市场逐项评估",
      "Share destination and documentation needs.": "告诉我们目的地与文件需求。",
      "We review the format against the market before locking a CR route.": "锁定儿童防护方案前，我们会按市场评估该形式。",
      "Talk through a regulated launch": "聊聊合规上市的打法",
      "Compliance & guidance": "合规与指导",
      "CR Documentation": "儿童防护文件",
      "Review files against the destination market.": "按目标市场核查文件。",
      "Child-Resistant FAQ": "儿童防护常见问题",
      "Answers for closures, tests and next steps.": "关于封口、测试与下一步的解答。",
      "Request CR Dielines": "申请儿童防护刀模",
      "Start from a format-ready AI or PDF file.": "从可直接用于生产的 AI 或 PDF 文件开始。",
      "Discuss Your Market": "沟通你的目标市场",
      "Share destination before locking a CR route.": "锁定儿童防护方案前，请先告知目的地。",
      "Solutions by application": "按应用场景划分的方案",
      "Start from the product, not the SKU.": "从产品出发，而不是从 SKU 出发。",
      "Barrier bags, jars and compliant presentation formats for flower and hemp products.": "高阻隔袋、罐与合规陈列形式，服务花材与麻类产品。",
      "Protective tubes, wraps and secondary packaging for pre-roll programs.": "保护管、卷材与二次包装，服务预卷产品线。",
      "Printed boxes and pouches that keep edible ranges clear on shelf.": "印刷盒与软袋，让食品系列在货架上清晰呈现。",
      "Vape hardware, concentrate containers and coordinated retail packaging.": "雾化硬件、浓缩物容器与配套零售包装。",
      "Glass, tins and secondary packs for wax and extract lines.": "玻璃罐、马口铁罐与二次包装，服务蜡膏与提取物产品线。",
      "Bottles, cartons and presentation formats for liquid products.": "瓶、纸盒与陈列形式，服务液体产品。",
      "From concept to market-ready": "从概念到可上市",
      "Build a packaging route around the brief.": "围绕需求搭建包装路径。",
      "Share the product, destination and volume so we can map format, print and compliance.": "告诉我们产品、目的地与数量，我们据此规划形式、印刷与合规。",
      "Project routes": "项目路径",
      "Map print, structure and volume around the brief.": "围绕需求规划印刷、结构与数量。",
      "Browse the full packaging catalogue.": "浏览完整包装目录。",
      "Browse the full packaging catalogue": "浏览完整包装目录。",
      "Get a quote": "获取报价",
      "Share product, destination and quantity.": "提供产品、目的地与数量。",
      "Files, proofs and market context in one place.": "文件、打样与市场背景，一处搞定。",
      "Request dielines": "申请刀模",
      "Tools": "工具",
      "Free Dieline Templates": "免费刀模模板",
      "Start with a format-ready file": "从可生产的文件开始",
      "Upload Artwork": "上传设计稿",
      "Send files with your project brief": "随项目需求一并发送文件",
      "Review market and documentation context": "了解市场与文件背景",
      "Answers for the next decision": "为下一步决策准备的答案",
      "From file to brief": "从文件到需求",
      "Send artwork": "发送设计稿",
      "Attach the working files to the same project brief.": "把工作文件附加到同一份项目需求里。",
      "Lock production notes": "锁定生产备注",
      "Market, quantity and finish travel with the file.": "市场、数量与工艺随文件一并流转。",
      "Before production": "生产之前",
      "Lock the file before you lock the run.": "先锁定文件，再锁定生产批次。",
      "Dielines, artwork and documentation can travel with the same brief.": "刀模、设计稿与文件可随同一份需求流转。",
      "Upload artwork": "上传设计稿",
      "Next steps": "下一步",
      "Request sample pack": "申请样品包",
      "Compare materials and closures before production.": "生产前对比材质与封口方案。",
      "Notes and market context": "笔记与市场背景",
      "Read before you brief the next run.": "下一批生产前，先读这些笔记。",
      "View all notes": "查看全部笔记",
      "Resources": "资源",
      "Packaging Blog": "包装博客",
      "Product and manufacturing notes": "产品与制造笔记",
      "CR Laws & Regulations": "儿童防护法规",
      "Market context to discuss with your team": "供团队讨论的市场背景",
      "Case Studies": "案例研究",
      "See how briefs become build paths": "看需求如何变成生产路径",
      "What Is A Hot Knife Dab Tool?( ZOMEE X MELT KNIFE)": "什么是热刀 Dab 工具？（ZOMEE X MELT KNIFE）",
      "Hot Knife vs Traditional Dab Tool: Which One Is Better for You?": "热刀与传统 Dab 工具：哪款更适合你？",
      "Best Dab Tool for Dab Rigs, E-Rigs, and Wax Pens in 2025": "2025 年最佳 Dab 工具：适配 Dab Rig、E-Rig 与烟膏笔",
      "From the notes": "摘自笔记",
      "Use the archive as decision support.": "把内容库当作决策参考。",
      "Production notes, market context and case paths sit next to the catalogue.": "生产笔记、市场背景与案例路径，与产品目录并列呈现。",
      "Open the notes": "打开内容库",
      "Keep going": "继续了解",
      "Short answers for the next packaging decision.": "为下一个包装决策准备的简明解答。",
      "Talk through destination, volume and format.": "聊聊目的地、数量与包装形式。",
      "A factory partner for regulated packaging.": "值得托付的合规包装工厂伙伴。",
      "About Us": "关于我们",
      "How ZOMEEX supports your brief": "ZOMEEX 如何支持你的需求",
      "Factory Tour": "工厂参观",
      "Production context and capabilities": "生产背景与产能",
      "Certifications": "认证资质",
      "Documents reviewed against the market": "按市场核查的文件资料",
      "Contact Us": "联系我们",
      "Talk through destination, volume and format": "聊聊目的地、数量与形式",
      "A factory conversation": "一次工厂级对话",
      "See how ZOMEEX works": "了解 ZOMEEX 的工作方式",
      "Company context for the next packaging brief.": "了解公司背景，为下一个包装需求做准备。",
      "Review production context": "了解生产背景",
      "Factory tour and capability notes sit next to the catalogue.": "工厂参观与产能说明，与产品目录并列呈现。",
      "Share destination, volume and the format you have in mind.": "告诉我们目的地、数量与你设想的形式。",
      "Factory context": "工厂背景",
      "See how briefs become production paths.": "看需求如何变成生产路径。",
      "Share the product and destination. We will map format, print and documentation from there.": "告诉我们产品与目的地，我们由此规划形式、印刷与文件。",
      "Reach the team with a live project.": "带着实际项目，直接联系团队。",
      "FAQ": "常见问题",
      "Practical answers before a production brief.": "生产需求前的实用解答。",
      "Shop by size & route": "按尺寸与路径选购",
      "Shop by Size": "按尺寸选购",
      "All Products": "全部产品",
      "Get a Quote": "获取报价",
      "Packaging for the product context": "贴合产品场景的包装",
      "Share your product and destination": "告诉我们你的产品与目的地",
      "Common packaging questions": "常见包装问题",
      "ZOMEEX / CUSTOM PACKAGING SYSTEM": "ZOMEEX / 定制包装系统",
      "Packaging built for your next market.": "为您的下一个市场打造包装。",
      "Factory-direct bags, boxes, jars and OEM/ODM support for regulated launches.": "工厂直供袋、盒、罐包装，为合规上市提供 OEM/ODM 支持。",
      "CPSC / ASTM review route": "CPSC / ASTM 合规评估路径",
      "10-Day Fast Turnaround": "10 天快速交付",
      "Free Vector Dielines": "免费矢量刀模",
      "Get Custom Quote": "获取定制报价",
      "Request Free Sample Kit": "申请免费样品包",
      "FACTORY FILM / 00:27": "工厂影片 / 00:27",
      "LIVE LOOP": "实时循环",
      "Rigid packaging systems": "硬质包装体系",
      "Print, structure and shelf presence in one route.": "印刷、结构与货架表现，一路打通。",
      "Built around your brief": "围绕你的需求构建",
      "Material, format and market in one conversation.": "材质、形式与市场，一次沟通搞定。",
      "One production route.": "一条生产路径。",
      "From artwork and material selection to a market-ready pack.": "从设计稿与选材，到可上市的成品包装。",
      "Documentation route": "文件支持路径",
      "Demo / verify scope": "演示数据 / 范围待核实",
      "Test standard": "测试标准",
      "Demo / verify report": "演示数据 / 报告待核实",
      "Quality framework": "质量体系",
      "Demo / verify certificate": "演示数据 / 证书待核实",
      "Material review route": "材料评估路径",
      "Demo / verify application": "演示数据 / 应用待核实",
      "Paper sourcing route": "纸张采购路径",
      "Demo / verify chain": "演示数据 / 链路待核实",
      "A clearer route from packaging brief to production.": "从包装需求到生产，路径更清晰。",
      "Every touchpoint is designed for the decisions a procurement team needs to make.": "每个触点都为采购团队要做的决策而设计。",
      "Factory-Direct Pricing": "工厂直供价",
      "Keep the commercial conversation close to the production route and the actual format.": "商务沟通紧贴生产路径与实际包装形式。",
      "Market Documentation Review": "市场文件核查",
      "Review child-resistant structures and market documentation before a format is finalized.": "形式定稿前，先核查儿童防护结构与目标市场文件。",
      "Bespoke Printing Crafts": "定制印刷工艺",
      "Choose materials, inks and special finishes that make the brand feel intentional.": "选择材质、油墨与特殊工艺，让品牌质感更经得起推敲。",
      "Free Pre-Press Support": "免费印前支持",
      "Start from an existing artwork file or get a dieline route for the next production step.": "可从现有设计稿开始，也可先获取刀模路径再进入下一步生产。",
      "Choose the format first. Shape the details together.": "先定包装形式，细节一起打磨。",
      "Barrier films, stand-up pouches and retail-ready formats.": "高阻隔膜、自立袋与可直接上架的包装形式。",
      "Printed Paper Boxes & Rigid Boxes": "印刷纸盒与硬盒",
      "Folding cartons and rigid presentation boxes for shelf impact.": "折叠纸盒与硬质礼盒，为货架表现力加分。",
      "Glass Jars & Concentrate Containers": "玻璃罐与浓缩物容器",
      "Protective glass and concentrate formats with a considered fit.": "防护玻璃与浓缩物包装形式，装配贴合考究。",
      "Pre-Roll Packaging & Tubes": "预卷包装与管",
      "Tubes, wraps and display-ready formats for pre-roll lines.": "管、卷材与可陈列形式，服务预卷产品线。",
      "Durable metal formats for a tactile, reusable presentation.": "耐用金属包装形式，质感出众、可重复使用。",
      "Corrugated POP Display Shelves": "瓦楞 POP 展示架",
      "Retail display pieces that make the product easy to find.": "零售陈列道具，让产品一眼被看到。",
      "Download 100+ Free Vector Dielines": "下载 100+ 免费矢量刀模",
      "AI and PDF starter files for the formats your team is already comparing.": "AI 与 PDF 起步文件，覆盖你的团队正在比较的包装形式。",
      "Get the dieline pack": "获取刀模包",
      "Order a Free Physical Sample Kit": "申请免费实物样品包",
      "$0 + shipping. Compare materials, closures and finishes before the production conversation.": "$0 + 运费。在生产沟通前，先对比材质、封口与工艺。",
            "Flower & Hemp": "花材与麻类",
      "Pre-Rolls & Joints": "预卷与卷烟",
      "Edibles & Gummies": "食品与软糖",
      "Vape & Concentrates": "雾化与浓缩物",
"Start with the product context.": "从产品场景开始。",
      "Swipe to explore": "滑动查看",
      "Craft, material and closure are part of the brief.": "工艺、材质与封口，都是需求的一部分。",
      "Talk through a finish": "聊聊工艺选择",
      "Special Finishes": "特殊工艺",
      "Foil, spot UV, soft-touch coating and embossing can be explored against the substrate and artwork.": "烫金、局部 UV、触感膜与压纹，可结合承印材料与设计稿评估。",
      "Foil / UV / emboss": "烫金 / UV / 压纹",
      "Sustainable Materials": "可持续材料",
      "Paper, board and recycled options can be reviewed alongside the intended shelf life and market.": "纸张、纸板与再生材料方案，可结合预期货架期与目标市场评估。",
      "Paper / FSC / recycled": "纸张 / FSC / 再生",
      "Child-Resistant Locks": "儿童防护锁扣",
      "Discuss closures and test routes for the exact format before a compliance statement is published.": "发布合规声明前，先针对具体形式讨论封口方案与测试路径。",
      "Closure / test route / market": "封口 / 测试路径 / 市场",
      "Factory tour / 02": "工厂参观 / 02",
      "A production view your team can work with.": "让你的团队看得懂、用得上的生产视角。",
      "Use this section for the factory tour, verified production indicators and the quality checkpoints that matter to your market.": "这里呈现工厂参观、经核实的生产指标，以及与你的市场相关的质量节点。",
      "Modern production base": "现代化生产基地",
      "Pieces daily capacity": "件（日产能）",
      "Inspection before shipment": "出货前检验",
      "Global brands served": "服务全球品牌",
      "Mylar bags": "Mylar 袋",
      "Paper boxes": "纸盒",
      "Glass jars": "玻璃罐",
      "Pre-roll packaging": "预卷包装",
      "Vape hardware": "雾化硬件",
      "POP displays": "POP 展示架",
      "10,000 units": "10,000 件",
      "50,000 units": "50,000 件",
      "100,000+ units": "100,000+ 件",
      "Founder / owner": "创始人 / 负责人",
      "Procurement": "采购",
      "Product / R&D": "产品 / 研发",
      "Brand / marketing": "品牌 / 市场",
      "Compliance / legal": "合规 / 法务",
      "Distributor": "经销商",
      "Other": "其他",
      "Website": "网站",
      "Useful context for the next packaging decision.": "为下一个包装决策准备的实用信息。",
      "View all insights": "查看全部洞察",
      "Have the product. Need the right pack?": "产品已就绪，还缺合适的包装？",
      "Start a focused quote": "发起精准报价",
      "Custom cannabis packaging, vape hardware and OEM/ODM support for teams building for a defined market.": "定制大麻包装、雾化硬件与 OEM/ODM 支持，服务目标市场明确的团队。",
      "Mylar bags & pouches": "Mylar 袋与软包装",
      "Paper & rigid boxes": "纸盒与硬盒",
      "Glass jars & containers": "玻璃罐与容器",
      "Displays & merch": "展示架与周边",
      "Packaging blog": "包装博客",
      "CR laws & regulations": "儿童防护法规",
      "Factory tour": "工厂参观",
      "Talk to sales": "联系销售",
      "5th Floor, Fifth Zone, Ganghuaxing Industry Park, No. 118 YongFu Road, Shenzhen, China": "中国深圳市永福路 118 号港华兴工业园五区 5 楼",
      "Mon-Fri / 09:00-18:00 CST": "周一至周五 / 09:00-18:00（北京时间）",
      "© 2026 ZOMEEX. All rights reserved.": "© 2026 ZOMEEX。保留所有权利。",
      "Demo claims and legacy contact data must be verified before production launch.": "演示声明与历史联系数据须在正式上线前核实。"
    },
    ru: {
            "Packaging built for your next": "Упаковка для вашего следующего",
      "market.": "рынка.",
"Shop by product type": "По типу продукта",
      "Flexible Packaging": "Гибкая упаковка",
      "Paper Packaging": "Бумажная упаковка",
      "Bottles & Containers": "Бутылки и контейнеры",
      "Metal Packaging": "Металлическая упаковка",
      "Retail Displays & Merch": "Ритейл-дисплеи и мерч",
      "By application": "По применению",
      "Download Free Dielines": "Скачать бесплатные высечки",
      "Artwork Proof Checklist": "Чек-лист проверки макета",
      "Compliance Guides": "Гайды по соответствию",
      "Market and documentation context to review.": "Рыночный контекст и документы для ознакомления.",
      "Featured / Quick order": "Избранное / Быстрый заказ",
      "Order a Free Sample Kit": "Заказать бесплатный набор образцов",
      "Feel the materials and quality before placing a bulk order.": "Почувствуйте материалы и качество до оптового заказа.",
      "Claim free sample kit": "Получить бесплатные образцы",
      "Need quick help?": "Нужна быстрая помощь?",
      "Start a conversation with our team": "Начните общение с нашей командой",
      "Child-resistant systems": "Детозащищенные системы",
      "Match the format to the market.": "Подберите формат под ваш рынок.",
      "Start a CR brief": "Начать CR-запрос",
      "CR packaging formats": "Форматы CR-упаковки",
      "Child-Resistant Mylar Bags": "Детозащищенные Mylar-пакеты",
      "Barrier pouches with a CR route for flower and edibles.": "Барьерные паучи с CR-решением для flower и edibles.",
      "Child-Resistant Paper Boxes": "Детозащищенные бумажные коробки",
      "Printed cartons with a CR structure for retail presentation.": "Печатные коробки с CR-структурой для ритейла.",
      "Child-Resistant Jars & Bottles": "Детозащищенные банки и бутылки",
      "Rigid formats for concentrates, capsules and liquid lines.": "Жесткие форматы для концентратов, капсул и жидкостей.",
      "Child-Resistant Tubes": "Детозащищенные тубы",
      "Unit-dose and pre-roll tubes with a CR closure path.": "Тубы для unit-dose и pre-roll с CR-закрытием.",
      "How a CR brief moves": "Как движется CR-запрос",
      "Share the destination market": "Укажите целевой рынок",
      "The review route depends on where the pack will sell.": "Маршрут проверки зависит от рынка сбыта.",
      "Match bag, box, jar or tube": "Подберите пакет, коробку, банку или тубу",
      "Choose the format first, then print and closure.": "Сначала формат, затем печать и закрытие.",
      "Review documentation": "Проверьте документацию",
      "Lock files against the market before production.": "Зафиксируйте файлы под рынок до производства.",
      "Market-specific review": "Проверка под конкретный рынок",
      "Share destination and documentation needs.": "Укажите направление и требования к документам.",
      "We review the format against the market before locking a CR route.": "Мы проверяем формат под рынок до фиксации CR-маршрута.",
      "Talk through a regulated launch": "Обсудите регулируемый запуск",
      "Compliance & guidance": "Соответствие и рекомендации",
      "CR Documentation": "Документация CR",
      "Review files against the destination market.": "Проверка файлов под рынок назначения.",
      "Child-Resistant FAQ": "FAQ по детозащите",
      "Answers for closures, tests and next steps.": "Ответы про закрытия, тесты и дальнейшие шаги.",
      "Request CR Dielines": "Запросить CR-высечки",
      "Start from a format-ready AI or PDF file.": "Начните с готового файла AI или PDF.",
      "Discuss Your Market": "Обсудить ваш рынок",
      "Share destination before locking a CR route.": "Укажите направление до фиксации CR-маршрута.",
      "Solutions by application": "Решения по применению",
      "Start from the product, not the SKU.": "Начните с продукта, а не с SKU.",
      "Barrier bags, jars and compliant presentation formats for flower and hemp products.": "Барьерные пакеты, банки и форматы для flower и hemp.",
      "Protective tubes, wraps and secondary packaging for pre-roll programs.": "Защитные тубы, обертки и вторичная упаковка для pre-roll.",
      "Printed boxes and pouches that keep edible ranges clear on shelf.": "Печатные коробки и паучи для edibles на полке.",
      "Vape hardware, concentrate containers and coordinated retail packaging.": "Вейп-устройства, контейнеры для концентратов и ритейл-упаковка.",
      "Glass, tins and secondary packs for wax and extract lines.": "Стекло, жесть и вторичная упаковка для wax и экстрактов.",
      "Bottles, cartons and presentation formats for liquid products.": "Бутылки, коробки и форматы подачи для жидких продуктов.",
      "From concept to market-ready": "От концепции до готовности к рынку",
      "Build a packaging route around the brief.": "Постройте упаковочный маршрут вокруг задачи.",
      "Share the product, destination and volume so we can map format, print and compliance.": "Поделитесь продуктом, рынком и объемом — мы подберем формат, печать и соответствие.",
      "Project routes": "Маршруты проекта",
      "Map print, structure and volume around the brief.": "Печать, структура и объем вокруг задачи.",
      "Browse the full packaging catalogue.": "Откройте полный каталог упаковки.",
      "Browse the full packaging catalogue": "Откройте полный каталог упаковки.",
      "Get a quote": "Получить расчет",
      "Share product, destination and quantity.": "Укажите продукт, направление и количество.",
      "Files, proofs and market context in one place.": "Файлы, пруфы и рыночный контекст в одном месте.",
      "Request dielines": "Запросить высечки",
      "Tools": "Инструменты",
      "Free Dieline Templates": "Бесплатные шаблоны высечек",
      "Start with a format-ready file": "Начните с готового к производству файла",
      "Upload Artwork": "Загрузить макет",
      "Send files with your project brief": "Отправьте файлы вместе с запросом",
      "Review market and documentation context": "Изучите рыночный и документальный контекст",
      "Answers for the next decision": "Ответы для следующего решения",
      "From file to brief": "От файла к запросу",
      "Send artwork": "Отправить макет",
      "Attach the working files to the same project brief.": "Прикрепите рабочие файлы к тому же запросу.",
      "Lock production notes": "Зафиксируйте производственные заметки",
      "Market, quantity and finish travel with the file.": "Рынок, количество и отделка следуют с файлом.",
      "Before production": "До производства",
      "Lock the file before you lock the run.": "Сначала файл, потом тираж.",
      "Dielines, artwork and documentation can travel with the same brief.": "Высечки, макет и документы идут с тем же запросом.",
      "Upload artwork": "Загрузите макет",
      "Next steps": "Следующие шаги",
      "Request sample pack": "Запросить набор образцов",
      "Compare materials and closures before production.": "Сравните материалы и закрытия до производства.",
      "Notes and market context": "Заметки и рыночный контекст",
      "Read before you brief the next run.": "Прочтите перед следующим тиражом.",
      "View all notes": "Смотреть все заметки",
      "Resources": "Ресурсы",
      "Packaging Blog": "Блог об упаковке",
      "Product and manufacturing notes": "Заметки о продукте и производстве",
      "CR Laws & Regulations": "Законы и нормы CR",
      "Market context to discuss with your team": "Рыночный контекст для обсуждения в команде",
      "Case Studies": "Кейсы",
      "See how briefs become build paths": "Как запросы превращаются в производство",
      "What Is A Hot Knife Dab Tool?( ZOMEE X MELT KNIFE)": "Что такое hot knife dab-инструмент? (ZOMEE X MELT KNIFE)",
      "Hot Knife vs Traditional Dab Tool: Which One Is Better for You?": "Hot knife против классического dab-инструмента: что лучше?",
      "Best Dab Tool for Dab Rigs, E-Rigs, and Wax Pens in 2025": "Лучший dab-инструмент 2025 для dab-ригов, e-rig и wax-ручек",
      "From the notes": "Из заметок",
      "Use the archive as decision support.": "Используйте архив как поддержку решений.",
      "Production notes, market context and case paths sit next to the catalogue.": "Производственные заметки, контекст и кейсы — рядом с каталогом.",
      "Open the notes": "Открыть заметки",
      "Keep going": "Продолжить",
      "Short answers for the next packaging decision.": "Короткие ответы для следующего решения об упаковке.",
      "Talk through destination, volume and format.": "Обсудите направление, объем и формат.",
      "A factory partner for regulated packaging.": "Фабрика-партнер для регулируемой упаковки.",
      "About Us": "О нас",
      "How ZOMEEX supports your brief": "Как ZOMEEX поддерживает ваш запрос",
      "Factory Tour": "Тур по фабрике",
      "Production context and capabilities": "Производственный контекст и мощности",
      "Certifications": "Сертификаты",
      "Documents reviewed against the market": "Документы, проверенные под рынок",
      "Contact Us": "Связаться с нами",
      "Talk through destination, volume and format": "Обсудите направление, объем и формат",
      "A factory conversation": "Разговор с фабрикой",
      "See how ZOMEEX works": "Как работает ZOMEEX",
      "Company context for the next packaging brief.": "Контекст компании для следующего запроса.",
      "Review production context": "Изучите производственный контекст",
      "Factory tour and capability notes sit next to the catalogue.": "Тур по фабрике и мощности — рядом с каталогом.",
      "Share destination, volume and the format you have in mind.": "Укажите направление, объем и желаемый формат.",
      "Factory context": "Контекст фабрики",
      "See how briefs become production paths.": "Как запросы становятся производством.",
      "Share the product and destination. We will map format, print and documentation from there.": "Поделитесь продуктом и направлением — мы подберем формат, печать и документы.",
      "Reach the team with a live project.": "Свяжитесь с командой с реальным проектом.",
      "FAQ": "Частые вопросы",
      "Practical answers before a production brief.": "Практичные ответы перед запросом.",
      "Shop by size & route": "По размеру и маршруту",
      "Shop by Size": "По размеру",
      "All Products": "Все продукты",
      "Get a Quote": "Получить расчет",
      "Packaging for the product context": "Упаковка под контекст продукта",
      "Share your product and destination": "Укажите продукт и направление",
      "Common packaging questions": "Частые вопросы об упаковке",
      "ZOMEEX / CUSTOM PACKAGING SYSTEM": "ZOMEEX / СИСТЕМА ИНДИВИДУАЛЬНОЙ УПАКОВКИ",
      "Packaging built for your next market.": "Упаковка для вашего следующего рынка.",
      "Factory-direct bags, boxes, jars and OEM/ODM support for regulated launches.": "Пакеты, коробки и банки напрямую с фабрики, OEM/ODM-поддержка регулируемых запусков.",
      "CPSC / ASTM review route": "Маршрут проверки CPSC / ASTM",
      "10-Day Fast Turnaround": "Быстрый запуск за 10 дней",
      "Free Vector Dielines": "Бесплатные векторные высечки",
      "Get Custom Quote": "Получить индивидуальный расчет",
      "Request Free Sample Kit": "Запросить бесплатный набор образцов",
      "FACTORY FILM / 00:27": "ФИЛЬМ О ФАБРИКЕ / 00:27",
      "LIVE LOOP": "LIVE-ЗАПИСЬ",
      "Rigid packaging systems": "Системы жесткой упаковки",
      "Print, structure and shelf presence in one route.": "Печать, структура и полочное присутствие в одном маршруте.",
      "Built around your brief": "Построено вокруг вашей задачи",
      "Material, format and market in one conversation.": "Материал, формат и рынок — в одном разговоре.",
      "One production route.": "Один производственный маршрут.",
      "From artwork and material selection to a market-ready pack.": "От макета и выбора материала до готовой к рынку упаковки.",
      "Documentation route": "Документальный маршрут",
      "Demo / verify scope": "Демо / объем требует проверки",
      "Test standard": "Стандарт испытаний",
      "Demo / verify report": "Демо / отчет требует проверки",
      "Quality framework": "Система качества",
      "Demo / verify certificate": "Демо / сертификат требует проверки",
      "Material review route": "Маршрут проверки материалов",
      "Demo / verify application": "Демо / применение требует проверки",
      "Paper sourcing route": "Маршрут закупки бумаги",
      "Demo / verify chain": "Демо / цепочка требует проверки",
      "A clearer route from packaging brief to production.": "Более понятный путь от запроса на упаковку до производства.",
      "Every touchpoint is designed for the decisions a procurement team needs to make.": "Каждая точка контакта создана для решений закупочной команды.",
      "Factory-Direct Pricing": "Цены напрямую с фабрики",
      "Keep the commercial conversation close to the production route and the actual format.": "Коммерческое обсуждение — рядом с производством и реальным форматом.",
      "Market Documentation Review": "Проверка документов под рынок",
      "Review child-resistant structures and market documentation before a format is finalized.": "Проверка CR-структур и документов до финализации формата.",
      "Bespoke Printing Crafts": "Индивидуальные технологии печати",
      "Choose materials, inks and special finishes that make the brand feel intentional.": "Материалы, краски и отделка, которые делают бренд осмысленным.",
      "Free Pre-Press Support": "Бесплатная допечатная поддержка",
      "Start from an existing artwork file or get a dieline route for the next production step.": "Начните с готового макета или получите высечку для следующего шага.",
      "Choose the format first. Shape the details together.": "Сначала формат, детали — вместе.",
      "Barrier films, stand-up pouches and retail-ready formats.": "Барьерные пленки, дой-паки и форматы для ритейла.",
      "Printed Paper Boxes & Rigid Boxes": "Печатные и жесткие коробки",
      "Folding cartons and rigid presentation boxes for shelf impact.": "Фальцованные коробки и жесткие презентационные коробки для полки.",
      "Glass Jars & Concentrate Containers": "Стеклянные банки и контейнеры для концентратов",
      "Protective glass and concentrate formats with a considered fit.": "Защитное стекло и форматы для концентратов с точной посадкой.",
      "Pre-Roll Packaging & Tubes": "Упаковка и тубы для pre-roll",
      "Tubes, wraps and display-ready formats for pre-roll lines.": "Тубы, обертки и форматы для витрины pre-roll.",
      "Durable metal formats for a tactile, reusable presentation.": "Прочные металлические форматы для многоразовой подачи.",
      "Corrugated POP Display Shelves": "Гофрированные POP-витрины",
      "Retail display pieces that make the product easy to find.": "Ритейл-дисплеи, которые делают продукт заметным.",
      "Download 100+ Free Vector Dielines": "Скачать 100+ бесплатных векторных высечек",
      "AI and PDF starter files for the formats your team is already comparing.": "Стартовые файлы AI и PDF для форматов, которые вы уже сравниваете.",
      "Get the dieline pack": "Получить пакет высечек",
      "Order a Free Physical Sample Kit": "Заказать бесплатный физический набор образцов",
      "$0 + shipping. Compare materials, closures and finishes before the production conversation.": "$0 + доставка. Сравните материалы, закрытия и отделку до обсуждения производства.",
            "Flower & Hemp": "Flower и hemp",
      "Pre-Rolls & Joints": "Pre-roll и joint",
      "Edibles & Gummies": "Edibles и gummies",
      "Vape & Concentrates": "Вейп и концентраты",
"Start with the product context.": "Начните с контекста продукта.",
      "Swipe to explore": "Свайп для просмотра",
      "Craft, material and closure are part of the brief.": "Отделка, материал и закрытие — часть запроса.",
      "Talk through a finish": "Обсудите варианты отделки",
      "Special Finishes": "Специальная отделка",
      "Foil, spot UV, soft-touch coating and embossing can be explored against the substrate and artwork.": "Фольга, выборочный УФ-лак, soft-touch и тиснение — под материал и макет.",
      "Foil / UV / emboss": "Фольга / УФ / тиснение",
      "Sustainable Materials": "Экологичные материалы",
      "Paper, board and recycled options can be reviewed alongside the intended shelf life and market.": "Бумага, картон и переработанные варианты — с учетом срока хранения и рынка.",
      "Paper / FSC / recycled": "Бумага / FSC / переработка",
      "Child-Resistant Locks": "Детозащищенные замки",
      "Discuss closures and test routes for the exact format before a compliance statement is published.": "Обсудите закрытия и маршруты тестов для формата до публикации заявления.",
      "Closure / test route / market": "Закрытие / маршрут тестов / рынок",
      "Factory tour / 02": "Тур по фабрике / 02",
      "A production view your team can work with.": "Производственный взгляд, с которым может работать ваша команда.",
      "Use this section for the factory tour, verified production indicators and the quality checkpoints that matter to your market.": "Этот раздел — для тура по фабрике, проверенных показателей и контрольных точек качества для вашего рынка.",
      "Modern production base": "Современная производственная база",
      "Pieces daily capacity": "штук (дневная мощность)",
      "Inspection before shipment": "Проверка перед отгрузкой",
      "Global brands served": "Обслуживаем глобальные бренды",
      "Mylar bags": "Mylar-пакеты",
      "Paper boxes": "Бумажные коробки",
      "Glass jars": "Стеклянные банки",
      "Pre-roll packaging": "Упаковка pre-roll",
      "Vape hardware": "Вейп-устройства",
      "POP displays": "POP-дисплеи",
      "10,000 units": "10 000 шт.",
      "50,000 units": "50 000 шт.",
      "100,000+ units": "100 000+ шт.",
      "Founder / owner": "Основатель / владелец",
      "Procurement": "Закупки",
      "Product / R&D": "Продукт / R&D",
      "Brand / marketing": "Бренд / маркетинг",
      "Compliance / legal": "Соответствие / юристы",
      "Distributor": "Дистрибьютор",
      "Other": "Другое",
      "Website": "Веб-сайт",
      "Useful context for the next packaging decision.": "Полезный контекст для следующего решения об упаковке.",
      "View all insights": "Смотреть все инсайты",
      "Have the product. Need the right pack?": "Продукт есть. Нужна правильная упаковка?",
      "Start a focused quote": "Начать точный расчет",
      "Custom cannabis packaging, vape hardware and OEM/ODM support for teams building for a defined market.": "Индивидуальная cannabis-упаковка, вейп-устройства и OEM/ODM-поддержка для команд с конкретным рынком.",
      "Mylar bags & pouches": "Mylar-пакеты и паучи",
      "Paper & rigid boxes": "Бумажные и жесткие коробки",
      "Glass jars & containers": "Стеклянные банки и контейнеры",
      "Displays & merch": "Дисплеи и мерч",
      "Packaging blog": "Блог об упаковке",
      "CR laws & regulations": "Законы и нормы CR",
      "Factory tour": "Тур по фабрике",
      "Talk to sales": "Связаться с отделом продаж",
      "5th Floor, Fifth Zone, Ganghuaxing Industry Park, No. 118 YongFu Road, Shenzhen, China": "5th Floor, Fifth Zone, Ganghuaxing Industry Park, No. 118 YongFu Road, Shenzhen, China",
      "Mon-Fri / 09:00-18:00 CST": "Пн–Пт / 09:00–18:00 CST",
      "© 2026 ZOMEEX. All rights reserved.": "© 2026 ZOMEEX. Все права защищены.",
      "Demo claims and legacy contact data must be verified before production launch.": "Демо-заявления и устаревшие контактные данные требуют проверки до запуска."
    },
    de: {
            "Packaging built for your next": "Verpackung für Ihren nächsten",
      "market.": "Markt.",
"Shop by product type": "Nach Produkttyp",
      "Flexible Packaging": "Flexible Verpackung",
      "Paper Packaging": "Papierverpackung",
      "Bottles & Containers": "Flaschen & Behälter",
      "Metal Packaging": "Metallverpackung",
      "Retail Displays & Merch": "Retail-Displays & Merch",
      "By application": "Nach Anwendung",
      "Download Free Dielines": "Kostenlose Stanzlinien",
      "Artwork Proof Checklist": "Artwork-Prüfliste",
      "Compliance Guides": "Compliance-Leitfäden",
      "Market and documentation context to review.": "Markt- und Dokumentationskontext zur Prüfung.",
      "Featured / Quick order": "Empfohlen / Schnellbestellung",
      "Order a Free Sample Kit": "Kostenloses Musterpaket bestellen",
      "Feel the materials and quality before placing a bulk order.": "Material und Qualität vor der Großbestellung prüfen.",
      "Claim free sample kit": "Kostenloses Musterpaket anfordern",
      "Need quick help?": "Brauchen Sie schnelle Hilfe?",
      "Start a conversation with our team": "Kontakt mit unserem Team aufnehmen",
      "Child-resistant systems": "Kindergesicherte Systeme",
      "Match the format to the market.": "Das Format passend zum Markt wählen.",
      "Start a CR brief": "CR-Anfrage starten",
      "CR packaging formats": "CR-Verpackungsformate",
      "Child-Resistant Mylar Bags": "Kindergesicherte Mylar-Beutel",
      "Barrier pouches with a CR route for flower and edibles.": "Barrier-Pouches mit CR-Lösung für Flower und Edibles.",
      "Child-Resistant Paper Boxes": "Kindergesicherte Kartons",
      "Printed cartons with a CR structure for retail presentation.": "Bedruckte Kartons mit CR-Struktur für den Einzelhandel.",
      "Child-Resistant Jars & Bottles": "Kindergesicherte Gläser & Flaschen",
      "Rigid formats for concentrates, capsules and liquid lines.": "Starre Formate für Konzentrate, Kapseln und Liquids.",
      "Child-Resistant Tubes": "Kindergesicherte Tuben",
      "Unit-dose and pre-roll tubes with a CR closure path.": "Unit-Dose- und Pre-Roll-Tuben mit CR-Verschluss.",
      "How a CR brief moves": "Wie eine CR-Anfrage abläuft",
      "Share the destination market": "Zielmarkt mitteilen",
      "The review route depends on where the pack will sell.": "Der Prüfweg hängt vom Absatzmarkt ab.",
      "Match bag, box, jar or tube": "Beutel, Box, Glas oder Tube wählen",
      "Choose the format first, then print and closure.": "Zuerst das Format, dann Druck und Verschluss.",
      "Review documentation": "Dokumentation prüfen",
      "Lock files against the market before production.": "Dateien vor der Produktion marktspezifisch fixieren.",
      "Market-specific review": "Marktspezifische Prüfung",
      "Share destination and documentation needs.": "Ziel und Dokumentationsbedarf mitteilen.",
      "We review the format against the market before locking a CR route.": "Wir prüfen das Format marktspezifisch, bevor der CR-Weg fixiert wird.",
      "Talk through a regulated launch": "Regulierten Launch besprechen",
      "Compliance & guidance": "Compliance & Beratung",
      "CR Documentation": "CR-Dokumentation",
      "Review files against the destination market.": "Dateien gegen den Zielmarkt prüfen.",
      "Child-Resistant FAQ": "FAQ Kindersicherung",
      "Answers for closures, tests and next steps.": "Antworten zu Verschlüssen, Tests und nächsten Schritten.",
      "Request CR Dielines": "CR-Stanzlinien anfragen",
      "Start from a format-ready AI or PDF file.": "Mit einer produktionsreifen AI- oder PDF-Datei starten.",
      "Discuss Your Market": "Ihren Markt besprechen",
      "Share destination before locking a CR route.": "Ziel vor dem Fixieren des CR-Wegs mitteilen.",
      "Solutions by application": "Lösungen nach Anwendung",
      "Start from the product, not the SKU.": "Vom Produkt ausgehen, nicht von der SKU.",
      "Barrier bags, jars and compliant presentation formats for flower and hemp products.": "Barrier-Beutel, Gläser und konforme Formate für Flower- und Hemp-Produkte.",
      "Protective tubes, wraps and secondary packaging for pre-roll programs.": "Schutztuben, Wraps und Sekundärverpackung für Pre-Roll-Programme.",
      "Printed boxes and pouches that keep edible ranges clear on shelf.": "Bedruckte Boxen und Pouches für eine klare Edibles-Präsentation.",
      "Vape hardware, concentrate containers and coordinated retail packaging.": "Vape-Hardware, Konzentrat-Behälter und abgestimmte Retail-Verpackung.",
      "Glass, tins and secondary packs for wax and extract lines.": "Glas, Dosen und Sekundärpacks für Wax- und Extraktlinien.",
      "Bottles, cartons and presentation formats for liquid products.": "Flaschen, Kartons und Präsentationsformate für Flüssigprodukte.",
      "From concept to market-ready": "Vom Konzept bis zur Marktreife",
      "Build a packaging route around the brief.": "Einen Verpackungsweg rund um den Brief bauen.",
      "Share the product, destination and volume so we can map format, print and compliance.": "Produkt, Ziel und Volumen teilen, damit wir Format, Druck und Compliance planen.",
      "Project routes": "Projektwege",
      "Map print, structure and volume around the brief.": "Druck, Struktur und Volumen um den Brief planen.",
      "Browse the full packaging catalogue.": "Den vollständigen Verpackungskatalog ansehen.",
      "Browse the full packaging catalogue": "Den vollständigen Verpackungskatalog ansehen.",
      "Get a quote": "Angebot anfordern",
      "Share product, destination and quantity.": "Produkt, Ziel und Menge angeben.",
      "Files, proofs and market context in one place.": "Dateien, Proofs und Marktkontext an einem Ort.",
      "Request dielines": "Stanzlinien anfragen",
      "Tools": "Werkzeuge",
      "Free Dieline Templates": "Kostenlose Stanzlinien-Vorlagen",
      "Start with a format-ready file": "Mit einer produktionsreifen Datei starten",
      "Upload Artwork": "Artwork hochladen",
      "Send files with your project brief": "Dateien mit Ihrer Anfrage senden",
      "Review market and documentation context": "Markt- und Dokumentationskontext prüfen",
      "Answers for the next decision": "Antworten für die nächste Entscheidung",
      "From file to brief": "Von der Datei zum Brief",
      "Send artwork": "Artwork senden",
      "Attach the working files to the same project brief.": "Arbeitsdateien derselben Anfrage anhängen.",
      "Lock production notes": "Produktionsnotizen fixieren",
      "Market, quantity and finish travel with the file.": "Markt, Menge und Finish wandern mit der Datei.",
      "Before production": "Vor der Produktion",
      "Lock the file before you lock the run.": "Zuerst die Datei fixieren, dann die Auflage.",
      "Dielines, artwork and documentation can travel with the same brief.": "Stanzlinien, Artwork und Dokumentation reisen mit demselben Brief.",
      "Upload artwork": "Artwork hochladen",
      "Next steps": "Nächste Schritte",
      "Request sample pack": "Musterpaket anfragen",
      "Compare materials and closures before production.": "Materialien und Verschlüsse vor der Produktion vergleichen.",
      "Notes and market context": "Notizen und Marktkontext",
      "Read before you brief the next run.": "Lesen, bevor Sie die nächste Auflage beauftragen.",
      "View all notes": "Alle Notizen ansehen",
      "Resources": "Ressourcen",
      "Packaging Blog": "Verpackungs-Blog",
      "Product and manufacturing notes": "Produkt- und Fertigungsnotizen",
      "CR Laws & Regulations": "CR-Gesetze & Vorschriften",
      "Market context to discuss with your team": "Marktkontext zur Besprechung im Team",
      "Case Studies": "Fallstudien",
      "See how briefs become build paths": "Wie aus Briefs Produktionswege werden",
      "What Is A Hot Knife Dab Tool?( ZOMEE X MELT KNIFE)": "Was ist ein Hot Knife Dab Tool? (ZOMEE X MELT KNIFE)",
      "Hot Knife vs Traditional Dab Tool: Which One Is Better for You?": "Hot Knife vs. klassisches Dab Tool: Was passt besser zu dir?",
      "Best Dab Tool for Dab Rigs, E-Rigs, and Wax Pens in 2025": "Das beste Dab Tool 2025 für Dab Rigs, E-Rigs und Wax Pens",
      "From the notes": "Aus den Notizen",
      "Use the archive as decision support.": "Das Archiv als Entscheidungshilfe nutzen.",
      "Production notes, market context and case paths sit next to the catalogue.": "Produktionsnotizen, Marktkontext und Fallbeispiele neben dem Katalog.",
      "Open the notes": "Notizen öffnen",
      "Keep going": "Weiterlesen",
      "Short answers for the next packaging decision.": "Kurze Antworten für die nächste Verpackungsentscheidung.",
      "Talk through destination, volume and format.": "Ziel, Volumen und Format besprechen.",
      "A factory partner for regulated packaging.": "Ein Fabrikpartner für regulierte Verpackung.",
      "About Us": "Über uns",
      "How ZOMEEX supports your brief": "Wie ZOMEEX Ihren Brief unterstützt",
      "Factory Tour": "Werksführung",
      "Production context and capabilities": "Produktionskontext und Kapazitäten",
      "Certifications": "Zertifizierungen",
      "Documents reviewed against the market": "Marktspezifisch geprüfte Dokumente",
      "Contact Us": "Kontakt",
      "Talk through destination, volume and format": "Ziel, Volumen und Format besprechen",
      "A factory conversation": "Ein Gespräch mit der Fabrik",
      "See how ZOMEEX works": "Sehen, wie ZOMEEX arbeitet",
      "Company context for the next packaging brief.": "Unternehmenskontext für Ihren nächsten Brief.",
      "Review production context": "Produktionskontext prüfen",
      "Factory tour and capability notes sit next to the catalogue.": "Werksführung und Kapazitätsnotizen neben dem Katalog.",
      "Share destination, volume and the format you have in mind.": "Ziel, Volumen und Wunschformat mitteilen.",
      "Factory context": "Fabrikkontext",
      "See how briefs become production paths.": "Wie aus Briefs Produktionswege werden.",
      "Share the product and destination. We will map format, print and documentation from there.": "Produkt und Ziel nennen — wir planen Format, Druck und Dokumentation.",
      "Reach the team with a live project.": "Mit einem konkreten Projekt zum Team.",
      "FAQ": "FAQ",
      "Practical answers before a production brief.": "Praktische Antworten vor der Anfrage.",
      "Shop by size & route": "Nach Größe & Route",
      "Shop by Size": "Nach Größe",
      "All Products": "Alle Produkte",
      "Get a Quote": "Angebot anfordern",
      "Packaging for the product context": "Verpackung für den Produktkontext",
      "Share your product and destination": "Produkt und Ziel mitteilen",
      "Common packaging questions": "Häufige Verpackungsfragen",
      "ZOMEEX / CUSTOM PACKAGING SYSTEM": "ZOMEEX / CUSTOM-PACKAGING-SYSTEM",
      "Packaging built for your next market.": "Verpackung für Ihren nächsten Markt.",
      "Factory-direct bags, boxes, jars and OEM/ODM support for regulated launches.": "Bags, Boxen und Gläser direkt ab Werk plus OEM/ODM-Support für regulierte Launches.",
      "CPSC / ASTM review route": "CPSC-/ASTM-Prüfweg",
      "10-Day Fast Turnaround": "10-Tage-Schnelldurchlauf",
      "Free Vector Dielines": "Kostenlose Vektor-Stanzlinien",
      "Get Custom Quote": "Individuelles Angebot anfordern",
      "Request Free Sample Kit": "Kostenloses Musterpaket anfordern",
      "FACTORY FILM / 00:27": "FABRIKFILM / 00:27",
      "LIVE LOOP": "LIVE-SCHLEIFE",
      "Rigid packaging systems": "Systeme für starre Verpackung",
      "Print, structure and shelf presence in one route.": "Druck, Struktur und Regalpräsenz in einem Weg.",
      "Built around your brief": "Rund um Ihren Brief gebaut",
      "Material, format and market in one conversation.": "Material, Format und Markt in einem Gespräch.",
      "One production route.": "Ein Produktionsweg.",
      "From artwork and material selection to a market-ready pack.": "Vom Artwork und der Materialwahl bis zur marktreifen Packung.",
      "Documentation route": "Dokumentationsweg",
      "Demo / verify scope": "Demo / Umfang prüfen",
      "Test standard": "Prüfstandard",
      "Demo / verify report": "Demo / Bericht prüfen",
      "Quality framework": "Qualitätsrahmen",
      "Demo / verify certificate": "Demo / Zertifikat prüfen",
      "Material review route": "Materialprüfweg",
      "Demo / verify application": "Demo / Anwendung prüfen",
      "Paper sourcing route": "Papierbeschaffungsweg",
      "Demo / verify chain": "Demo / Kette prüfen",
      "A clearer route from packaging brief to production.": "Ein klarerer Weg vom Verpackungs-Brief zur Produktion.",
      "Every touchpoint is designed for the decisions a procurement team needs to make.": "Jeder Kontaktpunkt ist für die Entscheidungen eines Einkaufsteams gemacht.",
      "Factory-Direct Pricing": "Preise direkt ab Werk",
      "Keep the commercial conversation close to the production route and the actual format.": "Das kaufmännische Gespräch bleibt nah an Produktion und Format.",
      "Market Documentation Review": "Prüfung der Marktdokumentation",
      "Review child-resistant structures and market documentation before a format is finalized.": "Kindergesicherte Strukturen und Marktdokumente vor der finalen Formatwahl prüfen.",
      "Bespoke Printing Crafts": "Individuelle Druckveredelung",
      "Choose materials, inks and special finishes that make the brand feel intentional.": "Materialien, Farben und Finishes, die die Marke durchdacht wirken lassen.",
      "Free Pre-Press Support": "Kostenlose Prepress-Unterstützung",
      "Start from an existing artwork file or get a dieline route for the next production step.": "Mit vorhandenem Artwork starten oder eine Stanzlinie für den nächsten Schritt erhalten.",
      "Choose the format first. Shape the details together.": "Zuerst das Format. Details gemeinsam formen.",
      "Barrier films, stand-up pouches and retail-ready formats.": "Barrierefolien, Standbodenbeutel und verkaufsfertige Formate.",
      "Printed Paper Boxes & Rigid Boxes": "Bedruckte Kartons & starre Boxen",
      "Folding cartons and rigid presentation boxes for shelf impact.": "Faltschachteln und starre Präsentboxen für Regalwirkung.",
      "Glass Jars & Concentrate Containers": "Glasgefäße & Konzentrat-Behälter",
      "Protective glass and concentrate formats with a considered fit.": "Schützendes Glas und Konzentrat-Formate mit durchdachter Passform.",
      "Pre-Roll Packaging & Tubes": "Pre-Roll-Verpackung & Tuben",
      "Tubes, wraps and display-ready formats for pre-roll lines.": "Tuben, Wraps und displayfertige Formate für Pre-Roll-Linien.",
      "Durable metal formats for a tactile, reusable presentation.": "Langlebige Metallformate für eine haptische, wiederverwendbare Präsentation.",
      "Corrugated POP Display Shelves": "Wellpappe-POP-Displays",
      "Retail display pieces that make the product easy to find.": "Retail-Displays, die das Produkt leicht auffindbar machen.",
      "Download 100+ Free Vector Dielines": "100+ kostenlose Vektor-Stanzlinien herunterladen",
      "AI and PDF starter files for the formats your team is already comparing.": "AI- und PDF-Startdateien für die Formate, die Ihr Team bereits vergleicht.",
      "Get the dieline pack": "Stanzlinien-Paket holen",
      "Order a Free Physical Sample Kit": "Kostenloses physisches Musterpaket bestellen",
      "$0 + shipping. Compare materials, closures and finishes before the production conversation.": "0 $ + Versand. Materialien, Verschlüsse und Finishes vor dem Produktionsgespräch vergleichen.",
            "Flower & Hemp": "Flower & Hemp",
      "Pre-Rolls & Joints": "Pre-Rolls & Joints",
      "Edibles & Gummies": "Edibles & Gummies",
      "Vape & Concentrates": "Vape & Konzentrate",
"Start with the product context.": "Mit dem Produktkontext starten.",
      "Swipe to explore": "Wischen zum Entdecken",
      "Craft, material and closure are part of the brief.": "Veredelung, Material und Verschluss sind Teil des Briefs.",
      "Talk through a finish": "Ein Finish besprechen",
      "Special Finishes": "Besondere Veredelungen",
      "Foil, spot UV, soft-touch coating and embossing can be explored against the substrate and artwork.": "Folie, partieller UV-Lack, Soft-Touch und Prägung passend zu Substrat und Artwork.",
      "Foil / UV / emboss": "Folie / UV / Prägung",
      "Sustainable Materials": "Nachhaltige Materialien",
      "Paper, board and recycled options can be reviewed alongside the intended shelf life and market.": "Papier, Karton und Recyclingoptionen passend zu Haltbarkeit und Markt prüfen.",
      "Paper / FSC / recycled": "Papier / FSC / recycelt",
      "Child-Resistant Locks": "Kindergesicherte Verschlüsse",
      "Discuss closures and test routes for the exact format before a compliance statement is published.": "Verschlüsse und Prüfwege für das genaue Format besprechen, bevor eine Compliance-Aussage veröffentlicht wird.",
      "Closure / test route / market": "Verschluss / Prüfweg / Markt",
      "Factory tour / 02": "Werksführung / 02",
      "A production view your team can work with.": "Eine Produktionssicht, mit der Ihr Team arbeiten kann.",
      "Use this section for the factory tour, verified production indicators and the quality checkpoints that matter to your market.": "Dieser Bereich dient der Werksführung, geprüften Produktionskennzahlen und marktrelevanten Qualitätspunkten.",
      "Modern production base": "Moderne Produktionsbasis",
      "Pieces daily capacity": "Stück Tageskapazität",
      "Inspection before shipment": "Inspektion vor dem Versand",
      "Global brands served": "Betreute globale Marken",
      "Mylar bags": "Mylar-Beutel",
      "Paper boxes": "Papierboxen",
      "Glass jars": "Glasgefäße",
      "Pre-roll packaging": "Pre-Roll-Verpackung",
      "Vape hardware": "Vape-Hardware",
      "POP displays": "POP-Displays",
      "10,000 units": "10.000 Stück",
      "50,000 units": "50.000 Stück",
      "100,000+ units": "100.000+ Stück",
      "Founder / owner": "Gründer / Inhaber",
      "Procurement": "Einkauf",
      "Product / R&D": "Produkt / F&E",
      "Brand / marketing": "Marke / Marketing",
      "Compliance / legal": "Compliance / Recht",
      "Distributor": "Händler",
      "Other": "Sonstiges",
      "Website": "Webseite",
      "Useful context for the next packaging decision.": "Nützlicher Kontext für die nächste Verpackungsentscheidung.",
      "View all insights": "Alle Insights ansehen",
      "Have the product. Need the right pack?": "Produkt vorhanden. Die richtige Packung fehlt?",
      "Start a focused quote": "Gezieltes Angebot starten",
      "Custom cannabis packaging, vape hardware and OEM/ODM support for teams building for a defined market.": "Individuelle Cannabis-Verpackung, Vape-Hardware und OEM/ODM-Support für Teams mit definiertem Zielmarkt.",
      "Mylar bags & pouches": "Mylar-Beutel & Pouches",
      "Paper & rigid boxes": "Papier- & starre Boxen",
      "Glass jars & containers": "Glasgefäße & Behälter",
      "Displays & merch": "Displays & Merch",
      "Packaging blog": "Verpackungs-Blog",
      "CR laws & regulations": "CR-Gesetze & -Vorschriften",
      "Factory tour": "Werksführung",
      "Talk to sales": "Vertrieb kontaktieren",
      "5th Floor, Fifth Zone, Ganghuaxing Industry Park, No. 118 YongFu Road, Shenzhen, China": "5th Floor, Fifth Zone, Ganghuaxing Industry Park, No. 118 YongFu Road, Shenzhen, China",
      "Mon-Fri / 09:00-18:00 CST": "Mo–Fr / 09:00–18:00 CST",
      "© 2026 ZOMEEX. All rights reserved.": "© 2026 ZOMEEX. Alle Rechte vorbehalten.",
      "Demo claims and legacy contact data must be verified before production launch.": "Demo-Angaben und alte Kontaktdaten müssen vor dem Launch geprüft werden."
    },
    fr: {
            "Packaging built for your next": "Un emballage conçu pour votre prochain",
      "market.": "marché.",
"Shop by product type": "Par type de produit",
      "Flexible Packaging": "Emballage souple",
      "Paper Packaging": "Emballage papier",
      "Bottles & Containers": "Bouteilles et contenants",
      "Metal Packaging": "Emballage métal",
      "Retail Displays & Merch": "PLV et goodies",
      "By application": "Par application",
      "Download Free Dielines": "Tracés gratuits",
      "Artwork Proof Checklist": "Checklist artwork",
      "Compliance Guides": "Guides de conformité",
      "Market and documentation context to review.": "Contexte marché et documentation à consulter.",
      "Featured / Quick order": "Sélection / Commande rapide",
      "Order a Free Sample Kit": "Commander un kit d'échantillons gratuit",
      "Feel the materials and quality before placing a bulk order.": "Touchez les matériaux et la qualité avant de commander en gros.",
      "Claim free sample kit": "Demander un kit gratuit",
      "Need quick help?": "Besoin d'aide rapide ?",
      "Start a conversation with our team": "Échanger avec notre équipe",
      "Child-resistant systems": "Systèmes child-resistant",
      "Match the format to the market.": "Adaptez le format au marché.",
      "Start a CR brief": "Démarrer un brief CR",
      "CR packaging formats": "Formats d'emballage CR",
      "Child-Resistant Mylar Bags": "Sachets Mylar child-resistant",
      "Barrier pouches with a CR route for flower and edibles.": "Poches barrières avec option CR pour flower et edibles.",
      "Child-Resistant Paper Boxes": "Boîtes papier child-resistant",
      "Printed cartons with a CR structure for retail presentation.": "Cartons imprimés avec structure CR pour la vente au détail.",
      "Child-Resistant Jars & Bottles": "Pots et bouteilles child-resistant",
      "Rigid formats for concentrates, capsules and liquid lines.": "Formats rigides pour concentrés, capsules et liquides.",
      "Child-Resistant Tubes": "Tubes child-resistant",
      "Unit-dose and pre-roll tubes with a CR closure path.": "Tubes unit-dose et pre-roll avec fermeture CR.",
      "How a CR brief moves": "Déroulement d'un brief CR",
      "Share the destination market": "Indiquez le marché cible",
      "The review route depends on where the pack will sell.": "Le parcours d'évaluation dépend du marché de vente.",
      "Match bag, box, jar or tube": "Choisir sachet, boîte, pot ou tube",
      "Choose the format first, then print and closure.": "D'abord le format, puis l'impression et la fermeture.",
      "Review documentation": "Vérifier la documentation",
      "Lock files against the market before production.": "Verrouillez les fichiers selon le marché avant production.",
      "Market-specific review": "Évaluation par marché",
      "Share destination and documentation needs.": "Indiquez la destination et les besoins documentaires.",
      "We review the format against the market before locking a CR route.": "Nous évaluons le format selon le marché avant de verrouiller la voie CR.",
      "Talk through a regulated launch": "Discuter d'un lancement réglementé",
      "Compliance & guidance": "Conformité et conseils",
      "CR Documentation": "Documentation CR",
      "Review files against the destination market.": "Vérifier les fichiers selon le marché cible.",
      "Child-Resistant FAQ": "FAQ child-resistant",
      "Answers for closures, tests and next steps.": "Réponses sur fermetures, tests et prochaines étapes.",
      "Request CR Dielines": "Demander des tracés CR",
      "Start from a format-ready AI or PDF file.": "Partez d'un fichier AI ou PDF prêt pour la production.",
      "Discuss Your Market": "Discuter de votre marché",
      "Share destination before locking a CR route.": "Indiquez la destination avant de verrouiller la voie CR.",
      "Solutions by application": "Solutions par application",
      "Start from the product, not the SKU.": "Partez du produit, pas de la référence.",
      "Barrier bags, jars and compliant presentation formats for flower and hemp products.": "Sachets barrières, pots et formats conformes pour produits flower et hemp.",
      "Protective tubes, wraps and secondary packaging for pre-roll programs.": "Tubes protecteurs, wraps et emballage secondaire pour programmes pre-roll.",
      "Printed boxes and pouches that keep edible ranges clear on shelf.": "Boîtes et poches imprimées pour une présentation claire des edibles.",
      "Vape hardware, concentrate containers and coordinated retail packaging.": "Hardware vape, contenants pour concentrés et emballage retail coordonné.",
      "Glass, tins and secondary packs for wax and extract lines.": "Verre, boîtes métal et packs secondaires pour gammes wax et extraits.",
      "Bottles, cartons and presentation formats for liquid products.": "Bouteilles, cartons et formats de présentation pour produits liquides.",
      "From concept to market-ready": "Du concept au produit prêt pour le marché",
      "Build a packaging route around the brief.": "Construisez un parcours d'emballage autour du brief.",
      "Share the product, destination and volume so we can map format, print and compliance.": "Partagez le produit, la destination et le volume pour que nous cartographiions format, impression et conformité.",
      "Project routes": "Parcours projet",
      "Map print, structure and volume around the brief.": "Cartographier impression, structure et volume autour du brief.",
      "Browse the full packaging catalogue.": "Parcourir tout le catalogue d'emballage.",
      "Browse the full packaging catalogue": "Parcourir tout le catalogue d'emballage.",
      "Get a quote": "Obtenir un devis",
      "Share product, destination and quantity.": "Indiquez produit, destination et quantité.",
      "Files, proofs and market context in one place.": "Fichiers, épreuves et contexte marché au même endroit.",
      "Request dielines": "Demander des tracés",
      "Tools": "Outils",
      "Free Dieline Templates": "Gabarits de tracé gratuits",
      "Start with a format-ready file": "Commencer avec un fichier prêt pour la production",
      "Upload Artwork": "Importer l'artwork",
      "Send files with your project brief": "Envoyez les fichiers avec votre brief",
      "Review market and documentation context": "Consulter le contexte marché et documentation",
      "Answers for the next decision": "Des réponses pour la prochaine décision",
      "From file to brief": "Du fichier au brief",
      "Send artwork": "Envoyer l'artwork",
      "Attach the working files to the same project brief.": "Joignez les fichiers de travail au même brief projet.",
      "Lock production notes": "Verrouiller les notes de production",
      "Market, quantity and finish travel with the file.": "Marché, quantité et finition accompagnent le fichier.",
      "Before production": "Avant la production",
      "Lock the file before you lock the run.": "Verrouillez le fichier avant de verrouiller le tirage.",
      "Dielines, artwork and documentation can travel with the same brief.": "Tracés, artwork et documentation voyagent avec le même brief.",
      "Upload artwork": "Importer l'artwork",
      "Next steps": "Prochaines étapes",
      "Request sample pack": "Demander un kit d'échantillons",
      "Compare materials and closures before production.": "Comparez matériaux et fermetures avant la production.",
      "Notes and market context": "Notes et contexte marché",
      "Read before you brief the next run.": "À lire avant de briefer le prochain tirage.",
      "View all notes": "Voir toutes les notes",
      "Resources": "Ressources",
      "Packaging Blog": "Blog emballage",
      "Product and manufacturing notes": "Notes produit et fabrication",
      "CR Laws & Regulations": "Lois et réglementations CR",
      "Market context to discuss with your team": "Contexte marché à discuter avec votre équipe",
      "Case Studies": "Études de cas",
      "See how briefs become build paths": "Voir comment les briefs deviennent des parcours de production",
      "What Is A Hot Knife Dab Tool?( ZOMEE X MELT KNIFE)": "Qu'est-ce qu'un Hot Knife Dab Tool ? (ZOMEE X MELT KNIFE)",
      "Hot Knife vs Traditional Dab Tool: Which One Is Better for You?": "Hot Knife ou dab tool classique : lequel vous convient ?",
      "Best Dab Tool for Dab Rigs, E-Rigs, and Wax Pens in 2025": "Le meilleur dab tool 2025 pour dab rigs, e-rigs et wax pens",
      "From the notes": "Extrait des notes",
      "Use the archive as decision support.": "Utilisez les archives comme aide à la décision.",
      "Production notes, market context and case paths sit next to the catalogue.": "Notes de production, contexte marché et cas clients à côté du catalogue.",
      "Open the notes": "Ouvrir les notes",
      "Keep going": "Continuer",
      "Short answers for the next packaging decision.": "Réponses courtes pour la prochaine décision d'emballage.",
      "Talk through destination, volume and format.": "Discuter destination, volume et format.",
      "A factory partner for regulated packaging.": "Un partenaire usine pour l'emballage réglementé.",
      "About Us": "À propos",
      "How ZOMEEX supports your brief": "Comment ZOMEEX accompagne votre brief",
      "Factory Tour": "Visite de l'usine",
      "Production context and capabilities": "Contexte de production et capacités",
      "Certifications": "Certifications",
      "Documents reviewed against the market": "Documents vérifiés selon le marché",
      "Contact Us": "Contactez-nous",
      "Talk through destination, volume and format": "Discuter destination, volume et format",
      "A factory conversation": "Une conversation avec l'usine",
      "See how ZOMEEX works": "Voir comment ZOMEEX travaille",
      "Company context for the next packaging brief.": "Contexte entreprise pour votre prochain brief.",
      "Review production context": "Consulter le contexte de production",
      "Factory tour and capability notes sit next to the catalogue.": "Visite d'usine et notes de capacité à côté du catalogue.",
      "Share destination, volume and the format you have in mind.": "Indiquez destination, volume et le format envisagé.",
      "Factory context": "Contexte usine",
      "See how briefs become production paths.": "Voir comment les briefs deviennent des parcours de production.",
      "Share the product and destination. We will map format, print and documentation from there.": "Partagez le produit et la destination. Nous planifions format, impression et documentation.",
      "Reach the team with a live project.": "Contactez l'équipe avec un projet concret.",
      "FAQ": "FAQ",
      "Practical answers before a production brief.": "Réponses pratiques avant un brief de production.",
      "Shop by size & route": "Par taille et parcours",
      "Shop by Size": "Par taille",
      "All Products": "Tous les produits",
      "Get a Quote": "Obtenir un devis",
      "Packaging for the product context": "Un emballage adapté au contexte produit",
      "Share your product and destination": "Partagez votre produit et destination",
      "Common packaging questions": "Questions fréquentes sur l'emballage",
      "ZOMEEX / CUSTOM PACKAGING SYSTEM": "ZOMEEX / SYSTÈME D'EMBALLAGE SUR MESURE",
      "Packaging built for your next market.": "Un emballage conçu pour votre prochain marché.",
      "Factory-direct bags, boxes, jars and OEM/ODM support for regulated launches.": "Sachets, boîtes et pots direct usine, avec support OEM/ODM pour lancements réglementés.",
      "CPSC / ASTM review route": "Parcours d'évaluation CPSC / ASTM",
      "10-Day Fast Turnaround": "Délai rapide de 10 jours",
      "Free Vector Dielines": "Tracés vectoriels gratuits",
      "Get Custom Quote": "Obtenir un devis sur mesure",
      "Request Free Sample Kit": "Demander un kit d'échantillons gratuit",
      "FACTORY FILM / 00:27": "FILM USINE / 00:27",
      "LIVE LOOP": "BOUCLE LIVE",
      "Rigid packaging systems": "Systèmes d'emballage rigide",
      "Print, structure and shelf presence in one route.": "Impression, structure et présence en rayon en un seul parcours.",
      "Built around your brief": "Construit autour de votre brief",
      "Material, format and market in one conversation.": "Matière, format et marché en une seule conversation.",
      "One production route.": "Un seul parcours de production.",
      "From artwork and material selection to a market-ready pack.": "De l'artwork et du choix des matériaux au pack prêt pour le marché.",
      "Documentation route": "Parcours documentaire",
      "Demo / verify scope": "Démo / périmètre à vérifier",
      "Test standard": "Norme de test",
      "Demo / verify report": "Démo / rapport à vérifier",
      "Quality framework": "Cadre qualité",
      "Demo / verify certificate": "Démo / certificat à vérifier",
      "Material review route": "Parcours d'évaluation matière",
      "Demo / verify application": "Démo / application à vérifier",
      "Paper sourcing route": "Parcours d'approvisionnement papier",
      "Demo / verify chain": "Démo / chaîne à vérifier",
      "A clearer route from packaging brief to production.": "Un parcours plus clair, du brief d'emballage à la production.",
      "Every touchpoint is designed for the decisions a procurement team needs to make.": "Chaque point de contact est conçu pour les décisions d'une équipe achats.",
      "Factory-Direct Pricing": "Prix direct usine",
      "Keep the commercial conversation close to the production route and the actual format.": "La discussion commerciale reste proche de la production et du format réel.",
      "Market Documentation Review": "Revue de la documentation marché",
      "Review child-resistant structures and market documentation before a format is finalized.": "Vérifiez les structures child-resistant et la documentation marché avant de finaliser le format.",
      "Bespoke Printing Crafts": "Impression sur mesure",
      "Choose materials, inks and special finishes that make the brand feel intentional.": "Choisissez matières, encres et finitions qui donnent du sens à la marque.",
      "Free Pre-Press Support": "Support pré-presse gratuit",
      "Start from an existing artwork file or get a dieline route for the next production step.": "Partez d'un fichier artwork existant ou obtenez un tracé pour l'étape suivante.",
      "Choose the format first. Shape the details together.": "Choisissez d'abord le format. Façonnons les détails ensemble.",
      "Barrier films, stand-up pouches and retail-ready formats.": "Films barrières, doypacks et formats prêts pour le retail.",
      "Printed Paper Boxes & Rigid Boxes": "Boîtes papier imprimées et rigides",
      "Folding cartons and rigid presentation boxes for shelf impact.": "Cartons pliants et coffrets rigides pour l'impact en rayon.",
      "Glass Jars & Concentrate Containers": "Pots en verre et contenants pour concentrés",
      "Protective glass and concentrate formats with a considered fit.": "Verre protecteur et formats pour concentrés avec ajustement soigné.",
      "Pre-Roll Packaging & Tubes": "Emballage et tubes pre-roll",
      "Tubes, wraps and display-ready formats for pre-roll lines.": "Tubes, wraps et formats prêts pour la présentation pre-roll.",
      "Durable metal formats for a tactile, reusable presentation.": "Formats métal durables pour une présentation tactile et réutilisable.",
      "Corrugated POP Display Shelves": "Présentoirs POP en carton ondulé",
      "Retail display pieces that make the product easy to find.": "Des présentoirs retail qui rendent le produit facile à repérer.",
      "Download 100+ Free Vector Dielines": "Télécharger plus de 100 tracés vectoriels gratuits",
      "AI and PDF starter files for the formats your team is already comparing.": "Fichiers de départ AI et PDF pour les formats que votre équipe compare déjà.",
      "Get the dieline pack": "Obtenir le pack de tracés",
      "Order a Free Physical Sample Kit": "Commander un kit d'échantillons physiques gratuit",
      "$0 + shipping. Compare materials, closures and finishes before the production conversation.": "0 $ + frais de port. Comparez matières, fermetures et finitions avant la discussion production.",
            "Flower & Hemp": "Flower et hemp",
      "Pre-Rolls & Joints": "Pre-rolls et joints",
      "Edibles & Gummies": "Edibles et gummies",
      "Vape & Concentrates": "Vape et concentrés",
"Start with the product context.": "Commencez par le contexte produit.",
      "Swipe to explore": "Glissez pour explorer",
      "Craft, material and closure are part of the brief.": "Finition, matière et fermeture font partie du brief.",
      "Talk through a finish": "Discuter d'une finition",
      "Special Finishes": "Finitions spéciales",
      "Foil, spot UV, soft-touch coating and embossing can be explored against the substrate and artwork.": "Foil, UV sélectif, soft-touch et embossage peuvent être évalués selon le support et l'artwork.",
      "Foil / UV / emboss": "Foil / UV / embossage",
      "Sustainable Materials": "Matériaux durables",
      "Paper, board and recycled options can be reviewed alongside the intended shelf life and market.": "Papier, carton et options recyclées peuvent être évalués selon la durée de vie et le marché.",
      "Paper / FSC / recycled": "Papier / FSC / recyclé",
      "Child-Resistant Locks": "Fermetures child-resistant",
      "Discuss closures and test routes for the exact format before a compliance statement is published.": "Discutez des fermetures et des parcours de test pour le format exact avant toute déclaration de conformité.",
      "Closure / test route / market": "Fermeture / parcours de test / marché",
      "Factory tour / 02": "Visite d'usine / 02",
      "A production view your team can work with.": "Une vision de production exploitable par votre équipe.",
      "Use this section for the factory tour, verified production indicators and the quality checkpoints that matter to your market.": "Cette section présente la visite d'usine, les indicateurs de production vérifiés et les points de contrôle qualité importants pour votre marché.",
      "Modern production base": "Base de production moderne",
      "Pieces daily capacity": "pièces de capacité quotidienne",
      "Inspection before shipment": "Inspection avant expédition",
      "Global brands served": "Marques internationales servies",
      "Mylar bags": "Sachets Mylar",
      "Paper boxes": "Boîtes papier",
      "Glass jars": "Pots en verre",
      "Pre-roll packaging": "Emballage pre-roll",
      "Vape hardware": "Hardware vape",
      "POP displays": "Présentoirs POP",
      "10,000 units": "10 000 pièces",
      "50,000 units": "50 000 pièces",
      "100,000+ units": "100 000+ pièces",
      "Founder / owner": "Fondateur / dirigeant",
      "Procurement": "Achats",
      "Product / R&D": "Produit / R&D",
      "Brand / marketing": "Marque / marketing",
      "Compliance / legal": "Conformité / juridique",
      "Distributor": "Distributeur",
      "Other": "Autre",
      "Website": "Site web",
      "Useful context for the next packaging decision.": "Un contexte utile pour la prochaine décision d'emballage.",
      "View all insights": "Voir toutes les analyses",
      "Have the product. Need the right pack?": "Vous avez le produit. Il vous faut le bon emballage ?",
      "Start a focused quote": "Démarrer un devis ciblé",
      "Custom cannabis packaging, vape hardware and OEM/ODM support for teams building for a defined market.": "Emballage cannabis sur mesure, hardware vape et support OEM/ODM pour les équipes visant un marché défini.",
      "Mylar bags & pouches": "Sachets et poches Mylar",
      "Paper & rigid boxes": "Boîtes papier et rigides",
      "Glass jars & containers": "Pots et contenants en verre",
      "Displays & merch": "Présentoirs et goodies",
      "Packaging blog": "Blog emballage",
      "CR laws & regulations": "Lois et réglementations CR",
      "Factory tour": "Visite d'usine",
      "Talk to sales": "Contacter les ventes",
      "5th Floor, Fifth Zone, Ganghuaxing Industry Park, No. 118 YongFu Road, Shenzhen, China": "5th Floor, Fifth Zone, Ganghuaxing Industry Park, No. 118 YongFu Road, Shenzhen, China",
      "Mon-Fri / 09:00-18:00 CST": "Lun–ven / 09:00–18:00 CST",
      "© 2026 ZOMEEX. All rights reserved.": "© 2026 ZOMEEX. Tous droits réservés.",
      "Demo claims and legacy contact data must be verified before production launch.": "Les déclarations de démo et les anciennes coordonnées doivent être vérifiées avant le lancement."
    }
  };
  Object.keys(FULL_COVERAGE_EXTRA_BY_SOURCE).forEach(function (locale) {
    EXTRA_BY_SOURCE[locale] = Object.assign(EXTRA_BY_SOURCE[locale] || {}, FULL_COVERAGE_EXTRA_BY_SOURCE[locale]);
  });
  /* Mega-menu catalog groups & children (products dropdown redesign). */
  var MEGAMENU_CATALOG_EXTRA_BY_SOURCE = {
    'zh-CN': {
      "Labels & Stickers": "标签与贴纸",
      "Retail Displays": "零售展示",
      "Brand Launch & Marketing Kits": "品牌上市与营销套装",
      "Bottles & Containers": "瓶类与容器",
      "Zipper Bags": "拉链袋",
      "Aluminum Foil Pouches": "铝箔袋",
      "Stand-Up Pouches": "自立袋",
      "Flat Pouches": "平口袋",
      "Child-Resistant Pouches": "防儿童开启袋",
      "Cigar Humidor Bags": "雪茄保湿袋",
      "Food Packaging Bags": "食品包装袋",
      "Heat-Sealable Bags": "热封袋",
      "Shrink Film": "收缩膜",
      "Folding Cartons": "折叠纸盒",
      "Cannabis Boxes": "大麻产品盒",
      "Pre-Roll Boxes": "预卷盒",
      "Tuck-End Boxes": "插底纸盒",
      "Child-Resistant Boxes": "防儿童开启纸盒",
      "Inserts": "内托",
      "Custom Printed Boxes": "定制印刷盒",
      "Blister Cards": "吸塑背卡",
      "Gift Boxes": "礼盒",
      "HDPE Bottles": "HDPE 瓶",
      "PET Bottles": "PET 瓶",
      "Child-Resistant Bottles": "防儿童开启瓶",
      "Glass Jars": "玻璃罐",
      "Product Containers": "产品容器",
      "Child-Resistant Pop-Top Tubes": "儿童弹跳管",
      "Pop-Top Bottles": "弹跳瓶",
      "Metal Tins": "金属罐",
      "Tin Boxes": "马口铁盒",
      "Sliding Tins": "滑盖罐",
      "Screw-Top Tins": "螺旋盖铁罐",
      "Custom Metal Containers": "定制金属容器",
      "Cannabis Labels": "大麻产品标签",
      "Product Labels": "产品标签",
      "Compliance Labels": "合规标签",
      "Die-Cut Labels": "模切标签",
      "Roll Labels": "卷筒标签",
      "Foil Labels": "烫金标签",
      "Custom Stickers": "定制贴纸",
      "Anti-Counterfeit Labels": "防伪标签",
      "Countertop Displays": "台面展示架",
      "Floor Displays": "落地展示架",
      "Corrugated Displays": "瓦楞展示架",
      "Retail Trays": "零售托盘",
      "Product Display Boxes": "产品展示盒",
      "Dispensary Displays": "药房展示架",
      "Sample Kits": "样品套装",
      "Promotional Kits": "促销套装",
      "Brand Cards": "品牌卡片",
      "Stickers": "贴纸",
      "Thank-You Cards": "致谢卡片",
      "Product Cards": "产品卡片",
      "Retail Marketing Materials": "零售营销物料",
      "Brand Launch Packaging Kits": "品牌上市包装套装"
    },
    ru: {
      "Labels & Stickers": "Этикетки и наклейки",
      "Retail Displays": "Ритейл-дисплеи",
      "Brand Launch & Marketing Kits": "Наборы для запуска бренда и маркетинга",
      "Bottles & Containers": "Бутылки и контейнеры",
      "Zipper Bags": "Пакеты с зиплоком",
      "Aluminum Foil Pouches": "Алюминиевые пакеты из фольги",
      "Stand-Up Pouches": "Дой-паки",
      "Flat Pouches": "Плоские пакеты",
      "Child-Resistant Pouches": "Детозащищенные пакеты",
      "Cigar Humidor Bags": "Увлажняющие пакеты для сигар",
      "Food Packaging Bags": "Пакеты для пищевых продуктов",
      "Heat-Sealable Bags": "Термосвариваемые пакеты",
      "Shrink Film": "Термоусадочная пленка",
      "Folding Cartons": "Фальцованные коробки",
      "Cannabis Boxes": "Коробки для cannabis",
      "Pre-Roll Boxes": "Коробки для pre-roll",
      "Tuck-End Boxes": "Коробки с защелкивающимся дном",
      "Child-Resistant Boxes": "Детозащищенные коробки",
      "Inserts": "Вкладыши",
      "Custom Printed Boxes": "Коробки с индивидуальной печатью",
      "Blister Cards": "Блистерные карты",
      "Gift Boxes": "Подарочные коробки",
      "HDPE Bottles": "Бутылки HDPE",
      "PET Bottles": "Бутылки PET",
      "Child-Resistant Bottles": "Детозащищенные бутылки",
      "Glass Jars": "Стеклянные банки",
      "Product Containers": "Контейнеры для продукции",
      "Child-Resistant Pop-Top Tubes": "Детозащищенные тубы pop-top",
      "Pop-Top Bottles": "Бутылки pop-top",
      "Metal Tins": "Металлические банки",
      "Tin Boxes": "Жестяные коробки",
      "Sliding Tins": "Банки с раздвижной крышкой",
      "Screw-Top Tins": "Банки с винтовой крышкой",
      "Custom Metal Containers": "Металлические контейнеры на заказ",
      "Cannabis Labels": "Этикетки для cannabis",
      "Product Labels": "Продуктовые этикетки",
      "Compliance Labels": "Этикетки соответствия",
      "Die-Cut Labels": "Этикетки высечки",
      "Roll Labels": "Рулонные этикетки",
      "Foil Labels": "Этикетки с фольгой",
      "Custom Stickers": "Наклейки на заказ",
      "Anti-Counterfeit Labels": "Защитные этикетки",
      "Countertop Displays": "Настольные дисплеи",
      "Floor Displays": "Напольные дисплеи",
      "Corrugated Displays": "Дисплеи из гофрокартона",
      "Retail Trays": "Ритейл-лотки",
      "Product Display Boxes": "Презентационные коробки",
      "Dispensary Displays": "Дисплеи для диспансеров",
      "Sample Kits": "Наборы образцов",
      "Promotional Kits": "Промо-наборы",
      "Brand Cards": "Бренд-карты",
      "Stickers": "Наклейки",
      "Thank-You Cards": "Благодарственные карточки",
      "Product Cards": "Продуктовые карточки",
      "Retail Marketing Materials": "Маркетинговые материалы для ритейла",
      "Brand Launch Packaging Kits": "Наборы упаковки для запуска бренда"
    },
    de: {
      "Labels & Stickers": "Etiketten & Aufkleber",
      "Retail Displays": "Retail-Displays",
      "Brand Launch & Marketing Kits": "Brand-Launch- & Marketing-Kits",
      "Bottles & Containers": "Flaschen & Behälter",
      "Zipper Bags": "Reißverschlussbeutel",
      "Aluminum Foil Pouches": "Aluminiumfolien-Beutel",
      "Stand-Up Pouches": "Standbodenbeutel",
      "Flat Pouches": "Flachbeutel",
      "Child-Resistant Pouches": "Kindergesicherte Beutel",
      "Cigar Humidor Bags": "Zigarren-Humidorbeutel",
      "Food Packaging Bags": "Lebensmittelverpackungsbeutel",
      "Heat-Sealable Bags": "Heißsiegelbeutel",
      "Shrink Film": "Schrumpffolie",
      "Folding Cartons": "Faltschachteln",
      "Cannabis Boxes": "Cannabis-Boxen",
      "Pre-Roll Boxes": "Pre-Roll-Boxen",
      "Tuck-End Boxes": "Stecklaschen-Kartons",
      "Child-Resistant Boxes": "Kindergesicherte Kartons",
      "Inserts": "Einlagen",
      "Custom Printed Boxes": "Individuell bedruckte Kartons",
      "Blister Cards": "Blisterkarten",
      "Gift Boxes": "Geschenkboxen",
      "HDPE Bottles": "HDPE-Flaschen",
      "PET Bottles": "PET-Flaschen",
      "Child-Resistant Bottles": "Kindergesicherte Flaschen",
      "Glass Jars": "Glasgefäße",
      "Product Containers": "Produktbehälter",
      "Child-Resistant Pop-Top Tubes": "Kindergesicherte Pop-Top-Tuben",
      "Pop-Top Bottles": "Pop-Top-Flaschen",
      "Metal Tins": "Metalldosen",
      "Tin Boxes": "Weißblechboxen",
      "Sliding Tins": "Schiebedeckeldosen",
      "Screw-Top Tins": "Schraubdeckeldosen",
      "Custom Metal Containers": "Individuelle Metallbehälter",
      "Cannabis Labels": "Cannabis-Etiketten",
      "Product Labels": "Produktetiketten",
      "Compliance Labels": "Compliance-Etiketten",
      "Die-Cut Labels": "Stanzetiketten",
      "Roll Labels": "Rollenetiketten",
      "Foil Labels": "Folienetiketten",
      "Custom Stickers": "Individuelle Aufkleber",
      "Anti-Counterfeit Labels": "Fälschungssichere Etiketten",
      "Countertop Displays": "Thekendisplays",
      "Floor Displays": "Bodendisplays",
      "Corrugated Displays": "Wellpappen-Displays",
      "Retail Trays": "Retail-Tabletts",
      "Product Display Boxes": "Produkt-Displayboxen",
      "Dispensary Displays": "Dispensary-Displays",
      "Sample Kits": "Musterkits",
      "Promotional Kits": "Promo-Kits",
      "Brand Cards": "Markenkarten",
      "Stickers": "Aufkleber",
      "Thank-You Cards": "Dankeskarten",
      "Product Cards": "Produktkarten",
      "Retail Marketing Materials": "Retail-Marketingmaterialien",
      "Brand Launch Packaging Kits": "Brand-Launch-Verpackungskits"
    },
    fr: {
      "Labels & Stickers": "Étiquettes et stickers",
      "Retail Displays": "Présentoirs retail",
      "Brand Launch & Marketing Kits": "Kits de lancement et marketing",
      "Bottles & Containers": "Bouteilles et contenants",
      "Zipper Bags": "Sachets zip",
      "Aluminum Foil Pouches": "Poches en aluminium",
      "Stand-Up Pouches": "Doypacks",
      "Flat Pouches": "Poches plates",
      "Child-Resistant Pouches": "Poches child-resistant",
      "Cigar Humidor Bags": "Sachets humectants pour cigares",
      "Food Packaging Bags": "Sachets alimentaires",
      "Heat-Sealable Bags": "Sachets thermoscellables",
      "Shrink Film": "Film rétractable",
      "Folding Cartons": "Cartons pliants",
      "Cannabis Boxes": "Boîtes cannabis",
      "Pre-Roll Boxes": "Boîtes pre-roll",
      "Tuck-End Boxes": "Boîtes à rabats",
      "Child-Resistant Boxes": "Boîtes child-resistant",
      "Inserts": "Inserts",
      "Custom Printed Boxes": "Boîtes imprimées sur mesure",
      "Blister Cards": "Cartes blister",
      "Gift Boxes": "Coffrets cadeaux",
      "HDPE Bottles": "Bouteilles HDPE",
      "PET Bottles": "Bouteilles PET",
      "Child-Resistant Bottles": "Bouteilles child-resistant",
      "Glass Jars": "Pots en verre",
      "Product Containers": "Contenants produits",
      "Child-Resistant Pop-Top Tubes": "Tubes pop-top child-resistant",
      "Pop-Top Bottles": "Bouteilles pop-top",
      "Metal Tins": "Boîtes métal",
      "Tin Boxes": "Boîtes en fer-blanc",
      "Sliding Tins": "Boîtes à couvercle coulissant",
      "Screw-Top Tins": "Boîtes à vis",
      "Custom Metal Containers": "Contenants métal sur mesure",
      "Cannabis Labels": "Étiquettes cannabis",
      "Product Labels": "Étiquettes produits",
      "Compliance Labels": "Étiquettes de conformité",
      "Die-Cut Labels": "Étiquettes découpées",
      "Roll Labels": "Étiquettes en rouleau",
      "Foil Labels": "Étiquettes à foil",
      "Custom Stickers": "Stickers sur mesure",
      "Anti-Counterfeit Labels": "Étiquettes anti-contrefaçon",
      "Countertop Displays": "Présentoirs de comptoir",
      "Floor Displays": "Présentoirs de sol",
      "Corrugated Displays": "Présentoirs en carton ondulé",
      "Retail Trays": "Plateaux retail",
      "Product Display Boxes": "Boîtes de présentation",
      "Dispensary Displays": "Présentoirs dispensary",
      "Sample Kits": "Kits d'échantillons",
      "Promotional Kits": "Kits promotionnels",
      "Brand Cards": "Cartes de marque",
      "Stickers": "Stickers",
      "Thank-You Cards": "Cartes de remerciement",
      "Product Cards": "Cartes produits",
      "Retail Marketing Materials": "Supports marketing retail",
      "Brand Launch Packaging Kits": "Kits d'emballage de lancement de marque"
    }
  };
  Object.keys(MEGAMENU_CATALOG_EXTRA_BY_SOURCE).forEach(function (locale) {
    EXTRA_BY_SOURCE[locale] = Object.assign(EXTRA_BY_SOURCE[locale] || {}, MEGAMENU_CATALOG_EXTRA_BY_SOURCE[locale]);
  });

  /* WHY ZOMEEX advantages section (front page section 3). */
  var ADVANTAGES_EXTRA_BY_SOURCE = {
    'zh-CN': {
      "View all": "查看全部", "View capability": "查看能力", "WHY ZOMEEX": "为什么选择 ZOMEEX",
      "View full-size image": "查看完整大图",
      "More Than Packaging.": "不止是包装。",
      "Your Strategic Cannabis Sourcing Partner.": "您的大麻采购战略伙伴。",
      "We engineer fully compliant, retail-ready packaging systems that protect your product, simplify your supply chain, and scale your cannabis brand.": "我们打造完全合规、可直接上架的包装体系，保护你的产品、简化供应链，并助力大麻品牌规模化发展。",
      "The Fit:": "适配：", "The Protection:": "合规保障：", "The Supply Chain:": "供应链：", "The Advantage:": "品牌优势：", "Key Specs": "关键规格", "Shelf Impact": "货架表现", "Trend-Led Finishes": "趋势工艺",
      "Precision-Engineered Product Fit": "精密工程化产品适配",
      "Custom Structural Design & Exact Dielines": "定制结构设计与精准刀模",
      "We custom-engineer dielines, dimensions, and barrier materials around your exact product specs, ensuring a precise fit for flower, edibles, vapes, and concentrates.": "我们围绕你的精确产品规格定制刀模、尺寸与阻隔材料，确保花材、食品、雾化器与浓缩物的精准适配。",
      "Custom Dielines": "定制刀模",
      "Barrier Materials": "阻隔材料",
      "Precision Inserts": "精密内托",
      "Structural Integrity": "结构强度",
      "Product Compatibility": "产品兼容性",
      "Compliance & Market Readiness": "合规与上市准备",
      "Child-Resistant & Sustainable Solutions": "儿童防护与可持续方案",
      "Stay launch-ready with fully certified Child-Resistant (CR) packaging and eco-friendly materials designed to seamlessly satisfy strict multi-state regulations.": "凭借全认证的儿童防护（CR）包装与环保材料，轻松满足美国各州严苛法规，随时做好上市准备。",
      "CR Certified Packaging": "CR 认证包装",
      "Sustainable & Recyclable Options": "可持续与可回收选项",
      "ASTM Standards": "ASTM 标准",
      "Multi-State Compliance": "多州合规",
      "Tamper-Evident Seals": "防拆封条",
      "End-to-End Packaging Systems": "端到端包装体系",
      "From Primary Packaging to Retail & Shipping": "从主包装到零售与运输",
      "Consolidate your sourcing under one roof. We seamlessly pair primary containers with secondary boxes, POP displays, and master shippers for brand consistency.": "一站式整合采购。我们将主容器与二次包装盒、POP 展示架和运输大箱无缝配套，保持品牌一致性。",
      "Pouches & Jars": "软袋与罐装",
      "Secondary Rigid Boxes": "二次硬盒",
      "POP Dispensary Displays": "POP 药房展示架",
      "Rigid Master Cartons": "硬质运输大箱",
      "Turnkey Sourcing": "交钥匙采购",
      "Retail-Ready Brand Innovation": "零售就绪的品牌创新",
      "Disruptive Finishes & Market Trends": "颠覆性工艺与市场趋势",
      "Dominate dispensary shelf space with premium finishes, tactile textures, and trend-setting unboxing experiences that drive repeat customer purchases.": "以高级工艺、触感肌理与引领潮流的开箱体验，主导药房货架空间，驱动消费者复购。",
      "Spot UV & Foil Stamping": "局部 UV 与烫金",
      "Soft-Touch Coating": "触感膜",
      "Anti-Counterfeiting Features": "防伪工艺",
      "Custom Unboxing Experience": "定制开箱体验"
    },
    ru: {
      "View all": "Смотреть все", "View capability": "Смотреть направление", "WHY ZOMEEX": "ПОЧЕМУ ZOMEEX",
      "View full-size image": "Посмотреть изображение в полном размере",
      "More Than Packaging.": "Больше, чем упаковка.",
      "Your Strategic Cannabis Sourcing Partner.": "Ваш стратегический партнер по закупкам cannabis.",
      "We engineer fully compliant, retail-ready packaging systems that protect your product, simplify your supply chain, and scale your cannabis brand.": "Мы создаем полностью compliant упаковочные системы, готовые к ритейлу: защищаем продукт, упрощаем цепочку поставок и масштабируем ваш cannabis-бренд.",
      "The Fit:": "Посадка:", "The Protection:": "Защита:", "The Supply Chain:": "Цепочка поставок:", "The Advantage:": "Преимущество:", "Key Specs": "Ключевые характеристики", "Shelf Impact": "Эффект на полке", "Trend-Led Finishes": "Трендовая отделка",
      "Precision-Engineered Product Fit": "Точная инженерная подгонка продукта",
      "Custom Structural Design & Exact Dielines": "Индивидуальный конструктив и точные высечки",
      "We custom-engineer dielines, dimensions, and barrier materials around your exact product specs, ensuring a precise fit for flower, edibles, vapes, and concentrates.": "Мы проектируем высечки, размеры и барьерные материалы под ваши точные спецификации, обеспечивая точную посадку для flower, edibles, вейпов и концентратов.",
      "Custom Dielines": "Индивидуальные высечки",
      "Barrier Materials": "Барьерные материалы",
      "Precision Inserts": "Прецизионные вкладыши",
      "Structural Integrity": "Структурная прочность",
      "Product Compatibility": "Совместимость с продуктом",
      "Compliance & Market Readiness": "Соответствие и готовность к рынку",
      "Child-Resistant & Sustainable Solutions": "Детозащищенные и экологичные решения",
      "Stay launch-ready with fully certified Child-Resistant (CR) packaging and eco-friendly materials designed to seamlessly satisfy strict multi-state regulations.": "Будьте готовы к запуску с полностью сертифицированной CR-упаковкой и экологичными материалами, отвечающими строгим требованиям разных штатов.",
      "CR Certified Packaging": "Сертифицированная CR-упаковка",
      "Sustainable & Recyclable Options": "Экологичные и перерабатываемые варианты",
      "ASTM Standards": "Стандарты ASTM",
      "Multi-State Compliance": "Соответствие требованиям штатов",
      "Tamper-Evident Seals": "Индикаторы вскрытия",
      "End-to-End Packaging Systems": "Комплексные упаковочные системы",
      "From Primary Packaging to Retail & Shipping": "От первичной упаковки до ритейла и доставки",
      "Consolidate your sourcing under one roof. We seamlessly pair primary containers with secondary boxes, POP displays, and master shippers for brand consistency.": "Консолидируйте закупки под одной крышей. Мы комплектуем первичную тару с вторичными коробками, POP-дисплеями и транспортными коробами для единообразия бренда.",
      "Pouches & Jars": "Паучи и банки",
      "Secondary Rigid Boxes": "Вторичные жесткие коробки",
      "POP Dispensary Displays": "POP-дисплеи для диспансеров",
      "Rigid Master Cartons": "Жесткие транспортные короба",
      "Turnkey Sourcing": "Закупки под ключ",
      "Retail-Ready Brand Innovation": "Инновации бренда для ритейла",
      "Disruptive Finishes & Market Trends": "Прорывная отделка и рыночные тренды",
      "Dominate dispensary shelf space with premium finishes, tactile textures, and trend-setting unboxing experiences that drive repeat customer purchases.": "Доминируйте на полках диспансеров с премиальной отделкой, тактильными текстурами и трендовым unboxing-опытом, который возвращает покупателей.",
      "Spot UV & Foil Stamping": "Выборочный УФ-лак и фольга",
      "Soft-Touch Coating": "Soft-touch покрытие",
      "Anti-Counterfeiting Features": "Защита от подделок",
      "Custom Unboxing Experience": "Индивидуальный unboxing-опыт"
    },
    de: {
      "View all": "Alle ansehen", "View capability": "Route ansehen", "WHY ZOMEEX": "WARUM ZOMEEX",
      "View full-size image": "Bild in voller Größe ansehen",
      "More Than Packaging.": "Mehr als Verpackung.",
      "Your Strategic Cannabis Sourcing Partner.": "Ihr strategischer Cannabis-Beschaffungspartner.",
      "We engineer fully compliant, retail-ready packaging systems that protect your product, simplify your supply chain, and scale your cannabis brand.": "Wir entwickeln vollständig konforme, verkaufsfertige Verpackungssysteme, die Ihr Produkt schützen, Ihre Lieferkette vereinfachen und Ihre Cannabis-Marke skalieren.",
      "The Fit:": "Die Passform:", "The Protection:": "Der Schutz:", "The Supply Chain:": "Die Lieferkette:", "The Advantage:": "Der Vorteil:", "Key Specs": "Kerndaten", "Shelf Impact": "Regalwirkung", "Trend-Led Finishes": "Trend-Finishes",
      "Precision-Engineered Product Fit": "Präzisionsgefertigte Produktpassform",
      "Custom Structural Design & Exact Dielines": "Individuelles Strukturdesign & exakte Stanzlinien",
      "We custom-engineer dielines, dimensions, and barrier materials around your exact product specs, ensuring a precise fit for flower, edibles, vapes, and concentrates.": "Wir entwickeln Stanzlinien, Maße und Barrierematerialien exakt nach Ihren Produktspezifikationen, für eine präzise Passform bei Flower, Edibles, Vapes und Konzentraten.",
      "Custom Dielines": "Individuelle Stanzlinien",
      "Barrier Materials": "Barrierematerialien",
      "Precision Inserts": "Präzisionseinlagen",
      "Structural Integrity": "Strukturelle Integrität",
      "Product Compatibility": "Produktkompatibilität",
      "Compliance & Market Readiness": "Compliance & Marktreife",
      "Child-Resistant & Sustainable Solutions": "Kindergesicherte & nachhaltige Lösungen",
      "Stay launch-ready with fully certified Child-Resistant (CR) packaging and eco-friendly materials designed to seamlessly satisfy strict multi-state regulations.": "Bleiben Sie startbereit mit vollständig zertifizierter kindergesicherter (CR) Verpackung und umweltfreundlichen Materialien, die strikte Multi-State-Vorschriften erfüllen.",
      "CR Certified Packaging": "CR-zertifizierte Verpackung",
      "Sustainable & Recyclable Options": "Nachhaltige & recycelbare Optionen",
      "ASTM Standards": "ASTM-Normen",
      "Multi-State Compliance": "Multi-State-Compliance",
      "Tamper-Evident Seals": "Manipulationssichere Siegel",
      "End-to-End Packaging Systems": "End-to-End-Verpackungssysteme",
      "From Primary Packaging to Retail & Shipping": "Von der Primärverpackung bis Retail & Versand",
      "Consolidate your sourcing under one roof. We seamlessly pair primary containers with secondary boxes, POP displays, and master shippers for brand consistency.": "Konsolidieren Sie Ihre Beschaffung unter einem Dach. Wir kombinieren Primärbehälter nahtlos mit Sekundärkartons, POP-Displays und Master-Shippern für Markenkonsistenz.",
      "Pouches & Jars": "Beutel & Gläser",
      "Secondary Rigid Boxes": "Starre Sekundärkartons",
      "POP Dispensary Displays": "POP-Dispensary-Displays",
      "Rigid Master Cartons": "Starre Master-Kartons",
      "Turnkey Sourcing": "Turnkey-Beschaffung",
      "Retail-Ready Brand Innovation": "Retail-taugliche Markeninnovation",
      "Disruptive Finishes & Market Trends": "Disruptive Finishes & Markttrends",
      "Dominate dispensary shelf space with premium finishes, tactile textures, and trend-setting unboxing experiences that drive repeat customer purchases.": "Dominieren Sie die Dispensary-Regale mit Premium-Finishes, taktilen Texturen und trendsetzenden Unboxing-Erlebnissen, die Wiederkäufe fördern.",
      "Spot UV & Foil Stamping": "Partieller UV-Lack & Folienprägung",
      "Soft-Touch Coating": "Soft-Touch-Beschichtung",
      "Anti-Counterfeiting Features": "Fälschungssichere Merkmale",
      "Custom Unboxing Experience": "Individuelles Unboxing-Erlebnis"
    },
    fr: {
      "View all": "Voir tout", "View capability": "Voir la capacité", "WHY ZOMEEX": "POURQUOI ZOMEEX",
      "View full-size image": "Voir l'image en taille réelle",
      "More Than Packaging.": "Bien plus qu'un emballage.",
      "Your Strategic Cannabis Sourcing Partner.": "Votre partenaire stratégique en sourcing cannabis.",
      "We engineer fully compliant, retail-ready packaging systems that protect your product, simplify your supply chain, and scale your cannabis brand.": "Nous concevons des systèmes d'emballage conformes et prêts pour le retail qui protègent votre produit, simplifient votre chaîne d'approvisionnement et font évoluer votre marque de cannabis.",
      "The Fit:": "L’ajustement :", "The Protection:": "La protection :", "The Supply Chain:": "La chaîne :", "The Advantage:": "L’avantage :", "Key Specs": "Specs clés", "Shelf Impact": "Impact en rayon", "Trend-Led Finishes": "Finitions tendance",
      "Precision-Engineered Product Fit": "Ajustement produit de précision",
      "Custom Structural Design & Exact Dielines": "Design structurel sur mesure et tracés exacts",
      "We custom-engineer dielines, dimensions, and barrier materials around your exact product specs, ensuring a precise fit for flower, edibles, vapes, and concentrates.": "Nous concevons les tracés, les dimensions et les matériaux barrière selon vos spécifications exactes, pour un ajustement précis des flower, edibles, vapes et concentrés.",
      "Custom Dielines": "Tracés sur mesure",
      "Barrier Materials": "Matériaux barrière",
      "Precision Inserts": "Inserts de précision",
      "Structural Integrity": "Intégrité structurelle",
      "Product Compatibility": "Compatibilité produit",
      "Compliance & Market Readiness": "Conformité et préparation au marché",
      "Child-Resistant & Sustainable Solutions": "Solutions child-resistant et durables",
      "Stay launch-ready with fully certified Child-Resistant (CR) packaging and eco-friendly materials designed to seamlessly satisfy strict multi-state regulations.": "Restez prêt à lancer avec un emballage child-resistant (CR) entièrement certifié et des matériaux écologiques conçus pour satisfaire les réglementations strictes de plusieurs États.",
      "CR Certified Packaging": "Emballage certifié CR",
      "Sustainable & Recyclable Options": "Options durables et recyclables",
      "ASTM Standards": "Normes ASTM",
      "Multi-State Compliance": "Conformité multi-États",
      "Tamper-Evident Seals": "Scellés inviolables",
      "End-to-End Packaging Systems": "Systèmes d'emballage de bout en bout",
      "From Primary Packaging to Retail & Shipping": "De l'emballage primaire au retail et à l'expédition",
      "Consolidate your sourcing under one roof. We seamlessly pair primary containers with secondary boxes, POP displays, and master shippers for brand consistency.": "Consolidez vos achats sous un même toit. Nous associons contenants primaires, boîtes secondaires, présentoirs POP et cartons maîtres pour la cohérence de marque.",
      "Pouches & Jars": "Sachets et pots",
      "Secondary Rigid Boxes": "Coffrets rigides secondaires",
      "POP Dispensary Displays": "Présentoirs POP dispensary",
      "Rigid Master Cartons": "Cartons maîtres rigides",
      "Turnkey Sourcing": "Sourcing clé en main",
      "Retail-Ready Brand Innovation": "Innovation de marque prête pour le retail",
      "Disruptive Finishes & Market Trends": "Finitions disruptives et tendances du marché",
      "Dominate dispensary shelf space with premium finishes, tactile textures, and trend-setting unboxing experiences that drive repeat customer purchases.": "Dominez les rayons des dispensaries avec des finitions premium, des textures tactiles et des expériences de déballage tendance qui fidélisent les clients.",
      "Spot UV & Foil Stamping": "UV sélectif et dorure à chaud",
      "Soft-Touch Coating": "Revêtement soft-touch",
      "Anti-Counterfeiting Features": "Caractéristiques anti-contrefaçon",
      "Custom Unboxing Experience": "Expérience de déballage sur mesure"
    }
  };
  Object.keys(ADVANTAGES_EXTRA_BY_SOURCE).forEach(function (locale) {
    EXTRA_BY_SOURCE[locale] = Object.assign(EXTRA_BY_SOURCE[locale] || {}, ADVANTAGES_EXTRA_BY_SOURCE[locale]);
  });

  /* Native copy and specification labels from the user's final WHY reference. */
  var WHY_NATIVE_EXTRA_BY_SOURCE = {
    'zh-CN': {
      "Compliant Solutions": "合规方案", "Supply Chain Efficiency": "供应链效率", "Brand Growth": "品牌增长",
      "CR Certified": "CR 认证", "Sustainable Materials": "可持续材料", "Multi-State Compliant": "多州合规", "Eco-Friendly": "环保",
      "Primary Packaging": "主包装", "Secondary Packaging": "配套包装", "POP Displays": "POP 展示", "Master Shippers": "运输外箱",
      "Premium Finishes": "高级工艺", "Tactile Textures": "触感纹理", "Trend-Forward Designs": "前沿设计",
      "Partner": "合作", "Package": "包装", "Grow": "成长",
      "Consolidate your sourcing under one roof. We seamlessly pair primary containers with secondary boxes, POP displays, and master shippers.": "一站式整合采购。我们将主容器与配套包装盒、POP 展示架及运输外箱无缝衔接。",
      "Dominate dispensary shelf space with premium finishes, tactile textures, and trend-setting visual designs that drive repeat purchases.": "以高级工艺、触感纹理和引领潮流的视觉设计，提升药房货架表现并推动复购。"
    },
    ru: {
      "Compliant Solutions": "Соответствие нормам", "Supply Chain Efficiency": "Эффективные поставки", "Brand Growth": "Рост бренда",
      "CR Certified": "Сертификация CR", "Sustainable Materials": "Экологичные материалы", "Multi-State Compliant": "Нормы разных штатов", "Eco-Friendly": "Экологичность",
      "Primary Packaging": "Первичная упаковка", "Secondary Packaging": "Вторичная упаковка", "POP Displays": "POP-дисплеи", "Master Shippers": "Транспортные короба",
      "Premium Finishes": "Премиальная отделка", "Tactile Textures": "Тактильные текстуры", "Trend-Forward Designs": "Актуальный дизайн",
      "Partner": "Партнёрство", "Package": "Упаковка", "Grow": "Рост",
      "Consolidate your sourcing under one roof. We seamlessly pair primary containers with secondary boxes, POP displays, and master shippers.": "Объедините закупки у одного поставщика. Мы согласуем первичную тару, вторичные коробки, POP-дисплеи и транспортные короба.",
      "Dominate dispensary shelf space with premium finishes, tactile textures, and trend-setting visual designs that drive repeat purchases.": "Выделяйтесь на полках благодаря премиальной отделке, тактильным текстурам и актуальному дизайну, стимулирующему повторные покупки."
    },
    de: {
      "Compliant Solutions": "Konforme Lösungen", "Supply Chain Efficiency": "Effiziente Lieferketten", "Brand Growth": "Markenwachstum",
      "CR Certified": "CR-zertifiziert", "Sustainable Materials": "Nachhaltige Materialien", "Multi-State Compliant": "Überregional konform", "Eco-Friendly": "Umweltfreundlich",
      "Primary Packaging": "Primärverpackung", "Secondary Packaging": "Sekundärverpackung", "POP Displays": "POP-Displays", "Master Shippers": "Versandkartons",
      "Premium Finishes": "Premium-Veredelung", "Tactile Textures": "Taktile Oberflächen", "Trend-Forward Designs": "Trendweisendes Design",
      "Partner": "Partnerschaft", "Package": "Verpackung", "Grow": "Wachstum",
      "Consolidate your sourcing under one roof. We seamlessly pair primary containers with secondary boxes, POP displays, and master shippers.": "Bündeln Sie Ihre Beschaffung bei einem Partner. Wir verbinden Primärbehälter, Sekundärverpackungen, POP-Displays und Versandkartons.",
      "Dominate dispensary shelf space with premium finishes, tactile textures, and trend-setting visual designs that drive repeat purchases.": "Stärken Sie Ihre Regalpräsenz mit Premium-Veredelung, taktilen Oberflächen und trendweisendem Design, das Wiederkäufe fördert."
    },
    fr: {
      "Compliant Solutions": "Solutions conformes", "Supply Chain Efficiency": "Approvisionnement efficace", "Brand Growth": "Croissance de marque",
      "CR Certified": "Certifié CR", "Sustainable Materials": "Matériaux durables", "Multi-State Compliant": "Conformité multi-États", "Eco-Friendly": "Écoresponsable",
      "Primary Packaging": "Emballage primaire", "Secondary Packaging": "Emballage secondaire", "POP Displays": "Présentoirs POP", "Master Shippers": "Cartons d’expédition",
      "Premium Finishes": "Finitions premium", "Tactile Textures": "Textures tactiles", "Trend-Forward Designs": "Designs avant-gardistes",
      "Partner": "Partenariat", "Package": "Emballage", "Grow": "Croissance",
      "Consolidate your sourcing under one roof. We seamlessly pair primary containers with secondary boxes, POP displays, and master shippers.": "Centralisez vos achats auprès d’un partenaire. Nous associons contenants primaires, boîtes secondaires, présentoirs POP et cartons d’expédition.",
      "Dominate dispensary shelf space with premium finishes, tactile textures, and trend-setting visual designs that drive repeat purchases.": "Renforcez votre présence en rayon grâce aux finitions premium, textures tactiles et designs avant-gardistes qui encouragent le réachat."
    }
  };
  Object.keys(WHY_NATIVE_EXTRA_BY_SOURCE).forEach(function (locale) {
    EXTRA_BY_SOURCE[locale] = Object.assign(EXTRA_BY_SOURCE[locale] || {}, WHY_NATIVE_EXTRA_BY_SOURCE[locale]);
  });

  /* Child-resistant menu children (CR menu now mirrors Products structure). */
  var CR_MENU_EXTRA_BY_SOURCE = {
    'zh-CN': {
      "CR Zipper Bags": "儿童防护拉链袋",
      "CR Stand-Up Pouches": "儿童防护自立袋",
      "CR Flat Pouches": "儿童防护平口袋",
      "CR Tuck-End Boxes": "儿童防护插底纸盒",
      "CR Pre-Roll Boxes": "儿童防护预卷盒",
      "CR Cannabis Boxes": "儿童防护大麻盒",
      "CR Glass Jars": "儿童防护玻璃罐",
      "CR Pop-Top Bottles": "儿童防护弹跳瓶",
      "CR Product Containers": "儿童防护产品容器",
      "CR Pre-Roll Tubes": "儿童防护预卷管",
      "CR Unit-Dose Tubes": "儿童防护单剂量管"
    },
    ru: {
      "CR Zipper Bags": "CR-пакеты с зиплоком",
      "CR Stand-Up Pouches": "CR дой-паки",
      "CR Flat Pouches": "CR плоские пакеты",
      "CR Tuck-End Boxes": "CR коробки с защелкой",
      "CR Pre-Roll Boxes": "CR коробки для pre-roll",
      "CR Cannabis Boxes": "CR коробки для cannabis",
      "CR Glass Jars": "CR стеклянные банки",
      "CR Pop-Top Bottles": "CR бутылки pop-top",
      "CR Product Containers": "CR контейнеры",
      "CR Pre-Roll Tubes": "CR тубы для pre-roll",
      "CR Unit-Dose Tubes": "CR тубы для разовых доз"
    },
    de: {
      "CR Zipper Bags": "CR-Reißverschlussbeutel",
      "CR Stand-Up Pouches": "CR-Standbodenbeutel",
      "CR Flat Pouches": "CR-Flachbeutel",
      "CR Tuck-End Boxes": "CR-Stecklaschenkartons",
      "CR Pre-Roll Boxes": "CR-Pre-Roll-Boxen",
      "CR Cannabis Boxes": "CR-Cannabis-Boxen",
      "CR Glass Jars": "CR-Glasgefäße",
      "CR Pop-Top Bottles": "CR-Pop-Top-Flaschen",
      "CR Product Containers": "CR-Produktbehälter",
      "CR Pre-Roll Tubes": "CR-Pre-Roll-Tuben",
      "CR Unit-Dose Tubes": "CR-Einzeldosis-Tuben"
    },
    fr: {
      "CR Zipper Bags": "Sachets zip CR",
      "CR Stand-Up Pouches": "Doypacks CR",
      "CR Flat Pouches": "Poches plates CR",
      "CR Tuck-End Boxes": "Boîtes à rabats CR",
      "CR Pre-Roll Boxes": "Boîtes pre-roll CR",
      "CR Cannabis Boxes": "Boîtes cannabis CR",
      "CR Glass Jars": "Pots en verre CR",
      "CR Pop-Top Bottles": "Bouteilles pop-top CR",
      "CR Product Containers": "Contenants CR",
      "CR Pre-Roll Tubes": "Tubes pre-roll CR",
      "CR Unit-Dose Tubes": "Tubes unit-dose CR"
    }
  };
  Object.keys(CR_MENU_EXTRA_BY_SOURCE).forEach(function (locale) {
    EXTRA_BY_SOURCE[locale] = Object.assign(EXTRA_BY_SOURCE[locale] || {}, CR_MENU_EXTRA_BY_SOURCE[locale]);
  });

  var SOURCE_TO_KEY = {};
  Object.keys(DICTIONARY.en).forEach(function (key) {
    SOURCE_TO_KEY[DICTIONARY.en[key]] = key;
  });

  var safeStorage = function (kind) {
    try {
      return window[kind];
    } catch (error) {
      return null;
    }
  };

  var normalizeLocale = function (locale) {
    locale = String(locale || '').replace('_', '-');
    if (locale === 'zh' || locale === 'zh-CN') return 'zh-CN';
    return LOCALES.indexOf(locale) !== -1 ? locale : DEFAULT_LOCALE;
  };

  var readLocale = function () {
    var queryLocale = '';
    try {
      queryLocale = new URLSearchParams(window.location.search).get('lang') || '';
    } catch (error) {
      queryLocale = '';
    }
    if (queryLocale) return normalizeLocale(queryLocale);
    var storage = safeStorage('localStorage');
    if (storage) {
      try {
        var stored = normalizeLocale(storage.getItem(STORAGE_KEY));
        if (stored !== DEFAULT_LOCALE || storage.getItem(STORAGE_KEY) === DEFAULT_LOCALE) return stored;
      } catch (error) {
        // Fall back to the translation cookie when storage is unavailable.
      }
    }
    var match = document.cookie.match(/(?:^|; )zomeex-locale=([^;]+)/);
    if (match) return normalizeLocale(decodeURIComponent(match[1]));
    return DEFAULT_LOCALE;
  };

  var currentLocale = readLocale();
  var textKey = function (value) {
    var normalized = String(value || '').replace(/\s+/g, ' ').trim();
    return SOURCE_TO_KEY[normalized] || '';
  };

  var translated = function (key, locale) {
    locale = normalizeLocale(locale || currentLocale);
    return (DICTIONARY[locale] && DICTIONARY[locale][key]) || DICTIONARY.en[key] || key;
  };

  var translateSource = function (source, locale) {
    locale = normalizeLocale(locale || currentLocale);
    /* Switching back to the default locale must restore the captured source
     * itself — EXTRA_BY_SOURCE only exists for the four target locales, so
     * without this early return anything translated via EXTRA stayed stuck in
     * the last non-English language. */
    if (locale === DEFAULT_LOCALE) return source;
    var extra = EXTRA_BY_SOURCE[locale] && EXTRA_BY_SOURCE[locale][source];
    if (extra) return extra;
    var key = textKey(source);
    return key ? translated(key, locale) : translateDynamic(source, locale);
  };

  var shouldSkip = function (element) {
    if (!element || !element.closest) return true;
    return Boolean(element.closest('script, style, textarea, .zomeex-gtranslate-native, .zomeex-insight-detail__body, .notranslate [data-zomeex-i18n-ignore]'));
  };

  /* Text nodes can be replaced when a component updates its label. Keep the
   * source copy on the owning element so switching directly between locales
   * never depends on whichever translation was rendered last. */
  var SOURCE_TEXT_ATTRIBUTE = 'data-zomeex-source-text';
  var directTextNodes = function (element) {
    return Array.prototype.filter.call(element.childNodes || [], function (node) {
      return node.nodeType === Node.TEXT_NODE;
    });
  };
  var readSourceTexts = function (element) {
    var raw = element && element.getAttribute(SOURCE_TEXT_ATTRIBUTE);
    if (!raw) return null;
    try {
      var parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : null;
    } catch (error) {
      return null;
    }
  };
  var captureTextSources = function (root) {
    if (!root) return;
    var elements = [root].concat(Array.prototype.slice.call(root.querySelectorAll('*')));
    elements.forEach(function (element) {
      var nodes = directTextNodes(element);
      if (!nodes.length) return;
      var sources = readSourceTexts(element);
      if (!sources || sources.length !== nodes.length) {
        sources = nodes.map(function (node) { return node.nodeValue; });
        element.setAttribute(SOURCE_TEXT_ATTRIBUTE, JSON.stringify(sources));
      }
      nodes.forEach(function (node, index) {
        node._zomeexSource = sources[index];
      });
    });
  };
  var sourceForTextNode = function (textNode) {
    var parent = textNode && textNode.parentElement;
    var fallback = textNode && (textNode._zomeexSource || textNode.nodeValue);
    if (!parent) return fallback;
    var index = directTextNodes(parent).indexOf(textNode);
    var sources = readSourceTexts(parent);
    return sources && index >= 0 && typeof sources[index] === 'string' ? sources[index] : fallback;
  };

  var preserveWhitespace = function (original, value) {
    var leading = original.match(/^\s*/)[0];
    var trailing = original.match(/\s*$/)[0];
    return leading + value + trailing;
  };

  var translateDynamic = function (source, locale) {
    var clean = source.replace(/\s+/g, ' ').trim();
    var match;
    if ((match = clean.match(/^Product directory \/ (.+)$/))) return translated('catalog.directory', locale) + ' / ' + match[1];
    if ((match = clean.match(/^Results for "(.+)"$/))) return (locale === 'en' ? 'Results for "' : ({ 'zh-CN': '搜索结果：“', ru: 'Результаты для «', de: 'Ergebnisse für „', fr: 'Résultats pour «' }[locale] || 'Results for "')) + match[1] + ({ 'zh-CN': '”', ru: '»', de: '“', fr: '»' }[locale] || '"');
    if ((match = clean.match(/^(\d+) products$/))) return match[1] + ' ' + ({ 'zh-CN': '个产品', ru: 'продуктов', de: 'Produkte', fr: 'produits' }[locale] || 'products');
    if ((match = clean.match(/^(\d+) articles?$/))) {
      var articleCount = Number(match[1]);
      if (locale === 'zh-CN') return match[1] + ' 篇文章';
      if (locale === 'ru') {
        var lastTwo = articleCount % 100;
        var lastDigit = articleCount % 10;
        var articleWord = lastTwo >= 11 && lastTwo <= 14 ? 'статей' : (lastDigit === 1 ? 'статья' : (lastDigit >= 2 && lastDigit <= 4 ? 'статьи' : 'статей'));
        return match[1] + ' ' + articleWord;
      }
      if (locale === 'de') return match[1] + ' Artikel';
      if (locale === 'fr') return match[1] + (articleCount > 1 ? ' articles' : ' article');
    }
    if ((match = clean.match(/^SKU (.+)$/))) return 'SKU ' + match[1];
    return '';
  };

  var translateAttributes = function (root, locale) {
    root.querySelectorAll('[placeholder], [aria-label], [title], [data-zomeex-i18n]').forEach(function (element) {
      ['placeholder', 'aria-label', 'title'].forEach(function (attribute) {
        var sourceAttribute = 'data-zomeex-source-' + attribute.replace('-', '_');
        var source = element.getAttribute(sourceAttribute) || element.getAttribute(attribute);
        if (source && !element.hasAttribute(sourceAttribute)) element.setAttribute(sourceAttribute, source);
        var value = translateSource(String(source || '').replace(/\s+/g, ' ').trim(), locale);
        if (value && value !== source) element.setAttribute(attribute, value);
      });
      var explicitKey = element.getAttribute('data-zomeex-i18n');
      if (explicitKey) {
        var value = translated(explicitKey, locale);
        if (element.children.length === 0) element.textContent = value;
        element.setAttribute('data-zomeex-i18n-active', locale);
      }
    });
  };

  var translateTree = function (root, locale) {
    if (!root) return;
    captureTextSources(root);
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    var nodes = [];
    var node;
    while ((node = walker.nextNode())) nodes.push(node);
    nodes.forEach(function (textNode) {
      if (shouldSkip(textNode.parentElement)) return;
      var source = sourceForTextNode(textNode);
      textNode._zomeexSource = source;
      var clean = source.replace(/\s+/g, ' ').trim();
      if (!clean) return;
      var value = translateSource(clean, locale);
      var current = String(textNode.nodeValue || '').replace(/\s+/g, ' ').trim();
      if (value && value !== current) textNode.nodeValue = preserveWhitespace(source, value);
    });
    translateAttributes(root, locale);
  };

  var setRootLocale = function (locale) {
    locale = normalizeLocale(locale);
    currentLocale = locale;
    document.documentElement.dataset.zomeexLocale = locale;
    document.documentElement.lang = locale;
    document.querySelectorAll('[data-locale-current]').forEach(function (element) {
      var option = document.querySelector('[data-language="' + locale + '"]');
      element.textContent = option ? (option.dataset.languageCode || locale.toUpperCase()) : locale.toUpperCase();
    });
    translateTree(document.querySelector('.zomeex-site-shell'), locale);
    window.dispatchEvent(new CustomEvent('zomeex:localechange', { detail: { locale: locale } }));
  };

  var setLocale = function (locale) {
    locale = normalizeLocale(locale);
    var storage = safeStorage('localStorage');
    if (storage) {
      try { storage.setItem(STORAGE_KEY, locale); } catch (error) { /* Ignore storage failures. */ }
    }
    document.cookie = STORAGE_KEY + '=' + locale + ';path=/';
    setRootLocale(locale);
  };

  window.zomeexI18n = {
    locales: LOCALES.slice(),
    getLocale: function () { return currentLocale; },
    setLocale: setLocale,
    t: translated,
    translate: function () { translateTree(document.querySelector('.zomeex-site-shell'), currentLocale); }
  };

  var boot = function () {
    /* Drop any legacy Google Translate cookie so the retired machine-translation
     * layer can never activate for returning visitors. */
    document.cookie = 'googtrans=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT';
    setRootLocale(currentLocale);
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
}());
