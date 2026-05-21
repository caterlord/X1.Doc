---
sidebar_position: 1
title: Info Settings
---

:::info[Who this is for]
Admins and managers who maintain the identity, address, contact details, and timezone of a specific shop.
:::

## Before you start

- Confirm the correct brand and shop.
- Gather the official shop name, receipt address text, contact details, and timezone before you start.
- If receipts are already in live use, record the current address and business details before editing them.

## Open this page

Open `Store Settings` -> `Info Settings`.

## What this page controls

`Info Settings` manages the main identity of a shop.

Use this page to maintain:

- shop name and alternate name
- internal shop code and descriptions
- address and alternate address details
- contact details
- currency and delivery notes
- timezone
- overall shop enabled status

This page is shop-level. Changes here should be verified in the selected shop.

![General Info List](/img/hq/store-settings/store_info_list.png)

## Main sections

### Basic information

This area defines how the shop is identified in HQ and in related store-facing workflows.

| Field | What it controls | When to change it |
| --- | --- | --- |
| `Shop Name` | Main display name of the branch | When the official operating name changes |
| `Alt Name` | Alternate display name, often for another language | When the shop needs a localized name |
| `Shop Code` | Internal code used for filtering or integration mapping | When finance or integrations require a stable branch code |
| `Description` and `Alt Description` | Internal descriptive notes | When you need extra branch context in HQ |

### Address

Use the standard address fields for business and operational information. Use the alternate address fields when receipt output needs different text.

### Receipt logos

Use `Receipt Logos` when printed output needs a brand or shop logo.

For each logo setting:

- Upload a high-contrast JPG image.
- Choose `Header` or `Footer`.
- Choose the shops that should use the logo, or select all shops.
- Choose the printout types that should show the logo, such as `Invoice / Receipt`, `Takeaway Receipt`, `Kitchen Item Checklist`, or `ODO Slip`.

`ODO Slip` controls the logo on ODO ticket slips printed by POS.

### Alt address

The alternate address fields can affect printed receipt content. Use them carefully.

:::warning[Receipt impact]
If you change alternate address lines, check a real receipt or receipt preview after saving so legal or customer-facing text is still correct.
:::

### Contact information

Use this area for branch phone, fax, and primary contact details.

### Currency and delivery

Use the currency fields only when the selected shop should trade in that currency. Keep the symbol and code aligned.

### Timezone and status

Timezone controls how the shop aligns with date-based operations and reporting.

:::warning[Reporting risk]
If the timezone is wrong, sales and end-of-day reporting can fall into the wrong dates or cutoffs.
:::

## Steps

1. Open `Store Settings` -> `Info Settings`.
2. Confirm the selected shop at the top of the page.
3. Update the shop identity fields you need to change.
4. Update address and alternate address details if required.
5. Update contact and currency details if required.
6. Update `Receipt Logos` if receipt or ODO slip branding needs to change.
7. Confirm the timezone matches the physical shop location.
8. Review the `Shop Enabled` state before saving.
9. Save the change.

## What changes after you save

These changes apply to the selected shop. Depending on the field, they can affect:

- HQ shop details
- POS shop selection and display
- printed receipt information
- ODO slip logo output when `ODO Slip` is selected in receipt logo printout types
- time-based reporting behavior

## How to check your change

1. Reopen the page and confirm the updated values were saved.
2. If you changed receipt-related text, print or preview a receipt from the target shop.
3. If you changed receipt logo settings, print or preview each selected printout type, including `ODO Slip` if selected.
4. If you changed timezone, verify the shop's operational date and reports behave as expected.

## If something goes wrong

- Confirm you edited the correct shop.
- Compare the saved values against the previous record or screenshot.
- If a logo does not print on an ODO ticket slip, confirm the logo setting includes `ODO Slip` and the target shop.
- If receipts or reports look wrong, revert only the affected field first instead of changing multiple fields again.

## When to ask owner/admin

- The change affects legal business details.
- You are unsure which address lines appear on receipts.
- You are changing timezone for a live shop and cannot test the reporting impact safely.
