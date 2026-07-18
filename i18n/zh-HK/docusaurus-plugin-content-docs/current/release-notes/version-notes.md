---
sidebar_position: 1
title: 版本說明
---

本頁記錄整套 X1 文件的變更，依照 release／更新批次整理。

本頁不只限於 POS app 手冊，也包含 HQ、共用流程與文件結構更新。

## 2026-07-19（POS v1.7.19 與 HQ 正式環境對齊）

### 已更新

- `設定`：補充 `付款後保留餐檯`、已付款訂單查看與調整、餘額結清，以及 `釋放餐檯`。
- `報表`：補充 `14. 全單取消報表`，包括操作人員、取消原因、項目明細和原項目總額查看。
- `改碼組別` 和 `套餐群組`：補充新的 `使用此群組的項目` 分頁，以及檢查或更改父項目連結的關聯操作。
- `推廣活動`：補充 `儲存並繼續`、`儲存並關閉`，以及規則編輯器會記住上次儲存操作的行為。
- `第三方平台`：補充已恢復的 `MeiTuan` Webhook 欄位，包括 `API URL`、`Shop ID`、機密 Token 欄位和 `Token 到期日期／時間`。

### 截圖更新

- 更新 POS 報表待補截圖，要求顯示 `14. 全單取消報表` 及其稽核欄位。
- 新增已付款餐檯設定與釋放操作、群組使用分頁、推廣儲存選單和 MeiTuan Webhook 設定的待補截圖。

### 已檢查

- 確認上一版已部署文件基線為 2026-06-29；POS 發布說明上次完整檢查至 `v1.7.16`，後續訂位指引已經納入文件。
- 已檢查 POS `v1.7.17`、`v1.7.18` 和 `v1.7.19`。最新原始碼發布為 `v1.7.19`，發布於 2026-07-18。
- 已將 HQ 商戶後台與 2026-07-18 更新的正式環境核對，並檢查截至該次部署的商戶功能原始碼變更；X1 Control Plane／內部合作夥伴管理功能繼續排除在公開文件之外。
- 確認其餘已檢查的 POS 和 HQ 變更屬於可靠性、同步、診斷、封裝、預設資料或資料正規化修復，不新增操作人員或商戶管理員步驟。

## 2026-06-10（HQ 商戶後台文件更新）

### 已更新

- `儀表板`：補充空工作區 onboarding 提示、引導式設定、目前的指標卡、日期控制項，以及儀表板表現區塊。
- `Insights`：新增 HQ 指南，說明跨店舖發現、預設篩選、日期比較、圖表 drilldown 和表格檢視。
- `報表`、`銷售報表` 和 `營運報表`：補充目前的報表導覽、匯出動作、銷售趨勢視圖、付款／檯號／堂食及外賣分析、出勤和員工成本效率。
- `智能分類`、`工作區管理` 和 `HQ 用戶手冊`：將智能分類管理、工作區／成員指引、onboarding 次序和側邊欄結構，對齊已部署的商戶 HQ。

### 截圖更新

- 新增或替換 HQ 截圖，涵蓋空工作區 onboarding、引導式工作區設定、`Insights`、`智能分類`、`銷售報表` 和 `營運報表`。

### 已檢查

- 已於 2026-06-10 將商戶 HQ 文件與已部署的 HQ 商戶後台核對，並排除 X1 Control Plane／內部合作夥伴管理功能，不加入公開用戶文件。
- 重新擷取並確認 HQ 截圖已等待頁面載入完成，確保發佈圖片顯示實際內容，而不是載入畫面。

## 2026-05-27（v1.7.16 POS 重新發布、HQ 修復和 HQ Agent 複查）

### 已更新

- `設定` 和 `功能與特性地圖`：補充模板字體設定現在包含 `八達通增值單` 和 `入賬 / 出賬單`，這些單據可依已儲存的字體大小設定輸出。
- `連接 AI 助理`：將 ChatGPT 設定範例與 HQ Agent 提交資料中的 `X1 HQ Agent` app 名稱對齊。

