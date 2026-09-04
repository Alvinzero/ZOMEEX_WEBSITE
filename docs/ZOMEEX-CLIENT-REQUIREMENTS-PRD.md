# ZOMEEX 官网甲方需求 PRD

**版本**：0.4  
**日期**：2026-09-03  
**状态**：甲方新需求整理稿，待业务、合规和销售确认  
**适用项目**：ZOMEEX / ZOMEE WordPress + WooCommerce 官网

## 1. 文档目的

本 PRD 将甲方提供的三份 Word 文档和一份 Gemini Mega Menu 线框草案，整理为可评审、可拆分开发、可验收的官网需求。它同时考虑当前本地项目的真实数据和现有页面，避免因为改版而丢失产品图片、产品链接、WooCommerce 数据或已有 SEO 地址。

附件中的内容分为三类：

- **[A] 甲方明确要求**：附件中直接提出的页面、分类、文案、字段或交互。
- **[R] 产品/设计建议**：为了兼容现站、可维护性、SEO、性能或合规而推导出的方案，不应视为甲方已确认事实。
- **[C] 待确认事项**：涉及业务真实性、法务、销售流程、商业规则或素材授权，需要甲方确认后才能上线。

### 1.1 资料清单

| 资料 | 作用 | 结论 |
| --- | --- | --- |
| `1. 网站产品分类.docx` | 产品信息架构、Mega Menu、SEO URL 和标题建议 | 作为 Products/PACK 分类与 SEO 的主要来源 |
| `2.首页.docx` | 首页 11 个 section、文案框架、CTA 和表单字段 | 作为首页改版蓝图，分阶段落地 |
| `3.FAQ.docx` | 8 组 Cannabis Packaging FAQ 英文问答 | 作为 FAQ 页面初始内容，需人工校对与合规审查 |
| `gemini-code-1788422294967.txt` | 三列 Mega Menu 线框 | 仅是视觉/交互草案，不是可执行代码 |

## 2. 项目背景与现状

### 2.1 当前技术与内容资产

当前项目仍是 **WordPress + WooCommerce + Woodmart 子主题**，不是 React/Vite 工程。现站已经具备：

- 真实 WooCommerce 产品、产品图片、SKU 和产品分类；
- VAPE、PACK、SWITCH、BOOST 四个业务入口；
- 产品目录、产品详情、询价清单/表单、About、Contact、Insights、账户和购物车页面；
- 首页自定义 Header、Products/Solutions 下拉、产品轨道、询价 CTA 和五语言控件；
- 本地媒体库位于 `wp-content/uploads/`，不能用演示图片整体替换。

### 2.2 当前问题

1. 业务入口和包装产品分类的层级尚未统一，用户不容易判断“按产品找”还是“按应用找”。
2. 部分甲方希望呈现的包装产品线，在现有 WooCommerce 分类中尚未建立真实集合页。
3. 首页已有产品和询价能力，但缺少甲方提出的信任条、刀模/样品线索入口、应用场景切换、工艺展示和 FAQ 入口。
4. 甲方文档中的认证、产能、客户数量、交期和合规表述尚未提供证据，不能直接作为生产环境承诺。
5. 当前询价表单已支持产品清单、数量、市场等信息，但还需评估文件上传、产品兴趣多选、通知邮箱/CRM 和隐私同意。

## 3. 产品定位与目标

### 3.1 产品定位

官网定位为 **面向全球品牌方、采购、产品和合规团队的 B2B 产品目录 + 包装解决方案 + OEM/ODM 询盘平台**。核心任务不是引导用户直接支付，而是帮助用户快速判断产品匹配度，并提交带有产品、市场和数量背景的有效询盘。

### 3.2 本阶段目标

1. 用户在 2-3 次点击内找到目标产品或应用场景。
2. 产品分类既承接现有 VAPE/PACK/SWITCH/BOOST，也能承接甲方提出的 7 类包装产品和 6 类应用场景。
3. 首页在首屏明确“产品范围、定制能力、询价动作”，并用真实媒体提高可信度。
4. 通过产品详情、FAQ、刀模、样品和合规内容降低采购决策成本。
5. 让运营人员可以在 WordPress 后台维护产品、规格、图片、FAQ、文章和 CTA。
6. 保证五种首发语言（English、中文、Русский、Deutsch、Français）的导航、表单和核心页面有一致的布局与人工校对流程。

