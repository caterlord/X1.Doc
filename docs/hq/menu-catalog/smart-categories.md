---
title: Smart Categories
---

:::info[Who this is for]
Admins who need dynamic or rule-based category groupings for POS or online ordering display.
:::

## Before you start

- Confirm the correct brand.
- Decide whether you are managing POS smart categories, online smart categories, or both.
- Check whether the items you want to group already exist.

## Open this page

Open `Menu Management` -> `Smart Categories`.

## What this page is for

`Smart Categories` lets you create category groupings that are more flexible than the standard menu category tree.

Use this page when you need to:

- create a display-focused category without rebuilding the base category structure
- manage item relationships in a smart category
- manage shop display settings
- manage order-channel settings

![Smart Categories](/img/hq/menu-catalog/smart_categories_page.png)

## Main sections

### Main list

The main list includes fields such as:

- `Category Name`
- `Category Name (Alt)`
- `Display Order`
- `Button Style`
- `Published`
- `Public Display`

Key actions include:

- `Search`
- `Refresh`
- `Show recently removed`
- `Reorder`
- `Copy from Existing`
- `New Smart Category`

The table now also shows the current row count and keeps the main tools grouped above the list, so you can search, refresh, restore, reorder, copy, or create without leaving the page.

### Category editor

When you create or edit a smart category, you can work with fields such as:

- `Category Name`
- `Category Name (Alt)`
- `Parent Category`
- `Display Order`
- `Button Style`
- `Public Display`

If the required `Button Style` does not exist yet, use `Create button style` beside the selector, enter `Style Name`, choose `Color Palette`, check `Preview`, and select `Create Style`.

### Beast Mode

Use `Beast Mode` when you need to create several smart categories with the same shared settings.

When `Beast Mode` is on, enter one row for each smart category. The editor creates all listed rows after you save. Shared settings such as `Parent Category`, `Display Order`, `Button Style`, and `Public Display` apply to every smart category created in that save.

Use normal create mode when each smart category needs different parent, display, or style settings.

### Detail tabs

The page can show tabs for:

- `Items`
- `Shop Display Settings`
- `Order Channels`

Use these tabs to control what the smart category contains and where it appears.

`Published` and `Public Display` are separate checks. `Published` is the category/shop schedule state used for availability. `Public Display` controls whether the category is shown to customers. In `Shop Display Settings`, edit a shop and use the `Publish` switch to update the shop's public state; saving it also keeps the shop enabled for that published setting.

When a category is added to online ordering or a new online shop mapping is created, HQ defaults the new mapping to published/public. Review each shop before saving if the category should not appear at every shop.

### Restore a recently removed smart category

Use `Show recently removed` when a smart category was removed by mistake.

- The toggle only shows smart categories removed in the last 24 hours. Smart categories removed longer ago are not included.
- Recently removed rows use a light gray background.
- A recently removed row only shows the restore action. The edit, copy, and delete actions are hidden.
- Select the restore icon to make the smart category active again.
- HQ blocks the restore if the parent category is not active or another active smart category at the same level already has the same name.

## Steps

1. Open `Menu Management` -> `Smart Categories`.
2. Select `New Smart Category` or open an existing category to edit.
3. Enter `Category Name`.
4. Optionally enter `Category Name (Alt)`.
5. Select `Parent Category` if this category should sit under another category.
6. Set `Display Order`.
7. Select `Button Style` if you want a specific appearance.
8. Review `Published` and turn `Public Display` on or off as needed.
9. Save the category.
10. Open the detail tabs to manage `Items`, `Shop Display Settings`, or `Order Channels`.
11. In `Shop Display Settings`, review each shop's `Published` value and use `Edit` -> `Publish` when the customer-facing state needs to change.
12. If you removed a smart category by mistake, turn on `Show recently removed`.
13. Find the light gray row and select the restore icon.
14. If HQ blocks the restore, review the parent category and any active smart category with the same name before trying again.

## Create several smart categories at once

1. Open `Menu Management` -> `Smart Categories`.
2. Select `New Smart Category`.
3. Turn on `Beast Mode`.
4. Enter one row for each smart category.
5. Complete the shared settings below the row list.
6. Select `Create`.
7. Review the main list and confirm every smart category was created.

## What changes after you save

Saving the category updates the smart category record, but you may still need to review where it appears by shop or channel.

## How to check your change

1. Return to the main list and confirm the category is present.
2. Check the `Display Order` and `Public Display` values.
3. Check `Published` in the list and in each relevant shop's `Shop Display Settings`.
4. Review the relevant detail tab to confirm the expected items, shop settings, or channels are attached.

## If something goes wrong

- Confirm you edited the correct smart category type.
- Check whether the issue is in the category record or in the tab-level settings.
- If the category does not appear, review `Public Display` and the target channel or shop settings.
- If the category is visible in HQ but not online, check both the category `Published` state and the shop-level `Public Display`/`Published` state.
- If restore is blocked, check whether the parent category is still active and whether another active smart category at the same level has the same name.

## When to ask owner/admin

- You are unsure whether the category should be standard or smart.
- The category needs to appear in multiple channels and you cannot verify each one.
- You are changing live navigation for active POS or online ordering users.

:::note[Screenshot pending]
Needed file: `hq/menu-catalog/smart-categories-odo-public-display.png`
:::
