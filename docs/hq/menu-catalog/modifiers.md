---
sidebar_position: 4
title: Modifiers
---

:::info[Who this is for]
Admins who define add-on, instruction, or option groups for items.
:::

## Before you start

- Confirm the correct brand.
- Make sure the modifier items already exist in [Menu Items](./menu-items.md) if the group needs item records.
- Decide whether the group is optional, single-choice, or multi-choice.

## Open this page

Open `Menu Management` -> `Modifiers`.

## What this page controls

`Modifiers` manages the groups of selectable options shown when an item needs custom choices or instructions.

Use this page to define:

- modifier group identity
- selection rules
- channel visibility
- linked modifier items and override prices

![Modifier Groups](/img/hq/menu-catalog/modifiers_page.png)

## Main sections

### Modifier group rules

Key fields include:

- `Name` and `Code`
- `Max Selection`
- `Min Selection`
- channel controls

`Min Selection` helps determine whether a group is mandatory. `Max Selection` controls whether the group behaves like single choice or multiple choice.

### Group contents

After the group is created, HQ focuses the new row and expands its detail area. Use `Add Items` to link existing modifier items, or use `Create Item` to create a new modifier item and add it to the group.

### Used by Items

Open `Used by Items` in the expanded group to see every menu item that currently uses the group. The table shows the item code, item name, link type, and enabled status.

Select the relationship action on a row to open `Manage Relationships` for that item. Use this check before removing or changing a group so you do not break a live item flow.

:::note[Screenshot pending]
Needed file: `hq/menu-catalog/modifiers-used-by-items.png`
:::

### Copy a group

Use the row-level copy action when you need a similar modifier setup without rebuilding every option from scratch.

- The row action opens the copy modal for the selected group.
- The source group stays selected for you in the modal.
- There is no separate copy button in the page header.
- Turn on `Beast Mode` when you need to create more than one target group in the same save.
- In `Beast Mode`, you can set `Max Selection`, `Min Selection`, `Display in POS`, and `Display in Online Ordering` for each copied row.
- The copy action also brings over the linked modifier items and shop pricing details.

### Restore a recently removed group

Use `Show recently removed` when a modifier group was removed by mistake.

- The toggle only shows groups removed in the last 24 hours. Groups removed longer ago are not included.
- Recently removed rows use a light gray background.
- A recently removed row only shows the restore action. The edit, copy, and delete actions are hidden.
- Select the restore icon to make the group active again.
- HQ blocks the restore if another active modifier group already has the same name. Rename or remove the active duplicate before you restore.

## Steps

1. Open `Menu Management` -> `Modifiers`.
2. Create a new modifier group or open an existing one.
3. Enter the group `Name` and `Code`.
4. Set `Min Selection` and `Max Selection`.
5. Choose the channels where the group should appear.
6. Save the group.
7. Check that the new group row is selected and expanded.
8. Select `Add Items` to link existing modifier items, or select `Create Item` to create a new modifier item for this group.
9. Set any required override prices.
10. Open `Used by Items` and confirm the expected parent items are listed.
11. Select the relationship action if you need to review or change a parent item's links.
12. Open the row action for the group you want to copy.
13. Review the source group at the top of the copy modal.
14. Turn on `Beast Mode` if you need multiple target rows.
15. Enter the copied group details and shared display settings.
16. Save the copy.
17. If you removed a group by mistake, turn on `Show recently removed`.
18. Find the light gray row and select the restore icon.
19. If HQ says a group with the same name already exists, review the active groups before trying again.

## What changes after you save

These changes affect how items present selectable options or required choices on the POS and, where enabled, in other channels. The row-level copy workflow also creates new groups with the linked modifier items and shop pricing details already copied over.

## How to check your change

1. Reopen the group and confirm the rules and items.
2. Verify the modifier items are attached in the correct order.
3. Open `Used by Items` and confirm every expected parent item is listed.
4. Test the parent item flow where the modifier group should appear.

## If something goes wrong

- Confirm the modifier items exist and are attached to the group.
- Check whether the selection rule is too strict or too loose.
- If the group does not appear, review the parent item attachment and channel settings.
- If restore is blocked, check whether another active modifier group is using the same name.

## When to ask owner/admin

- The modifier logic affects a high-volume live menu and cannot be tested safely.
- You are unsure whether the change belongs in a modifier group or a meal set.
