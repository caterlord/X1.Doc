---
title: 設定
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[適用對象]
負責維護終端設定的經理／管理員級使用者。
:::

## 開始前

- 您已登入，且具備設定存取權限
- 您了解店舖對設定變更的政策

## 此畫面用途

使用 `Settings` 來維護終端行為、服務模式、語言與 POS 代碼、列印、整合，以及營運規則。

## 語言設定

在 `General` 的語言區塊中，您可以管理：

- 這台終端的預設 UI 語言
- 各語言的品項名稱顯示來源（`Main` 或 `Alt`）
- 登入畫面的快速切換可用性

:::tip[如何理解 `Main` / `Alt`]
`Main` 與 `Alt` 是菜單設定中的兩個品項名稱來源。
如果某個品項其中一個來源是空白，POS 會改用另一個可用名稱。
:::

## 主要分區

<Tabs>
  <TabItem value="general" label="一般">
包含語言設定（`Item Mapping`、`Login Quick Switch`）與必要代碼（`POS Code`、`Cash Register Code`）。
  </TabItem>
  <TabItem value="operation" label="Operation">
包含 `Terminal` 模式，以及訂單／付款行為切換與服務流程控制。
  </TabItem>
  <TabItem value="system" label="系統">
包含 `Number` 控制，例如 `Rounding Method`、`Decimal Places` 與 `僅現金四捨五入`。
  </TabItem>
  <TabItem value="printing" label="Printing">
包含 `Mapping`、`Setting` 與 `Template` 分頁，用來控制印表機路由與列印輸出行為。
  </TabItem>
  <TabItem value="platforms" label="Third Party Platform + ODO">
包含已啟用的第三方整合與 ODO 控制，例如 `Channel Mapping`。
  </TabItem>
  <TabItem value="report" label="報表">
包含與報表輸出相關的設定，例如 `Print Qty` 與 `Daily Report Sections`。
  </TabItem>
</Tabs>

## 常見語言任務

<Tabs>
  <TabItem value="set-ui-language" label="設定預設 UI 語言">
1. 點選 `Settings` -> `General`。
2. 在語言設定中，選擇您要作為預設的語言列。
3. 確認 UI 文字已切換到所選語言。
4. 點選 `Save`。
  </TabItem>
  <TabItem value="item-mapping" label="設定品項名稱對應">
1. 點選 `Settings` -> `General`。
2. 在目標語言列中，將 `Item Mapping` 設為 `Main` 或 `Alt`。
3. 點選 `Save`。
4. 開啟 `Ordering`，確認品項名稱顯示符合預期。
  </TabItem>
  <TabItem value="quick-switch" label="設定登入快速切換">
1. 點選 `Settings` -> `General`。
2. 將可供員工在登入畫面切換的語言啟用 `Login Quick Switch`。
3. 點選 `Save`。
4. 返回登入畫面，確認語言快速切換按鈕已出現。
  </TabItem>
</Tabs>

## 切換終端模式

<Tabs>
  <TabItem value="restaurant" label="Restaurant">
1. 點選 `Settings` -> `Operation`。
2. 在 `Terminal` 中，將 `Mode` 設為 `Restaurant`。
3. 點選 `Settings` -> `General`。
4. 關閉 `Enable Dine In Auto Open Order`。
5. 關閉 `Enable Takeaway Auto Open Order`。
6. 如果您的店舖使用樓層平面圖桌台檢視，請開啟 `啟用樓層平面圖模式`。
7. 點選 `Save`。
8. 返回 `Ordering`，確認員工必須先選擇桌台或外賣訂單，才能加入品項。
  </TabItem>
  <TabItem value="quick-order" label="Quick Order">
