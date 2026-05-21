---
sidebar_position: 1
title: 版本说明
---

本页按发布和更新批次记录整套 X1 文档的变更。

本页不只针对 POS app 手册，也包括 HQ、共用流程和文档结构更新。

## 2026-05-21（v1.7.16 POS 与 HQ 对齐）

### 已更新

- `销售流程`：补充加入商品后当前的口味/套餐提示行为。
- `菜单项目`：补充 `POS 自动显示口味组别`、`商品关联`，以及在 `管理关联` 检查口味组别与套餐组别的说明。
- `加购项` 和 `套餐群组`：补充 `显示最近已移除`、24 小时还原范围、已移除行只显示还原动作，以及同名群组会阻止还原的说明。
- `菜单分类`、`智能分类`、`菜单项目`、`POS Menus`、`付款方式`、`税项及附加费` 和 `桌位与区域`：补充最近移除还原流程、24 小时显示范围、已移除行只显示还原动作，以及还原前的后端验证。
- `管理打印机`、`设置`、`疑难排解` 和 `功能与特性地图`：补充打印队列重试详情、自动重试状态，以及 `自动重印时显示「自动重印」标签`。
- `门店资料`：补充收据标志打印类型可套用到 `ODO 配对纸`。

### 已检查

- 已检查 POS 从 `v1.7.13` 到 `v1.7.16` 的源码变更，包括 release notes、打印队列自动重试、ODO slip 标志打印、browser sandbox、Mac 相机扫描器设置、同步修正，以及口味/套餐点餐流程。
- 已检查 HQ 在上一个订阅席位文档更新后的源码变更，包括 POS logs、ODO slip 标志设置、口味关联修正、口味打印机指派处理、`POS 自动显示口味组别`、POS log 文件名处理、促销活动保存处理、Neon 渠道绑定和部署文档。
- 确认 browser sandbox、部署、依赖警告、渠道绑定和一般稳定性修正，除了上述更新外，没有新增收银员/管理员手册步骤。

## 2026-05-09（v1.7.13 POS 重新发布）

### 已更新

- `配置输入设备`：补充条码/二维码扫描器的扫描输入来源选择，包括 `相机`、`USB / 蓝牙`、`测试 USB/蓝牙扫描器` 和 `启用相机备用`。
- `设备` 和 `功能与特性地图`：把扫描输入来源选择加入 `输入设备` 范围。

### 截图更新

- 更新条码/二维码扫描器编辑窗口的待补截图说明，要求显示重新发布版的扫描输入来源控制项。

### 已检查

- 已检查首次 `v1.7.13` GitHub 发布后新增的 POS 源码差异，包括扫描来源体验、硬件扫描器文字输入、Mac App Store 启动授权，以及符合沙盒限制的启用资料库设置。
- 确认 Mac App Store/TestFlight 打包修复不需要在当前在线手册中新增操作步骤。

## 2026-05-06（v1.7.13 POS 对齐）

### 已更新

- `设备`：补充设备警示标记、打印失败任务数量、`需要设置`、HQ 管理打印机的 `HQ` 标记，以及 `尚未配置` 打印机行。
- `管理打印机`：新增 HQ 管理打印机设置流程，并说明打印队列错误任务会触发打印机警示标记，直到 `错误` 队列清空。
- `我的订阅` 和 `首次初始化`：说明 POS 设备名称现在会在启用/验证订阅时记录，并说明删除 POS 门店配置前会释放相关 X1 POS 订阅席位。
- `功能与特性地图`：把设备警示标记和 HQ 管理打印机设置状态加入 `设备` 范围。

### 截图更新

- 新增 `设备` 警示标记状态和 HQ 管理打印机设置行的待补截图。

### 已检查

- 已检查 `v1.7.12` 到 `v1.7.13` 的 POS 源码差异，包括发布说明、UI 标签、设备警示实现、订阅启用/验证变更，以及删除门店配置行为。
- 确认 Windows Store/Mac App Store 打包、桌面品牌识别、Windows 缩放布局修正和应用商店管理更新提示，不需要在当前手册基线中新增操作步骤。

## 2026-05-04（HQ X1 POS 订阅席位）

### 更新内容