### 3.3 非目标

- 不复制参考网站的品牌、图片、代码或独有文案。
- 不在没有证书、测试报告或法务确认时发布“已认证”“100% 合规”“10 天交付”等确定性承诺。
- 不删除现有产品、媒体或旧 URL；不为了模拟 Framer 而重建 React 前端。
- 不把 B2B 询价站强行改成需要在线支付的零售商城。

## 4. 甲方需求总览

| 优先级 | 需求 | 来源 | 说明 |
| --- | --- | --- | --- |
| P0 | Products Mega Menu，按产品类型、应用场景、特色入口组织 | [A] 产品分类、Gemini 线框 | 兼容现有四个业务入口，详见第 5 节 |
| P0 | 首页 Hero、产品入口、询价 CTA、6 类主产品卡 | [A] 首页 | 使用真实产品媒体；缺数据时显示待补内容，不造数据 |
| P0 | FAQ 页面，包含 8 组初始问答 | [A] FAQ | 使用可展开 Accordion；增加 FAQPage 结构化数据 |
| P0 | 产品详情、询价清单和 RFQ 表单形成完整路径 | [R] 结合现站 | 询价优先于结算，产品信息随表单传递 |
| P0 | 桌面/移动响应式、统一字体和 CTA 样式 | [A]+[R] | 不能出现 Mega Menu 溢出、长文案破版或图片缺失 |
| P1 | Trust & Compliance Bar、工艺/材质展示、Factory Capabilities | [A] 首页 | 所有证据内容需先确认 |
| P1 | Free Dieline Templates、Free Sample Kit 线索入口 | [A] 产品分类、首页 | 需要下载资源、表单和销售承接流程 |
| P1 | Shop by Application 标签切换 | [A] 首页 | 由应用场景组合推荐产品 |
| P1 | Insights / Laws 内容区 | [A] 首页 | 需要内容编辑计划和法规审核 |
| P2 | 360° 旋转样机、视频背景、动效增强 | [A] 首页 | 有真实素材后再实施，优先保证性能 |

## 5. 信息架构与导航

### 5.1 导航兼容决策

**[R] 保留当前四个一级业务入口：VAPE、PACK、SWITCH、BOOST。** 这是现站已有的产品和服务边界，直接删除会破坏用户认知和链接。甲方文档中的包装分类作为 `PACK` 下的产品类型与应用层扩展。

建议桌面导航为：

`Products`（Mega Menu） · `Solutions` · `Insights` · `About` · `Search` · `Account` · `Cart` · `Language` · `Get a Free Quote`

`Free Dielines` 和 `Sample Pack` 作为 Products Mega Menu 右侧的特色 CTA；除非甲方确认其需要成为一级导航，否则不额外挤占主导航空间。[R]

### 5.2 Products Mega Menu

#### 桌面端

**[A] 采用三列布局；参考比例为 40% / 30% / 30%。** Mega Menu 打开后应保持在视口内，不向左溢出，不依赖 hover 才能访问。

| 区域 | 内容 | 现站兼容方案 |
| --- | --- | --- |
| 顶部/左侧入口 | VAPE、PACK、SWITCH、BOOST 四个业务入口 | 保留现有门户名称、图片和链接 |
| 第 1 列（约 40%） | Shop by Product Type，7 个包装产品线 | 在 PACK 入口下建立产品类型集合；存在真实产品才显示可用状态 |
| 第 2 列（约 30%） | Shop by Application，6 个应用场景；Design Resources | 以应用落地页/筛选 URL 承接，不复制产品数据 |
| 第 3 列（约 30%） | Free Sample Kit 图文卡、快速联系 WhatsApp | 使用真实样品图；联系方式由销售确认 |

第 1 列的 7 个产品类型：[A]

1. Custom Mylar Bags & Pouches
2. Pre-Roll Packaging
3. Custom Printed Paper Boxes
4. Jars & Glass Containers
5. Tins & Metal Containers
6. Bottles & Tubes
7. Retail Displays & Merch

第 2 列的 6 个应用场景：[A]

1. Flower & Hemp Packaging
2. Pre-Roll & Joint Packaging
3. Edibles & Gummies Packaging
4. Vape & Cartridge Packaging
5. Concentrates & Wax Packaging
6. THC Beverages & Tincture Packaging

