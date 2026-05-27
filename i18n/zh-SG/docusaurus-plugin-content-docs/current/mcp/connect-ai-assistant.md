---
sidebar_position: 2
title: 连接 AI 助理
---

# 连接 AI 助理

:::info[适合对象]
需要设置 ChatGPT、Cursor、Claude 或其他支持 MCP 的 AI 客户端来使用 X1 HQ 的管理员。
:::

## 开始之前

- 使用支持远程 HTTPS MCP 服务器的 AI 客户端。
- 准备有正确品牌和门店权限的 X1 账号。
- 使用 MCP 服务器地址 `https://mcp.x1.tech/mcp`。
- 不要使用 `https://mcp.x1.tech/mcp/openapi.json`。X1 MCP 是远程 MCP 服务器，不是 Custom GPT Actions OpenAPI 端点。

## 从 ChatGPT 连接

ChatGPT 的标签可能因工作区而不同。部分工作区显示 `Apps & Connectors`，部分显示 `Connectors`。

1. 打开 ChatGPT。
2. 打开 `Settings`。
3. 打开 `Apps & Connectors`。
4. 如有需要，打开 `Advanced settings`，并为工作区启用 developer mode。
5. 选择 `Create`。
6. 输入清楚名称，例如 `X1 HQ Agent`。
7. 输入描述，说明此应用可以协助检查和管理 X1 HQ 数据。
8. 输入 MCP 服务器地址：`https://mcp.x1.tech/mcp`。
9. 选择 `Create`。
10. 完成 X1 登录或授权页面。
11. 确认连接成功后，ChatGPT 显示 X1 工具。

## 在 ChatGPT 试用

1. 打开新对话。
2. 选择消息输入框旁边的 `+` 按钮。
3. 选择 `More`。
4. 选择 `X1 HQ Agent`，或工作区中显示的 X1 app/connector 名称。
5. 先提出只读问题，例如“列出我可以访问的品牌和门店。”
6. 确认助理只返回你预期可见的品牌和门店。

## 从 Cursor、Claude 或其他 MCP 客户端连接

使用该客户端的远程 MCP 服务器设置页面。当客户端要求 MCP endpoint 时，输入：

```text
https://mcp.x1.tech/mcp
```

如果客户端要求 JSON 配置，可先使用以下格式，并按该客户端当前 MCP 文档调整：

```json
{
  "mcpServers": {
    "x1-hq": {
      "url": "https://mcp.x1.tech/mcp"
    }
  }
}
```

部分客户端需要本地 bridge command，而不是直接远程地址。只使用 X1 已批准的 bridge package 或客户端配置。

## 你应该看到什么

连接后，助理应该可以：

- 列出可访问品牌和门店
- 在缺少授权时要求你登录
- 使用工具前显示 X1 tool call
- 在写入动作前要求确认

## 如出现问题

- 确认地址完全是 `https://mcp.x1.tech/mcp`。
- 确认 AI 客户端支持远程 MCP 服务器。
- 如授权失败，请登出后重新登录。
- 尝试更改前，先要求助理列出可访问品牌和门店。
- 如果账号看不到预期品牌或门店，请联系 X1 支持。

## 何时要求店主/管理员协助

- 你的工作区阻止自定义 app、connector 或 MCP 服务器。
- 你不确定该 AI 客户端是否获准处理业务数据。
- 连接请求的访问权限比你的角色应有权限更广。
