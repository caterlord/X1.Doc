---
sidebar_position: 1
title: 功能与特性索引
---

本页是 POS X1 Client 功能的完整索引，也说明每个功能对应在哪些页面中记录。

## 为什么有这页

场景型指南适合培训和日常操作。本页更适合：

- 审计
- UAT 检查清单规划
- 查询“这个功能在哪？”
- 分析即将发布版本的文档缺口

如果你想按“一页一个功能”来阅读，请使用 [Function Guides 总览](../functions/overview)。

## 模块索引

| 模块 | 核心功能 | 主要参考 |
| --- | --- | --- |
| 初始化 | 语言选择、HQ 登录、品牌/门店绑定、产品类型、模式、激活、设置下载、首次同步 | [首次初始化](../getting-started/first-time-initialization) |
| 登录 | PIN 登录、可选快速切换语言、更表签到/签退、登出 | [访问与导航](../getting-started/access-and-navigation), [功能：登录](../functions/sign-in) |
| 点餐 | 堂食/外卖导航、桌台选择、外卖订单联系人、品项增删、数量调整、即时口味提示、套餐选择提示 | [销售流程](../client/sales-flow), [页面指南：Client 总览](../client/overview) |
| 网上订单 | 服务器/取餐订单监控和动作处理 | [页面指南：网上订单](../client/online-orders) |
| 订单总览 | 已打开/已结账/订金/搜索交易查询 | [页面指南：订单总览](../client/orders-overview) |
| 库存 | 售罄与限量品项控制 | [页面指南：库存](../client/inventory) |
| 订单功能 | 应用/取消折扣、应用/取消服务费、改桌、订单联系人、订单备注、拆分/合并交易、作废交易、收支记录、会员登录、八达通结算、分页式 `选择功能` 对话框 | [销售流程](../client/sales-flow), [功能：订单联系人](../functions/order-contact), [功能：八达通结算](../functions/octopus-settlement), [退货与作废](../client/refunds-and-voids) |
| 结账 | 金额、按金额分单、订金、按品项分单、付款方式选择（包括从 `More` 打开的分页式 `Payment Methods`）、付款备注、订金备注 | [结账与付款](../client/checkout-and-payments), [功能：收款](../functions/take-payment) |
| 付款恢复 | 重试逻辑、取消保护规则、回报资料 | [付款错误与重试](../client/payment-errors-and-retry), [故障排查](./troubleshooting) |
| 已完成交易 | 作废、退货、重新打开、修改付款、重印收据 | [退货与作废](../client/refunds-and-voids), [功能：作废与退货](../functions/void-vs-return) |
| 设备 | 打印机新增/编辑/删除、信息/状态、测试打印、队列、打印失败警示标记、自动重试详情、HQ 管理打印机设置状态、高级打印机输出设置、付款/输入/X1 设备配置（包括扫描输入来源选择、Linkly EFTPOS 配对和八达通 V3 `设备编号`） | [页面指南：设备](../client/devices), [功能：管理打印机](../functions/manage-printers), [功能：配置付款设备](../functions/configure-payment-devices), [功能：配置输入设备](../functions/configure-input-devices), [功能：配置 X1 产品](../functions/configure-x1-products), [故障排查](./troubleshooting) |
| 报表 | 报表选择、日期筛选、打印输出 | [页面指南：报表](../client/reports) |
| 设置 | 语言配置、品项名称映射（`Main`/`Alt`）、登录快速切换开关、POS Code、收银机 Code、终端 `Mode`（`Restaurant` / `Quick Order`）、通用订单流程开关（`Enable Dine In Auto Open Order`、`Enable Takeaway Auto Open Order`、`Enable Default Takeaway Mode`、可选自动分配桌台 Code）、从备份还原、四舍五入控制（`Rounding Method`、`Decimal Places`、`Round For Cash Only`）、打印控制（`Mapping`、`设置`、`模板`）、`Auto Print Receipt`、订单联系人打印开关、收据 `Customer Contact` 字体区块、标签 `启用自适应文字大小`、`自动重印时显示「自动重印」标签`、打印语言覆盖、报表打印数量、`Daily Report Sections`、高级日结报表区块开关、第三方集成（仅显示已启用项）、ODO 通路映射（仅显示已映射项） | [页面指南：设置](../client/settings), [故障排查](./troubleshooting) |
| 信息 | 版本、调试模式、离线重新激活、日志导出/上传/删除 | [页面指南：信息](../client/info), [数据保留与存储](./data-retention-and-storage) |
| 更多工具 | 打开钱箱、日结、收支、队列控制 | [页面指南：更多工具](../client/more-tools), [功能：日结](../functions/day-end), [功能：收支](../functions/pay-in-pay-out) |

## 按角色划分的功能范围

| 功能区域 | 收银员 | 经理 |
| --- | --- | --- |
| 开班、普通点餐、普通结账 | 是 | 是 |
| 修改终端设置（`POS Code`、系统级配置） | 否 | 是 |
| 需要审批的作废/退货操作 | 通常受限 | 是 |
| 执行日结 | 否 | 是 |
| 事件转交与最终决定 | 否 | 是 |

实际边界请参阅 [角色与权限](../getting-started/roles-and-permissions)。

## 已知缺口（当前草稿）

- 部分警告/错误状态仍缺少截图
- HQ 管理员功能索引仍在完善中

请参阅项目根目录中的 `SCREENSHOT_PREP_LIST_EN.md`，查看当前待补截图清单。