右侧/底部特色入口：[A]

- Free Sample Pack
- Free Dieline Templates
- Sustainable / Eco-Friendly Packaging

#### 移动端

- 使用抽屉式一级导航，每个一级项可展开/收起；不使用悬停触发。
- 热门入口优先放置：Mylar Bags、Pre-Roll Packaging、Sample Pack。[A]
- 一级菜单打开时锁定页面滚动，关闭后恢复焦点；长列表可在抽屉内部滚动。[R]
- 触控目标不小于 44px，长标题允许换行，不能横向滚动。[R]

### 5.3 分类映射

| 甲方产品类型 | 现有/建议 WooCommerce 分类 | URL 建议 | 迁移策略 |
| --- | --- | --- | --- |
| Mylar Bags & Pouches | `MYLAR BAG` | `/products/mylar-bags/` | 保留旧 slug，新增 SEO 集合页或 301 |
| Pre-Roll Packaging | `PREROLL / WRAPS` | `/products/pre-roll-packaging/` | 旧分类作为兼容别名 |
| Printed Paper Boxes | `VAPE BOX` + 新建 `paper-boxes` | `/products/paper-boxes/` | 不改旧分类名称；新页只收录真实产品 |
| Jars & Glass Containers | 新建 `jars-glass-containers` | `/products/jars-glass-containers/` | 有产品和媒体后发布 |
| Tins & Metal Containers | 新建 `tins-metal-containers` | `/products/tins-metal-containers/` | 有产品和规格后发布 |
| Bottles & Tubes | 新建 `bottles-tubes` | `/products/bottles-tubes/` | 有产品和规格后发布 |
| Retail Displays & Merch | 新建 `retail-displays-merch` | `/products/retail-displays/` | 有真实展示架/标签产品后发布 |

应用场景是“横向聚合维度”，不建议复制产品到多个分类；可使用产品属性、标签或手工关联产品维护。[R]

## 6. SEO URL、Title 与内容规范

甲方文档以 Framer CMS 为例；当前项目为 WordPress，因此以下规则应通过 WordPress 页面、WooCommerce 分类、重写规则和 SEO 插件实现，不能直接照搬 Framer CMS 配置。[R]

| 页面 | Slug | SEO Title 示例 | H1 示例 |
| --- | --- | --- | --- |
| Mylar Bags | `/products/mylar-bags/` | Custom Mylar Bags & Weed Bags Wholesale \| ZOMEEX | Custom Printed Mylar Bags & Pouches |
| Pre-Roll Packaging | `/products/pre-roll-packaging/` | Pre-Roll Packaging, Joint Tubes & Boxes Wholesale \| ZOMEEX | Custom Pre-Roll Packaging Solutions |
| Child-Resistant Boxes | `/products/child-resistant-boxes/` | CR Certified Paper Boxes for Cannabis \| ZOMEEX | Child-Resistant Custom Paper Boxes |
| Edibles & Gummies | `/applications/edibles-gummies/` | Custom Edible & Gummy Packaging Solutions \| ZOMEEX | Packaging Solutions for Edibles & Gummies |
| Free Dielines | `/dielines/` | Free Cannabis Packaging Dieline Templates (AI/PDF) \| ZOMEEX | Free Packaging Dieline Template Library |
| FAQ | `/faq/` | Cannabis Packaging FAQ \| ZOMEEX | Cannabis Packaging FAQ |

规则：

- 每个链接必须指向真实页面或可抓取的集合页，禁止用 `#` 作为最终链接。[A]
- 新页面必须有唯一的 `title`、`meta description`、canonical、Open Graph、H1 和面包屑。[R]
- 只有存在真实产品、图片和基本字段时才创建可索引的细分类页；没有内容的分类先隐藏、noindex 或显示“coming soon”，避免薄内容。[R]
- 保留旧产品分类和产品 URL，建立 301 映射；发布前跑内部链接和 404 审计。[R]
- 产品页使用 `Product`/`BreadcrumbList`；FAQ 使用 `FAQPage`；认证和 Organization 信息只有在确认后才加入结构化数据。[C]

## 7. 首页需求

