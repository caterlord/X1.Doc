---
sidebar_position: 5
title: Troubleshooting MCP
---

# Troubleshooting MCP

:::info[Who this is for]
Admins who need to fix MCP connection, sign-in, permission, preview, commit, or verification issues.
:::

## Before you start

- Confirm the AI client is using `https://mcp.posx1.ai/mcp`.
- Confirm you can sign in with the correct X1 account.
- Confirm you know the target brand and shop.
- Avoid approving write actions while troubleshooting.

## The assistant cannot connect

1. Confirm the server URL is exactly `https://mcp.posx1.ai/mcp`.
2. Confirm the client supports remote MCP servers over HTTPS.
3. Reconnect the MCP server in the AI client.
4. Sign in again if the client asks for authorization.
5. Try a read-only prompt: "List the brands and shops I can access."

Opening `https://mcp.posx1.ai/mcp` in a browser may show a method error. That does not by itself mean the server is down, because MCP clients use the endpoint differently from a browser page.

## Sign-in or authorization fails

1. Confirm you are using the correct X1 account.
2. Confirm pop-ups or external sign-in windows are not blocked.
3. Sign out of the AI client and sign in again.
4. Ask an owner/admin to confirm your X1 role has access to the target brand and shop.

## The assistant cannot see the right brand or shop

1. Ask: "List all brands and shops I can access."
2. Confirm whether the missing shop belongs to a different brand or workspace.
3. Ask an owner/admin to check your HQ access.
4. Reconnect MCP after access is changed.

## The assistant suggests the wrong scope

Stop before approval.

Ask the assistant to show:

- selected brand
- selected shop
- selected channel
- affected categories, items, or settings
- reason each record is included

Ask for a new preview after correcting the scope.

## The preview looks wrong

1. Do not approve the commit.
2. Ask the assistant to show the source data it used.
3. Correct the item names, categories, modifiers, prices, or combo rules.
4. Ask for a new preview.
5. Compare the new preview with the source file or current HQ setup.

## A committed change is not visible

1. Ask the assistant to check task status.
2. Refresh the HQ page.
3. Confirm you are viewing the same brand, shop, and channel that was changed.
4. Check the destination that uses the data: POS, online ordering, reports, or the target shop.
5. Ask the assistant to read the affected record again.

## Uploaded menu import is unclear

Ask the assistant to pause and show the parsed data before using MCP.

Check:

- category names
- item names
- price columns
- required modifiers
- optional modifiers
- combo or meal rules
- notes that may not be part of the menu

Only request a preview after the parsed structure is correct.

## When to ask owner/admin

- You cannot sign in or authorize the MCP connection.
- Your account cannot see the expected brand or shop.
- A preview includes unexpected shops, channels, or records.
- A commit has completed but the live result is wrong.
- The issue affects trading, customer ordering, payment, or reporting.
