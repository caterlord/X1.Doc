---
sidebar_position: 2
title: Connect an AI Assistant
---

# Connect an AI Assistant

:::info[Who this is for]
Admins who are setting up ChatGPT, Cursor, Claude, or another MCP-capable AI client to work with X1 HQ.
:::

## Before you start

- Use an AI client that supports remote MCP servers over HTTPS.
- Have an X1 account with the correct brand and shop permissions.
- Use the MCP server URL `https://mcp.x1.tech/mcp`.
- Do not use `https://mcp.x1.tech/mcp/openapi.json`. X1 MCP is a remote MCP server, not a Custom GPT Actions OpenAPI endpoint.

## Connect from ChatGPT

ChatGPT labels may vary by workspace. Some workspaces show `Apps & Connectors`; others show `Connectors`.

1. Open ChatGPT.
2. Open `Settings`.
3. Open `Apps & Connectors`.
4. If needed, open `Advanced settings` and turn on developer mode for your workspace.
5. Select `Create`.
6. Enter a clear name such as `X1 HQ Agent`.
7. Enter a description that explains the app can help inspect and manage X1 HQ data.
8. Enter the MCP server URL: `https://mcp.x1.tech/mcp`.
9. Select `Create`.
10. Complete the X1 sign-in or authorization screen.
11. Confirm ChatGPT shows the X1 tools after the connection succeeds.

## Try it in ChatGPT

1. Open a new chat.
2. Select the `+` button near the message box.
3. Select `More`.
4. Choose `X1 HQ Agent` or the X1 app/connector name shown in your workspace.
5. Ask a read-only question first, such as "List the brands and shops I can access."
6. Confirm the assistant returns only brands and shops you expect to see.

## Connect from Cursor, Claude, or another MCP client

Use the client's remote MCP server setup screen. Enter this server URL when the client asks for an MCP endpoint:

```text
https://mcp.x1.tech/mcp
```

If your client asks for a JSON configuration, start with this shape and adjust it to the client's current MCP documentation:

```json
{
  "mcpServers": {
    "x1-hq": {
      "url": "https://mcp.x1.tech/mcp"
    }
  }
}
```

Some clients require a local bridge command instead of a direct remote URL. Use only an X1-approved bridge package or client configuration.

## What you should see

After connection, the assistant should be able to:

- list accessible brands and shops
- ask you to sign in if authorization is missing
- show X1 tool calls before using them
- require confirmation before write actions

## If something goes wrong

- Confirm the URL is exactly `https://mcp.x1.tech/mcp`.
- Confirm your AI client supports remote MCP servers.
- Sign out and sign in again if authorization fails.
- Ask the assistant to list accessible brands and shops before attempting changes.
- Contact X1 support if your account cannot see the expected brand or shop.

## When to ask owner/admin

- Your workspace blocks custom apps, connectors, or MCP servers.
- You do not know whether the AI client is approved for business data.
- The connection requests broader access than your role should have.
