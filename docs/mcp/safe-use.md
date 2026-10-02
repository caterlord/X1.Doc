---
sidebar_position: 4
title: Use MCP Safely
---

# Use MCP Safely

:::info[Who this is for]
Anyone using an AI assistant to inspect or change X1 HQ data through MCP.
:::

## Before you start

- Confirm the assistant is connected to the official X1 MCP server: `https://mcp.posx1.ai/mcp`.
- Confirm the selected brand, shop, and channel before requesting changes.
- Use read-only requests first.
- Do not paste passwords, payment credentials, API keys, or private customer information into the chat.

## The safe change model

Use this order for every live change:

1. Ask the assistant to inspect the current setup.
2. Ask for a proposed change.
3. Ask for a preview with before and after values.
4. Check the affected brand, shop, channel, items, and settings.
5. Approve only when the preview is correct.
6. Ask the assistant to confirm task status if the change runs in the background.
7. Verify the result in HQ, POS, online ordering, or reports.

## Tool action levels

| Level | What it does | How to use it |
| :--- | :--- | :--- |
| Read | Looks up data only. | Use for reports, setup checks, and finding records. |
| Preview | Prepares a proposed change. | Use before every live write action. |
| Commit | Applies an approved preview. | Use only after checking the preview and scope. |

## What to check before approval

For menu changes, check:

- item names
- categories
- prices
- modifiers
- combo rules
- availability
- POS menu or online ordering channel

For settings changes, check:

- brand
- shop
- channel
- current value
- proposed value
- expected operational impact

## Good approval prompts

Use prompts that force the assistant to show scope and impact:

- "Show a table of every affected item before I approve."
- "Group the changes by category and channel."
- "Show current value, proposed value, and reason for each change."
- "Do not commit anything until I explicitly approve."
- "After commit, check task status and tell me what to verify in HQ."

## Stop before approval when

- The assistant cannot show the current value.
- The preview contains more items or shops than expected.
- The source menu file is unclear.
- The assistant is guessing a category, modifier, combo rule, or price.
- You are changing live prices during trading hours.
- You do not have authority to approve the change.

## If something goes wrong

- Do not approve a new change to fix the first one until you understand the current state.
- Ask the assistant to read the affected record again.
- Compare the latest value with the preview you approved.
- Check whether the change is still running as a background task.
- Escalate if the change affects sales, reporting, payment, customer ordering, or live service.

## When to ask owner/admin

- A commit changed more records than expected.
- You cannot verify the result.
- The assistant asks for data that should not be shared.
- You need to undo a change that affects live operations.
