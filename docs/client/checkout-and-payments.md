---
sidebar_position: 4
title: Checkout and Payments
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[Who this is for]
Cashiers collecting payment, plus managers handling special payment cases.
:::

## Before you start

- Order is ready for payment
- Customer confirms how they want to pay
- You are on checkout screen
- You know whether `Round For Cash Only` is enabled in `Settings` -> `System`

## Choose the right payment mode

<Tabs>
  <TabItem value="amount" label="Amount (single/normal)">
1. Stay on `Amount`.
2. Select payment method.
3. If the method is not visible, tap `More`, then choose it in `Payment Methods`.
4. If `Payment Methods` shows many choices, tap `Previous` or `Next` to move between pages.
5. Enter amount, then tap `Pay`.
6. Confirm payment line updates correctly.
  </TabItem>
  <TabItem value="split-amount" label="Split By Amount">
1. Tap `Split By Amount`.
2. Add first partial payment and method.
3. Add remaining payment(s) until `Unpaid` becomes zero.
4. Tap `Pay`.
  </TabItem>
  <TabItem value="deposit" label="Deposit">
1. Tap `Deposit`.
2. Select method and amount.
3. Fill `Deposit Remark` if required.
4. Tap `Pay`.
  </TabItem>
  <TabItem value="split-item" label="Split By Item">
1. Tap `Split By Item`.
2. Move items with `>` or `All`.
3. Tap `Next`.
4. Complete payment for each split order.
  </TabItem>
</Tabs>

:::tip[Split By Item with unsent items]
You can start `Split By Item` checkout even when some order lines are not yet sent.
:::

:::note[Cash-only rounding behavior]
When `Round For Cash Only` is enabled, rounding is applied only when cash is part of the current checkout payment.
:::

## Add remarks when required

1. Select the payment method you will use.
2. Tap the edit button beside `Paid` to enter `Payment Remark`.
3. Enter the remark, then confirm before you finish payment.
4. For `Deposit`, tap `Deposit Remark` before `Pay`.
5. Confirm the remark is saved before you complete checkout.

:::note[Screenshot pending]
Needed file: `client/cl-44-checkout-payment-remark-edit-button.png`
:::

## What you should see

![Checkout Amount tab](/img/manual/en/client/cl-12-checkout-amount-tab.png)
![Checkout Split By Amount](/img/manual/en/client/cl-14-checkout-split-by-amount.png)
![Checkout Deposit tab](/img/manual/en/client/cl-15-checkout-deposit-tab.png)
![Checkout Split By Item](/img/manual/en/client/cl-16-checkout-split-by-item.png)
- `Rounding` and total values refresh after modifier/discount changes during checkout
- The `Paid` summary area shows an edit button for `Payment Remark`

## If something goes wrong

:::warning[Payment seems stuck]
Do not force-close the app while payment is processing.
:::

:::tip[Payment failed]
Retry once only if status is clearly failed/cancelled. If still failing, switch method by store policy.
:::

:::note[Table remains locked after leaving checkout]
Leave checkout and reopen the order once. If table remains locked, escalate with table code and timestamp.
:::

## When to ask manager/admin

- Payment result is unclear (possible duplicate charge risk)
- Third-party linked payment cannot be modified
- Required payment method is blocked by configuration

## Partial payments for dine-in tables

When an administrator enables `Enable partial payments` for the brand, an authorized cashier can save less than the full balance from `Split By Amount`.

1. Add the amount and payment method, then select `Take partial payment`.
2. Confirm the saved row appears in `Payment history` with its received time and reference number.
3. Print the `Balance Statement — Not Final Receipt` for the guest, or return to the order and continue service.
4. Reopen checkout later. Review `Paid` and `Balance due`, then collect the remainder.
5. Select `Complete payment` to close the transaction and print the final receipt.

The order stays in the open views after a partial payment. You may add items, but you cannot reduce the order below the amount already paid. Split by item, transaction split, and merge are unavailable after the first saved payment; changing tables is still allowed. If the balance reaches zero after an edit, an authorized operator must still explicitly complete the transaction.

:::warning[Captured payment with an uncertain save result]
If the POS says a gateway payment may have been captured, do not charge again. Record the displayed reference and ask a manager to reconcile or reverse it.
:::
