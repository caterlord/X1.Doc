---
title: 訂單總覽
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[適用對象]
需要快速查找現有交易的收銀員和經理。
:::

## 開始前

- 您已登入
- 您可從左側選單進入 `Orders Overview`

## 此畫面用途

使用 `Orders Overview` 找到開啟中、已完成、訂金或已搜尋的交易，然後開啟目標訂單執行後續操作。

## 主要畫面

<Tabs>
  <TabItem value="open" label="開啟">
顯示尚未完成的進行中交易。
  </TabItem>
  <TabItem value="closed" label="已完成">
顯示已完成交易，用於退回 / 重印 / 重開流程。
  </TabItem>
  <TabItem value="deposit" label="訂金">
顯示與訂金相關的交易。
  </TabItem>
  <TabItem value="search" label="搜尋">
可在搜尋視窗中按支援欄位搜尋。
  </TabItem>
</Tabs>

## 步驟

1. 在左側選單按 `Orders Overview`。
2. 選擇正確的分頁（`Open`、`Closed`、`Deposit` 或 `Search`）。
3. 如有需要，使用搜尋 / 篩選 / 排序。
4. 按目標交易。
5. 繼續所需操作（查看、退回、重開、重印等）。

## 您會看到

- 清單會按所選分頁 / 篩選條件更新
- 按下某一項後，會開啟訂單詳細內容，方便進行下一步

:::note[截圖待補]
需要檔案：`client/cl-26-orders-overview-tabs-list.png`、`client/cl-27-orders-overview-search-dialog.png`
:::

## 如果出現問題

:::warning[找不到交易]
先切換分頁（`Open` / `Closed`），再用搜尋篩選重試。
:::

## 何時需要找經理／管理員

- 經過分頁 / 搜尋檢查後，交易仍然不見
- 已完成訂單操作受政策限制

## 部分付款訂單

已儲存部分付款的堂食訂單仍顯示於 `Open`。`Part-paid` 標記和 `Balance due` 表示仍有餘額待付。開啟訂單可繼續收款或重印非最終餘額結單；獲授權員工完成交易前，不會顯示於 `Closed`。
