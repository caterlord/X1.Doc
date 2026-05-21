---
title: 管理印表機
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[適用對象]
在 `Devices` -> `Printer` 管理印表機設定和維護的經理或授權員工。
:::

## 開始前

- 您已登入並具備裝置設定權限
- 目標印表機已開機並連接至同一網絡
- 已設定 `POS Code`
- 如果印表機是在 HQ 建立，編輯 POS 連線資料前先確認 HQ 中的印表機名稱

## 快速流程

1. 開啟 `Devices`。
2. 開啟 `Printer` 分頁。
3. 先檢查裝置列上的 `HQ`、`尚未設定` 或錯誤數量標記。
4. 選取印表機列（或按 `Add Printer`）。
5. 執行所需操作（`Info`、`Test Print`、編輯、移除或 spooler）。
6. 返回日常操作前先確認狀態。

## 任務

<Tabs>
  <TabItem value="add-printer" label="新增印表機">
1. 按 `Add Printer`。
2. 填寫 `Name`、`Printer Type`、`Connection`、`IP Address` 和 `Port`。
3. 按 `Save`。
4. 按 `Test Print`。

要確認：

- 印表機已出現在清單中
- 狀態為已連線 / 已準備好
- 出現測試列印成功訊息
- 如果這是 HQ 管理印表機，儲存本機連線資料後，裝置列仍會顯示 `HQ`

![Add Printer dialog](/img/manual/en/client/miss_3_device_printer_add.png)
![Printer added successfully](/img/manual/en/client/miss_4_device_printer_add_completed.png)
</TabItem>
  <TabItem value="hq-managed" label="HQ 管理印表機">
1. 開啟 `Printer` 分頁。
2. 找到有 `HQ` 標記的印表機列。
3. 如果該列同時顯示 `尚未設定`，按編輯。
4. 填寫本機連線資料，例如 `Printer Type`、`Connection`、`IP Address` 和 `Port`。
5. 按 `Save`。
6. 按 `Test Print`。

要確認：

- 印表機列仍顯示 `HQ` 標記
- 儲存本機設定後，`尚未設定` 標記會消失
- 返回營運前，`Test Print` 成功

</TabItem>
  <TabItem value="info-status" label="印表機資訊和狀態">
1. 在目標印表機列上按 `Info`。
2. 查看 `Connection Details` 和 `Status Details`。
3. 按 `Close`。

要確認：

- `Type`、`Address`、`Status` 和 `Last checked` 都正確

![Printer Info status dialog](/img/manual/en/client/cl-02-devices-printer-info-status.png)
  </TabItem>
  <TabItem value="test-print" label="測試列印">
1. 在目標印表機列上按 `Test Print`。
2. 等待結果訊息。
3. 確認實體測試單有印出。

要確認：

- 成功訊息：`Test print sent to '<PrinterName>' successfully`

![Test Print result](/img/manual/en/client/cl-03-devices-test-print-result.png)
  </TabItem>
  <TabItem value="edit-remove" label="編輯或移除印表機">
1. 按編輯圖示，更新 `名稱`、`印表機類型`、`連線`、`IP 位址` 和 `連接埠`。
2. 需要調整輸出效果時，開啟 `顯示進階設定`。
3. 只有測試輸出需要調整時，才設定 `列印縮放 (%)`、`頁首額外走紙行數` 或 `頁尾額外走紙行數`。
4. 如果 `印表機類型` 是 `針式`，設定 `針式列印密度` 和 `針式列印顏色`。
5. 按 `儲存`。
6. 如需移除，按刪除圖示。
7. 確認移除提示。

要確認：

- 更新後的設定已顯示在印表機列
- 對 `針式` 印表機，`高密度` 較清晰但較慢，`普通密度` 列印較快但細節較少
- `彩色（紅 / 黑）` 會將紅色內容列印到紅色色帶；`純黑` 會將所有內容列印為黑色
- 已移除的印表機不再出現在清單中

> Screenshot pending: `functions/fn-printer-remove-confirm-dialog.png`
> 截圖待補：`functions/fn-printer-dot-matrix-advanced-settings.png`
  </TabItem>
  <TabItem value="spooler" label="管理印表機 spooler">
1. 在目標印表機列上按 `Manage Spooler`。
2. 查看 `Printing`、`History`、`Error` 分頁。
3. 如需檢查工作，請選擇該列的資訊按鈕。詳情可顯示 `狀態`、`重試來源`、`嘗試次數`、`自動重印`、`下次重試` 及最後記錄的 `錯誤`。
4. 使用所需操作：
   - `Refresh`
   - `Clear Selection`
   - `Remove Selected`
   - `Remove All`
5. 在 `Error` 分頁中使用重試操作：
   - `Select All`
   - `Retry Selected`
   - `Retry All`

要確認：

- 重新整理 / 移除後，佇列數量會減少
- 標示為 `等待自動重印` 的工作，可能會在印表機恢復正常後自行清除
- 標示為 `永久錯誤` 的工作需要人工檢查、移除，或重新送出列印請求
- 新列印工作可正常處理
- `Error` 佇列清空後，印表機列上的錯誤數量標記會消失

> Screenshot pending: `functions/fn-printer-spooler-manager-dialog.png`
> Screenshot pending: `functions/fn-printer-spooler-error-retry-actions.png`
  </TabItem>
</Tabs>

## 如果出現問題

:::warning[測試列印失敗]
請先檢查 IP / port、紙張、印表機上蓋和網絡，再重試一次。
:::

:::warning[狀態仍然顯示 disconnected]
先確認印表機電源和網絡，再執行 `Test Print`。
:::

:::note[Spooler 重試仍無法清除錯誤工作]
請開啟 spooler 工作詳情。如果工作正在等待自動重試，請確認印表機已連線，然後等候下一次重試。如果工作是永久錯誤，或多次重試仍失敗，請移除失敗工作、確認連線正常，然後重新送出訂單 / 列印請求。
:::

:::warning[HQ 管理印表機顯示 `尚未設定`]
編輯該印表機列，並為這台 POS 儲存本機連線資料。HQ 記錄表示這台印表機應該存在，但每台終端仍需要可用的本機連線後才能列印。
:::

:::warning[移除印表機失敗]
如果移除只完成一部分，請重新整理印表機清單，並確認 spooler 檔案是否仍然存在。
:::

## 何時需要找經理／管理員

- 已必須的 `POS Code` 無法編輯
- 印表機設定儲存成功，但印表機仍不可用
- spooler 錯誤佇列在重試 / 移除後仍持續增加