- `我的订阅`：补充 `X1 产品` 分页、X1 POS 席位数量、已占用／可用席位状态、缩短设备 ID fallback，以及替换平板使用的 `释放设备` 操作。
- `我的订阅`：说明释放 POS 设备席位不会取消订阅；它只会清除旧设备，让替换平板可以注册。
- `我的订阅`：保留 `市集` 分页中的市集订阅检查和取消订阅指引。

### 已复查

- 已按 X1.HQ PR #242 和 X1.POS PR #401 比对当前手册基准。
- 已确认本次文档更新没有新增截图需求。

## 2026-05-01（v1.7.12 POS 对齐）

### 更新内容

- `管理打印机` 和 `设备`：补充打印机编辑窗口中的高级打印机输出设置，包括 `打印缩放 (%)`、走纸行数控制，以及针式打印密度/颜色选项。
- `设置`：说明 `自动打印收据` 只控制收据打印。付款方式已设置为开钱箱时，即使收据自动打印关闭，结账后钱箱仍会打开。
- `功能与特性地图`：更新 `设备` 范围，加入高级打印机输出设置。

### 截图更新

- 新增针式打印高级设置的待补截图。

### 已复查

- 已检查 `v1.7.11` 到 `v1.7.12` 的 POS 源码差异，包括发布说明和源码变更。
- 已确认结账开钱箱变更属于行为修复，不需要新增收银员步骤。

## 2026-04-29（v1.7.11 POS 对齐）

### 更新内容

- `设置`：补充 `打印` -> `模板` -> `标签` -> `启用自适应文字大小`，用于较长标签品项/配料名称。
- `配置支付设备` 和 `设备`：补充八达通 V3 读卡器 `设备编号` 字段和保存要求。
- 新增功能指南：订单功能菜单中的 `八达通结算`。
- `销售流程` 和 `功能与特性地图`：将 `八达通结算` 加入订单功能说明。

### 截图更新

- 新增标签自适应文字大小和 Octopus settlement 的待补截图。
- 更新八达通 V3 读卡器截图需求，加入 `设备编号`。

### 已复查

- 已检查从上一版 POS 手册基准到 `v1.7.11` 的 POS 源码变化，包括发布说明和源码差异。
- 已确认 ODO 结账状态同步、后台 ODO 上传、外卖导航上下文、八达通增值单标题字号、结算响应性，以及稳定性/崩溃处理属于行为修复或可靠性改进，不需要在上述更新之外新增收银员步骤。

## 2026-04-25（HQ POS 用户批量创建和工作区访问）

### 更新内容

- `POS Users`：补充在同一个 `New POS User` 窗口使用 `Beast Mode` 创建多个 POS 用户的说明，包括每行栏位，以及共用 `User Groups`、`Shop`、登录方式和状态设置。
- `Workspace Administration`：补充 `Workspace admin` 访问状态说明，并说明工作区管理员即使没有直接公司、品牌或门店分配，也已拥有当前工作区的访问权限。

### 已复查

- 已按 X1.HQ PR #183 和 PR #184 已部署的 HQ portal 变更比对当前手册基准。
- 已确认本次文档更新没有新增截图需求。

## 2026-04-23（HQ 品牌和菜单项目流程调整）

### 更新内容

- `Workspace Administration` 和 `Brand, Shop, and Channel Scope`：补充品牌记录可包含收据品牌资料，例如打印收据使用的标志。
- `Menu Items`：补充抽屉标题中的当前记录信息、`Skip to Next` / `Update & Next` 会保留当前分页的流程，以及各门店启用状态相关的门店设置文字。

### 已复查

- 已按 HQ portal 变更 `0a18a87`、`158922f`、`24fe946` 和 `76a7a36` 比对当前手册基准。
- 已确认此期间其余菜单目录和工作区文字变更，不需要在以上更新之外新增独立页面。

## 2026-04-19（HQ/POS 权限调整）

### 更新内容

- `POS Users`：补充用户群组 `权限`、权限区块、受保护 POS 操作示例，以及已保存群组权限对 POS 执行时行为的影响。
- `角色与权限`：补充 `权限不足`、`输入员工编号`、`输入授权员工编号` 和第二位授权人检查的执行时提示说明。
- `More Tools`、`Online Orders` 和 `Settings`：说明员工可能遇到的权限失败情况，以及何时需要升级处理。
- `按钮样式`、`菜单分类`、`智能分类`、`菜单项目` 和 `线上分类`：补充可从支持的 `按钮样式` 选择器直接使用 `创建按钮样式` 的说明。

