---
sidebar_position: 1
title: 功能与模块索引
---

这页是 POS X1 Client 功能的完整索引，说明每个功能在哪里有文档。

## 这页的用途

操作型说明最适合培训与日常使用。这一页最适合用在：

- 稽核
- UAT 清单规划
- “这个功能在哪里？”的快速查询
- 新版本缺口分析

如果你要按功能逐页阅读，请看 [功能指南总览](../functions/overview)。

## 模块对应表

| 模块 | 主要功能 | 主要参考 |
| --- | --- | --- |
| 初始化 | 语言选择、HQ 登录、品牌／店铺绑定、产品类型、模式、启用、设定下载、首次同步 | [首次初始化](../getting-started/first-time-initialization) |
| 登录 | PIN 登录、可选快速切换语言、考勤打卡、登出 | [访问与导航](../getting-started/access-and-navigation), [功能：登录](../functions/sign-in) |
| 点餐 | 堂食／外带导航、桌台选择、外带订单联络资料、品项新增／移除、数量调整、即时口味提示、套餐选择提示 | [销售流程](../client/sales-flow), [Client 总览](../client/overview) |
| 在线订单 | 服务器／取餐订单监控与动作处理 | [在线订单](../client/online-orders) |
| 订单总览 | 打开／已结账／订金／搜寻交易查询 | [订单总览](../client/orders-overview) |
| 库存 | 售完与限量品项控制 | [库存](../client/inventory) |
| 订单功能 | 套用／取消折扣、套用／取消服务费、更换桌台、订单联络、订单备注、分拆／合并交易、作废交易、收支记录、会员登录、八达通结算、分页式 `选择功能` 对话框 | [销售流程](../client/sales-flow), [功能：订单联络](../functions/order-contact), [功能：八达通结算](../functions/octopus-settlement), [退款与作废](../client/refunds-and-voids) |
| 结账 | 金额结账、按金额分单、订金、按品项分单、付款方式选择（包含 `More` 中分页式 `Payment Methods`）、付款备注、订金备注 | [结账与收款](../client/checkout-and-payments), [功能：收款](../functions/take-payment) |
| 付款恢复 | 重试逻辑、取消保护规则、回报资料 | [付款错误与重试](../client/payment-errors-and-retry), [故障排查](./troubleshooting) |
| 已完成交易 | 作废、退款、重开、修改付款、重印收据 | [退款与作废](../client/refunds-and-voids), [功能：作废与退款](../functions/void-vs-return) |
| 设备 | 打印机新增／编辑／删除、信息／状态、测试打印、队列管理、打印失败警示标记、自动重试详情、HQ 管理打印机设置状态、高级打印机输出设置、付款／输入／X1 设备配置（包含扫描输入来源选择、Linkly EFTPOS 绑定和 Octopus V3 `设备编号`） | [设备](../client/devices), [功能：管理打印机](../functions/manage-printers), [功能：配置付款设备](../functions/configure-payment-devices), [功能：配置输入设备](../functions/configure-input-devices), [功能：配置 X1 产品](../functions/configure-x1-products), [故障排查](./troubleshooting) |
| 报表 | 报表选择、日期筛选、打印输出 | [报表](../client/reports) |
| 设置 | 语言配置、品项名称映射（`Main` / `Alt`）、登录快速切换、POS Code、收银机代码、终端 `Mode`（`Restaurant` / `Quick Order`）、常规点餐流程开关（`Enable Dine In Auto Open Order`、`Enable Takeaway Auto Open Order`、`Enable Default Takeaway Mode`、自动分配桌号）、从备份还原、四舍五入控制（`Rounding Method`、`Decimal Places`、`Round For Cash Only`）、打印设定（`Mapping`、`设置`、`模板`）、`Auto Print Receipt`、订单联络打印开关、收据 `Customer Contact` 字体区块、包含 `八达通增值单` 和 `入账 / 出账单` 的模板字体设定、标签 `启用自适应文字大小`、`自动重印时显示「自动重印」标签`、打印语言覆盖、日报打印数量、`Daily Report Sections`、进阶日结区块开关、第三方整合（仅显示已启用项目）、ODO 渠道映射（仅显示已映射项目） | [设置](../client/settings), [故障排查](./troubleshooting) |
| 信息 | 版本、调试模式、离线重新启用、日志导出／上传／删除 | [信息](../client/info), [数据保留与存储](./data-retention-and-storage) |
| 更多工具 | 打开钱箱、日结、收支记录、队列控制器 | [更多工具](../client/more-tools), [功能：日结](../functions/day-end), [功能：收支记录](../functions/pay-in-pay-out) |

## 按角色划分的功能范围

| 功能范围 | 收银员 | 经理 |
| --- | --- | --- |
| 开班、正常点餐、正常结账 | 是 | 是 |
| 更改终端设置（`POS Code`、系统级配置） | 否 | 是 |
| 需要审批的作废／退款动作 | 通常受限 | 是 |
| 执行日结 | 否 | 是 |
| 事件处理与最终决定 | 否 | 是 |

实务边界请参考：[角色与权限](../getting-started/roles-and-permissions)

## 目前已知缺口

- 部分警告／错误状态仍缺少截图
- HQ 管理功能地图仍在整理中

当前待补截图清单请看项目根目录的 `SCREENSHOT_PREP_LIST_EN.md`。
