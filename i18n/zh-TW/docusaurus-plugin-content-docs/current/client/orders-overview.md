---
title: 訂單總覽
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[適用對象]
收銀員與經理，用來快速找出既有交易。
:::

## 開始前

- 您已登入
- 您可以從左側選單開啟 `Orders Overview`

## 此畫面用途

使用 `Orders Overview` 找出未結、已完成、訂金或搜尋到的交易，然後開啟目標訂單進行後續操作。

## 主要畫面

<Tabs>
  <TabItem value="open" label="未結">
顯示尚未完成的進行中交易。
  </TabItem>
  <TabItem value="closed" label="已結">
顯示已完成的交易，可用於退回、重印或重開流程。
  </TabItem>
  <TabItem value="deposit" label="訂金">
顯示與訂金相關的交易。
  </TabItem>
  <TabItem value="search" label="搜尋">
可從搜尋對話框使用支援的欄位查詢。
  </TabItem>
</Tabs>

## 步驟

1. 從左側選單點選 `Orders Overview`。
2. 選擇正確的分頁（`Open`、`Closed`、`Deposit` 或 `Search`）。
3. 視需要使用搜尋、篩選或排序。
4. 點選目標交易。
5. 接著執行需要的動作，例如檢視、退回、重開或重印。

## 你應該看到什麼

- 清單會依選取的分頁／篩選條件更新
- 點選某筆資料後，會開啟訂單詳細內容供下一步操作

:::note[截圖待補]
需要檔案：`client/cl-26-orders-overview-tabs-list.png`、`client/cl-27-orders-overview-search-dialog.png`
:::

## 如發生問題

:::warning[找不到交易]
先切換分頁（`Open` 與 `Closed`），再搭配搜尋條件重試。
:::

## 何時要找經理／管理員

- 經過分頁與搜尋檢查後，交易看起來仍然缺失
- 已完成訂單的動作受到政策限制

## 部分付款訂單

已儲存部分付款的堂食訂單仍顯示於 `Open`。`Part-paid` 標記和 `Balance due` 表示仍有餘額待付。開啟訂單可繼續收款或重印非最終餘額結單；獲授權員工完成交易前，不會顯示於 `Closed`。