### 截圖更新

- 新增待補截圖，要求顯示 `Settings` -> `Printing` -> `Template` 選擇器中的 `八達通增值單` 和 `入賬 / 出賬單`。

### 已檢查

- 已檢查 POS `v1.7.16` 重新發布說明，以及 2026-05-21 文件基線後的原始碼變更，包括首次/背景同步穩定性、結帳與作廢當機修復、轉檯修復、印表機逾時/重試行為、模板字體路由、考勤結果提示、報表查詢修復、Android 同步上傳、Mac 相機掃描器設定和瀏覽器 POS 預覽修復。
- 已檢查 HQ 在上一輪還原流程文件更新後的變更，包括折扣規則編輯器儲存回應和折扣序列化欄位正規化。確認這些是既有折扣步驟的可靠性修復，不是新的管理員流程。
- 已檢查 HQ Agent 的 ChatGPT app 提交資料、MCP CORS 處理和工具註解。確認面向使用者的文件影響只有上述 app 名稱措辭；工具註解和 CORS 細節不新增管理員步驟。
- 確認更廣泛的 POS 瀏覽器沙盒、當機記錄分析、支援記錄、部署/runbook 和內部查詢追蹤更新，不需要線上文件新增收銀員/管理員步驟。

## 2026-05-21（v1.7.16 POS 及 HQ 對齊）

### 已更新

- `銷售流程`：補充加入商品後目前的改碼／套餐提示行為。
- `菜單項目`：補充 `POS 自動顯示改碼組別`、`商品關聯`，以及在 `管理關聯` 檢查改碼組別與套餐組別的說明。
- `改碼組別` 和 `套餐群組`：補充 `顯示最近已移除`、24 小時還原範圍、已移除列只顯示還原動作，以及同名群組會阻止還原的說明。
- `菜單分類`、`智能分類`、`菜單項目`、`POS Menus`、`付款方式`、`稅項及附加費` 和 `檯位與區域`：補充最近移除還原流程、24 小時顯示範圍、已移除列只顯示還原動作，以及還原前的後端驗證。
- `管理印表機`、`設定`、`疑難排解` 和 `功能與特性地圖`：補充印表機 spooler 重試詳情、自動重試狀態，以及 `自動重印時顯示「自動重印」標籤`。
- `店舖資料`：補充收據標誌列印類型可套用到 `ODO 配對紙`。

### 已檢查

- 已檢查 POS 從 `v1.7.13` 到 `v1.7.16` 的原始碼變更，包括 release notes、印表機 spooler 自動重試、ODO slip 標誌列印、browser sandbox、Mac 相機掃描器設定、同步修正，以及改碼／套餐點餐流程。
- 已檢查 HQ 在上一個訂閱席位文件更新後的原始碼變更，包括 POS logs、ODO slip 標誌設定、改碼關聯修正、改碼印表機指派處理、`POS 自動顯示改碼組別`、POS log 檔名處理、推廣活動儲存處理、Neon 渠道綁定及部署文件。
- 確認 browser sandbox、部署、相依性警告、渠道綁定及一般穩定性修正，除了上述更新外，沒有新增收銀員／管理員手冊步驟。

## 2026-05-09（v1.7.13 POS 重新發佈）

### 已更新

- `設定輸入裝置`：補充條碼 / QR 掃描器的掃描輸入來源選擇，包括 `相機`、`USB / 藍牙`、`測試 USB/藍牙掃描器` 和 `啟用相機備用`。
- `裝置` 和 `功能與特性地圖`：把掃描輸入來源選擇加入 `Input Devices` 範圍。

### 截圖更新

- 更新條碼 / QR 掃描器編輯視窗的待補截圖說明，要求顯示重新發佈版的掃描輸入來源控制項。

### 已檢查

- 已檢查首次 `v1.7.13` GitHub 發佈後新增的 POS 原始碼差異，包括掃描來源體驗、硬件掃描器文字輸入、Mac App Store 啟動權限，以及符合 sandbox 限制的啟用資料庫設定。
- 確認 Mac App Store/TestFlight 打包修復不需要在目前線上手冊中新增操作步驟。

