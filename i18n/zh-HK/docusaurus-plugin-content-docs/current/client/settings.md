---
title: 設定
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[適用對象]
維護終端設定的管理員級使用者。
:::

## 開始前

- 您已登入並具備設定存取權
- 您了解門店對設定變更的政策
- 您的 POS 使用者群組包含 `POS 設定管理`

## 此畫面用途

使用 `Settings` 維護終端行為、服務模式、語言 / POS 代碼、列印、整合和營運規則。

## 語言設定

在 `General` 的語言區塊可管理：

- 這部終端的預設 UI 語言
- 每種語言的品項名稱顯示來源（`Main` 或 `Alt`）
- 登入畫面的語言快速切換可用性

:::tip[如何理解 `Main` / `Alt`]
`Main` 和 `Alt` 是來自菜單設定的兩個品項名稱來源。
如果某一個來源對某個品項是空白，POS 會改用另一個可用名稱。
:::

## 主要分區

<Tabs>
  <TabItem value="general" label="一般">
包括語言設定（`Item Mapping`、`Login Quick Switch`）以及必要代碼（`POS Code`、`Cash Register Code`）。
  </TabItem>
  <TabItem value="operation" label="操作">
包括 `Terminal` 模式，以及訂單 / 付款行為切換和服務流程控制。
  </TabItem>
  <TabItem value="system" label="系統">
包括 `Number` 控制，例如 `Rounding Method`、`Decimal Places` 和 `Round For Cash Only`。
  </TabItem>
  <TabItem value="printing" label="列印">
包括 `Mapping`、`Setting` 和 `Template` 分頁，用於印表機路由和列印輸出行為。
  </TabItem>
  <TabItem value="platforms" label="第三方平台 + ODO">
包括已啟用的第三方整合和 ODO 控制，例如 `Channel Mapping`。
  </TabItem>
  <TabItem value="report" label="報表">
包括報表輸出設定，例如 `Print Qty` 和 `Daily Report Sections`。
  </TabItem>
</Tabs>

## 常見語言操作

<Tabs>
  <TabItem value="set-ui-language" label="設定預設 UI 語言">
1. 按 `Settings` -> `General`。
2. 在語言設定中，選擇要作為預設的語言列。
3. 確認 UI 文字已更新到所選語言。
4. 按 `儲存`。
  </TabItem>
  <TabItem value="item-mapping" label="設定品項名稱對應">
1. 按 `Settings` -> `General`。
2. 在目標語言列中，將 `Item Mapping` 設為 `Main` 或 `Alt`。
3. 按 `Save`。
4. 開啟 `Ordering`，確認品項名稱顯示正常。
  </TabItem>
  <TabItem value="quick-switch" label="設定登入快速切換">
1. 按 `Settings` -> `General`。
2. 為登入畫面需要切換的語言開啟 `Login Quick Switch`。
3. 按 `Save`。
4. 返回登入畫面，確認語言快速切換按鈕有出現。
  </TabItem>
</Tabs>

## 切換終端模式

<Tabs>
  <TabItem value="restaurant" label="餐廳模式">
1. 按 `Settings` -> `Operation`。
2. 在 `Terminal` 將 `Mode` 設為 `Restaurant`。
3. 按 `Settings` -> `General`。
4. 關閉 `Enable Dine In Auto Open Order`。
5. 關閉 `Enable Takeaway Auto Open Order`。
6. 如果門店使用平面圖桌台檢視，請開啟 `Enable Floor Plan Mode`。
7. 按 `Save`。
8. 返回 `Ordering`，確認員工必須先選桌台或外賣訂單，才能加入品項。
  </TabItem>
  <TabItem value="quick-order" label="快速點餐">
1. 按 `Settings` -> `Operation`。
2. 在 `Terminal` 將 `Mode` 設為 `Quick Order`。
3. 按 `Settings` -> `General`。
4. 開啟 `Enable Dine In Auto Open Order`。
5. 開啟 `Enable Takeaway Auto Open Order`。
6. 如果外賣應優先開啟，請開啟 `Enable Default Takeaway Mode`；如應先開堂食，則保持關閉。
7. 如果您希望 POS 為新 quick order 自動輪換 counter，請開啟 `Enable Dine In Auto Assign Table Code` 和 `Enable Takeaway Auto Assign Table Code`。
8. 按 `Save`。
9. 返回 `Ordering`，確認 POS 會直接開新訂單，而不是先要求員工選桌台。
  </TabItem>
