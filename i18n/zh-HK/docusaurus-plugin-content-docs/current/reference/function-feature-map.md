---
sidebar_position: 1
title: 功能與特性索引
---

本頁是 POS X1 收銀端功能的完整索引，以及每個功能的文件位置。

## 為什麼會有這一頁

使用情境指南最適合用於訓練與日常操作。本頁最適合用於：

- 稽核
- UAT 檢查清單規劃
- 查找「這個功能在哪裡？」
- 規劃即將到來版本的功能缺口

如果您想依單一功能閱讀，請使用 [功能指南總覽](../functions/overview)。

## 模組索引

| 模組 | 核心功能 | 主要參考 |
| --- | --- | --- |
| 初始化 | 語言選擇、HQ 登入、品牌／店舖綁定、產品類型、模式、啟用、設定下載、第一次同步 | [首次初始化](../getting-started/first-time-initialization) |
| 登入 | PIN 登入、可選的快速語言切換、出勤打卡、登出 | [存取與導覽](../getting-started/access-and-navigation), [登入](../functions/sign-in) |
| 點餐 | `Dine-In`／`Takeaway` 導覽、桌台選擇、外賣訂單聯絡人、品項新增／移除、數量調整、即時改碼提示、套餐選擇提示 | [銷售流程](../client/sales-flow), [收銀端總覽](../client/overview) |
| 線上訂單 | 伺服器／取餐訂單監控與動作處理 | [線上訂單](../client/online-orders) |
| 訂單總覽 | 開啟／已完成／訂金／搜尋交易查詢 | [畫面指南：訂單總覽](../client/orders-overview) |
| 庫存 | 售完與限量品項控制 | [庫存](../client/inventory) |
| 訂單功能 | 套用／取消折扣、套用／取消服務費、變更桌台、訂單聯絡人、訂單備註、分拆／合併交易、作廢交易、現金收付、會員登入、八達通結算、分頁式 `選擇功能` 對話框 | [銷售流程](../client/sales-flow), [訂單聯絡人](../functions/order-contact), [八達通結算](../functions/octopus-settlement), [退款與作廢](../client/refunds-and-voids) |
| 結賬 | `單一金額`、按金額分單、訂金、按品項分單、付款方式選擇（包含從 `More` 開啟的分頁式 `Payment Methods`）、付款備註、訂金備註 | [結賬與付款](../client/checkout-and-payments), [收款](../functions/take-payment) |
| 付款恢復 | 重試邏輯、取消保護原則、回報資料 | [付款錯誤與重試](../client/payment-errors-and-retry), [疑難排解](./troubleshooting) |
| 已完成交易 | 作廢、退回、重新開啟、修改付款、重印收據 | [退款與作廢](../client/refunds-and-voids), [作廢與退回](../functions/void-vs-return) |
| 裝置 | 印表機新增／編輯／刪除、資訊／狀態、測試列印、spooler 的佇列／歷史／需要處理操作、列印預覽、安全及可能重複的重試控制、列印失敗警示標記、自動重試詳情、HQ 管理印表機設定狀態、進階印表機輸出設定、付款／輸入／X1 裝置設定（包含掃描輸入來源選擇、Linkly EFTPOS 配對及 Octopus V3 `裝置編號`） | [裝置](../client/devices), [管理印表機](../functions/manage-printers), [設定付款裝置](../functions/configure-payment-devices), [設定輸入裝置](../functions/configure-input-devices), [設定 X1 產品](../functions/configure-x1-products), [疑難排解](./troubleshooting) |
| 報表 | 報表選擇、日期篩選、儀表板摘要卡、長條／圓環圖表檢查、`DETAILS` 表格、列印輸出、`全單取消報表` 稽核明細 | [畫面指南：報表](../client/reports) |
| 設定 | 語言設定、品項名稱對應（`Main`／`Alt`）、登入快速切換啟用、POS 代碼、現金收銀機代碼、終端機 `Mode`（`Restaurant`／`Quick Order`）、一般訂單流程切換（`Enable Dine In Auto Open Order`、`Enable Takeaway Auto Open Order`、`Enable Default Takeaway Mode`、可選的自動指派桌台代碼）、已付款餐檯流程（`付款後保留餐檯`、餘額結清、`釋放餐檯`）、還原備份動作、四捨五入控制（`Rounding Method`、`Decimal Places`、`Round For Cash Only`）、列印控制（`Mapping`、`設定`、`模板`）、`Auto Print Receipt`、訂單聯絡人列印切換、收據 `Customer Contact` 字型區塊、包含 `八達通增值單` 和 `入賬 / 出賬單` 的模板字體設定、標籤 `啟用自適應文字大小`、`自動重印時顯示「自動重印」標籤`、列印語言覆寫、報表列印數量、`Daily Report Sections`、進階日結報表區塊切換、第三方整合（僅列出已啟用項目）、ODO 渠道對應（僅列出已對應項目） | [設定](../client/settings), [疑難排解](./troubleshooting) |
| 資訊 | 版本、除錯模式、離線重新啟用、日誌匯出／上傳／移除 | [資訊](../client/info), [資料保留與儲存](./data-retention-and-storage) |
| 更多工具 | 開啟抽屜、日結、現金收付、排隊控制器 | [更多工具](../client/more-tools), [日結](../functions/day-end), [代收 / 代支](../functions/pay-in-pay-out) |

## 依角色區分的功能範圍

| 功能範圍 | 收銀員 | 經理 |
| --- | --- | --- |
| 開班、一般訂單、一般結帳 | 是 | 是 |
| 變更終端機設定（`POS Code`、系統層級設定） | 否 | 是 |
| 作廢／退回等需核准的操作 | 通常受限 | 是 |
| 日結執行 | 否 | 是 |
| 事件轉交與最終決定 | 否 | 是 |

實際權限邊界請參考 [角色與權限](../getting-started/roles-and-permissions)。

## 已知缺口（目前草稿）

- 部分警告／錯誤狀態仍缺少截圖
- HQ 管理員功能索引仍在持續完善中

目前待處理截圖清單請見專案根目錄的 `SCREENSHOT_PREP_LIST_EN.md`。
