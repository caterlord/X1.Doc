---
title: 管理印表機
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[適用對象]
負責在 `裝置` -> `Printer` 中管理印表機設定與維護的經理或授權員工。
:::

## 開始前

- 您已登入，且具備裝置設定權限
- 目標印表機已開機並連上同一個網路
- `收銀機代碼` 已設定
- 如果印表機是在 HQ 建立，編輯 POS 連線資料前先確認 HQ 中的印表機名稱

## 快速流程

1. 開啟 `裝置`。
2. 開啟 `Printer` 分頁。
3. 先檢查裝置列上的 `HQ`、`尚未設定` 或錯誤數量標記。
4. 選擇印表機那一列，或點選 `Add Printer`。
5. 執行需要的動作，例如 `Info`、`Test Print`、編輯、移除或佇列管理。
6. 返回營運前，先確認狀態正常。

## 任務

<Tabs>
  <TabItem value="add-printer" label="新增印表機">
1. 點選 `Add Printer`。
2. 輸入 `Name`、`Printer Type`、`Connection`、`IP Address` 與 `Port`。
3. 點選 `Save`。
4. 點選 `Test Print`。

要確認的內容：

- 印表機已出現在清單中
- 狀態是已連線／已準備好
- 出現測試列印成功訊息
- 如果這是 HQ 管理印表機，儲存本機連線資料後，裝置列仍會顯示 `HQ`

![Add Printer dialog](/img/manual/en/client/miss_3_device_printer_add.png)
![Printer added successfully](/img/manual/en/client/miss_4_device_printer_add_completed.png)
</TabItem>
  <TabItem value="hq-managed" label="HQ 管理印表機">
1. 開啟 `Printer` 分頁。
2. 找到有 `HQ` 標記的印表機列。
3. 如果該列同時顯示 `尚未設定`，點選編輯。
4. 填寫本機連線資料，例如 `Printer Type`、`Connection`、`IP Address` 與 `Port`。
5. 點選 `Save`。
6. 點選 `Test Print`。

要確認的內容：

- 印表機列仍顯示 `HQ` 標記
- 儲存本機設定後，`尚未設定` 標記會消失
- 返回營運前，`Test Print` 成功

</TabItem>
  <TabItem value="info-status" label="印表機資訊與狀態">
1. 點選目標印表機那一列的 `Info`。
2. 檢查 `Connection Details` 與 `Status Details`。
3. 點選 `Close`。

要確認的內容：

- `Type`、`Address`、`Status` 與 `Last checked` 都正確

![Printer Info status dialog](/img/manual/en/client/cl-02-devices-printer-info-status.png)
  </TabItem>
  <TabItem value="test-print" label="測試列印">
1. 點選目標印表機那一列的 `Test Print`。
2. 等待結果訊息。
3. 確認實體測試單已列印。

要確認的內容：

- 成功訊息：`Test print sent to '<PrinterName>' successfully`

![Test Print result](/img/manual/en/client/cl-03-devices-test-print-result.png)
  </TabItem>
  <TabItem value="edit-remove" label="編輯或移除印表機">
1. 點選編輯圖示，更新 `名稱`、`印表機類型`、`連線`、`IP 位址` 與 `連接埠`。
2. 需要調整輸出效果時，開啟 `顯示進階設定`。
3. 只有測試輸出需要調整時，才設定 `列印縮放 (%)`、`頁首額外走紙行數` 或 `頁尾額外走紙行數`。
4. 如果 `印表機類型` 是 `針式`，設定 `針式列印密度` 和 `針式列印顏色`。
5. 點選 `儲存`。
6. 如果要移除，點選刪除圖示。
7. 確認移除提示。

要確認的內容：

- 更新後的設定有顯示在印表機列上
- 對 `針式` 印表機，`高密度` 較清晰但較慢，`普通密度` 列印較快但細節較少
- `彩色（紅 / 黑）` 會將紅色內容列印到紅色色帶；`純黑` 會將所有內容列印為黑色
- 移除後，印表機會從清單中消失

> 截圖待補：`functions/fn-printer-remove-confirm-dialog.png`
> 截圖待補：`functions/fn-printer-dot-matrix-advanced-settings.png`
  </TabItem>
  <TabItem value="spooler" label="管理印表機佇列">
1. 點選目標印表機那一列的 `Manage Spooler`。
2. 檢查分頁：`佇列`、`歷史`、`需要處理`。
3. 如需檢查列印結果，選擇工作的縮圖並按 `開啟列印預覽`。在預覽中使用雙指撥動或捲動以縮放，拖曳以平移，完成後按 `關閉`。
4. 如需檢查工作，請選擇該列的資訊按鈕。詳情可顯示 `狀態`、`驅動程式`、`傳送狀態`、`重試來源`、`嘗試次數`、`廠商工作 ID`、`下次重試` 和 `打印機訊息`。
5. 使用需要的動作：`重新整理`、`清除選取`、`刪除已選`、`全部刪除`。
6. 在 `需要處理` 分頁適當時使用 `全選`、`重試已選安全工作` 和 `重試全部安全工作`。
7. 個別工作可按狀態使用：`立即重試`（確認尚未傳送）、`仍然重試`（先查看可能重複警告）、`標記為已列印`（已在其他地方列印）或 `取消`。

要確認的內容：

- 重試或移除後，佇列數量會減少
- 標示為 `等待自動重印` 的工作，可能會在印表機恢復正常後自行清除
- 標示為 `永久錯誤` 的工作需要人工檢查、移除，或重新送出列印請求
- 標示為 `結果未知` 的工作可能已經列印；重試或標記為已列印前，請逐一檢查
- 新的列印工作會正常處理
- 從 `需要處理` 移除工作會取消工作，並將工作保留在 `歷史`
- `需要處理` 佇列清空後，印表機列上的錯誤數量標記會消失

> 截圖待補：`functions/fn-printer-spooler-manager-dialog.png`
> 截圖待補：`functions/fn-printer-spooler-preview-dialog.png`
> 截圖待補：`functions/fn-printer-spooler-needs-attention-actions.png`
  </TabItem>
</Tabs>

## 如發生問題

:::warning[測試列印失敗]
先檢查 IP／Port、紙張、印表機上蓋與網路，然後重試一次。
:::

:::warning[狀態仍然顯示離線]
先確認印表機的電源與網路，再執行 `Test Print`。
:::

:::note[佇列重試未清除錯誤工作]
請開啟 spooler 工作詳情。如果工作正在等待自動重試，請確認印表機已連線，然後等候下一次重試。如果工作是永久錯誤，或多次重試仍失敗，請移除失敗工作、確認連線正常，然後重新送出訂單或列印請求。
:::

:::warning[HQ 管理印表機顯示 `尚未設定`]
編輯該印表機列，並為這台 POS 儲存本機連線資料。HQ 記錄表示這台印表機應該存在，但每台終端仍需要可用的本機連線後才能列印。
:::

:::warning[移除印表機失敗]
如果移除只成功一部分，請重新整理印表機清單，並確認佇列檔案是否仍然存在。
:::

## 何時要找經理／管理員

- `收銀機代碼` 是必要項，但您無法編輯設定
- 印表機設定儲存成功，但印表機仍然不可用
- 佇列錯誤持續增加，即使已重試或移除