</Tabs>

:::note[相關設定]
只有在對應的自動開單設定開啟後，`Enable Dine In Auto Assign Table Code` 和 `Enable Takeaway Auto Assign Table Code` 才會出現。
:::

:::tip[Quick Order 工具]
在 `More Tools` 的 `Reset Table Counters` 會配合 Quick Order 模式使用，適合使用輪換 quick-order counters 的門店。
:::

## 常見四捨五入設定

1. 按 `Settings` -> `System`。
2. 在 `Number` 選擇 `Rounding Method`（`None`、`Round Up`、`Round Down` 或 `Round to Nearest 5 cents`）。
3. 如有顯示 `Decimal Places`，請一併設定。
4. 如果四捨五入只應套用於現金付款，請開啟 `Round For Cash Only`。
5. 按 `Save`。
6. 開啟 `Checkout`，確認現金和非現金付款的總額行為正常。

如果 `Rounding Method` 是 `Round to Nearest 5 cents`，`Decimal Places` 會隱藏。

## 從備份還原設定

1. 按 `Settings`。
2. 按底部操作列中的 `Restore`。
3. 選擇要套用的備份項目。
4. 確認還原完成。
5. 檢查關鍵設定，然後按 `Save`。

目前版本的還原會涵蓋更多設定範圍，因此還原後請確認以下重點：

- 印表機路由和列印設定
- 顧客顯示器和終端行為設定
- 與整合相關的設定

## 常見列印語言覆寫

1. 按 `Settings` -> `Printing`。
2. 開啟 `Template`。
3. 選擇目標列印模板。
4. 將 `Language` 設為需要的列印語言（或保持 `Follow System`）。
5. 按 `Save`。
6. 列印測試收據 / 單據，確認輸出語言。

## 常見列印模板字體設定

1. 按 `Settings` -> `Printing`。
2. 開啟 `Template`。
3. 選擇目標列印模板。
4. 調整該模板的字體大小列。
5. 使用 `即時預覽` 確認輸出容易閱讀。
6. 按 `Save`。
7. 列印測試收據 / 單據，確認列印結果依照已儲存的字體設定輸出。

目前的模板字體設定包含 `收據 / 清單 / 發票`、`廚房單`、`標籤`、`取餐單`、`部門單`、`點單號單`、`ODO QR Code 單據`、`八達通增值單` 和 `入賬 / 出賬單`。

## 常見標籤文字適配

1. 按 `設定` -> `列印`。
2. 開啟 `模板`。
3. 將 `模板` 設為 `標籤`。
4. 如果較長的品項或配料名稱需要縮小以配合標籤寬度，請開啟 `啟用自適應文字大小`。
5. 如果門店希望標籤文字保持已設定的本文字體大小，請關閉 `啟用自適應文字大小`。
6. 按 `Save`。
7. 列印一張包含長品項名稱的標籤，確認文字仍然清晰可讀。

## 常見自動重印標籤設定

1. 按 `設定` -> `列印`。
2. 開啟 `模板`。
3. 選擇需要恢復標籤的列印模板，例如 `廚房單`、`部門單` 或 `點單號單`。
4. 如果廚房或取餐櫃台員工需要識別由 spooler 自動重試列印的輸出，請開啟 `自動重印時顯示「自動重印」標籤`。
5. 如果是顧客可見輸出，而門店不希望列印恢復標籤，請保持關閉。
6. 按 `Save`。
7. 如正在測試印表機恢復情況，請確認自動重試輸出有顯示預期的 `自動重印` 標籤。

## 常見收據自動列印

1. 按 `設定` -> `列印`。
2. 開啟 `設定`。
3. 在 `收據` 中，如果收據應在成功結賬後自動列印，請開啟 `自動列印收據`；如果應由員工手動決定，則關閉。
4. 按 `儲存`。
5. 完成一次正常結賬，確認收據列印符合門店政策。

