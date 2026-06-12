---
sidebar_position: 2
title: 連接 AI 助理
---

# 連接 AI 助理

:::info[適合對象]
需要設定 ChatGPT、Cursor、Claude 或其他支援 MCP 的 AI 工具來使用 X1 HQ 的管理員。
:::

## 開始之前

- 使用支援遠端 HTTPS MCP 伺服器的 AI 工具。
- 準備有正確品牌及店鋪權限的 X1 帳戶。
- 使用 MCP 伺服器網址 `https://mcp.x1.tech/mcp`。
- 不要使用 `https://mcp.x1.tech/mcp/openapi.json`。X1 MCP 是遠端 MCP 伺服器，不是 Custom GPT Actions OpenAPI 端點。

## 從 ChatGPT 連接

ChatGPT 的標籤可能因工作區而不同。部分工作區顯示 `Apps & Connectors`，部分顯示 `Connectors`。

1. 開啟 ChatGPT。
2. 開啟 `Settings`。
3. 開啟 `Apps & Connectors`。
4. 如有需要，開啟 `Advanced settings`，並為工作區啟用 developer mode。
5. 選擇 `Create`。
6. 輸入清楚名稱，例如 `X1 HQ Agent`。
7. 輸入描述，說明此應用可協助檢查及管理 X1 HQ 資料。
8. 輸入 MCP 伺服器網址：`https://mcp.x1.tech/mcp`。
9. 選擇 `Create`。
10. 完成 X1 登入或授權畫面。
11. 確認連接成功後，ChatGPT 顯示 X1 工具。

## 在 ChatGPT 試用

1. 開啟新對話。
2. 選擇訊息輸入框旁的 `+` 按鈕。
3. 選擇 `More`。
4. 選擇 `X1 HQ Agent`，或工作區中顯示的 X1 app/connector 名稱。
5. 先提出只讀問題，例如「列出我可存取的品牌及店鋪。」
6. 確認助理只回傳你預期可見的品牌及店鋪。

## 從 Cursor、Claude 或其他 MCP 工具連接

使用該工具的遠端 MCP 伺服器設定畫面。當工具要求 MCP endpoint 時，輸入：

```text
https://mcp.x1.tech/mcp
```

如果工具要求 JSON 設定，可先使用以下格式，並按該工具目前的 MCP 文件調整：

```json
{
  "mcpServers": {
    "x1-hq": {
      "url": "https://mcp.x1.tech/mcp"
    }
  }
}
```

部分工具需要本機 bridge command，而不是直接遠端網址。只使用 X1 已批准的 bridge package 或客戶端設定。

## 你應該看到什麼

連接後，助理應該可以：

- 列出可存取品牌及店鋪
- 在缺少授權時要求你登入
- 使用工具前顯示 X1 tool call
- 在寫入動作前要求確認

## 如出現問題

- 確認網址完全是 `https://mcp.x1.tech/mcp`。
- 確認 AI 工具支援遠端 MCP 伺服器。
- 如授權失敗，請登出後重新登入。
- 嘗試更改前，先要求助理列出可存取品牌及店鋪。
- 如果帳戶看不到預期品牌或店鋪，請聯絡 X1 支援。

## 何時要求店主/管理員協助

- 你的工作區封鎖自訂 app、connector 或 MCP 伺服器。
- 你不確定該 AI 工具是否獲批准處理業務資料。
- 連接要求的存取權限比你的角色應有權限更廣。