### 已复查

- 已检查 X1.POS 至 `9f898e4` 和 X1.HQ 至 `b1e558c` 的最新变更，确认对用户手册的影响。
- 已确认 KPay 签名错误回报、商品栏位显示设置保留、套餐复制清理，以及营业时段重叠提示文字属于行为/消息修正，不需要新增独立操作流程。

## 2026-04-18（HQ 猛兽模式批量建立）

### 更新内容

- `Categories`：补充 `Category Code`、分类 `Shop Settings`，以及用共用设置一次建立多个分类的 `猛兽模式` 说明。
- `Smart Categories`：补充用共用设置一次建立多个智能分类的 `猛兽模式` 说明。
- `Payment Methods`：补充以 `Code` 和 `Name` 一次建立多个付款方式的 `猛兽模式` 说明。
- `Departments`：补充 `Departments`、`Sub-Departments` 和 `Revenue Centers` 以 `Code`、`Name`、`Description` 批量建立的说明。
- `Reasons`：补充以 `Reason Code` 和 `Description` 一次建立多个原因的 `猛兽模式` 说明。
- `Device Settings`：补充以 `Printer Name` 一次建立多个打印机/KDS 记录的 `猛兽模式` 说明。
- `Online Categories`：补充以 `Name` 和 `Name Alt` 一次建立多个线上分类的 `猛兽模式` 说明。
- `Menu Items`：补充复制动作、深度复制行为、`猛兽模式` 多行复制、共用目标分类／部门，以及重复 `Item Code` 检查说明。
- `Modifier Groups`：补进行级复制动作、来源预先选取、`猛兽模式` 共用复制设置，以及已连结加购项目和门店价格资料的深度复制说明。
- `Meal Sets`：补进行级复制动作、来源预先选取、`猛兽模式` 共用复制设置，以及已连结套餐项目和门店价格资料的深度复制说明。
- `猛兽模式` 徽章：更新启用后的徽章，让复制窗口都显示闪电图示。

### 已复查

- 已按 HQ portal PR #138 和 PR #139 的合并更新比对当前手册基准。
- 已确认本次文档更新没有新增截图需求。

## 2026-04-17（HQ 导航与账单调整）

### 更新内容

- `市集与账单`：将 HQ 文档章节名称调整为与后台侧边栏一致。
- `My Subscriptions`：将进入路径更新为顶层 `My Subscriptions` 侧边栏项目。
- `Billing`：将进入路径更新为顶层 `Billing` 侧边栏项目，并补充自定义线下合同账单说明。
- `Billing`：移除免费／推广方案说法，改为说明 `Custom Contract` 与 `Offline Contract`。
- `Promotions` 与 `Discounts`：将文档中的进入路径由 `Menu Management` 更新为 `POS Settings`。

### 已复查

- 已比对 HQ 后台中订阅、账单、促销和折扣页面的导航变更与手册基准。
- 已确认本次只调整导航标签与账单文字，不需要新增截图。

## 2026-04-12（HQ Marketplace 与渠道设置检查）

### 更新内容

- `Online Ordering`：重写 `General Settings`，使其符合当前门店列表与 `Shop Settings` 工作流。
- `Online Ordering`：新增 `3rd Party Platforms` 页面，用于门店级平台订阅与设置。
- `Online Ordering`：重写 `Channel Settings`，使其符合新的 `By Category`、`By Shop` 与 `By Channel` 矩阵视图。
- `Online Ordering`：将 `Categories and Items`、`Call to Action`、`Menus and Combinations` 与 `UI Translations` 改写为当前 HQ 任务／设置参考格式。
- `Marketplace`：更新 `Marketplace` 与 `My Subscriptions` 指引，补充平台订阅及其对后续设置的影响。

### 截图更新

- 新增 HQ 的 `Channel Settings` 矩阵视图与 `3rd Party Platforms` 门店页面截图。

### 已复查

- 检查 X1 HQ 的 commit `05a38e1`（`feat: add marketplace platforms, channel subscription filtering, and pivot views`），并与当前手册基线比较。
- 确认用户可见的文档影响集中在线上点餐平台设置、渠道可见性，以及市集订阅指引。

## 2026-04-02（v1.7.7 对齐）

### 更新内容