首页由 11 个 Section 组成。建议分为 P0 核心转化区、P1 证明和内容区、P2 增强体验区。当前首页已有 Hero、产品家庭轨道、Solutions、精选产品、能力流程、旧站 proof 占位、询价路径、Insights 和 CTA；以下需求是在不丢失现有真实数据的基础上补齐和重排。

### Section 1：Hero Banner（P0）

**甲方要求 [A]**

- 左文右图/3D（约 6:4）或全屏动态背景 + 左侧内容。
- H1：`Custom Cannabis Packaging Manufacturer: Mylar Bags, Boxes & Jars`。
- 副标题：`Factory-Direct Wholesale | Child-Resistant Design | Low MOQ to start`。
- Trust 标签：`CPSC/ASTM Certified`、`10-Day Fast Turnaround`、`Free Vector Dielines`。
- Primary CTA：`Get Custom Quote`，打开 RFQ。
- Secondary CTA：`Request Free Sample Kit`，跳转样品申请。
- 视觉：Mylar Bag + Hard Rigid Box 的真实产品图、视频或可旋转样机。

**实现建议 [R/C]**

- 当前站点业务不只有包装；正式 H1 需甲方确认是以“包装制造商”为主，还是继续并列 Vape Hardware、Packaging、Equipment。未确认前可使用兼容版 H1：`Custom Vape & Packaging Systems for Global Brands`。
- 不使用没有来源的 3D 渲染替代真实产品；优先复用媒体库中已存在的产品图，缺图时显示明确的素材待补状态。
- `CPSC/ASTM Certified`、`10-Day`、`Low MOQ` 全部需要证据或销售确认后才能作为强承诺。

### Section 2：Trust & Compliance Bar（P1）

**甲方要求 [A]**：展示 CPSC、ASTM D3475、ISO 9001、FDA Food-Grade、FSC 等认证或标准徽章，可使用 Marquee/横向滚动。

**上线规则 [C]**：每个徽章必须对应证书/测试报告、适用产品和有效期；不能用“认证”图标代替实际文件。证据未齐时使用中性文案 `Documentation available for qualified projects` 或保留为内部 Demo 区域。

### Section 3：Core Advantages（P0/P1）

甲方给出四个优势卡片：[A]

1. Factory-Direct Pricing：从 1,000 units 起的阶梯价格。
2. 100% Legal Compliance：覆盖 US、CA、EU 的儿童防护结构。
3. Bespoke Printing Crafts：Spot UV、Holographic Foil、Soft-Touch Matte、Embossing。
4. Free Pre-Press Support：免费刀模和印前检查。

**改进建议 [R/C]**：优势卡片先拆成“能力描述 + 证据状态 + 下一步 CTA”，避免只放形容词。价格起订量、100% 合规和市场范围必须由销售/法务确认；未确认时沿用现站 `Legacy copy / verify` 状态。

### Section 4：Main Product Categories（P0）

**甲方要求 [A]**：2×3 六宫格大图卡，每张包含产品图、标签、简短特性、`Shop` 和 `Get Dieline`。

建议六张卡片优先展示：

1. Custom Mylar Bags & Pouches（3.5g/1oz、CR Zip、Shaped）
2. Printed Paper Boxes & Rigid Boxes（Child-Resistant、Slider、Magnetic）
3. Glass Jars & Concentrate Containers（Flower Jars、Wax Jars、Pop-Top）
4. Pre-Roll Packaging & Tubes（Joint Tubes、Multi-Pack Tins）
5. Tins & Metal Containers（Slider Tins、Hinged Tins）
6. Corrugated POP Display Shelves（Retail POS、Counter Displays）

**兼容策略 [R]**：每张卡片链接到真实集合页；若某品类当前没有真实产品或图片，卡片可在后台配置为隐藏，不使用虚假占位产品。`Get Dieline` 只有对应文件存在时才显示下载动作，否则改为 `Request a Dieline` 进入询价。

### Section 5：Interactive Lead Magnet（P1）

左右双栏：

- **Free Dieline Templates**：`Download 100+ Free Vector Dielines (AI/PDF)`、`Browse Dieline Library`。
- **Physical Sample Kit**：`Order a Free Physical Sample Kit ($0 + Shipping)`、`Claim Free Sample Kit`。

