---
title: 裝置
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[適用對象]
收銀員及經理，用來檢查印表機與已連線裝置。
:::

## 開始前

- 您已登入
- 裝置硬體已開機並連線

## 此畫面用途

使用 `裝置` 來檢查連線狀態、維護裝置設定，並在營運中留意裝置警示。

:::note[範圍界線]
`裝置` 只用於硬體與連線設定，例如印表機、付款設備、輸入設備與 X1 產品。
現金控制與日結請使用 `More Tools`。
:::

## 主要分頁

- `Printer`
- `Payments`
- `Input Devices`
- `X1 Products`

`裝置` 或某個分頁出現數字標記，表示一台或多台裝置需要處理。先開啟相關分頁並檢查裝置列上的標記，再返回營運。

## 如何使用各分頁

<Tabs>
  <TabItem value="printer" label="印表機">
使用這個分頁來管理印表機生命週期與佇列操作：

`新增印表機`、`資訊`、`測試列印`、編輯印表機、`管理列印佇列`，以及移除印表機。編輯印表機包含進階輸出設定，例如列印縮放、走紙行數，以及針式列印密度 / 顏色。`管理列印佇列` 會顯示 `佇列`、`歷史` 和 `需要處理`；如需在重試前檢查列印結果，請開啟工作的 `開啟列印預覽`。

由 HQ 管理的印表機會顯示 `HQ` 標記。如果印表機已存在於 HQ，但尚未在此 POS 設定，裝置列會顯示 `尚未設定`；請先編輯該列並填寫本機連線資料，再測試列印。列印佇列有錯誤工作時，裝置列也會顯示 `1 error` 或 `3 errors` 等錯誤數量標記。
  </TabItem>
  <TabItem value="payments" label="付款">
使用這個分頁來查看付款終端狀態與設定：

`Info`、編輯付款設備設定（包含 Linkly EFTPOS 終端配對／設定與 Octopus V3 `裝置編號`），以及裝置未準備好時的 `需要設定` 標記。
  </TabItem>
  <TabItem value="input" label="輸入設備">
使用這個分頁來管理掃描器與輸入設備設定：

`Info`、編輯輸入設備設定（例如條碼／QR code 掃描器的掃描輸入來源）、USB/藍牙掃描器測試欄位、相機備用，以及裝置未準備好時的 `需要設定` 標記。
  </TabItem>
  <TabItem value="x1" label="X1 Products">
使用這個分頁來管理面向客戶的配對產品：

`Info`、編輯 X1 產品設定，以及客戶顯示主機、取餐顯示器配對、快速結帳自助機配對流程，和產品需要設定時的 `需要設定` 標記。
  </TabItem>
</Tabs>

## 一般步驟

1. 從左側選單點選 `裝置`。
2. 選擇您需要的分頁。
3. 先檢查任何數字標記或裝置列標記。
4. 如果需要快速診斷，點選 `Info`。
5. 執行該分頁對應的動作，例如測試列印、編輯、配對或管理佇列。
6. 返回營運前，先確認狀態正常。

## 你應該看到什麼

- 裝置清單與狀態指示器
- 列印失敗工作、HQ 管理印表機或需要設定裝置的標記
- 維護用動作，例如印表機測試與資訊

![裝置 印表機 tab](/img/manual/en/client/cl-01-devices-printer-tab.png)
![Printer Info status dialog](/img/manual/en/client/cl-02-devices-printer-info-status.png)
![Test Print result](/img/manual/en/client/cl-03-devices-test-print-result.png)

:::note[其他分頁的截圖待補]
需要檔案：`client/cl-34-devices-payments-tab-list.png`、`client/cl-35-devices-input-devices-tab-list.png`、`client/cl-36-devices-x1-products-tab-list.png`
:::

## 如發生問題

:::warning[`需要收銀機代碼`]
開啟 `Settings` -> `General`，填入 `收銀機代碼`，點選 `儲存`，然後重試。
:::

## 何時要找經理／管理員

- 您無法編輯必要的裝置設定
- 基本檢查後仍然反覆測試失敗
- 裝置配對或設定不清楚

## 相關指南

- [開班](./start-shift)
- [功能：管理印表機](../functions/manage-printers)
- [功能：設定付款設備](../functions/configure-payment-devices)
- [功能：設定輸入設備](../functions/configure-input-devices)
- [功能：設定 X1 Products](../functions/configure-x1-products)
