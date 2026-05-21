---
sidebar_position: 2
title: Tax & Surcharge
---

:::info[Who this is for]
Admins and finance-aware managers who maintain tax and surcharge rules used by the POS.
:::

## Before you start

- Confirm the correct brand.
- Confirm whether you are creating tax logic, service charge logic, or another surcharge.
- Verify the expected rate and shop rollout before saving.

## Open this page

Open `POS Settings` -> `Tax & Surcharge`.

## What this page controls

This page defines automatic or manual financial additions used on orders.

Use it to manage:

- tax entries
- surcharge entries
- calculation order
- auto-calculate behavior
- per-shop activation

These definitions are created at brand level and then enabled per shop.

![Tax and Surcharge](/img/hq/pos-settings/tax_and_surcharge_page.png)

## Main sections

### Shared fields

| Field | What it controls | When to change it |
| --- | --- | --- |
| `Code` and `Name` | Internal identity and receipt label | When you add or rename a rule |
| `Priority` | Order of calculation | When more than one rule can apply |
| `Fixed Amount` vs percentage | Whether the rule is flat or percentage-based | When the business rule requires one model or the other |
| `Amount` or percentage value | The actual charge value | When the business rate changes |

### Calculation modifiers

- `Auto Calculate`: applies the rule automatically when enabled
- `Open Amount`: prompts the user for a value instead of using one fixed amount

### Shop settings

Use the shop settings area to enable the rule only for the shops that should apply it.

### Restore a recently removed tax or surcharge

Use `Show recently removed` on the relevant list when a tax or surcharge rule was removed by mistake.

- The `Taxation` list and the `Surcharge` list each have their own recently removed toggle.
- The toggle only shows taxations or surcharges removed in the last 24 hours. Records removed longer ago are not included.
- Recently removed rows use a light gray background.
- A recently removed row only shows the restore action. The edit and delete actions are hidden.
- Select the restore icon to make the taxation or surcharge active again.
- HQ blocks the restore if another active taxation or surcharge already has the same `Code` or `Name`.

## Steps

1. Open `POS Settings` -> `Tax & Surcharge`.
2. Create or open the target tax or surcharge rule.
3. Enter the `Code` and `Name`.
4. Set the calculation `Priority`.
5. Choose fixed amount or percentage.
6. Enter the value.
7. Turn `Auto Calculate` or `Open Amount` on only if required.
8. Enable the rule for the target shops.
9. Save the rule.
10. If you removed a tax or surcharge rule by mistake, turn on `Show recently removed` in the relevant list.
11. Find the light gray row and select the restore icon.
12. If HQ blocks the restore, review any active taxation or surcharge with the same `Code` or `Name` before trying again.

## What changes after you save

Saving the rule updates the brand-level definition. The rule only affects the shops where it is enabled.

## How to check your change

1. Reopen the rule and confirm the saved values.
2. Confirm the intended shops are enabled.
3. Verify the result in the target POS calculation flow or receipt output when practical.

## If something goes wrong

- Confirm the issue is not caused by shop enablement.
- Check `Priority` if multiple rules are interacting unexpectedly.
- Review whether the rule should be automatic or manual before changing the rate itself.
- If restore is blocked, check whether another active taxation or surcharge is using the same `Code` or `Name`.

## When to ask owner/admin

- The change affects legal tax handling or customer-facing surcharges.
- You are unsure about calculation order between multiple rules.
- The change affects multiple shops and you cannot verify all of them safely.