**需要补齐 [C]**：刀模文件数量和版权、下载是否需要邮箱、样品包包含哪些产品、运费承担方、国家限制、销售跟进规则和隐私同意。未具备资源时，先上线资源申请表，不要承诺“100+”或“$0”。

### Section 6：Shop by Application（P1）

**甲方要求 [A]**：Tab/大图切换，点击后切换推荐组合。

| Tab | 推荐组合示例 |
| --- | --- |
| Flower & Hemp | Glass Jars + Nitrogen Sealed Bags |
| Pre-Rolls & Joints | Pre-Roll Tubes + Slider Metal Tins |
| Edibles & Gummies | CR Mylar Pouches + Certified Paper Boxes |
| Vape & Concentrates | Cartridge Boxes + Glass Wax Jars |

交互要求 [R]：键盘可操作，URL 可选保存当前 Tab，移动端改为可横向滚动的 tab 列表或 Accordion；推荐产品必须来自真实产品关联，不可随机拼接。

### Section 7：Printing Craft & Special Finishes（P1）

横向 Carousel 或左右分栏，展示：

- Special Finishes：Spot UV、Gold/Holographic Hot Stamping、Soft-Touch Matte、Embossing/Debossing；
- Sustainable Materials：Biodegradable Mylar、Recycled Kraft Paper、PCR Plastics；
- Child-Resistant Locks：Pinch & Slide Zippers、Push & Turn Caps、Button Release Boxes。

**证据要求 [C]**：材料环保属性、可降解比例、儿童防护结构和测试标准必须绑定产品或资料，不能作为全站统一承诺。没有近景素材时，以简洁规格列表替代装饰性轮播。

### Section 8：Factory Capabilities & Video（P1/P2）

全宽视频/图片区域 + 四个统计指标：[A]

- `50,000 ㎡ Modern Production Base`
- `1,000,000+ Pcs Daily Output Capacity`
- `100% Inspection Before Shipment`
- `500+ Global Cannabis Brands Served`

**上线前必须确认 [C]**：工厂面积、日产能、质检比例、客户数量、客户 Logo 授权、视频版权和拍摄时间。证据未齐时不得发布精确数字；可改为 `Production capacity and inspection documentation available on request`。

### Section 9：Primary RFQ Lead Form（P0）

甲方建议表单字段：[A]

- Name、Business Email（必填）；
- WhatsApp / Phone（可选，提示更快沟通）；
- Product Interest 多选：Mylar Bags、Boxes、Jars、Pre-Roll；
- Quantity：1k-5k、5k-10k、10k-50k、50k+；
- Upload Artwork / Dieline：AI/PDF/PSD；
- Message；
- CTA：`Submit Inquiry & Get Free Quote`。

**与现站的实现差异 [R]**：现有询价表单已具备姓名、公司、工作邮箱、国家/地区、角色、目标市场、数量、时间、定制、样品和备注，并从 Quote List 传递产品。建议新增或补齐：

1. 产品兴趣多选作为没有先选产品时的兜底字段；
2. 文件上传，限制 MIME、扩展名、大小和病毒扫描策略；
3. 隐私同意、来源页面、UTM 和语言记录；
4. 成功页显示询盘编号与下一步；
5. 管理后台或 CRM 可检索产品、市场、数量和附件。

### Section 10：Industry News & Laws（P1）

三列文章卡片初始主题：[A]

1. `2026 US State-by-State Cannabis Packaging Compliance Guide`
2. `Mylar Bags vs. Glass Jars: Which Preserves Terpenes Better?`
3. `Top 5 Sustainable Packaging Trends for Dispensary Brands`

**内容规则 [C/R]**：法规文章必须有发布日期、适用地区、作者/审核人和免责声明；不能把博客文章当作法律意见。文章卡片关联产品和询价 CTA，避免只做流量内容而没有下一步。

### Section 11：Global Footer（P0）

四列深色 Footer：[A]

1. Logo、简介、CPSC/FSC 徽章、社交图标；
2. SEO Links：Mylar Bags、CR Paper Boxes、Glass Jars、Pre-Roll Tubes、Display Boxes；
3. Resources：Free Dielines、Sample Kit、Compliance Checklist、Packaging Laws；
4. Contact：销售邮箱、WhatsApp、工厂地址、办公时间。

认证徽章、地址、联系方式和社交账号由甲方提供并授权后发布。[C]

## 8. FAQ 页面需求

