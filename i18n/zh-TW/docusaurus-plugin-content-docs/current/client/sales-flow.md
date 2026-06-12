---
sidebar_position: 3
title: 銷售流程
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[適用對象]
收銀員在付款前建立與整理訂單。
:::

## 開始前

- 您已成功登入
- 您目前在 `Ordering` 頁面
- 菜單資料已載入完成

## 步驟

<Tabs>
  <TabItem value="dine-in" label="堂食訂單">
1. 點選 `Dine-In`。
2. 點選目標桌台。
3. 加入品項與需要的加購項目。
4. 確認品項已出現在訂單列表。
5. 點選 `Send` 或 `Checkout`。
  </TabItem>
  <TabItem value="takeaway" label="外賣訂單">
1. 點選 `Takeaway`。
2. 開啟目標外賣訂單。
3. 加入品項與需要的加購項目。
4. 確認品項已出現在訂單列表。
5. 點選 `Send` 或 `Checkout`。
  </TabItem>
</Tabs>

:::note[外賣聯絡資料]
如果您需要在外賣列印單上顯示客戶姓名或電話，請從功能選單使用 `訂單聯絡資料`。請參考 [功能指南](../functions/order-contact)。
:::

## 你應該看到什麼

![訂單頁面品項選擇器](/img/manual/en/client/cl-06-order-page-item-selector.png)
![含品項的訂單清單](/img/manual/en/client/cl-07-order-list-with-items.png)
- 每次選擇品項後，數量與各行總計都會更新
- `Send` 與 `Checkout` 動作可用
- 品項名稱會依照目前語言與 `Settings` 中的品項名稱對應（`Main` / `Alt`）顯示
- 如果商品已連結口味組別，且 HQ 中該商品的 `POS 自動顯示口味組別` 已開啟，加入商品後會立即開啟口味選擇
- 如果商品已連結套餐組別，會開啟套餐選擇，讓員工選擇需要的套餐項目
- 在外賣訂單中，已儲存的客戶聯絡資料會顯示在訂單標頭下方

:::note[截圖待補]
需要檔案：`client/cl-41-order-item-name-language-mapping.png`
:::

## 桌台畫面檢視切換

當 `Settings` 中啟用 `啟用樓層平面圖模式` 後，堂食桌台畫面右下角會出現圓形切換按鈕：

- 方格圖示：切換到 `Table List`
- 地圖圖示：切換到 `Floor Plan`

這讓員工可以快速切換版面，而不用離開點餐流程。

:::note[截圖待補]
需要檔案：`client/cl-37-ordering-table-view-toggle-floorplan-tablelist.png`
:::

## 功能選單（需要時）

點選三點功能按鈕開啟 `選擇功能`。

如果設定了很多功能，`選擇功能` 可能會顯示 `上一頁` 與 `下一頁`，讓您切換頁面。

點選三點功能按鈕可使用：

- `套用折扣`
- `取消折扣`
- `套用服務費`
- `取消服務費`
- `轉枱`
- `訂單聯絡資料`
- `訂單備註`
- `轉為堂食` / `轉為外賣`
- `分拆 / 合併交易`
- `取消交易`
- `代收 / 代支`
- `會員登入`
- `八達通結算`（啟用 Octopus V3 且讀卡機可用時）

使用以下詳細指南：

- `套用折扣`：[功能指南](../functions/apply-discount)
- `套用服務費`：[功能指南](../functions/apply-service-charge)
- `轉枱`：[功能指南](../functions/change-table)
- `訂單聯絡資料`：[功能指南](../functions/order-contact)
- `轉為堂食` / `轉為外賣`：[功能指南](../functions/to-dine-in-to-takeaway)
- `分拆 / 合併交易`：[功能指南](../functions/split-merge-transaction)
- `會員登入`：[功能指南](../functions/member-login)
- `代收 / 代支`：[功能指南](../functions/pay-in-pay-out)
- `八達通結算`：[功能指南](../functions/octopus-settlement)

![訂單 function 菜單](/img/manual/en/client/cl-08-order-function-menu.png)
![套用 Discount dialog](/img/manual/en/client/cl-09-apply-discount-dialog.png)
![套用 Service Charge dialog](/img/manual/en/client/cl-10-apply-service-charge-dialog.png)
![訂單 action 按鈕: 傳送 / 連結 ODO / Checkout](/img/manual/en/client/cl-11-order-send-close-checkout.png)

## 新增訂單備註

1. 點選三點功能按鈕。
2. 在 `選擇功能` 中點選 `訂單備註`。
3. 如果 `訂單備註` 在其他頁面，請點選 `上一頁` 或 `下一頁`。
4. 輸入備註，然後確認。
5. 檢查備註是否顯示在訂單標頭下方。
6. 如果需要再次編輯，請點選備註旁的鉛筆圖示。

:::note[截圖待補]
需要檔案：`client/cl-42-select-function-dialog-pagination.png`
:::

:::note[截圖待補]
需要檔案：`client/cl-43-order-remark-display-edit.png`
:::

## 如發生問題

:::warning[無法分拆／合併或作廢]
先傳送待處理品項，然後再重試。
:::

:::note[選錯桌台]
請先從功能選單使用 `轉枱`，再進行結帳。
:::

:::note[口味或套餐提示沒有出現]
請選擇商品列，確認是否可以手動調整口味。如果提示仍然不正確，請經理／管理員在 HQ 檢查該商品的 `管理關聯` 設定和 `POS 自動顯示口味組別`。
:::

## 何時要找經理／管理員

- 作廢／退回需要經理依政策核准
- 折扣或服務費選項缺少，但應該可用
- 訂單行為與店舖規則不符