## 2026-05-06（v1.7.13 POS 對齊）

### 已更新

- `裝置`：補充裝置警示標記、列印失敗工作數量、`需要設定`、HQ 管理印表機的 `HQ` 標記，以及 `尚未設定` 印表機列。
- `管理印表機`：新增 HQ 管理印表機設定流程，並說明列印佇列錯誤工作會觸發印表機警示標記，直到 `Error` 佇列清空。
- `我的訂閱` 和 `首次初始化`：說明 POS 裝置名稱現在會在啟用／驗證訂閱時記錄，並說明刪除 POS 店舖設定前會釋放相關 X1 POS 訂閱席位。
- `功能與特性地圖`：把裝置警示標記和 HQ 管理印表機設定狀態加入 `裝置` 範圍。

### 截圖更新

- 新增 `裝置` 警示標記狀態和 HQ 管理印表機設定列的待補截圖。

### 已檢查

- 已檢查 `v1.7.12` 到 `v1.7.13` 的 POS 原始碼差異，包括發布說明、UI 標籤、裝置警示實作、訂閱啟用／驗證變更，以及刪除店舖設定行為。
- 確認 Windows Store/Mac App Store 打包、桌面品牌識別、Windows 縮放版面修正和應用程式商店管理更新提示，不需要在目前手冊基線中新增操作步驟。

## 2026-05-04（HQ X1 POS 訂閱席位）

### 已更新

- `我的訂閱`：新增 `X1 產品` 分頁、X1 POS 席位數量、已佔用／可用席位狀態、縮短裝置 ID fallback，以及替換平板使用的 `釋放裝置` 動作。
- `我的訂閱`：說明釋放 POS 裝置席位不會取消訂閱；它只會清除舊裝置，讓替換平板可以註冊。
- `我的訂閱`：保留 `市集` 分頁中的市集訂閱檢查和取消訂閱指引。

### 已檢查

- 已按 X1.HQ PR #242 和 X1.POS PR #401 比對目前手冊基準。
- 已確認本次文件更新沒有新增截圖需求。

## 2026-05-01（v1.7.12 POS 對齊）

### 已更新

- `管理印表機` 和 `裝置`：補充印表機編輯視窗中的進階印表機輸出設定，包括 `列印縮放 (%)`、走紙行數控制，以及針式列印密度 / 顏色選項。
- `設定`：說明 `自動列印收據` 只控制收據列印。付款方式已設定為開錢箱時，即使收據自動列印關閉，結賬後錢箱仍會打開。
- `功能和特性地圖`：更新 `裝置` 範圍，加入進階印表機輸出設定。

### 截圖更新

- 新增針式列印進階設定的待補截圖。

### 已覆核

- 已檢查 `v1.7.11` 到 `v1.7.12` 的 POS 源碼差異，包括發布說明和源碼變更。
- 已確認結賬開錢箱變更屬於行為修復，不需要新增收銀員步驟。

## 2026-04-29（v1.7.11 POS 對齊）

### 已更新

- `設定`：新增 `列印` -> `模板` -> `標籤` -> `啟用自適應文字大小`，用於較長標籤品項 / 配料名稱。
- `設定付款裝置` 和 `裝置`：新增 Octopus V3 讀卡器 `裝置編號` 欄位和儲存要求。
- 新增功能指南：訂單功能選單中的 `八達通結算`。
- `銷售流程` 和 `功能與特性索引`：將 `八達通結算` 加入訂單功能說明。

### 截圖更新

- 新增標籤自適應文字大小和 Octopus settlement 的待補截圖。
- 更新 Octopus V3 讀卡器截圖需求，加入 `裝置編號`。

### 已檢查

- 已檢查從上一版 POS 手冊基準到 `v1.7.11` 的 POS 原始碼變更，包括 release notes 和 source diff。
- 已確認 ODO 結帳狀態同步、背景 ODO 上傳、外賣導覽 context、Octopus 增值單標題字體大小、結算回應性，以及穩定性 / crash handling 屬於行為修正或可靠性改善，不需要在上述更新之外新增收銀員步驟。

