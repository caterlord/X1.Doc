---
sidebar_position: 6
title: 3rd Party Platforms
---

:::info[Who this is for]
Admins who subscribe, review, or maintain shop-level delivery and integration platform setup for online ordering.
:::

## Before you start

- Confirm the correct brand and target store.
- Gather any platform-provided shop codes, API keys, webhook details, or payment method IDs before you start.
- Confirm whether the platform is delivery-facing, integration-only, or managed mainly by the partner.

## Open this page

Open `Online Ordering` -> `General Settings`, then open the target store and select `3rd Party Platforms`.

## What this page controls

`3rd Party Platforms` manages the platform services connected to one store's online ordering setup.

Use this page to:

- subscribe to a new delivery or integration platform with `Add Platform`
- review which subscribed platforms are available for this store
- enter or update shop-level platform values
- remove a platform card from the store's saved settings

This page is shop-level. Subscription happens at brand/company level, but the fields you enter here apply to the store you opened.

![3rd Party Platforms page](/img/hq/online-ordering/oo_third_party_platforms_page.png)

*`3rd Party Platforms` with `Add Platform`, grouped platform cards, and subscription state badges.*

## Main sections

### Add Platform

Select `Add Platform` to open a marketplace picker that shows `3rd Party Platforms` only.

After you select `Subscribe`, the modal closes and the platform becomes available back on the `3rd Party Platforms` page.

### Platform groups

HQ groups cards under:

- `Delivery Platforms`
- `Integration Platforms`
- `Other`

### Platform cards

Each platform card can show one of these states:

- `Subscribed`: the platform is active for use
- `Unsubscribed`: the platform is still visible but cannot be edited until you subscribe again
- no badge and no fields: the platform has no active shop setup yet

Some cards show editable fields. Some show `No configuration required — this integration is managed by the partner platform.`

The `MeiTuan` card includes its payment, discount, service-charge, webhook, and menu-sync settings. When webhook access is supplied by the partner, also enter `API URL`, `Shop ID`, `Access Token`, `Refresh Token`, and `Token expiry date/time`. Treat both token fields as confidential credentials.

:::note[Screenshot pending]
Needed file: `hq/online-ordering/meituan-webhook-settings.png`
:::

### Save action

Changes on the card do not fully apply until you use the page-level `Save Settings` button in `Shop Settings`.

## Steps

1. Open `Online Ordering` -> `General Settings`.
2. Find the correct `Store Name`.
3. Select the edit action for that store to open `Shop Settings`.
4. Select `3rd Party Platforms`.
5. Select `Add Platform` if the platform is not listed yet.
6. Select `Subscribe` for the platform you need.
7. Expand the platform card if fields are available.
8. Enter the required shop-level values.
9. For `MeiTuan`, enter the partner-provided `API URL`, `Shop ID`, `Access Token`, `Refresh Token`, and `Token expiry date/time` before enabling `Webhook enabled`.
10. Select `Save Settings`.

## What changes after you save

Saving updates the selected store's platform settings.

The subscription itself also affects other HQ areas:

- the platform can appear in `3rd Party Platforms`
- related channels can appear in `Channel Settings`
- unsubscribing the platform later can remove its saved shop-level setup

## How to check your change

1. Reopen the same store and confirm the platform card is still present.
2. Confirm the saved values remain on the card after refresh.
3. Check `Channel Settings` if the platform should unlock a related order channel.
4. Verify the downstream storefront or partner flow if you have a safe test path.

## If something goes wrong

- Confirm the platform was actually subscribed from `Add Platform`.
- Confirm you edited the correct store, not only the correct brand.
- For `MeiTuan`, confirm the API URL, shop ID, tokens, and expiry date/time came from the integration partner. Do not guess or reuse credentials from another store.
- If the card shows `Unsubscribed`, subscribe again before you try to edit it.
- If the card has no fields, do not keep retrying. The integration may be partner-managed.
- If the platform disappeared after unsubscribe, return to `Marketplace` or `Add Platform` and subscribe again before re-entering values.

## When to ask owner/admin

- You do not have the platform credentials or shop identifiers.
- The platform affects live customer orders, delivery dispatch, or settlement.
- You are planning to unsubscribe a platform that might still be in use by active stores.
