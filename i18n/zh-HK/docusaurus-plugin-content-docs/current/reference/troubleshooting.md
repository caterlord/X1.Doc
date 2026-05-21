---
sidebar_position: 2
title: 疑難排解
---

:::info[如何使用本頁]
先查看症狀索引，然後只展開下方對應的問題卡片。
:::

## 快速症狀索引

| 症狀 | 第一個動作 | 對應章節 |
| --- | --- | --- |
| 無法登入 | 先重試一次 PIN，並檢查網路 | 登入失敗 |
| 印表機／裝置未就緒 | 檢查狀態，並執行 `Test Print` | 印表機或裝置未就緒 |
| `POS Code is required` | 在 `Settings` 填入 `POS Code` | POS Code 需要 |
| 付款失敗或結果不明確 | 只有在明確失敗時才重試一次 | 無法完成付款 |
| 無法修改已完成付款 | 檢查第三方／付款鎖定規則 | 修改付款被阻止 |
| 無法分拆／合併／作廢 | 先送出待處理品項，清除編輯內容 | 分拆、合併或作廢被阻止 |
| 日結無法進行 | 重新檢查營業日期與待處理交易 | 日結無法進行 |

## 全域處理原則

:::warning[停止反覆重試]
對於付款與金額相關操作，當結果不明確時，不要一直重試。先重試一次，然後交由經理／管理員處理。
:::

:::note[交由經理／管理員處理前先保留證據]
請保留交易號碼、終端機 POS 代碼、時間戳記，以及畫面上的完整訊息。
:::

關於日誌處理與保留時間，請參考 [資料保留與儲存](./data-retention-and-storage)。

## 依症狀分類的問題

<h3 id="login-fails">登入失敗</h3>

<details>
 <summary>展開步驟</summary>

1. 重新輸入 PIN，然後點選 `SIGN IN`。
2. 確認使用的是正確的員工帳號與角色。
3. 確認網路連線穩定。

何時要交由經理／管理員處理：

1. 兩次嘗試後仍無法登入。
2. 訂閱或離線警告阻擋登入。

</details>

<h3 id="printer-or-device-not-ready">印表機或裝置未就緒</h3>

<details>
 <summary>展開步驟</summary>

1. 開啟 `Devices` -> `Printer`。
2. 檢查狀態圓點，然後開啟 `Info`。
3. 執行 `Test Print`。
4. 檢查紙張、上蓋與網路。
5. 如果佇列卡住，請使用 `Manage Spooler`。
6. 開啟 spooler 工作詳情，檢查 `狀態`、`嘗試次數`、`下次重試` 和 `錯誤`。
7. 如果工作是 `等待自動重印`，請先讓印表機恢復連線並等候重試。如果工作是 `永久錯誤`，請在印表機就緒後移除失敗工作並重新送出列印請求。

何時要交由經理／管理員處理：

1. 測試列印持續失敗。
2. 本地檢查後，印表機仍然離線。
3. Spooler 工作在自動或手動重試後仍回到 `Error`。

</details>

<h3 id="pos-code-required">POS Code 需要</h3>

<details>
 <summary>展開步驟</summary>

1. 開啟 `Settings` -> `General`。
2. 填入 `POS Code`。
3. 點選 `Save`。
4. 返回 `Devices` 後再重試。

![設定一般與 POS 代碼](/img/manual/en/client/cl-05-settings-general-language-poscode.png)

何時要交由經理／管理員處理：

1. 收銀員無法編輯設定。
2. POS Code 不明或被拒絕。

</details>

<h3 id="payment-cannot-complete">無法完成付款</h3>

<details>
 <summary>展開步驟</summary>

1. 確認所選付款方式適用於這張訂單。
2. 如果折扣規則要求特定付款方式（例如八達通相關），請使用指定方式。
3. 只有在狀態明確顯示失敗或取消時，才重試一次。
4. 如果仍然失敗，請依店舖政策切換付款方式。

何時要交由經理／管理員處理：

1. 付款結果不明確（有重複扣款風險）。
2. 付款流程看起來卡住。

</details>

<h3 id="modify-payment-is-blocked">修改付款被阻止</h3>

<details>
 <summary>展開步驟</summary>

1. 檢查付款是否與第三方服務連動。
2. 依店舖政策處理更正，通常會使用 `Return` 流程。
3. 在交接之前記錄交易詳細資料。

何時要交由經理／管理員處理：

1. 涉及金額影響，需要核准。
2. 修改與退回流程都被阻止。

</details>

<h3 id="split-merge-or-void-is-blocked">分拆、合併或作廢被阻止</h3>

<details>
 <summary>展開步驟</summary>

1. 先送出尚未送出的品項。
2. 清除待處理的編輯內容。
3. 再重試一次該操作。

何時要交由經理／管理員處理：

1. 清除後重試仍然被阻止。
2. 該操作需要經理核准。

</details>

<h3 id="day-end-cannot-proceed">日結無法進行</h3>

<details>
 <summary>展開步驟</summary>

1. 重新檢查營業日期與時間。
2. 確認沒有未完成或待處理的交易。
3. 使用經理帳號再重試。
4. 如果您看到 `Day-end has already been processed for the selected day`，不要再重試同一天。
5. 改選其他日期，或先查看該日期的現有報表。

何時要交由管理員處理：

1. 營業日期看起來不正確。
2. 日結驗證仍然被阻止。
3. 成功日結後，所選日期的營收或報表輸出不一致。

</details>

## 回報資料範本

請務必提供：

- 終端機 POS 代碼
- 使用者名稱
- 交易／收據號碼（如適用）
- 精確的畫面／操作內容
- 錯誤訊息文字
- 時間戳記