## 2026-04-25（HQ POS 員工批量建立及工作區存取）

### 已更新

- `POS Users`：新增在同一個 `New POS User` 視窗使用 `Beast Mode` 建立多個 POS 員工的說明，包括每列欄位，以及共用 `User Groups`、`Shop`、登入方式及狀態設定。
- `Workspace Administration`：新增 `Workspace admin` 存取狀態說明，並說明工作區管理員即使沒有直接公司、品牌或店舖分配，也已擁有目前工作區的存取權。

### 已檢查

- 已按 X1.HQ PR #183 及 PR #184 已部署的 HQ portal 變更比對目前手冊基準。
- 已確認本次文件更新沒有新增截圖需求。

## 2026-04-23（HQ 品牌及菜單項目流程調整）

### 已更新

- `Workspace Administration` 及 `Brand, Shop, and Channel Scope`：補充品牌記錄可包含收據品牌資料，例如列印收據使用的標誌。
- `Menu Items`：補充抽屜標題中的目前記錄資訊、`Skip to Next` / `Update & Next` 會保留目前分頁的流程，以及各店舖啟用狀態相關的店舖設定文字。

### 已檢查

- 已按 HQ portal 變更 `0a18a87`、`158922f`、`24fe946` 及 `76a7a36` 比對目前手冊基準。
- 已確認此期間其餘菜單目錄及工作區文字變更，不需要在以上更新之外新增獨立頁面。

## 2026-04-19（HQ/POS 權限調整）

### 已更新

- `POS Users`：新增使用者群組 `權限`、權限區塊、受保護 POS 操作例子，以及已儲存群組權限對 POS 執行時行為的影響。
- `角色與權限`：新增 `權限不足`、`輸入員工編號`、`輸入授權員工編號` 及第二位授權人檢查的執行時提示說明。
- `More Tools`、`Online Orders` 及 `Settings`：補充員工可能遇到的權限失敗情況及何時需要升級處理。
- `按鈕樣式`、`菜單分類`、`智能分類`、`菜單項目` 及 `網上分類`：新增可從支援的 `按鈕樣式` 選擇器直接使用 `建立按鈕樣式` 的說明。

### 已檢查

- 已檢查 X1.POS 至 `9f898e4` 及 X1.HQ 至 `b1e558c` 的最新變更，確認對使用者手冊的影響。
- 已確認 KPay 簽名錯誤回報、商品欄位顯示設定保留、套餐複製清理，以及營業時段重疊提示文字屬於行為／訊息修正，不需要新增獨立操作流程。

## 2026-04-18（HQ 猛獸模式批量建立）

### 已更新

- `Categories`：新增 `分類代碼`、分類 `店舖設定`，以及用共用設定一次建立多個分類的 `猛獸模式` 說明。
- `Smart Categories`：新增用共用設定一次建立多個智能分類的 `猛獸模式` 說明。
- `Payment Methods`：新增以 `Code` 和 `Name` 一次建立多個付款方式的 `猛獸模式` 說明。
- `Departments`：新增 `Departments`、`Sub-Departments` 及 `Revenue Centers` 以 `Code`、`Name`、`Description` 批量建立的說明。
- `Reasons`：新增以 `Reason Code` 和 `Description` 一次建立多個原因的 `猛獸模式` 說明。
- `Device Settings`：新增以 `Printer Name` 一次建立多個印表機/KDS 記錄的 `猛獸模式` 說明。
- `Online Categories`：新增以 `Name` 和 `Name Alt` 一次建立多個網上分類的 `猛獸模式` 說明。
- `Menu Items`：新增複製動作、深度複製行為、`猛獸模式` 多列複製、共用目標分類／部門，以及重複 `Item Code` 檢查說明。
- `Modifier Groups`：新增列級複製動作、來源預先選取、`猛獸模式` 共用複製設定，以及已連結改碼項目與店舖價格資料的深度複製說明。
- `Meal Sets`：新增列級複製動作、來源預先選取、`猛獸模式` 共用複製設定，以及已連結套餐項目與店舖價格資料的深度複製說明。
- `猛獸模式` 徽章：更新啟用後的徽章，讓複製視窗都顯示閃電圖示。

