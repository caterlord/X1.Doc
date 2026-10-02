---
sidebar_position: 1
title: X1 MCP Overview
---

# X1 Model Context Protocol (MCP)

:::info[Who this is for]
Owners, back-office admins, setup staff, and managers who want an AI assistant to help with X1 HQ reporting, setup, menu maintenance, online ordering, and store configuration.
:::

## Before you start

- Confirm your X1 account has permission to view or change the target brand and shop.
- Confirm your AI client supports remote MCP servers over HTTPS.
- Use the official X1 MCP server URL: `https://mcp.posx1.ai/mcp`.
- Treat live menu prices, online ordering, device settings, and store settings as high-risk changes.

## What this section is for

The X1 MCP server gives an AI assistant controlled access to X1 HQ tools. It helps the assistant answer questions, inspect setup, prepare changes, show previews, and apply approved changes.

Use it when you want to ask natural-language questions such as:

- "Show yesterday's sales by shop and compare it with last Tuesday."
- "Find items that are missing from online ordering."
- "Increase all hot drink prices by `$1` and show me the before and after table first."
- "Read this uploaded menu file and prepare categories, items, modifiers, and combo rules for review."
- "Check whether this shop is ready for online ordering."

The assistant may read uploaded files, images, PDFs, or spreadsheets in the chat. The MCP server then helps turn the reviewed result into structured X1 HQ changes. The MCP server is not a replacement for manager approval.

## How to use this section

1. Start with [Connect an AI Assistant](./connect-ai-assistant.md) to link your AI client to X1 MCP.
2. Use [What the X1 MCP Can Do](./capabilities.md) to choose the right kind of request.
3. Read [Use MCP Safely](./safe-use.md) before asking the assistant to change live HQ data.
4. Use [Troubleshooting MCP](./troubleshooting.md) if connection, sign-in, permission, preview, or commit steps do not work as expected.

## Common tasks

| Task | What to ask for first | What to approve only after checking |
| :--- | :--- | :--- |
| Review sales | Ask for a brand, shop, and date range summary. | No approval is needed for read-only reports. |
| Import a menu | Ask the assistant to show parsed categories, items, modifiers, and combo rules. | Approve only after the preview matches the source menu and target shop. |
| Change prices | Ask for a before and after table grouped by category. | Approve only after checking every affected item and channel. |
| Fix online ordering visibility | Ask for a readiness check and missing setup list. | Approve only the specific settings or menu changes you understand. |
| Rename a cash drawer | Ask for the current device settings snapshot. | Approve only after confirming the target shop and drawer. |

## What changes after you approve

MCP changes follow the same operational rules as HQ changes:

- Read requests inspect data only.
- Preview requests prepare a proposed change and show the expected result.
- Commit requests apply an approved preview to X1 HQ.
- Some commits may run as background tasks. Ask the assistant to check task status before you assume the change is complete.

After a commit, verify the result in the place that uses the data: HQ, POS, online ordering, reports, or the target shop.

## If something goes wrong

- Stop before approving a write action.
- Ask the assistant to show the selected brand, shop, channel, and affected records.
- Ask for a fresh preview if the source file, item list, or target scope changed.
- Use [Troubleshooting MCP](./troubleshooting.md) for connection and permission checks.

## When to ask owner/admin

- You are not sure which brand, shop, or channel the assistant selected.
- The preview changes live prices, taxes, discounts, online ordering, payment-related setup, or device settings.
- The assistant cannot explain the before and after result in plain language.
- You need access to a brand or shop that is not visible after sign-in.
