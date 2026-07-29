---
title: 订单总览
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[适用对象]
需要快速查找现有交易的收银员和经理。
:::

## 开始前

- 你已经登录
- 你可以从左侧菜单进入 `订单总览`

## 这个页面的用途

使用 `订单总览` 查找未结账、已完成、预付或搜索到的交易，然后打开目标订单继续操作。

## 主要视图

<Tabs>
  <TabItem value="open" label="未结账">
显示尚未完成的进行中交易。
  </TabItem>
  <TabItem value="closed" label="已结账">
显示已完成交易，用于退回 / 重印 / 重开流程。
  </TabItem>
  <TabItem value="deposit" label="预付">
显示与订金相关的交易。
  </TabItem>
  <TabItem value="search" label="搜索">
允许你在搜索对话框中按支持的字段查找。
  </TabItem>
</Tabs>

## 步骤

1. 在左侧菜单点击 `订单总览`。
2. 选择正确的选项卡（`未结账`、`已结账`、`预付` 或 `搜索`）。
3. 需要时使用搜索 / 筛选 / 排序。
4. 点击目标交易。
5. 继续执行所需操作（查看、退回、重开、重印等）。

## 你应该会看到

- 列表会根据所选选项卡 / 筛选条件更新
- 点击项目后会打开订单详情，供下一步操作使用

:::note[Screenshot pending]
Needed files: `client/cl-26-orders-overview-tabs-list.png`, `client/cl-27-orders-overview-search-dialog.png`
:::

## 出现问题时

:::warning[找不到交易]
先切换选项卡（`未结账` vs `已结账`），再用搜索条件重试。
:::

## 何时找经理/管理员

- 在切换选项卡和搜索后仍然找不到交易
- 已完成订单的操作受到制度限制

## 部分付款订单

已保存部分付款的堂食订单仍显示在 `Open`。`Part-paid` 标记和 `Balance due` 表示仍有余额待付。打开订单可继续收款或重印非最终余额结单；获授权员工完成交易前，不会显示在 `Closed`。
