---
sidebar_position: 5
title: Promotions
---

:::info[Who this is for]
Admins who create automatic pricing logic that applies when cart conditions are met.
:::

## Before you start

- Confirm the correct brand.
- Decide whether the pricing behavior should be automatic. If not, you may need [Discounts](./discounts.md) instead.
- Confirm the qualifying items or categories before you build the rule.

## Open this page

Open `POS Settings` -> `Promotions`.

## What this page controls

`Promotions` handles conditional discount logic that can apply automatically when the order meets the configured rules.

Use this page when you need offers such as:

- buy-one-get-one logic
- buy-X-get-Y logic
- combo discount logic

![Promotions List](/img/hq/menu-catalog/promotions_list.png)

## Main sections

### Promotion type

Choose the type that matches the intended offer:

- buy one get one free
- buy multi get one free
- buy multi get multi
- combo deal fixed discount
- combo deal percentage discount

### Basic promotion fields

Common fields include:

- save amount
- priority
- published state

### Rules engine

The main record defines the promotion shell. The actual trigger and reward logic is configured in the rule editor.

Use the rule editor to define:

- condition items or categories
- action items or categories

Use the save menu at the bottom of the rule editor to choose:

- `Save and continue`: save the rule and keep the editor open
- `Save and close`: save the rule and return to the promotion list

HQ remembers the last save action you chose on this device and uses it for the main save button the next time you open the rule editor.

:::note[Screenshot pending]
Needed file: `hq/menu-catalog/promotions-rule-editor-save-actions.png`
:::

## Steps

1. Open `POS Settings` -> `Promotions`.
2. Create a new promotion or open an existing one.
3. Select the correct promotion type.
4. Enter the basic values such as amount and priority.
5. Set `Published` only when the promotion is ready.
6. Open the rules editor.
7. Configure the condition items or categories.
8. Configure the action items or categories.
9. Open `Choose save action` beside the main save button.
10. Select `Save and continue` if you have more rules to review, or select `Save and close` when you are finished.

## What changes after you save

These changes affect automatic discount logic in the selling flow where the promotion is active.

## How to check your change

1. Reopen the promotion and confirm the type and amount.
2. Review the condition and action rules.
3. Test a matching cart scenario to confirm the promotion behaves as expected.

## If something goes wrong

- Confirm the rule editor was configured, not just the shell record.
- If the editor closes when you expected to continue, open `Choose save action` and select `Save and continue` for the next save.
- Check whether the condition items are too broad or too narrow.
- Review promotion priority if more than one promotion can apply.

## When to ask owner/admin

- The promotion affects live pricing in active shops.
- You are unsure whether the offer should be a promotion or a manual discount.
