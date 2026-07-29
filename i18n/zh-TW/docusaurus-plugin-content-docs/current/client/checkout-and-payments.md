---
sidebar_position: 4
title: 結帳與付款
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[適用對象]
收銀員負責收款，經理負責處理特殊付款情況。
:::

## 開始前

- 訂單已準備好付款
- 客戶已確認付款方式
- 您目前在結帳畫面
- 您知道 `Settings` -> `System` 是否已啟用 `僅現金四捨五入`

## 選擇正確的付款模式

<Tabs>
  <TabItem value="amount" label="單一金額">
1. 保持在 `Amount`。
2. 選擇付款方式。
3. 如果看不到該付款方式，點選 `更多`，再到 `Payment Methods` 選擇。
4. 如果 `Payment Methods` 顯示很多選項，點選 `上一頁` 或 `下一頁` 來切換頁面。
5. 輸入金額，然後點選 `Pay`。
6. 確認付款行更新正確。
  </TabItem>
  <TabItem value="split-amount" label="按金額分單">
1. 點選 `Split By Amount`。
2. 先加入第一筆部分付款與付款方式。
3. 再加入剩餘付款，直到 `Unpaid` 變成 0。
4. 點選 `Pay`。
  </TabItem>
  <TabItem value="deposit" label="訂金">
1. 點選 `Deposit`。
2. 選擇付款方式與金額。
3. 如有需要，填入 `Deposit Remark`。
4. 點選 `Pay`。
  </TabItem>
  <TabItem value="split-item" label="按品項分單">
1. 點選 `Split By Item`。
2. 用 `>` 或 `全部` 移動品項。
3. 點選 `下一頁`。
4. 完成每張分單的付款。
  </TabItem>
</Tabs>

:::tip[按品項分單可包含未送出品項]
即使有些訂單行還沒送出，您也可以先開始 `Split By Item` 結帳。
:::

:::note[僅現金四捨五入行為]
當啟用 `僅現金四捨五入` 時，只有在目前結帳付款包含現金時，才會套用四捨五入。
:::

## 需要時加入備註

1. 先選擇您要使用的付款方式。
2. 點選 `Paid` 旁的編輯按鈕，輸入 `Payment Remark`。
3. 輸入備註後，請在完成付款前確認。
4. 對於 `Deposit`，請在 `Pay` 前點選 `Deposit Remark`。
5. 完成結帳前，確認備註已儲存。

:::note[截圖待補]
需要檔案：`client/cl-44-checkout-payment-remark-edit-button.png`
:::

## 你應該看到什麼

![結帳金額分頁](/img/manual/en/client/cl-12-checkout-amount-tab.png)
![按金額分單的結帳畫面](/img/manual/en/client/cl-14-checkout-split-by-amount.png)
![結帳訂金分頁](/img/manual/en/client/cl-15-checkout-deposit-tab.png)
![按品項分單的結帳畫面](/img/manual/en/client/cl-16-checkout-split-by-item.png)
- 結帳時，當您修改加購項目或折扣後，`Rounding` 與總金額會一起更新
- `Paid` 摘要區會顯示可編輯 `Payment Remark` 的按鈕

## 如發生問題

:::warning[付款看起來卡住了]
付款處理中請勿強制關閉應用程式。
:::

:::tip[付款失敗]
只有在狀態明確顯示失敗／取消時，才重試一次。如果還是失敗，請依店舖政策改用其他方式。
:::

:::note[離開結帳後桌台仍然鎖定]
先離開結帳再重新開啟訂單一次。如果桌台仍然鎖定，請提供桌台代碼與時間戳記給主管。
:::

## 何時要找經理／管理員

- 付款結果不明確，可能有重複扣款風險
- 第三方連結付款無法修改
- 必要付款方式被設定擋住

## 堂食餐桌的部分付款

管理員為品牌啟用 `Enable partial payments` 後，獲授權的收銀員可在 `Split By Amount` 中儲存低於帳單總額的付款。

1. 輸入金額並選擇付款方式，然後點選 `Take partial payment`。
2. 確認記錄顯示於 `Payment history`，並包含收款時間及參考編號。
3. 列印 `Balance Statement — Not Final Receipt`，或返回訂單繼續服務。
4. 稍後重新開啟結帳，核對 `Paid` 與 `Balance due`，再收取餘額。
5. 點選 `Complete payment` 完成交易並列印最終收據。

部分付款後，訂單仍留在未結檢視。可以加單，但訂單金額不能低於已收金額。儲存首筆付款後不可按品項拆分、拆單或合併交易，但仍可轉檯。若編輯後餘額為零，獲授權的員工仍須明確完成交易。

:::warning[付款可能已扣款但儲存結果不明確]
若 POS 提示閘道付款可能已扣款，請勿再次收款。記錄參考編號，並請經理核對或沖正。
:::
