---
sidebar_position: 5
title: General Settings
---

:::info[Who this is for]
Admins who manage shop-level online ordering settings after the brand and menu structure are already in place.
:::

## Before you start

- Confirm the correct brand.
- Confirm you know which store you need to edit.
- Decide whether you need base store behavior, payments, channels, notifications, or [3rd Party Platforms](./third-party-platforms.md).

## Open this page

Open `Online Ordering` -> `General Settings`.

## What this page is for

`General Settings` is the entry point for store-level online ordering setup.

Use this page to:

- review all stores available for the selected brand
- check whether each store is marked `In use`
- open `Shop Settings` for the specific store you need to edit

After you open a store, `Shop Settings` gives you separate sections such as `Basic Setup`, `Ordering Channels`, `Payments`, `3rd Party Platforms`, and `Webhooks`.

![General Settings](/img/hq/online-ordering/oo_general_settings_page.png)

## Main sections

### Store list

The main `General Settings` page shows one row per store.

Key columns:

- `Store Name`
- `In use`
- `Actions`

Use the edit action on the correct row to open `Shop Settings`.

### Shop Settings

Inside one store, the left navigation can include:

- `Basic Setup`
- `Category Display`
- `UI & Appearance`
- `Ordering Channels`
- `Payments`
- `Members`
- `Notifications`
- `3rd Party Platforms`
- `Webhooks`

Use the section that matches the change you are making instead of editing unrelated settings on the same visit.

### Regional online payments

In the shop's payment section, use `Add Payment Method` to add `Alipay CN`, `HSBC PayMe`, `UnionPay`, or `Octopus`. `Octopus` uses QFPay and is separate from `Octopus App`.

| Payment method | Provider choices |
|---|---|
| Alipay CN | KPay, QFPay, Global Payments EFT Pay, Aigens |
| HSBC PayMe / UnionPay | KPay, QFPay, OssPay |
| Octopus | QFPay |
| Alipay HK / WeChat Pay | KPay, QFPay, Global Payments EFT Pay, Aigens, OssPay |

1. Choose the `Provider` supplied by your payment partner.
2. Select the `Payment method ID` linked to ODO Online Pay. Create or check it in [Payment Methods](../pos-settings/payment-methods.md) first if it is missing.
3. Enter the credentials supplied for this payment method. KPay uses a merchant code, private key, and platform public key; use `Service provider mode` only when your partner confirms it. Global Payments EFT Pay uses a user confirm key and secret key. Aigens uses an API URL, store ID, and auth token. QFPay uses an app code and client key, with an optional merchant ID.
4. Set `Production environment` as directed by your partner. For KPay, the switch applies specifically to KPay. Aigens has no environment switch.
5. Select `Save Settings` and reopen the same shop to check the saved provider and values.

Switching providers keeps the other provider's credentials. Removing a payment method disables it and clears all of its configured provider credentials when you save. Ask your owner/admin before changing live payment credentials, and verify the payment method in the relevant storefront after setup.

> Screenshot pending: `hq/online-ordering/oo_regional_payment_providers.png` — regional payment methods and provider-specific settings, using sample credentials.

## Steps

1. Open `Online Ordering` -> `General Settings`.
2. Confirm the correct brand.
3. Find the correct row under `Store Name`.
4. Check the `In use` status if you need to confirm the store already has online ordering settings.
5. Select the edit action for that store.
6. In `Shop Settings`, open the section you need.
7. Select `Save Settings` after you finish the store-level change.

## What changes after you save

Changes apply to the store you opened in `Shop Settings`.

Some changes only affect storefront behavior for that one store. Other changes also affect channel availability or partner integrations for that store.

## How to check your change

1. Return to `General Settings` and reopen the same store.
2. Confirm the updated values are still present in the section you changed.
3. Verify the result in the relevant storefront or downstream setup page.

## If something goes wrong

- Confirm you edited the correct store row before opening `Shop Settings`.
- Re-check whether the change belongs in `Payments`, `Ordering Channels`, or [3rd Party Platforms](./third-party-platforms.md).
- If a related order channel is missing, check the platform subscription in [Marketplace](../marketplace/catalog.md).

## When to ask owner/admin

- You are unsure which store should receive the change.
- The change affects live online ordering during trading hours.
- You need credentials or approval for payment, webhook, or third-party platform settings.