- `Settings`：补充 `Printing` -> `Setting` -> `Auto Print Receipt`。
- `Settings`：补充 `Report` -> `Daily Report Sections`、`Show advanced sections`，以及相关的日结报表内容控制。
- `Day-end`（`client` 和 `functions`）：说明打印的日结内容遵循 `Report` 设置。
- `Function and Feature Map`：更新 `Settings` 范围，纳入收据自动打印和可配置的日结报表区块。

### 截图更新

- 为新的收据自动打印开关和 `Report` 日结区块设置添加待补截图。

### 已复查

- 对照当前手册内容检查了数字输入对话框中的新手动价格 `±` 按钮。现有操作页面尚未涵盖该对话框，因此本批次没有新增独立页面。

### 写作整理

- 重新检查操作页面中的旧版本提示，并将发布历史仅保留在本页。

## 2026-03-25（Issue #82 设置模式指引）

### 更新内容

- `Settings`：补充在 `Restaurant` 与 `Quick Order` 终端模式之间切换的操作说明，并包含控制“先选桌”与“直接点单”流程的相关 `General` 设置。
- `Function and Feature Map`：更新 `Settings` 范围，纳入终端模式与快速点餐相关的通用开关。

### 截图更新

- 为 `Operation` -> `Terminal` 模式选择和相关 `General` 点餐模式开关添加待补截图。

### 写作整理

- 重新对照当前 UI 标签检查了设置指南，并把新的模式说明保留在设置页面指南中，没有分散到其他位置。

## 2026-03-24（v1.7.6 对齐）

### 更新内容

- `Sales Flow`：在功能菜单中补充外卖 `Order Contact` 的可用性，并说明已保存的联系人信息会显示在外卖订单标题下。
- 新功能页：`Order Contact`，用于在外卖订单中保存客户 `Name` 和 `Phone`。
- `Settings`：补充 `Printing` -> `Setting` 中 `Show Order Contact On Receipt` 与 `Show Order Contact On Kitchen Output` 的开关，以及收据模板字体设置中的 `Customer Contact` 行。
- `Function and Feature Map`：更新点餐与设置范围，纳入外卖联系人采集与打印控制。

### 截图更新

- 为外卖订单联系人录入/结果，以及打印联系人开关添加待补截图。

### 写作整理

- 重新检查操作页面中的旧版本提示，并将发布历史仅保留在本页。

## 2026-03-15（v1.7.5 复查）

### 已复查

- 检查 `v1.7.5` 发布说明和源代码差异中的用户可见变更。
- 重新检查依赖弹窗标题、输入提示、选择列表、日期/时间选择器、加载对话框，以及分页式 `Select Function` 对话框的流程。

### 结论

- 本次发布不需要调整操作说明。
- 相较 `v1.7.4` 基线，没有 UI 标签、按钮名称或用户步骤变化。
- 现有截图与待补截图请求仍可继续用于文档。

### 写作整理

- 重新检查操作页面中的旧版本提示，并将发布历史仅保留在本页。

## 2026-03-13（v1.7.4 对齐）

### 更新内容

- `Sales Flow`：记录分页式 `Select Function` 行为，新增 `Order Remark`，并说明已保存的订单备注在哪里可以编辑。
- `Checkout and Payments`：记录从 `More` 打开分页式 `Payment Methods` 的选择流程，以及当前 `Payment Remark` / `Deposit Remark` 的输入入口。
- 功能菜单指南（`Apply Discount`、`Apply Service Charge`、`Member Login`、`Split or Merge Transaction`、`To Dine-In or To Takeaway`、`Void vs Return`、`Refunds and Voids`）：更新进入步骤，使其符合分页式 `Select Function` 对话框。
- `Change Table`：记录选择器对话框在 `Table List` 和 `Floor Plan` 之间的切换，以及 `Show Split` / `Hide Split` 行为。
- `Function and Feature Map`：更新点餐与结账范围，涵盖选择器分页与备注流程。

### 截图更新

- 为功能选择器分页、订单备注显示/编辑、结账付款备注编辑按钮，以及改桌对话框视图切换添加待补截图。

### 写作整理

- 重新检查操作页面中的旧版本提示，并将发布历史仅保留在本页。

## 2026-03-10（v1.7.3 对齐）

### 更新内容