### 已檢查

- 已按 HQ portal PR #138 及 PR #139 的合併更新比對目前手冊基準。
- 已確認本次文件更新沒有新增截圖需求。

## 2026-04-17（HQ 導航與帳單調整）

### 已更新

- `市集與帳單`：將 HQ 文件章節名稱調整為與後台側邊欄一致。
- `My Subscriptions`：將進入路徑更新為頂層 `My Subscriptions` 側邊欄項目。
- `Billing`：將進入路徑更新為頂層 `Billing` 側邊欄項目，並補充自訂線下合約帳單說明。
- `Billing`：移除免費／推廣方案說法，改為說明 `Custom Contract` 與 `Offline Contract`。
- `Promotions` 與 `Discounts`：將文件中的進入路徑由 `Menu Management` 更新為 `POS Settings`。

### 已檢查

- 已比對 HQ 後台中訂閱、帳單、推廣活動及折扣頁面的導航變更與手冊基準。
- 已確認本次只調整導航標籤與帳單文字，不需要新增截圖。

## 2026-04-12（HQ Marketplace 與渠道設定檢查）

### Updated

- `Online Ordering`：重寫 `General Settings`，使其符合目前的店舖清單與 `Shop Settings` 工作流程。
- `Online Ordering`：新增 `3rd Party Platforms` 頁面，用於店舖層級的平台訂閱與設定。
- `Online Ordering`：重寫 `Channel Settings`，使其符合新的 `By Category`、`By Shop` 與 `By Channel` 矩陣檢視。
- `Online Ordering`：把 `Categories and Items`、`Call to Action`、`Menus and Combinations` 與 `UI Translations` 改寫成目前 HQ 任務／設定參考格式。
- `Marketplace`：更新 `Marketplace` 與 `My Subscriptions` 指引，補充平台訂閱及其對後續設定的影響。

### Screenshot updates

- 新增 HQ 的 `Channel Settings` 矩陣檢視與 `3rd Party Platforms` 店舖頁截圖。

### Reviewed

- 檢查 X1 HQ 的 commit `05a38e1`（`feat: add marketplace platforms, channel subscription filtering, and pivot views`），並與目前手冊基線比較。
- 確認使用者可見的文件影響集中在網上點餐平台設定、渠道可見性，以及市集訂閱指引。

## 2026-04-02 (v1.7.7 Alignment)

### Updated

- `Settings`：新增 `Printing` -> `Setting` -> `Auto Print Receipt` 的說明。
- `Settings`：新增 `Report` -> `Daily Report Sections`、`Show advanced sections`，以及相關的日結報表內容控制。
- `Day-end`（`client` 與 `functions`）：說明列印的日結內容會依照 `Report` 設定。
- `Function and Feature Map`：更新 `Settings` 範圍，涵蓋收據自動列印與可設定的日結報表區塊。

### Screenshot updates

- 新增收據自動列印切換與 `Report` 日結區塊設定的待處理截圖。

### Reviewed

- 依照目前手冊內容檢查新增的價格 `±` 按鈕與數字輸入對話框。因為現有操作頁已涵蓋該對話框，所以這次 release 不需要新增獨立頁面。

### 寫作清理

- 重新檢查操作頁面是否還有過時的版本限定提示，並保留 release 歷史只放在本頁。

## 2026-03-25 (Issue #82 設定 Mode Guidance)

### Updated

- `Settings`：新增在 `Restaurant` 與 `Quick Order` 終端機模式之間切換的操作說明，也包含控制桌台優先與直接下單流程的相關 `General` 設定。
- `Function and Feature Map`：更新 `Settings` 範圍，納入終端機模式與快速訂單相關的一般切換項目。

### Screenshot updates

