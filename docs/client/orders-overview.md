---
title: Orders Overview
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[Who this is for]
Cashiers and managers who need to find existing transactions quickly.
:::

## Before you start

- You are signed in
- You can access `Orders Overview` from the left menu

## What this screen is for

Use `Orders Overview` to find open, completed, deposit, or searched transactions, then open the target order for action.

## Main views

<Tabs>
  <TabItem value="open" label="Open">
Shows in-progress transactions that are not completed.
  </TabItem>
  <TabItem value="closed" label="Closed">
Shows completed transactions for return/reprint/reopen workflows.
  </TabItem>
  <TabItem value="deposit" label="Deposit">
Shows deposit-related transactions.
  </TabItem>
  <TabItem value="search" label="Search">
Lets you search by supported fields from the search dialog.
  </TabItem>
</Tabs>

## Steps

1. Tap `Orders Overview` in the left menu.
2. Choose the correct tab (`Open`, `Closed`, `Deposit`, or `Search`).
3. Use search/filter/sort if needed.
4. Tap the target transaction.
5. Continue with the required action (view, return, reopen, reprint, etc.).

## What you should see

- List updates based on selected tab/filter
- Tapping an entry opens order detail context for next action

:::note[Screenshot pending]
Needed files: `client/cl-26-orders-overview-tabs-list.png`, `client/cl-27-orders-overview-search-dialog.png`
:::

## If something goes wrong

:::warning[Cannot find transaction]
Switch tab first (`Open` vs `Closed`), then retry with search filters.
:::

## When to ask manager/admin

- Transaction appears missing after tab/search checks
- Completed-order actions are restricted by policy

## Part-paid orders

A dine-in order with a saved partial payment remains under `Open`. Its `Part-paid` badge and `Balance due` show that the order still needs settlement. Open it to continue payment or reprint its non-final balance statement. Do not look for it under `Closed` until an authorized operator completes the transaction.
