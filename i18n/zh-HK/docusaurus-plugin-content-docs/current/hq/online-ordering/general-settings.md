---
sidebar_position: 5
title: 一般設定
---

:::info[適用對象]
在品牌與菜單結構已經就緒後，需要管理店舖層級網上點餐設定的管理員。
:::

## 開始前

- 確認已選擇正確的品牌。
- 確認您知道要編輯哪一間店舖。
- 先判斷您要調整的是基礎店舖行為、付款、渠道、通知，還是 [3rd Party Platforms](./third-party-platforms.md)。

## 開啟此頁面

開啟 `Online Ordering` -> `General Settings`。

## 本頁用途

`General Settings` 是店舖層級網上點餐設定的入口頁。

您可以在這裡：

- 檢視目前品牌下所有可用店舖
- 確認每間店舖是否標示為 `In use`
- 開啟指定店舖的 `Shop Settings`

進入某間店舖後，`Shop Settings` 會提供 `Basic Setup`、`Ordering Channels`、`Payments`、`3rd Party Platforms`、`Webhooks` 等分區。

![一般設定](/img/hq/online-ordering/oo_general_settings_page.png)

## 主要區塊

### 店舖清單

`General Settings` 主頁會以每間店舖一列顯示。

主要欄位包括：

- `Store Name`
- `In use`
- `Actions`

請在正確列使用編輯動作，開啟該店舖的 `Shop Settings`。

### Shop Settings

進入某一間店舖後，左側導覽可能包含：

- `Basic Setup`
- `Category Display`
- `UI & Appearance`
- `Ordering Channels`
- `Payments`
- `Members`
- `Notifications`
- `3rd Party Platforms`
- `Webhooks`

請只進入與本次變更相關的分區，不要在同一次操作中順手調整無關設定。

### 地區網上付款

在店舖的付款分區，選擇 `新增付款方式`，加入 `Alipay CN`、`HSBC PayMe`、`UnionPay` 或 `Octopus`。`Octopus` 使用 QFPay，與 `Octopus App` 分開設定。

| 付款方式 | 供應商選項 |
|---|---|
| Alipay CN | KPay、QFPay、Global Payments EFT Pay、Aigens |
| HSBC PayMe / UnionPay | KPay、QFPay、OssPay |
| Octopus | QFPay |
| Alipay HK / WeChat Pay | KPay、QFPay、Global Payments EFT Pay、Aigens、OssPay |

1. 在 `供應商` 選擇付款合作夥伴指定的選項。
2. 選擇連結至 ODO Online Pay 的 `付款方式 ID`。如未有此選項，先在[付款方式](../pos-settings/payment-methods.md)建立或檢查。
3. 輸入該付款方式的憑證。KPay 使用商戶代碼、私鑰及平台公鑰；只有合作夥伴確認後才開啟 `服務商模式`。Global Payments EFT Pay 使用用戶確認金鑰及秘密金鑰。Aigens 使用 API URL、店舖 ID 及驗證權杖。QFPay 使用應用程式代碼及客戶端金鑰，商戶 ID 為選填。
4. 按合作夥伴指示設定 `正式環境`。KPay 的開關只適用於 KPay；Aigens 沒有環境開關。
5. 選擇 `儲存設定`，重新開啟同一店舖，檢查已儲存的供應商與設定值。

切換供應商會保留其他供應商的憑證。移除付款方式並儲存後，會停用該方式並清除其所有供應商憑證。變更正式付款憑證前，請先詢問擁有人或管理員，並在完成設定後於相關網店核對付款方式。

> Screenshot pending: `hq/online-ordering/oo_regional_payment_providers.png` — 使用範例憑證顯示地區付款方式及供應商設定。

## 步驟

1. 開啟 `Online Ordering` -> `General Settings`。
2. 確認品牌正確。
3. 在 `Store Name` 下找到正確列。
4. 如果需要確認店舖是否已有網上點餐設定，先查看 `In use` 狀態。
5. 選擇該店舖的編輯動作。
6. 在 `Shop Settings` 中開啟所需分區。
7. 完成店舖層級變更後，選擇 `Save Settings`。

## 儲存後的影響

變更只會套用到您在 `Shop Settings` 中開啟的那一間店舖。

有些設定只影響該店舖的顧客前台行為，另一些則會進一步影響該店舖的渠道可用性或合作平台整合。

## 如何檢查你的變更

1. 回到 `General Settings`，重新開啟同一間店舖。
2. 確認您剛剛調整的分區仍然顯示更新後的值。
3. 到相關前台流程或下游設定頁檢查結果。

## 如發生問題

- 確認您在開啟 `Shop Settings` 前選中了正確的店舖列。
- 重新檢查這項變更是否其實應該在 `Payments`、`Ordering Channels` 或 [3rd Party Platforms](./third-party-platforms.md) 內處理。
- 如果缺少相關訂單渠道，請到 [市集](../marketplace/catalog.md) 檢查平台訂閱。

## 何時要請店主／管理員協助

- 您不確定應該修改哪一間店舖。
- 這項變更會影響營業中的網上點餐流程。
- 您需要付款、Webhook 或第三方平台設定的帳號資料或批准。