- 新增 `Operation` -> `Terminal` 模式選擇與相關 `General` 訂單模式切換的待處理截圖。

### 寫作清理

- 重新檢查設定指南與目前 UI 標籤是否一致，並將新的模式說明保留在設定畫面指南中，不分散到其他版本提示。

## 2026-03-24 (v1.7.6 Alignment)

### Updated

- `Sales Flow`：新增外賣 `Order Contact` 的可用性說明，並釐清已儲存的聯絡資料會顯示在外賣訂單標題下方。
- 新增功能指南：`Order Contact`，用來在外賣訂單上儲存客戶 `Name` 與 `Phone`。
- `Settings`：新增 `Printing` -> `Setting` 切換項目，包含 `Show Order Contact On Receipt` 與 `Show Order Contact On Kitchen Output`，以及收據範本字型設定中的 `Customer Contact` 列。
- `Function and Feature Map`：更新訂單與設定範圍，納入外賣聯絡人擷取與列印控制。

### Screenshot updates

- 新增外賣訂單聯絡人輸入／結果，以及列印訂單聯絡人切換的待處理截圖。

### 寫作清理

- Re-checked operational 頁面 供 stale 版本-specific callouts 及 kept release history 於 本頁 僅.

## 2026-03-15 (v1.7.5 檢查)

### Reviewed

- 檢查 `v1.7.5` release notes 與原始碼差異，確認是否有使用者可見的變更。
- 重新檢查依賴彈出視窗標題、輸入提示、選擇清單、日期／時間選擇器、載入對話框，以及分頁式 `Select Function` 對話框的流程。

### Outcome

- 這次 release 不需要調整操作說明。
- UI 標籤、按鈕名稱與使用者步驟都沒有脫離 `v1.7.4` 基線。
- 現有截圖與待處理截圖需求仍然有效，足以作為文件用途。

### 寫作清理

- 重新檢查操作頁面是否有過時的版本限定提示，並把 release 歷史只保留在本頁。

## 2026-03-13 (v1.7.4 Alignment)

### Updated

- `Sales Flow`：記錄分頁式 `Select Function` 行為，新增 `Order Remark`，並說明已儲存的訂單備註在哪裡可以編輯。
- `Checkout and Payments`：記錄從 `More` 開啟分頁式 `Payment Methods` 的選擇流程，以及目前 `Payment Remark`／`Deposit Remark` 的輸入入口。
- 功能選單指南（`Apply Discount`、`Apply Service Charge`、`Member Login`、`Split or Merge Transaction`、`To Dine-In or To Takeaway`、`Void vs Return`、`Refunds and Voids`）：更新進入步驟，使其符合分頁式 `Select Function` 對話框。
- `Change Table`：記錄選擇器對話框可在 `Table List` 與 `Floor Plan` 之間切換，以及 `Show Split`／`Hide Split` 的行為。
- `Function and Feature Map`：更新訂單與結帳範圍，涵蓋選擇器分頁與備註流程。

### Screenshot updates

- 新增功能選擇器分頁、訂單備註顯示／編輯、結帳付款備註編輯按鈕，以及變更桌台對話框檢視切換的待處理截圖。

### 寫作清理

- 重新檢查操作頁面是否有過時的版本限定提示，並把 release 歷史只保留在本頁。

## 2026-03-10 (v1.7.3 Alignment)

### Updated

- `Settings`：擴充為目前的區塊版面（`General`、`Operation`、`System`、`Printing`、`Third Party Platform`、`ODO`、`Report`），包含從備份還原流程、`Printing` -> `Template` 的列印語言覆寫，以及已對應／已啟用的篩選行為。
- `Function and Feature Map`：更新 `Settings` 範圍，納入還原動作、列印語言覆寫、僅列出已啟用的整合項目，以及僅列出已對應的 ODO 渠道清單。

### 寫作清理

- 重新檢查操作頁面是否有過時的版本限定提示，並把 release 歷史只保留在本頁。

## 2026-03-06 (v1.7.2 Alignment)

### Updated

