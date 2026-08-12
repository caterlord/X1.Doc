---
title: 管理打印机
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[适用对象]
在 `Devices` -> `Printer` 处理打印机设定与维护的经理或授权员工。
:::

## 开始前

- 你已经使用设备设定权限登录
- 目标打印机已开机并连接到同一网络
- `POS Code` 已设定
- 如果打印机是在 HQ 建立的，编辑 POS 连接资料前先确认 HQ 中的打印机名称

## 快速流程

1. 打开 `Devices`。
2. 打开 `Printer` 页签。
3. 先检查设备列上的 `HQ`、`尚未配置` 或错误数量标记。
4. 选择打印机列（或点按 `Add Printer`）。
5. 执行需要的动作（`Info`、`Test Print`、编辑、删除或队列管理）。
6. 在返回营运前先确认状态。

## 任务

<Tabs>
  <TabItem value="add-printer" label="Add Printer">
1. 点按 `Add Printer`。
2. 填入 `Name`、`Printer Type`、`Connection`、`IP Address` 与 `Port`。
3. 点按 `Save`。
4. 点按 `Test Print`。

要确认的是：

- 打印机会出现在列表中
- 状态是连接／就绪
- 会出现测试打印成功讯息
- 如果这是 HQ 管理打印机，保存本机连接资料后，设备列仍会显示 `HQ`

![Add Printer dialog](/img/manual/en/client/miss_3_device_printer_add.png)
![Printer added successfully](/img/manual/en/client/miss_4_device_printer_add_completed.png)
</TabItem>
  <TabItem value="hq-managed" label="HQ 管理打印机">
1. 打开 `Printer` 页签。
2. 找到带有 `HQ` 标记的打印机列。
3. 如果该列同时显示 `尚未配置`，点按编辑。
4. 填写本机连接资料，例如 `Printer Type`、`Connection`、`IP Address` 和 `Port`。
5. 点按 `Save`。
6. 点按 `Test Print`。

要确认的是：

- 打印机列仍显示 `HQ` 标记
- 本机设定保存后，`尚未配置` 标记会消失
- 返回营运前，`Test Print` 成功

</TabItem>
  <TabItem value="info-status" label="Printer Info and Status">
1. 点按目标打印机列上的 `Info`。
2. 检查 `Connection Details` 与 `Status Details`。
3. 点按 `Close`。

要确认的是：

- `Type`、`Address`、`Status` 与 `Last checked` 都正确

![Printer Info status dialog](/img/manual/en/client/cl-02-devices-printer-info-status.png)
  </TabItem>
  <TabItem value="test-print" label="Test Print">
1. 点按目标打印机列上的 `Test Print`。
2. 等待结果讯息。
3. 确认纸本测试单有实际印出。

要确认的是：

- 成功讯息会显示 `Test print sent to '<PrinterName>' successfully`

![Test Print result](/img/manual/en/client/cl-03-devices-test-print-result.png)
  </TabItem>
  <TabItem value="edit-remove" label="Edit or Remove Printer">
1. 点按编辑图示，更新 `名称`、`打印机类型`、`连接`、`IP 地址` 与 `端口`。
2. 需要调整输出效果时，打开 `显示高级设置`。
3. 只有测试输出需要调整时，才设置 `打印缩放 (%)`、`页首额外走纸行数` 或 `页尾额外走纸行数`。
4. 如果 `打印机类型` 是 `针式`，设置 `针式打印密度` 和 `针式打印颜色`。
5. 点按 `保存`。
6. 如果要移除，点按删除图示。
7. 确认移除提示。

要确认的是：

- 更新后的设定会显示在打印机列中
- 对 `针式` 打印机，`高密度` 较清晰但较慢，`普通密度` 打印较快但细节较少
- `彩色（红 / 黑）` 会将红色内容打印到红色色带；`纯黑` 会将所有内容打印为黑色
- 已移除的打印机会从列表中消失

> 待补截图：`functions/fn-printer-remove-confirm-dialog.png`
> 待补截图：`functions/fn-printer-dot-matrix-advanced-settings.png`
  </TabItem>
  <TabItem value="spooler" label="Manage Printer Spooler">
1. 点按目标打印机列上的 `Manage Spooler`。
2. 检查分页：`队列`、`历史`、`需要处理`。
3. 如需检查列印结果，请选择任务缩略图并按 `打开打印预览`。在预览中双指捏合或滚动以缩放，拖动以平移，完成后点按 `关闭`。
4. 如需检查任务，请选择该行的信息按钮。详情可显示 `状态`、`驱动`、`发送状态`、`重试来源`、`尝试次数`、`厂商任务 ID`、`下次重试` 和 `打印机消息`。
5. 视需要使用以下动作：`刷新`、`清除选择`、`删除已选`、`全部删除`。
6. 在 `需要处理` 页签中，适当时使用 `全选`、`重试已选安全任务` 和 `重试全部安全任务`。
7. 单个任务可按状态使用：`立即重试`（确认尚未发送）、`仍然重试`（先查看可能重复警告）、`标记为已打印`（已在其他地方打印）或 `取消`。

要确认的是：

- 重试／移除动作后，队列会减少
- 标记为 `等待自动重印` 的任务，可能会在打印机恢复正常后自行清除
- 标记为 `永久错误` 的任务需要人工检查、删除，或重新发送打印请求
- 标记为 `结果未知` 的任务可能已经打印；重试或标记为已打印前，请逐个检查
- 新的列印工作会正常处理
- 从 `需要处理` 移除任务会取消任务，并将任务保留在 `历史`
- `需要处理` 队列清空后，打印机列上的错误数量标记会消失

> 待补截图：`functions/fn-printer-spooler-manager-dialog.png`
> 待补截图：`functions/fn-printer-spooler-preview-dialog.png`
> 待补截图：`functions/fn-printer-spooler-needs-attention-actions.png`
  </TabItem>
</Tabs>

## 如果出现问题

:::warning[测试打印失败]
先检查 IP／Port、纸张、打印机盖与网络，然后只重试一次。
:::

:::warning[状态一直离线]
先确认打印机电源与网络，再执行 `Test Print`。
:::

:::note[队列重试没有清除错误任务]
请打开打印队列任务详情。如果任务正在等待自动重试，请确认打印机已连接，然后等待下一次重试。如果任务是永久错误，或多次重试仍失败，请删除失败任务、确认连接正常，然后重新发送订单／打印请求。
:::

:::warning[HQ 管理打印机显示 `尚未配置`]
编辑该打印机列，并为这台 POS 保存本机连接资料。HQ 记录表示这台打印机应该存在，但每台终端仍需要可用的本机连接后才能打印。
:::

:::warning[删除打印机失败]
如果移除只成功一半，请刷新打印机列表，并确认 spooler 文件是否还存在。
:::

## 什么时候要找经理／管理员

- 需要 `POS Code`，但你不能编辑设定
- 打印机设定已保存，但设备仍不可用
- 队列错误一直增加，重试／移除也没用