1. 點選 `Settings` -> `Operation`。
2. 在 `Terminal` 中，將 `Mode` 設為 `Quick Order`。
3. 點選 `Settings` -> `General`。
4. 開啟 `Enable Dine In Auto Open Order`。
5. 開啟 `Enable Takeaway Auto Open Order`。
6. 如果外賣應該先開單，請開啟 `啟用預設外賣模式`；如果堂食應該先開單，就保持關閉。
7. 如果您希望 POS 自動輪換新快速訂單的桌號，請開啟 `Enable Dine In Auto Assign Table Code` 與 `Enable Takeaway Auto Assign Table Code`。
8. 點選 `Save`。
9. 返回 `Ordering`，確認 POS 會直接開啟新訂單，而不是先要求員工挑選桌台。
  </TabItem>
</Tabs>

:::note[相關設定]
只有在對應的自動開單設定開啟後，`Enable Dine In Auto Assign Table Code` 與 `Enable Takeaway Auto Assign Table Code` 才會出現。
:::

:::tip[快速點餐工具]
`More Tools` 中的 `Reset Table Counters` 會與快速點餐模式搭配使用，用來重設輪轉桌號。
:::

## 常見四捨五入任務

1. 點選 `Settings` -> `System`。
2. 在 `Number` 中選擇 `Rounding Method`（`None`、`Round Up`、`Round Down` 或 `Round to Nearest 5 cents`）。
3. 如果有顯示 `Decimal Places`，請一併設定。
4. 如果四捨五入只應套用到現金付款，請開啟 `僅現金四捨五入`。
5. 點選 `Save`。
6. 開啟 `Checkout`，確認現金與非現金付款的總金額行為符合預期。

如果 `Rounding Method` 是 `Round to Nearest 5 cents`，`Decimal Places` 會被隱藏。

## 從備份還原設定

1. 點選 `Settings`。
2. 點選底部操作列中的 `Restore`。
3. 選擇您要套用的備份項目。
4. 確認還原完成。
5. 檢查關鍵設定後點選 `Save`。

目前版本的還原會涵蓋更多設定範圍，因此還原後請檢查下列重點：

- 印表機路由與列印設定
- 客戶顯示與終端行為設定
- 與整合相關的設定

## 常見列印語言覆寫任務

1. 點選 `Settings` -> `Printing`。
2. 開啟 `Template`。
3. 選擇目標列印範本。
4. 將 `Language` 設為需要的列印語言，或保持 `Follow System`。
5. 點選 `Save`。
6. 列印測試收據或單據，確認輸出語言正確。

## 常見標籤文字適配任務

1. 點選 `設定` -> `列印`。
2. 開啟 `模板`。
3. 將 `模板` 設為 `標籤`。
4. 如果較長的品項或配料名稱需要縮小以配合標籤寬度，請開啟 `啟用自適應文字大小`。
5. 如果店舖希望標籤文字保持已設定的本文字體大小，請關閉 `啟用自適應文字大小`。
6. 點選 `Save`。
7. 列印一張包含長品項名稱的標籤，確認文字仍然清晰可讀。

## 常見自動重印標籤設定

1. 點選 `設定` -> `列印`。
2. 開啟 `模板`。
3. 選擇需要恢復標籤的列印模板，例如 `廚房單`、`部門單` 或 `點單號單`。
4. 如果廚房或取餐櫃台員工需要識別由 spooler 自動重試列印的輸出，請開啟 `自動重印時顯示「自動重印」標籤`。
5. 如果是顧客可見輸出，而店舖不希望列印恢復標籤，請保持關閉。
6. 點選 `Save`。
7. 如正在測試印表機恢復情況，請確認自動重試輸出有顯示預期的 `自動重印` 標籤。

## 常見收據自動列印任務

1. 點選 `設定` -> `列印`。
2. 開啟 `設定`。
3. 在 `收據` 中，如果收據應在成功結帳後自動列印，請開啟 `自動列印收據`；如果要由員工手動決定，就保持關閉。
4. 點選 `儲存`。
5. 完成一筆正常結帳，確認收據列印行為符合店舖政策。

`自動列印收據` 只控制收據是否自動列印。如果付款方式已設定為開錢箱，即使 `自動列印收據` 關閉，結帳後錢箱仍會打開。

## 常見外賣聯絡資料列印任務

