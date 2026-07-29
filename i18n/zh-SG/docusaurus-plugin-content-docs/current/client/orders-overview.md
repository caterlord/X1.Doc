---
title: 订单总览
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[适用对象]
需要快速找出既有交易的收银员与经理。
:::

## 开始前

- 你已经登录
- 你可以从左侧菜单进入 `Orders Overview`

## 这个画面的用途

使用 `Orders Overview` 找出未结、已完成、订金或搜寻到的交易，然后打开目标订单继续处理。

## 主要画面

<Tabs>
  <TabItem value="open" label="Open">
显示尚未完成的进行中交易。
  </TabItem>
  <TabItem value="closed" label="Closed">
显示已完成交易，可用来退款、重印或重开。
  </TabItem>
  <TabItem value="deposit" label="Deposit">
显示与订金相关的交易。
  </TabItem>
  <TabItem value="search" label="Search">
让你从搜寻对话框里，依支援栏位查询。
  </TabItem>
</Tabs>

## 步骤

1. 在左侧菜单点按 `Orders Overview`。
2. 选择正确页签（`Open`、`Closed`、`Deposit` 或 `Search`）。
3. 需要时使用搜寻／筛选／排序。
4. 点按目标交易。
5. 继续进行所需动作（查看、退款、重开、重印等）。

## 你应该会看到

- 列表会依所选页签／筛选更新
- 点按项目后会打开订单细节，供下一步动作使用

:::note[待补截图]
需要文件：`client/cl-26-orders-overview-tabs-list.png`, `client/cl-27-orders-overview-search-dialog.png`
:::

## 如果出现问题

:::warning[找不到交易]
先切换页签（`Open` vs `Closed`），再用搜寻条件重试。
:::

## 什么时候要找经理／管理员

- 在切换页签与搜寻后，交易还是看不到
- 已完成订单的动作受政策限制

## 部分付款订单

已保存部分付款的堂食订单仍显示在 `Open`。`Part-paid` 标记和 `Balance due` 表示仍有余额待付。打开订单可继续收款或重印非最终余额结单；获授权员工完成交易前，不会显示在 `Closed`。