`自動列印收據` 只控制收據是否自動列印。如果付款方式已設定為開錢箱，即使 `自動列印收據` 關閉，結賬後錢箱仍會打開。

## 常見外賣聯絡資料列印

1. 按 `Settings` -> `Printing`。
2. 開啟 `Setting`。
3. 在 `Receipt` 中開啟或關閉 `Show Order Contact On Receipt`。
4. 在 `Kitchen Slip` 中開啟或關閉 `Show Order Contact On Kitchen Output`。
5. 按 `Save`。
6. 列印外賣收據或廚房單，確認聯絡資料只會出現在門店需要的位置。

:::note
如果您需要調整這部分的收據字體大小，請開啟 `Template`，並查看收據字體設定中的 `Customer Contact` 列。
:::

## 常見日結報表區塊

1. 按 `Settings` -> `Report`。
2. 如果門店需要多於一份列印副本，請設定 `Print Qty`。
3. 在 `Daily Report Sections` 中，按關店時經理需要列印的內容，開啟或關閉 `Summary`、`Cash Movement`、`Sales Breakdown` 和 `Payment Breakdown`。
4. 如需控制各區塊內的項目，請開啟 `Show advanced sections`。
5. 在 `Advanced Sections` 中，開啟或關閉 `Open Amount`、`Pay In`、`Pay Out`、`Cash Difference`、`Close Amount`、`Audit`、`Cashier Summary`、`Department Sales` 或 `Payment Tips` 等項目。
6. 按 `Save`。
7. 執行日結報表，確認只會列印所需區塊。

:::note
只有在對應的上層區塊開啟時，進階區塊切換才會生效。
:::

## 整合和渠道顯示行為

- 在 `Third Party Platform` 中，只會顯示已啟用的整合。
- 在 `ODO` -> `Channel Mapping` 中，只會顯示已對應的渠道。
- 如果終端離線，渠道對應會顯示僅限 online 的提示，而且對應列會不可用。

## 步驟

1. 按 `Settings`。
2. 在左側面板選擇需要的區塊。
3. 更新所需欄位 / 切換。
4. 按 `Save`。
5. 確認變更已套用。

## 您會看到

![設定 一般 配合 語言 及 POS 代碼](/img/manual/en/client/cl-05-settings-general-language-poscode.png)

- `Language Configuration` 網格會顯示 `Item Mapping` 和 `Login Quick Switch`
- `Operation` -> `Terminal` 包含 `Mode`，以及 `Restaurant` 和 `Quick Order`
- `General` 包含控制桌台先開還是直接開單流程的自動開單和自動分配設定
- `System` -> `Number` 包含 `Rounding Method`、`Decimal Places`（如有顯示）和 `Round For Cash Only`
- `Printing` 包含 `Mapping`、`Setting` 和 `Template` 分頁
- `Printing` -> `Setting` 包含 `Auto Print Receipt`
- `Printing` -> `Setting` 包含 `Show Order Contact On Receipt` 和 `Show Order Contact On Kitchen Output`
- `Printing` -> `Template` 的收據字體設定包含 `Customer Contact`
- `Printing` -> `Template` 包含 `八達通增值單` 和 `入賬 / 出賬單` 的字體設定
- `列印` -> `模板` 的標籤設定包含 `啟用自適應文字大小`
- `列印` -> `模板` 包含 `自動重印時顯示「自動重印」標籤`
- `Report` 包含 `Print Qty`、`Daily Report Sections` 和 `Show advanced sections`
- `Restore` 操作位於設定底部

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

:::note[截圖待補]
需要檔案：`client/cl-53-settings-template-font-profiles.png`
:::

## 如果出現問題

:::warning[無法儲存設定]
請檢查必要欄位（`POS Code`、必要代碼）後再重試。
:::

:::warning[`權限不足`]
您的 POS 使用者群組不允許變更設定。請經理／管理員在 HQ `POS Users` 更新群組，或由已授權人員處理變更。
:::

## 何時需要找經理／管理員

- 您沒有更改設定的權限
- 變更可能會影響所有終端 / 門店行為
