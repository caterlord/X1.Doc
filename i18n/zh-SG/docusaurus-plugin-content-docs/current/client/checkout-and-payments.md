---
sidebar_position: 4
title: 结账与收款
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[适用对象]
负责收款的收银员，以及处理特殊付款情况的经理。
:::

## 开始前

- 订单已经可以收款
- 客户已确认付款方式
- 你已经在结账画面
- 你知道 `Settings` -> `System` 是否启用了 `Round For Cash Only`

## 选择正确的付款模式

<Tabs>
  <TabItem value="amount" label="Amount（单笔／一般）">
1. 保持在 `Amount`。
2. 选择付款方式。
3. 如果看不到该方式，点按 `More`，再到 `Payment Methods` 选择。
4. 如果 `Payment Methods` 有很多选项，点按 `Previous` 或 `Next` 翻页。
5. 输入金额，然后点按 `Pay`。
6. 确认付款行显示正确。
  </TabItem>
  <TabItem value="split-amount" label="Split By Amount">
1. 点按 `Split By Amount`。
2. 输入第一笔部分付款与方式。
3. 继续输入剩余付款，直到 `Unpaid` 变成零。
4. 点按 `Pay`。
  </TabItem>
  <TabItem value="deposit" label="Deposit">
1. 点按 `Deposit`。
2. 选择方式与金额。
3. 如果需要，填入 `Deposit Remark`。
4. 点按 `Pay`。
  </TabItem>
  <TabItem value="split-item" label="Split By Item">
1. 点按 `Split By Item`。
2. 用 `>` 或 `All` 移动物品。
3. 点按 `Next`。
4. 为每张分拆订单完成付款。
  </TabItem>
</Tabs>

:::tip[有未送出品项时也可使用 Split By Item]
即使订单里还有尚未送出的行项目，你仍然可以开始 `Split By Item` 结账。
:::

:::note[仅现金四舍五入行为]
启用 `Round For Cash Only` 时，只有当前付款包含现金才会套用四舍五入。
:::

## 需要备注时

1. 选择你要用的付款方式。
2. 点按 `Paid` 旁边的编辑按钮输入 `Payment Remark`。
3. 输入备注后，先确认，再完成付款。
4. 对于 `Deposit`，请在点按 `Pay` 前先输入 `Deposit Remark`。
5. 完成结账前，确认备注已经保存。

:::note[待补截图]
需要文件：`client/cl-44-checkout-payment-remark-edit-button.png`
:::

## 你应该会看到

![Checkout Amount tab](/img/manual/en/client/cl-12-checkout-amount-tab.png)
![Checkout Split By Amount](/img/manual/en/client/cl-14-checkout-split-by-amount.png)
![Checkout Deposit tab](/img/manual/en/client/cl-15-checkout-deposit-tab.png)
![Checkout Split By Item](/img/manual/en/client/cl-16-checkout-split-by-item.png)
- 当你在结账时更改折扣或其他项目，`Rounding` 与总额会同步更新
- `Paid` 汇总区会显示编辑按钮，可输入 `Payment Remark`

## 如果出现问题

:::warning[付款看起来卡住了]
在付款处理期间，不要强制关闭应用。
:::

:::tip[付款失败]
只有在状态明确为失败／已取消时才重试一次。如果还是失败，就依门市政策更换方式。
:::

:::note[离开结账后桌台仍锁定]
先离开结账，再重新打开订单一次。如果桌台还是锁定，请带着桌号与时间戳向经理/管理员回报。
:::

## 什么时候要找经理／管理员

- 付款结果不清楚，可能有重复扣款风险
- 需要修改第三方连结付款，但系统不允许
- 必要的付款方式因设定而被阻挡

## 堂食餐桌的部分付款

管理员为品牌启用 `Enable partial payments` 后，获授权的收银员可在 `Split By Amount` 中保存低于账单总额的付款。

1. 输入金额并选择付款方式，然后点按 `Take partial payment`。
2. 确认记录显示在 `Payment history`，并包含收款时间及参考编号。
3. 打印 `Balance Statement — Not Final Receipt`，或返回订单继续服务。
4. 稍后重新打开结账，核对 `Paid` 和 `Balance due`，再收取余款。
5. 点按 `Complete payment` 完成交易并打印最终收据。

部分付款后，订单仍留在未结视图。可以加单，但订单金额不能低于已收金额。保存首笔付款后不可按项目拆分、拆单或合并交易，但仍可换桌。若编辑后余额为零，获授权的员工仍须明确完成交易。

:::warning[付款可能已扣款但保存结果不明确]
若 POS 提示网关付款可能已扣款，请勿再次收费。记录参考编号，并请经理核对或冲正。
:::