### 8.1 页面结构

- 路径：`/faq/`。
- H1：`Cannabis Packaging FAQ`。
- 8 个问题使用 Accordion；默认展开第一个，其他问题可独立展开。[R]
- 每个问题使用稳定锚点（如 `#faq-child-resistant`），便于客服和搜索结果定位。[R]
- 页面底部增加 `Get a Custom Quote` 和 `Request a Sample` CTA。
- 输出 `FAQPage` JSON-LD，但只标记页面中完整可见的问答。[R]

### 8.2 甲方提供的 8 个问题

1. Is your cannabis packaging child-resistant?
2. Can you customize cannabis packaging to meet my market requirements?
3. What types of cannabis packaging do you manufacture?
4. What is your MOQ?
5. Can I get a sample before mass production?
6. How long does custom packaging take?
7. Can you print my logo and create custom packaging?
8. How can I get a quote?

FAQ 文档中的英文回答可作为首版内容，但以下表述上线前要人工复核：[C]

- “meet applicable child-resistance requirements” 的适用市场和测试标准；
- MOQ、样品、交期的实际范围；
- “complete custom printing” 与工艺清单是否覆盖所有产品；
- 法规、食品接触、儿童防护和目标市场的免责声明。

中文、俄语、德语、法语版本需要按行业语境人工校对，不使用逐句机器直译作为最终文案。[R]

## 9. 产品详情与询价流程

### 9.1 产品详情模板

必填字段 [R]：

- 产品名称、系列、SKU、主图和图库；
- 用途摘要、应用场景、关键规格；
- 材料、尺寸/容量、闭合/防护结构；
- 印刷与表面处理；
- 定制选项、MOQ、预计交期；
- 合规/测试资料状态；
- 资料下载、相关产品、加入询价 CTA。

价格没有被确认前显示 `Quote on request`，不显示虚构价格。MOQ、交期和认证按产品/市场可配置，不能写死为全站统一值。[R/C]

### 9.2 核心用户流程

```text
首页
  -> Products Mega Menu
  -> 产品类型或应用场景集合页
  -> 产品详情
  -> 加入询价清单
  -> 编辑数量/备注
  -> RFQ 表单
  -> 询盘编号与确认
  -> 销售邮箱/CRM 跟进
```

无产品清单时，用户仍可从 RFQ 表单通过产品兴趣多选提交一般需求。[R]

### 9.3 表单安全与通知

- WordPress nonce、服务端字段校验、长度限制和反垃圾策略；
- 附件白名单（AI/PDF/PSD 等）与大小限制，拒绝可执行文件；
- 成功提交不代表报价承诺，只代表收到需求；
- 销售邮箱、SMTP、CRM、自动回复和 SLA 作为上线配置项统一在最后阶段完成；
- 默认不在前台暴露客户的私密询盘内容。[C/R]

## 10. 视觉与交互规范

### 10.1 视觉方向

- 专业、克制、工业感、真实产品、易扫描；
- 以浅色背景、深色文字、品牌绿色/少量高对比强调色建立层级；
- 参考目标网站的导航、产品浏览和 CTA 节奏，不复制其品牌视觉；
- 减少“卡片套卡片”、无意义渐变和只为装饰的动效；
- 产品图优先使用真实媒体，所有图片设置明确 alt、宽高和加载策略。[R]

### 10.2 交互状态

- Header sticky 后缩小高度但不改变字体比例；
- Mega Menu 支持点击、键盘 Escape、点击外部关闭和焦点回收；
- 搜索支持产品名、SKU、应用和文章标题；无结果时给出分类和询价 CTA；
- Product card 的图片、系列、关键规格和“加入询价”位置统一；
- Tab、Accordion、表单错误、提交中、成功和失败状态必须可见；
- 所有核心功能不依赖 hover；
- 长标题、翻译后长文本、缺图、无结果和移动端窄屏不能引起水平溢出。[R]

### 10.3 响应式

- Mobile `< 768px`：单列、抽屉菜单、底部/浮动询价入口；
- Tablet `768-1199px`：两列产品网格、可折叠筛选；
- Desktop `>= 1200px`：最大内容宽约 1280-1440px，三列 Mega Menu，三/四列产品网格；
- 所有按钮和触控目标至少 44px；图片容器使用稳定比例，避免加载后布局跳动。[R]

