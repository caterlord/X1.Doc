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

### Copy a group

Use the row-level copy action when you need a similar modifier setup without rebuilding every option from scratch.

- The row action opens the copy modal for the selected group.
- The source group stays selected for you in the modal.
- There is no separate copy button in the page header.
- Turn on `Beast Mode` when you need to create more than one target group in the same save.
- In `Beast Mode`, you can set `Max Selection`, `Min Selection`, `Display in POS`, and `Display in Online Ordering` for each copied row.
- The copy action also brings over the linked modifier items and shop pricing details.

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
10. Open the row action for the group you want to copy.
11. Review the source group at the top of the copy modal.
12. Turn on `Beast Mode` if you need multiple target rows.
13. Enter the copied group details and shared display settings.
14. Save the copy.

## What changes after you save

These changes affect how items present selectable options or required choices on the POS and, where enabled, in other channels. The row-level copy workflow also creates new groups with the linked modifier items and shop pricing details already copied over.

## How to check your change

1. Reopen the group and confirm the rules and items.
2. Verify the modifier items are attached in the correct order.
3. Test the parent item flow where the modifier group should appear.

## If something goes wrong

- Confirm the modifier items exist and are attached to the group.
- Check whether the selection rule is too strict or too loose.
- If the group does not appear, review the parent item attachment and channel settings.

## When to ask owner/admin

- The modifier logic affects a high-volume live menu and cannot be tested safely.
- You are unsure whether the change belongs in a modifier group or a meal set.