- `Settings`：新增 `System` -> `Number` 的說明，涵蓋 `Rounding Method`、`Decimal Places` 與 `Round For Cash Only`。
- `Checkout and Payments`：釐清僅現金四捨五入的行為，以及在結帳過程中 `Rounding` 總額會即時更新。
- `Payment Errors and Retry`：釐清離開結帳頁面（透過返回或導覽）時的桌台解鎖行為，並補充僅現金四捨五入的規則背景。

### 寫作清理

- 重新檢查操作頁面是否有過時的版本資訊框；這次 release 不需要再轉換其他舊版本提示。

## 2026-03-05 (v1.7.1 Alignment)

### Updated

- `Settings`：記錄重新設計的語言設定版面與操作流程。
- `Access and Navigation` + `Sign In`：新增登入時快速切換語言的說明。
- `Sales Flow`：釐清品項名稱會依照選擇的語言，以及品項對應（`Main`／`Alt`）顯示。
- `Function and Feature Map` + `Terminology`：新增語言／品項對應／快速切換的參考。

### 寫作清理

- 重新檢查操作頁面是否有過時的版本提示框，並只在本頁保留 release 歷史。

## 2026-03-05 (v1.7.0 Alignment)

### Updated

- `Configure Payment Devices`：新增 `Linkly EFTPOS Terminal` 設定流程（配對與儲存清單）。
- `Devices`：釐清 `Payments` 分頁包含 Linkly EFTPOS 終端機設定。
- `Checkout and Payments`：釐清即使有未送出的品項，`Split By Item` 仍可繼續進行。
- `Payment Errors and Retry`：新增 EFTPOS 終端機處理備註（在重試前先等待終端機／POS 結果）。
- `Info`：釐清日誌匯出在八達通日誌可用時也會包含相關內容。

### 寫作清理

- 已從操作提示／標題移除較舊的版本限定標籤（例如 `v1.6.5+`、`v1.6.6+`），並將行為合併到一般基線說明中。

## 2026-02-27 (資料 Retention 指南 Added)

### Added

- 新增參考頁面：`Data Retention and Storage`，提供本機日誌、媒體快取、本機資料庫保留，以及支援上傳的使用者說明。

### Updated

- `Info`、`Troubleshooting` 與 `Function and Feature Map` 現在都連結到保留指南，方便更快查找政策。

## 2026-02-27 (v1.6.6 Alignment)

### Updated

- `Sales Flow`：新增桌台畫面上的 `Floor Plan`／`Table List` 切換行為。
- `Info`：更新日誌流程以符合目前應用程式動作：`Export`、`Upload` 與 `Remove` 所選日誌檔。
- `Info`：釐清本機匯出與雲端上傳的支援路徑預期。

### Screenshot updates

- 新增桌台檢視切換與更新後的日誌選擇器／上傳 UI 狀態的待處理截圖。

## 2026-02-22 (v1.6.5 Alignment)

### Updated

- `First-Time Initialization`：釐清在設定期間選擇的語言會立即套用，而且整個設定文字都會本地化。
- `Day-end`（`client` 與 `functions`）：釐清所選日期的處理行為，以及已關閉日期的重複日結阻擋。
- `Troubleshooting`：新增 `Day-end has already been processed for the selected day` 的對應說明。

## 2026-02-21 (英文草稿整理)

### Added

- 新增 getting-started 指南：`Quick Start (15 mins)`
- 新增 SOP 頁面：`Daily Operations`
- 新增完整功能索引：`Function and Feature Map`
- 新增版本追蹤頁面
- 初始化流程更新為 7 個步驟，含語言選擇
- 新增初始化後的訂單資料同步流程

### Enhanced

- 疑難排解已改寫為決策式指引
- 退回／作廢與日結頁面現在包含 `Do / Don't` 原則
- 角色／權限說明已改寫為實用的收銀員與經理邊界
- 截圖對應已與最新提供的畫面對齊

### 待處理

- 剩餘截圖請見 `SCREENSHOT_PREP_LIST_EN.md`
- HQ 文件擴充完成後，HQ 流程會定稿