- `Settings`：扩展以覆盖当前区块布局（`General`、`Operation`、`System`、`Printing`、`Third Party Platform`、`ODO`、`Report`）、从备份还原流程、`Printing` -> `Template` 中的打印语言覆盖，以及已映射/已启用的筛选行为。
- `Function and Feature Map`：更新 `Settings` 范围，纳入还原操作、打印语言覆盖、仅显示已启用的集成列表，以及仅显示已映射的 ODO 通路映射列表。

### 写作整理

- 重新检查操作页面中的旧版本提示，并将发布历史仅保留在本页。

## 2026-03-06（v1.7.2 对齐）

### 更新内容

- `Settings`：补充 `System` -> `Number` 中 `Rounding Method`、`Decimal Places` 和 `Round For Cash Only` 的说明。
- `Checkout and Payments`：说明仅现金四舍五入的行为，以及结账变更过程中 `Rounding` 总额应实时更新。
- `Payment Errors and Retry`：说明通过返回或导航离开结账时桌台的预期解锁行为，并补充仅现金四舍五入规则的背景。

### 写作整理

- 重新检查操作页面中的旧版本提示框；本批次没有其他旧版本提示需要转换。

## 2026-03-05（v1.7.1 对齐）

### 更新内容

- `Settings`：记录重新设计的语言配置布局和任务流程。
- `Access and Navigation` + `Sign In`：补充登录时快速切换语言的说明。
- `Sales Flow`：说明品项名称会跟随所选语言，以及品项映射（`Main` / `Alt`）。
- `Function and Feature Map` + `Terminology`：补充语言/品项映射/快速切换参考。

### 写作整理

- 重新检查操作页面中的旧版本提示框，并将发布历史仅保留在本页。

## 2026-03-05（v1.7.0 对齐）

### 更新内容

- `Configure Payment Devices`：新增 `Linkly EFTPOS Terminal` 设置流程（配对与保存检查清单）。
- `Devices`：说明 `Payments` 标签页包含 Linkly EFTPOS 终端设置。
- `Checkout and Payments`：说明即使有未送出的行，`Split By Item` 也可以继续。
- `Payment Errors and Retry`：新增 EFTPOS 终端处理说明（重试前先等待终端/POS 结果）。
- `Info`：说明日志导出在可用时包含 Octopus 日志。

### 写作整理

- 移除了操作提示/标题中的旧版版本标签（例如 `v1.6.5+`、`v1.6.6+`），并将相关行为合并到普通基线说明中。

## 2026-02-27（新增数据保留指南）

### 新增

- 新增参考页面：`Data Retention and Storage`，说明本地日志、媒体缓存、本地数据库保留以及支持上传。

### 更新

- `Info`、`Troubleshooting` 和 `Function and Feature Map` 现在都会链接到保留指南，方便快速查找政策。

## 2026-02-27（v1.6.6 对齐）

### 更新内容

- `Sales Flow`：补充桌台页面上的 `Floor Plan`/`Table List` 切换行为。
- `Info`：更新日志流程，以匹配当前应用的 `Export`、`Upload` 和 `Remove` 已选日志文件操作。
- `Info`：说明本地导出与云端上传的支持路径预期。

### 截图更新

- 为桌台视图切换和更新后的日志选择/上传 UI 状态添加新的待补截图。

## 2026-02-22（v1.6.5 对齐）

### 更新内容

- `First-Time Initialization`：说明在设置过程中选择的语言会立即生效，且设置文字会本地化。
- `Day-end`（`client` 和 `functions`）：说明所选日期的处理行为，以及已结账日期会被阻止重复日结。
- `Troubleshooting`：新增 `Day-end has already been processed for the selected day` 的说明。

## 2026-02-21（英文草稿刷新）

### 新增

- 新增入门指南：`Quick Start (15 mins)`
- 新增 SOP 页面：`Daily Operations`
- 新增完整功能索引：`Function and Feature Map`
- 新增版本跟踪页面
- 初始化流程更新为 7 步，并加入语言选择
- 初始化后的订单数据同步流程

### 增强

- 故障排查改写为决策式指引
- 退货/作废和日结页面现在包含 `Do / Don't` 规则
- 角色/权限指引改写为更贴近操作的收银员 vs 经理边界
- 截图映射已与最新提供的截图对齐

### 待办

- 剩余截图列在 `SCREENSHOT_PREP_LIST_EN.md`
- HQ 工作流程定稿后再扩展 HQ 文档
