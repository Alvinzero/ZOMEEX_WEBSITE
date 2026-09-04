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

  var CATALOG_EXTRA_BY_SOURCE = {
    'zh-CN': { 'Apply': '应用', 'Search products': '搜索产品', 'Sort products': '产品排序', 'Filter by series': '按系列筛选', 'products': '个产品' },
    ru: { 'Apply': 'Применить', 'Search products': 'Поиск продуктов', 'Sort products': 'Сортировать продукты', 'Filter by series': 'Фильтр по серии', 'products': 'продуктов' },
    de: { 'Apply': 'Anwenden', 'Search products': 'Produkte suchen', 'Sort products': 'Produkte sortieren', 'Filter by series': 'Nach Serie filtern', 'products': 'Produkte' },
    fr: { 'Apply': 'Appliquer', 'Search products': 'Rechercher des produits', 'Sort products': 'Trier les produits', 'Filter by series': 'Filtrer par famille', 'products': 'produits' }
  };
  Object.keys(CATALOG_EXTRA_BY_SOURCE).forEach(function (locale) {
    EXTRA_BY_SOURCE[locale] = Object.assign(EXTRA_BY_SOURCE[locale] || {}, CATALOG_EXTRA_BY_SOURCE[locale]);
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
    var match = document.cookie.match(/(?:^|; )googtrans=\/[^/]+\/([^;]+)/);
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
    document.cookie = 'googtrans=/en/' + locale + ';path=/';
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

  var boot = function () { setRootLocale(currentLocale); };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
}());
