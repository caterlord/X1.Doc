---
sidebar_position: 2
title: 故障排查
---

:::info[如何使用本页]
先使用症状索引，再只打开下方对应的问题卡片。
:::

## 快速症状索引

| 症状 | 首先执行 | 对应章节 |
| --- | --- | --- |
| 无法登录 | 重试 PIN 一次，检查网络 | 登录失败 |
| 打印机/设备未就绪 | 检查状态，执行 `Test Print` | 打印机或设备未就绪 |
| `POS Code is required` | 在 `Settings` 中填写 `POS Code` | 需要 POS Code |
| 付款失败或结果不明确 | 仅在明确失败时重试一次 | 付款无法完成 |
| 无法修改已完成付款 | 检查第三方/付款锁定规则 | 修改付款被阻止 |
| 无法分拆/合并/作废 | 先发送未处理项，清除编辑内容 | 分拆、合并或作废被阻止 |
| 日结无法进行 | 重新检查业务日期和待处理交易 | 日结无法进行 |

## 全局处理规则

:::warning[停止重复重试]
对于付款和财务操作，如果结果不明确，请不要反复重试。只重试一次，然后交由经理/管理员处理。
:::

:::note[交由经理/管理员处理前务必保留证据]
请保留交易号、终端 POS Code、时间戳和屏幕上的原始提示信息。
:::

关于日志处理和保留要求，请参阅 [数据保留与存储](./data-retention-and-storage)。

## 按症状查看问题

<h3 id="login-fails">登录失败</h3>

<details>
  <summary>展开步骤</summary>

1. 仔细重新输入 PIN，然后点击 `SIGN IN`。
2. 确认正在使用正确的员工账号/角色。
3. 确认网络稳定。

出现以下情况时，请交由经理/管理员处理：

1. 两次尝试后仍然登录失败。
2. 订阅或离线提示阻止登录。

</details>

<h3 id="printer-or-device-not-ready">打印机或设备未就绪</h3>

<details>
  <summary>展开步骤</summary>

1. 打开 `Devices` -> `Printer`。
2. 检查状态点并打开 `Info`。
3. 执行 `Test Print`。
4. 检查纸张、盖子和网络。
5. 如果队列卡住，请使用 `Manage Spooler`。
6. 打开打印队列任务详情，检查 `状态`、`尝试次数`、`下次重试` 和 `错误`。
7. 如果任务是 `等待自动重印`，请先让打印机恢复连接并等待重试。如果任务是 `永久错误`，请在打印机就绪后删除失败任务并重新发送打印请求。

出现以下情况时，请交由经理/管理员处理：

1. 测试打印持续失败。
2. 本地检查后打印机仍然离线。
3. 打印队列任务在自动或手动重试后仍回到 `错误`。

</details>

<h3 id="pos-code-required">需要 POS Code</h3>

<details>
  <summary>展开步骤</summary>

1. 打开 `Settings` -> `General`。
2. 填写 `POS Code`。
3. 点击 `Save`。
4. 返回 `Devices` 再次尝试。

![Settings General with POS Code](/img/manual/en/client/cl-05-settings-general-language-poscode.png)

出现以下情况时，请交由经理/管理员处理：

1. 收银员无法编辑设置。
2. POS Code 不明或被拒绝。

</details>

<h3 id="payment-cannot-complete">付款无法完成</h3>

<details>
  <summary>展开步骤</summary>

1. 确认所选付款方式适用于这张订单。
2. 如果折扣规则要求特定方式（例如已连接八达通），请使用该方式。
3. 仅在状态明确失败/取消时重试一次。
4. 如果仍然失败，请按门店政策切换方式。

出现以下情况时，请交由经理/管理员处理：

1. 付款结果不明确（可能重复扣款）。
2. 付款流程似乎卡住。

</details>

<h3 id="modify-payment-is-blocked">修改付款被阻止</h3>

<details>
  <summary>展开步骤</summary>

1. 检查该付款是否已连接第三方。
2. 按门店政策处理更正（通常使用 `Return` 流程）。
3. 在交接前记录交易详情。

出现以下情况时，请交由经理/管理员处理：

1. 财务影响需要批准。
2. 修改和退回路径都被阻止。

</details>

<h3 id="split-merge-or-void-is-blocked">分拆、合并或作废被阻止</h3>

<details>
  <summary>展开步骤</summary>

1. 发送未送出的品项。
2. 清除待处理编辑。
3. 再重试一次该操作。

出现以下情况时，请交由经理/管理员处理：

1. 干净重试后仍被阻止。
2. 该操作需要经理批准。

</details>

<h3 id="day-end-cannot-proceed">日结无法进行</h3>

<details>
  <summary>展开步骤</summary>

1. 重新检查营业日期/时间。
2. 确认没有正在进行或待处理的交易。
3. 使用经理账号重试。
4. 如果看到 `Day-end has already been processed for the selected day`，不要重试同一天。
5. 选择其他日期，或查看该日期已有报表。

出现以下情况时，请交由管理员处理：

1. 营业日期看起来不正确。
2. 日结校验仍被阻止。
3. 成功日结后，所选日期的营业额/报表输出不一致。

</details>

## 回报信息模板

请始终提供：

- 终端 POS Code
- 用户名
- 交易/收据编号（如适用）
- 确切画面/操作
- 错误信息文本
- 时间戳