1. 點選 `Settings` -> `Printing`。
2. 開啟 `Setting`。
3. 在 `Receipt` 中，開啟或關閉 `Show Order Contact On Receipt`。
4. 在 `Kitchen Slip` 中，開啟或關閉 `Show Order Contact On Kitchen Output`。
5. 點選 `Save`。
6. 列印外賣收據或廚房單，確認聯絡資料只會出現在店舖預期的位置。

:::note
如果您需要調整這一段的收據字體大小，請開啟 `Template` 並檢查收據字型設定中的 `Customer Contact` 列。
:::

## 常見日結報表區塊任務

1. 點選 `Settings` -> `Report`。
2. 如果店舖需要多份列印，請設定 `Print Qty`。
3. 在 `Daily Report Sections` 中，依照關帳時應該列印的內容，開啟或關閉 `Summary`、`Cash Movement`、`Sales Breakdown` 與 `Payment Breakdown`。
4. 如果您需要控制這些區塊內的細項，請開啟 `Show advanced sections`。
5. 在 `Advanced Sections` 中，開啟或關閉 `Open Amount`、`Pay In`、`Pay Out`、`Cash Difference`、`Close Amount`、`Audit`、`Cashier Summary`、`Department Sales` 或 `Payment Tips` 等細項。
6. 點選 `Save`。
7. 執行日結報表，確認只列印需要的區塊。

:::note
只有在對應的父區塊保持開啟時，進階區塊切換才會生效。
:::

## 整合與渠道顯示行為

- 在 `Third Party Platform` 中，只會顯示已啟用的整合。
- 在 `ODO` -> `Channel Mapping` 中，只會顯示已對應的渠道。
- 如果終端處於離線狀態，渠道對應會顯示僅限線上的提示，而且對應列會無法使用。

## 步驟

1. 點選 `Settings`。
2. 從左側面板選擇需要的區段。
3. 更新必要欄位或切換設定。
4. 點選 `Save`。
5. 確認變更已套用。

## 你應該看到什麼

![Settings General with Language and POS Code](/img/manual/en/client/cl-05-settings-general-language-poscode.png)

- `Language Configuration` 表格，包含 `Item Mapping` 與 `Login Quick Switch`
- `Operation` -> `Terminal` 包含 `Mode`，以及 `Restaurant` 與 `Quick Order`
- `General` 包含控制桌台先開單或直接開單的自動開單與自動分配設定
- `System` -> `Number` 包含 `Rounding Method`、`Decimal Places`（顯示時）與 `僅現金四捨五入`
- `Printing` 具有 `Mapping`、`Setting` 與 `Template` 分頁
- `Printing` -> `Setting` 包含 `Auto Print Receipt`
- `Printing` -> `Setting` 包含 `Show Order Contact On Receipt` 與 `Show Order Contact On Kitchen Output`
- `Printing` -> `Template` 的收據字型設定包含 `Customer Contact`
- `列印` -> `模板` 的標籤設定包含 `啟用自適應文字大小`
- `列印` -> `模板` 包含 `自動重印時顯示「自動重印」標籤`
- `Report` 包含 `Print Qty`、`Daily Report Sections` 與 `Show advanced sections`
- `Restore` 操作位於設定頁底部

:::note[截圖待補]
需要檔案：`client/cl-40-settings-language-configuration-grid.png`
:::

:::note[截圖待補]
需要檔案：`client/cl-45-settings-print-order-contact-toggles.png`
:::

:::note[截圖待補]
需要檔案：`client/cl-46-settings-operation-terminal-mode.png`、`client/cl-47-settings-general-order-mode-toggles.png`
:::

:::note[截圖待補]
需要檔案：`client/cl-48-settings-print-auto-print-receipt.png`、`client/cl-49-settings-report-day-end-sections.png`
:::

:::note[截圖待補]
需要檔案：`client/cl-51-settings-template-label-adaptive-text-size.png`
:::

## 如發生問題

:::warning[無法儲存設定]
檢查必要欄位（例如 `收銀機代碼` 等）後再重試。
:::

## 何時要找經理／管理員

- 您沒有變更設定的權限
- 變更可能影響所有終端或店舖行為
