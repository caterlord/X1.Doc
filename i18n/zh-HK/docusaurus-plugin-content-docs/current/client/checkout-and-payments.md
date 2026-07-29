---
sidebar_position: 4
title: 結賬與付款
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[適用對象]
收款的收銀員，以及處理特殊付款情況的經理。
:::

## 開始前

- 訂單已準備好付款
- 顧客已確認付款方式
- 您位於結賬畫面
- 您知道 `Round For Cash Only` 是否已在 `Settings` -> `System` 啟用

## 選擇合適的付款模式

<Tabs>
  <TabItem value="amount" label="單一金額">
1. 保持在 `單一金額`。
2. 選擇付款方式。
3. 如果看不到該方式，按 `More`，然後在 `Payment Methods` 選擇。
4. 如果 `Payment Methods` 顯示很多選項，按 `Previous` 或 `Next` 翻頁。
5. 輸入金額，然後按 `Pay`。
6. 確認付款行有正確更新。
  </TabItem>
  <TabItem value="split-amount" label="按金額分單">
1. 按 `按金額分單`。
2. 加入第一筆部分付款及付款方式。
3. 持續加入其餘付款，直到 `Unpaid` 變成 0。
4. 按 `Pay`。
  </TabItem>
  <TabItem value="deposit" label="訂金">
1. 按 `Deposit`。
2. 選擇付款方式及金額。
3. 如有需要，填寫 `Deposit Remark`。
4. 按 `Pay`。
  </TabItem>
  <TabItem value="split-item" label="按品項分單">
1. 按 `按品項分單`。
2. 使用 `>` 或 `All` 移動品項。
3. 按 `Next`。
4. 逐張分拆訂單完成付款。
  </TabItem>
</Tabs>

:::tip[按品項分單時可包含未送出品項]
即使部分訂單行尚未送出，您仍然可以開始 `Split By Item` 結賬。
:::

:::note[只限現金的四捨五入行為]
當 `Round For Cash Only` 啟用時，只有在目前結賬付款包含現金時，系統才會套用四捨五入。
:::

## 需要時加入備註

1. 選擇您要使用的付款方式。
2. 按 `Paid` 旁邊的編輯按鈕輸入 `Payment Remark`。
3. 輸入備註，並在完成付款前確認。
4. 對於 `Deposit`，請在按 `Pay` 前先按 `Deposit Remark`。
5. 確認備註已儲存後，再完成結賬。

:::note[截圖待補]
需要檔案：`client/cl-44-checkout-payment-remark-edit-button.png`
:::

## 您會看到

![結賬單一金額分頁](/img/manual/en/client/cl-12-checkout-amount-tab.png)
![結賬按金額分單畫面](/img/manual/en/client/cl-14-checkout-split-by-amount.png)
![結賬訂金分頁](/img/manual/en/client/cl-15-checkout-deposit-tab.png)
![結賬按品項分單畫面](/img/manual/en/client/cl-16-checkout-split-by-item.png)
- 結賬期間修改加配料 / 折扣後，`Rounding` 和總額會更新
- `Paid` 摘要區會顯示 `Payment Remark` 的編輯按鈕

## 如果出現問題

:::warning[付款似乎卡住]
付款處理中，請勿強行關閉應用程式。
:::

:::tip[付款失敗]
只有在狀態明確顯示 failed / cancelled 時才重試一次。如果仍然失敗，請按門店政策更換付款方式。
:::

:::note[離開結賬後桌台仍被鎖定]
先離開結賬，再重新開啟訂單一次。如果桌台仍然鎖定，請提供桌台代碼和時間戳，交由經理／管理員處理。
:::

## 何時需要找經理／管理員

- 付款結果不清楚（可能有重複扣款風險）
- 無法修改第三方連結付款
- 必要付款方式被設定阻擋

## 堂食餐桌的部分付款

管理員為品牌啟用 `Enable partial payments` 後，獲授權的收銀員可在 `Split By Amount` 中儲存低於帳單總額的付款。

1. 輸入金額並選擇付款方式，然後按 `Take partial payment`。
2. 確認記錄顯示於 `Payment history`，並包含收款時間及參考編號。
3. 列印 `Balance Statement — Not Final Receipt`，或返回訂單繼續服務。
4. 稍後重新開啟結賬，核對 `Paid` 與 `Balance due`，再收取餘額。
5. 按 `Complete payment` 完成交易並列印最終收據。

部分付款後，訂單仍留在未結檢視。可以加單，但訂單金額不能低於已收金額。儲存首筆付款後不可按項目拆分、拆單或合併交易，但仍可轉檯。若編輯後餘額為零，獲授權的員工仍須明確完成交易。

:::warning[付款可能已扣款但儲存結果不明確]
若 POS 提示閘道付款可能已扣款，請勿再次收款。記錄參考編號，並請經理核對或沖正。
:::
