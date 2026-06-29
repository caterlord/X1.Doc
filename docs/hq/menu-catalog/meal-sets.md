---
sidebar_position: 7
title: Meal Set
---

:::info[Who this is for]
Admins who build combo or set-meal selection flows.
:::

## Before you start

- Confirm the correct brand.
- Make sure the component items already exist in [Menu Items](./menu-items.md).
- Decide how many selection groups the combo needs before you start.
- Confirm each component item is allowed for meal-set use in [Menu Items](./menu-items.md).

## Open this page

Open `Menu Management` -> `Meal Set`.

## What this page controls

`Meal Set` creates grouped item choices for combo-style selling flows.

Use it when one parent item should force or allow the customer to choose from item groups such as:

- one main
- one side
- one drink

![Meal Sets](/img/hq/menu-catalog/meal_sets_page.png)

## Main sections

### Meal set groups

Create one group for each required choice in the combo.

Typical settings include:

- group name
- minimum selection
- maximum selection
- whether the group is mandatory
- whether the group appears in POS and online ordering channels

### Group contents

After the group is created, HQ focuses the new row and expands its detail area. Use `Add Items` to link existing menu items, or use `Create Item` to create a new item and add it to the group.

HQ prevents circular meal-set relationships. If a candidate item shows `Loop`, that item already connects back to this group through another set-meal path. Leave it unselected and review the parent item links before changing the structure.

### Parent item linkage

The meal set groups do not work by themselves. They must be linked back to a parent set item in [Menu Items](./menu-items.md).

### Copy a group

Use the row-level copy action when you need a similar meal set without rebuilding every choice group from scratch.

- The row action opens the copy modal for the selected group.
- The source group stays selected for you in the modal.
- There is no separate copy button in the page header.
- Turn on `Beast Mode` when you need to create more than one target group in the same save.
- In `Beast Mode`, you can set `Max Selection`, `Min Selection`, `Display in POS`, and `Display in Online Ordering` for each copied row.
- The copy action also brings over the linked set items and shop pricing details.

### Restore a recently removed group

Use `Show recently removed` when a meal set group was removed by mistake.

- The toggle only shows groups removed in the last 24 hours. Groups removed longer ago are not included.
- Recently removed rows use a light gray background.
- A recently removed row only shows the restore action. The edit, copy, and delete actions are hidden.
- Select the restore icon to make the group active again.
- HQ blocks the restore if another active meal set group already has the same name. Rename or remove the active duplicate before you restore.

If you remove an active group that is already linked to items, HQ warns that those meal-set links will also be removed. Continue only when the affected combo items should stop using that group.

## Steps

1. Open `Menu Management` -> `Meal Set`.
2. Create the required choice groups.
3. Set the minimum and maximum selection rules for each group.
4. Save the groups.
5. Check that the new group row is selected and expanded.
6. Select `Add Items` to link existing menu items, or select `Create Item` to create a new item for this group.
7. If a candidate item shows `Loop`, do not select it. Review the existing meal-set structure first.
8. Set override prices where an item should add an upcharge.
9. Open the row action for the group you want to copy.
10. Review the source group at the top of the copy modal.
11. Turn on `Beast Mode` if you need multiple target rows.
12. Enter the copied group details and shared display settings.
13. Save the copy.
14. Open the parent set item in [Menu Items](./menu-items.md).
15. Attach the meal set groups to the parent item.
16. Save the parent item.
17. If you removed a group by mistake, turn on `Show recently removed`.
18. Find the light gray row and select the restore icon.
19. If HQ says a group with the same name already exists, review the active groups before trying again.

## What changes after you save

These changes affect how the combo item prompts for choices during ordering. The row-level copy workflow also creates new groups with the linked set items and shop pricing details already copied over.

Removing a group that is linked to items also removes those meal-set links from the affected items. Loop blocking protects POS and online ordering from circular combo prompts.

## How to check your change

1. Reopen the meal set groups and confirm the correct items are attached.
2. Reopen the parent set item and confirm the meal set groups are linked.
3. Test the combo ordering flow to confirm the expected selection wizard appears.

## If something goes wrong

- Confirm the component items were added to the correct groups.
- Check whether the parent set item was linked to the groups.
- Review selection limits if the flow is too strict or too open.
- If an item is marked `Loop`, trace which parent item or group already links back to it before changing the combo.
- If removing a group warns about linked items, check the affected parent items before continuing.
- If restore is blocked, check whether another active meal set group is using the same name.

## When to ask owner/admin

- The combo affects live pricing or high-volume selling flows.
- You are unsure whether the structure should use meal sets, modifiers, or both.