## 11. CMS 与技术实现建议

### 11.1 技术路线

继续使用现有 WordPress/WooCommerce 和 Woodmart 子主题。甲方文档提到 Framer CMS，但当前官网已有真实产品、媒体、分类、询价和后台资产，直接迁移到 Framer 会增加 API、表单、数据同步和 SEO 迁移风险。若未来需要 Framer，可将其用于独立营销页或设计原型，不能作为本期替换现站后台的前置条件。[R]

### 11.2 建议字段

**Product**：SKU、业务入口、产品类型、应用场景、用途、尺寸/容量、材质、闭合/防护、印刷工艺、MOQ、交期、市场、合规状态、证书/报告、媒体图库、刀模、相关产品、SEO。

**Application**：场景说明、推荐产品、组合图、目标客户、注意事项、相关 FAQ、CTA。

**Resource**：资源类型、文件格式、适用产品、预览图、下载权限、表单字段、版本日期。

**FAQ**：问题、回答、语言、排序、适用市场、审核状态、关联产品/文章。

**Site settings**：Logo、品牌色、导航、公告、销售邮箱、WhatsApp、地址、办公时间、社交账号、免责声明、表单通知。

### 11.3 内容状态

- Draft：内部编辑；
- Needs review：销售/合规审核；
- Published：可公开页面；
- Archived：不再主推但保留历史链接；
- Evidence required：缺少证书、测试报告、授权或素材时禁止作为确定性宣传发布。

## 12. 多语言与内容治理

首发语言保持五种：English、中文、Русский、Deutsch、Français。[R，延续现站范围]

- 导航、按钮、表单、错误/成功状态、FAQ 和核心 SEO 字段全部纳入翻译清单；
- 产品名、SKU、尺寸、材料、认证标准和文件名不做机械翻译；
- 每种语言都检查按钮宽度、Mega Menu 列宽、长标题换行和移动端溢出；
- 语言切换保留当前页面和筛选上下文；无法翻译的内容回退到英文并明确标记；
- 翻译发布前由熟悉目标市场的人员抽查，不把机器翻译视为法务或技术确认。[R]

## 13. SEO、可访问性与性能验收

- 页面无横向滚动，H1-H3 层级合理，键盘可完成导航、菜单、Accordion、Tab 和表单；
- 图片有描述性 alt、宽高属性、懒加载；首屏主图优先加载；
- 颜色对比度达到 WCAG AA；焦点状态清晰；
- 目标页面具备 canonical、sitemap、robots、Open Graph 和结构化数据；
- 核心 Web Vitals 在移动端达到可接受区间；视频默认不阻塞首屏；
- 旧 URL、分类 URL 和产品 URL 发布前做 301/404 检查；
- FAQ、产品和资源下载事件可被分析工具统计，但不采集不必要的敏感个人信息。[R]

## 14. 事件与业务指标

建议事件：

`view_product`、`open_products_menu`、`select_application`、`use_search`、`apply_filter`、`add_to_quote`、`remove_from_quote`、`start_quote`、`submit_quote`、`request_sample`、`download_dieline`、`open_faq`、`click_whatsapp`。

核心指标：

- 首页到产品集合页点击率；
- 产品集合页到详情页点击率；
- 详情页加入询价率；
- RFQ 开始率、完成率、合格询盘率；
- 样品申请和刀模下载转化率；
- 搜索无结果率、热门应用、移动端转化率；
- 询盘来源、语言、国家/地区和产品类型分布。

## 15. 分阶段实施计划

### Phase 0：需求与证据确认

- 确认首页主定位是包装优先，还是 VAPE + 包装 + 设备并列；
- 确认七个包装类型中哪些有真实产品、图片、规格和 URL；
- 确认认证、测试报告、产能、交期、客户数量和客户 Logo 是否可以公开；
- 确认刀模资源、样品包、运费、地区限制和线索承接人；
- 确认销售邮箱、SMTP/CRM、自动回复和 SLA；
- 确认五语言文案审核人。

### Phase 1：导航与内容模型

- 完成 Products Mega Menu 桌面/移动结构；
- 保留 VAPE/PACK/SWITCH/BOOST 四个业务入口；
- 建立 PACK 产品类型和 Application 字段映射；
- 建立 FAQ、Resource、Product 所需字段；
- 清理绝对域名、旧链接和缺失图片。

