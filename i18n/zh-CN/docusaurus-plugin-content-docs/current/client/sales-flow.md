---
sidebar_position: 3
title: 销售流程
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[适用对象]
在付款前负责接单的收银员。
:::

## 开始前

- 你已经成功登录
- 你正在 `点餐` 页面
- 菜单数据已经载入

## 步骤

<Tabs>
  <TabItem value="dine-in" label="堂食订单">
1. 点击 `堂食`。
2. 点击目标餐台。
3. 添加项目和需要的加料。
4. 确认项目已经出现在订单列表里。
5. 点击 `发送` 或点击 `结账`。
  </TabItem>
  <TabItem value="takeaway" label="外卖订单">
1. 点击 `外卖`。
2. 打开目标外卖订单。
3. 添加项目和需要的加料。
4. 确认项目已经出现在订单列表里。
5. 点击 `发送` 或点击 `结账`。
  </TabItem>
</Tabs>

:::note[外卖联络资料]
如果你需要把顾客姓名或电话打印在外卖单上，请在功能菜单里使用 `订单联络资料`。参见 [功能指南](../functions/order-contact)。
:::

## 你应该会看到

![订单页面项目选择器](/img/manual/en/client/cl-06-order-page-item-selector.png)
![带有项目的订单列表](/img/manual/en/client/cl-07-order-list-with-items.png)
- 每次选择项目后，数量和行总额都会更新
- 可以使用 `发送` 和 `结账`
- 项目名称会按照你当前语言以及 `设置` 中的项目名称映射（`主语言` / `备用语言`）显示
- 如果商品已连结口味组别，并且 HQ 中该商品的 `POS 自动显示口味组别` 已开启，加入商品后会立即打开口味选择
- 如果商品已连结套餐组别，会打开套餐选择，让员工选择需要的套餐项目
- 在外卖订单上，已保存的顾客联络资料会显示在订单标题下方

:::note[Screenshot pending]
Needed file: `client/cl-41-order-item-name-language-mapping.png`
:::

## 餐台画面切换

当 `设置` 中启用 `启用楼层平面图模式` 时，堂食餐台画面右下角会出现一个圆形切换按钮：

- 网格图标：切换到 `餐台列表`
- 地图图标：切换到 `楼层平面图`

这样员工可以在不离开点餐流程的情况下快速切换画面。

:::note[Screenshot pending]
Needed file: `client/cl-37-ordering-table-view-toggle-floorplan-tablelist.png`
:::

## 功能菜单（需要时使用）

点击三个点的功能按钮，打开 `选择功能`。

如果你配置了很多功能，`选择功能` 可能会显示 `上一页` 和 `下一页` 方块，方便翻页。

点击三个点的功能按钮可使用以下功能：

- `应用折扣`
- `取消折扣`
- `应用服务费`
- `取消服务费`
- `转台`
- `订单联络资料`
- `订单备注`
- `转为堂食` / `转为外卖`
- `分拆 / 合并交易`
- `取消交易`
- `代收 / 代支`
- `会员登录`
- `八达通结算`（启用八达通 V3 且读卡器可用时）

可参考这些详细指南：

- `应用折扣`：[功能指南](../functions/apply-discount)
- `应用服务费`：[功能指南](../functions/apply-service-charge)
- `转台`：[功能指南](../functions/change-table)
- `订单联络资料`：[功能指南](../functions/order-contact)
- `转为堂食` / `转为外卖`：[功能指南](../functions/to-dine-in-to-takeaway)
- `分拆 / 合并交易`：[功能指南](../functions/split-merge-transaction)
- `会员登录`：[功能指南](../functions/member-login)
- `代收 / 代支`：[功能指南](../functions/pay-in-pay-out)
- `八达通结算`：[功能指南](../functions/octopus-settlement)

![订单功能菜单](/img/manual/en/client/cl-08-order-function-menu.png)
![应用折扣对话框](/img/manual/en/client/cl-09-apply-discount-dialog.png)
![应用服务费对话框](/img/manual/en/client/cl-10-apply-service-charge-dialog.png)
![订单操作按钮：发送 / Link ODO / 结账](/img/manual/en/client/cl-11-order-send-close-checkout.png)

## 添加订单备注

1. 点击三个点的功能按钮。
2. 在 `选择功能` 中点击 `订单备注`。
3. 如果 `订单备注` 在另一页，点击 `上一页` 或 `下一页`。
4. 输入备注，然后确认。
5. 检查备注是否出现在订单标题下方。
6. 如果还需要编辑，点击备注旁边的铅笔图标。

:::note[Screenshot pending]
Needed file: `client/cl-42-select-function-dialog-pagination.png`
:::

:::note[Screenshot pending]
Needed file: `client/cl-43-order-remark-display-edit.png`
:::

## 出现问题时

:::warning[无法拆分 / 合并或作废]
先发送尚未提交的项目，然后再重试。
:::

:::note[选错餐台]
在结账前，先从功能菜单使用 `转台`。
:::

:::note[口味或套餐提示没有出现]
请选择商品行，确认是否可以手动调整口味。如果提示仍然不正确，请经理/管理员在 HQ 检查该商品的 `管理关联` 设置和 `POS 自动显示口味组别`。
:::

## 何时找经理/管理员

- 作废 / 退回需要经理审批
- 折扣 / 服务费选项缺失，但本应可用
- 订单行为与门店规则不一致
