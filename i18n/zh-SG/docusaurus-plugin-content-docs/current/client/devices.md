---
title: 设备
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[适用对象]
检查打印机与连接设备的收银员和经理。
:::

## 开始前

- 你已经登录
- 设备硬件已开机并连接

## 这个画面的用途

使用 `Devices` 检查连接状态、维护设备设定，并在营运期间发现设备警示。

:::note[范围界线]
`Devices` 只处理硬件与连接设定（打印机、付款设备、输入设备、X1 产品）。
现金控制与日结请使用 `More Tools`。
:::

## 主要页签

- `Printer`
- `Payments`
- `Input Devices`
- `X1 Products`

`Devices` 或某个页签上出现数字标记，表示一台或多台设备需要处理。先打开对应页签并检查设备行上的标记，再返回营运。

## 各页签用途

<Tabs>
  <TabItem value="printer" label="Printer">
用来处理打印机生命周期与队列动作：

`添加打印机`、`信息`、`测试打印`、编辑打印机、`管理打印队列`、删除打印机。编辑打印机包含高级输出设置，例如打印缩放、走纸行数，以及针式打印密度/颜色。`管理打印队列` 会显示 `队列`、`历史` 和 `需要处理`；如果要在重试前检查打印结果，请打开任务的 `打开打印预览`。

由 HQ 管理的打印机会显示 `HQ` 标记。如果打印机已存在于 HQ，但还没有在此 POS 配置，设备行会显示 `尚未配置`；请先编辑该行并填写本机连接资料，再进行测试打印。打印队列有错误任务时，设备行也会显示 `1 error` 或 `3 errors` 等错误数量标记。
  </TabItem>
  <TabItem value="payments" label="Payments">
用来查看与配置付款终端状态：

`Info`、编辑付款设备设定（包含 Linkly EFTPOS 终端配对／设定和 Octopus V3 `设备编号`），以及设备未准备好时的 `需要设置` 标记。
  </TabItem>
  <TabItem value="input" label="Input Devices">
用来处理扫描器／输入设备设定：

`Info`、编辑输入设备设定（例如条码／QR 扫描器的扫描输入来源）、USB/蓝牙扫描器测试栏位、相机备用，以及设备未准备好时的 `需要设置` 标记。
  </TabItem>
  <TabItem value="x1" label="X1 Products">
用来处理面向客户与配对类产品：

`Info`、编辑 X1 产品设定，以及客显主机、取餐屏配对、Express Kiosk 配对流程，和产品需要配置时的 `需要设置` 标记。
  </TabItem>
</Tabs>

## 通用步骤

1. 从左侧菜单点按 `Devices`。
2. 选择你需要的页签。
3. 先检查任何数字标记或设备行标记。
4. 如果需要快速诊断，点按 `Info`。
5. 执行该页签的专属动作（测试打印、编辑、配对或队列处理）。
6. 返回营运前先确认状态。

## 你应该会看到

- 带有状态指示的设备项目
- 打印失败任务、HQ 管理打印机或需要设置设备的标记
- 维护用动作（例如打印测试与信息）

![Devices Printer tab](/img/manual/en/client/cl-01-devices-printer-tab.png)
![Printer Info status dialog](/img/manual/en/client/cl-02-devices-printer-info-status.png)
![Test Print result](/img/manual/en/client/cl-03-devices-test-print-result.png)

:::note[其他页签待补截图]
需要文件：`client/cl-34-devices-payments-tab-list.png`, `client/cl-35-devices-input-devices-tab-list.png`, `client/cl-36-devices-x1-products-tab-list.png`
:::

## 如果出现问题

:::warning[`POS Code is required`]
打开 `Settings` -> `General`，填入 `POS Code`，点按 `Save`，然后再重试。
:::

## 什么时候要找经理／管理员

- 你无法编辑必要的设备设定
- 本地检查后测试仍然反复失败
- 不清楚该怎么配对或配置特定设备

## 相关指南

- [开班](./start-shift)
- [功能：管理打印机](../functions/manage-printers)
- [功能：配置付款设备](../functions/configure-payment-devices)
- [功能：配置输入设备](../functions/configure-input-devices)
- [功能：配置 X1 产品](../functions/configure-x1-products)