### Phase 2：首页与核心转化

- 重排/补齐 11 个首页 Section；
- 统一产品卡、CTA、表单、状态和响应式规范；
- 完成产品集合、产品详情、Quote List/RFQ 串联；
- 上线 FAQ 页面和基础结构化数据；
- 先使用“待证据确认”状态，不发布未经确认的承诺。

### Phase 3：资源、应用和内容 SEO

- 上线 Dieline、Sample Kit 资源路径；
- 上线 Shop by Application Tab 和相关集合页；
- 迁移/编辑 Insights 与法规文章；
- 完成 Title、H1、Meta、canonical、301、sitemap 和内链。

### Phase 4：测试与上线

- 桌面、平板、手机和五语言回归；
- 菜单、搜索、筛选、Tab、Accordion、询价、附件、邮件/CRM 测试；
- 性能、可访问性、SEO 抓取、404 和安全检查；
- 配置正式销售邮箱/SMTP/CRM；
- 准备备份和回滚方案。

### Phase 5：增强体验（可选）

- 360° 产品查看器；
- 工厂视频与统计动效；
- 高级资源库、下载权限和线索评分；
- 经过法务批准的市场合规筛选和个性化推荐。

## 16. 验收标准

### 功能

1. Products Mega Menu 在桌面、平板、手机均不溢出；点击、键盘和触控均可使用。
2. 四个现有业务入口仍可访问，PACK 能承接甲方确认的包装产品类型。
3. 六个首页产品卡只链接到真实集合页或明确的资源申请入口。
4. FAQ 页面包含 8 个问题，Accordion、锚点和 FAQ 结构化数据工作正常。
5. 用户可以从产品卡/详情加入询价清单，并在没有产品清单时通过产品兴趣多选提交。
6. RFQ 成功后显示询盘编号；附件被限制在允许的类型和大小；后台或 CRM 可检索来源和产品信息。
7. 搜索、筛选、Tab、Accordion、语言切换、WhatsApp 和 CTA 在五种语言下可用。

### 内容与合规

1. 认证、产能、客户数量、价格、MOQ、交期和“合规”措辞均有审核状态。
2. 未确认的内容不得以证书徽章、百分比、精确数字或交付承诺形式发布。
3. FAQ、法规文章和儿童防护描述经过销售/合规人员复核。
4. 图片、视频、客户 Logo、证书和下载文件具备公开使用授权。

### 质量

1. 长标题、翻译长文案、缺图、无结果和慢加载不导致布局跳动或横向滚动。
2. 关键页面不存在阻断渲染的 PHP/JavaScript 错误。
3. 主要链接无线上域名硬编码、死链或错误语言路由。
4. 通过键盘导航、对比度、图片 alt、响应式和基本 Lighthouse 检查。

## 17. 待甲方确认清单

### 必须先确认

- 首页 H1 和品牌主定位；
- 七个包装产品类型的真实产品、SKU、图片和分类；
- 认证/测试报告、产能、交期、客户数量及公开授权；
- 样品包、刀模文件、运费和下载表单规则；
- RFQ 邮箱、SMTP/CRM、自动回复和响应时效；
- FAQ 和法规内容的审核人。

### 可以后续微调

- 颜色、圆角、图标和动效强度；
- 首页各 Section 的精确顺序；
- 应用 Tab 的组合产品；
- 文章标题和发布节奏；
- 360° 查看器和视频是否在首发版本启用。

## 18. 结论

甲方需求的核心不是单纯增加几个首页区块，而是把官网从“按业务入口浏览的产品站”升级为“按产品类型、应用场景和资源入口组织的 B2B 包装/硬件询盘站”。最稳妥的落地方式是：保留现有 WordPress/WooCommerce 数据和 VAPE/PACK/SWITCH/BOOST 入口，在 PACK 下建立包装产品类型，在应用维度建立聚合页，再用首页、FAQ、刀模、样品和 RFQ 将这些入口连接起来。

第一版可以使用旧站已有文字作为明确标注的 Demo/Legacy 占位，但认证、产能、客户、交期、价格和合规承诺必须保持“待证据确认”状态，最终在 Phase 0 和 Phase 4 统一完成业务与上线配置。
