---
sidebar_position: 1
title: Loyalty
---

:::info[Who this is for]
Owners and HQ admins preparing native, wallet-first loyalty for a brand.
:::

## Before you start

- Confirm you are working in the correct brand.
- Decide which shops should accept the loyalty card at POS.
- Prepare the public program name, public slug, default currency, earning rule, and redemption value.
- Treat this page as preview setup until the POS checkout workflow is enabled for your rollout.

## Open this page

Open `Loyalty` -> `Programs`.

## What this page controls

`Loyalty` controls native X1 loyalty programs for the selected brand.

Use it to:

- create or update a loyalty program
- turn the program on or off
- set `Program name`, `Public slug`, `Currency`, `Default tier`, earning rate, and redemption value
- enable the program for selected shops
- sync the shop POS key so the POS can call X1 Native Loyalty after its next configuration sync
- copy the enrollment endpoint for QR, wallet, or campaign setup

Native loyalty is designed for wallet-first and anonymous cards. A customer does not need to provide a name, email, or phone number to receive a card. Optional contact data should be collected only when the merchant has a clear reason and consent.

## Steps

1. Open `Loyalty` -> `Programs`.
2. Select `New program`.
3. Enter `Program name`.
4. Enter a lowercase `Public slug`.
5. Set `Currency`.
6. Set `Points per currency unit`.
7. Set `Redemption value per point`.
8. Turn on `Program enabled` when the program is ready.
9. Select `Save`.
10. In `Shop rollout`, turn on the shops that should accept this program.
11. Select `Sync POS key` for each enabled shop.
12. Copy the `Enrollment endpoint` for wallet-card setup or campaign QR generation.

## What changes after you save

- Program settings are saved in the native loyalty database.
- Shop rollout controls which shops can accept a scanned loyalty card.
- `Sync POS key` writes the loyalty gate, API URL, and POS key to shop configuration so terminals can receive them through the existing POS configuration sync.
- Card issuance and earn/redeem events are written as ledger and outbox events for future BI export.

## How to check your change

1. Reopen `Loyalty` -> `Programs`.
2. Confirm the saved program appears in the program list.
3. Confirm the correct shops are enabled in `Shop rollout`.
4. Confirm the POS has completed configuration sync before testing scan or checkout flows.

## If something goes wrong

- If the program will not save, check that `Program name` and `Public slug` are filled in.
- If the slug is rejected, choose a different lowercase slug using letters, numbers, and hyphens.
- If a shop cannot accept loyalty after rollout, select `Sync POS key` again and let the POS complete configuration sync.
- If wallet pass download is not available, ask the rollout owner to confirm Apple Wallet and Google Wallet issuer keys for the environment.

## When to ask owner/admin

- You are not sure which shops should accept the program.
- You are changing earning or redemption value for a live program.
- You need to collect customer contact details.
- You need Apple Wallet pass signing, Google Wallet issuer setup, or BI export configuration.
