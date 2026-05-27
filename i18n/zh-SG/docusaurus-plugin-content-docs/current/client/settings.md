---
title: 设置
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[适用对象]
维护终端配置的经理／管理员级使用者。
:::

## 开始前

- 你已经使用设定权限登录
- 你了解门市对配置变更的政策

## 这个画面的用途

使用 `Settings` 维护终端行为、服务模式、语言／POS Code、打印、整合与营运规则。

## 语言配置

在 `General` 的语言区块里，可以管理：

- 这台终端的默认 UI 语言
- 各语言的品项名称显示来源（`Main` 或 `Alt`）
- 登录画面的快速切换语言功能

:::tip[如何理解 `Main` / `Alt`]
`Main` 与 `Alt` 是菜单设定里的两组品项名称来源。  
如果某个品项其中一个来源为空，POS 会改用另一个可用名称。
:::

## 主要区块

<Tabs>
  <TabItem value="general" label="General">
包含语言配置（`Item Mapping`、`Login Quick Switch`）与必要代码（`POS Code`、`Cash Register Code`）。
  </TabItem>
  <TabItem value="operation" label="Operation">
包含 `Terminal` 模式，以及订单／付款行为开关与服务流程控制。
  </TabItem>
  <TabItem value="system" label="System">
包含 `Number` 控制，例如 `Rounding Method`、`Decimal Places` 与 `Round For Cash Only`。
  </TabItem>
  <TabItem value="printing" label="Printing">
包含 `Mapping`、`Setting` 与 `Template` 页签，用来处理打印路线与输出行为。
  </TabItem>
  <TabItem value="platforms" label="Third Party Platform + ODO">
包含已启用的第三方整合与 ODO 控制，例如 `Channel Mapping`。
  </TabItem>
  <TabItem value="report" label="Report">
包含报表输出设定，例如 `Print Qty` 与 `Daily Report Sections`。
  </TabItem>
</Tabs>

## 常见语言任务

<Tabs>
  <TabItem value="set-ui-language" label="设定默认 UI 语言">
1. 点按 `Settings` -> `General`。
2. 在语言配置中，选择你要设成默认的语言列。
3. 确认 UI 文字已切换到该语言。
4. 点按 `Save`。
  </TabItem>
  <TabItem value="item-mapping" label="设定品项名称映射">
1. 点按 `Settings` -> `General`。
2. 在目标语言列，把 `Item Mapping` 设成 `Main` 或 `Alt`。
3. 点按 `Save`。
4. 打开 `Ordering`，确认品项名称显示正确。
  </TabItem>
  <TabItem value="quick-switch" label="配置登录快速切换">
1. 点按 `Settings` -> `General`。
2. 把员工可在登录画面切换的语言打开 `Login Quick Switch`。
3. 点按 `Save`。
4. 回到登录画面，确认语言快速切换按钮有出现。
  </TabItem>
</Tabs>

## 切换终端模式

<Tabs>
  <TabItem value="restaurant" label="Restaurant">
1. 点按 `Settings` -> `Operation`。
2. 在 `Terminal` 把 `Mode` 设成 `Restaurant`。
3. 点按 `Settings` -> `General`。
4. 关闭 `Enable Dine In Auto Open Order`。
5. 关闭 `Enable Takeaway Auto Open Order`。
6. 如果门市使用楼面图，请打开 `Enable Floor Plan Mode`。
7. 点按 `Save`。
8. 返回 `Ordering`，确认员工必须先选桌台或外带订单，才能加品项。
  </TabItem>
  <TabItem value="quick-order" label="Quick Order">
1. 点按 `Settings` -> `Operation`。
2. 在 `Terminal` 把 `Mode` 设成 `Quick Order`。
3. 点按 `Settings` -> `General`。
4. 打开 `Enable Dine In Auto Open Order`。
5. 打开 `Enable Takeaway Auto Open Order`。
6. 如果外带应该先开单，就打开 `Enable Default Takeaway Mode`；如果堂食应该先开单，就保持关闭。
7. 如果你想让 POS 自动轮换新快速订单的柜台编号，就打开 `Enable Dine In Auto Assign Table Code` 与 `Enable Takeaway Auto Assign Table Code`。
8. 点按 `Save`。
9. 返回 `Ordering`，确认 POS 会直接开新订单，而不是先要求员工选桌台。
  </TabItem>
</Tabs>

:::note[相关设定]
`Enable Dine In Auto Assign Table Code` 与 `Enable Takeaway Auto Assign Table Code` 只有在对应的自动开单设定打开后才会出现。
:::

:::tip[快速订单工具]
`More Tools` 里的 `Reset Table Counters` 会配合 Quick Order 模式一起使用，适用于门市有轮换快速订单柜台的情况。
:::

## 常见四舍五入任务

1. 点按 `Settings` -> `System`。
2. 在 `Number` 选择 `Rounding Method`（`None`、`Round Up`、`Round Down` 或 `Round to Nearest 5 cents`）。
3. 在显示该栏位时设定 `Decimal Places`。
4. 当四舍五入只应套用在现金付款时，打开 `Round For Cash Only`。
5. 点按 `Save`。
6. 打开 `Checkout`，确认现金与非现金方式的总额行为正确。

如果 `Rounding Method` 是 `Round to Nearest 5 cents`，`Decimal Places` 会隐藏。

## 从备份还原设定

1. 点按 `Settings`。
2. 点按底部动作列的 `Restore`。
3. 选择你要套用的备份项目。
4. 确认还原完成。
5. 检查关键设定并点按 `Save`。

目前版本的还原会涵盖更多配置区块，所以还原后要重新检查关键项目：

- 打印机路线与打印设定
- 客显与终端行为设定
- 整合相关设定

## 常见列印语言覆盖任务

1. 点按 `Settings` -> `Printing`。
2. 打开 `Template`。
3. 选择目标列印模板。
4. 把 `Language` 设成需要的列印语言，或保持 `Follow System`。
5. 点按 `Save`。
6. 列印测试收据／单据，并确认输出语言。

## 常见打印模板字体设置任务

1. 点按 `设置` -> `打印`。
2. 打开 `模板`。
3. 选择目标打印模板。
4. 调整该模板的字体大小列。
5. 使用 `即时预览` 确认输出容易阅读。
6. 点按 `Save`。
7. 列印测试收据／单据，并确认打印结果按已保存的字体设定输出。

当前模板字体设定包含 `收据 / 清单 / 发票`、`厨房单`、`标签`、`取餐单`、`部门单`、`点单号单`、`ODO 二维码单据`、`八达通增值单` 和 `入账 / 出账单`。

## 常见标签文字适配任务

1. 点按 `设置` -> `打印`。
2. 打开 `模板`。
3. 将 `模板` 设为 `标签`。
4. 如果较长的品项或配料名称需要缩小以适应标签宽度，请打开 `启用自适应文字大小`。
5. 如果门市希望标签文字保持已设定的正文字号，请关闭 `启用自适应文字大小`。
6. 点按 `Save`。
7. 列印一个包含长品项名称的标签，并确认文字仍然清晰可读。

## 常见自动重印标签设置任务

1. 点按 `设置` -> `打印`。
2. 打开 `模板`。
3. 选择需要恢复标签的打印模板，例如 `厨房单`、`部门单` 或 `点单号单`。
4. 如果厨房或取餐柜台员工需要识别由打印队列自动重试打印的输出，请打开 `自动重印时显示「自动重印」标签`。
5. 如果是顾客可见输出，而门市不希望打印恢复标签，请保持关闭。
6. 点按 `Save`。
7. 如正在测试打印机恢复情况，请确认自动重试输出显示预期的 `自动重印` 标签。

## 常见收据自动列印任务

1. 点按 `设置` -> `打印`。
2. 打开 `设置`。
3. 在 `收据` 中，如果收据应在成功结账后自动列印，就打开 `自动打印收据`；如果要由员工手动决定，就关闭。
4. 点按 `保存`。
5. 完成一次正常结账，确认收据列印符合门市政策。

`自动打印收据` 只控制收据是否自动列印。如果付款方式已设置为开钱箱，即使 `自动打印收据` 关闭，结账后钱箱仍会打开。

## 常见外带联络资料列印任务

1. 点按 `Settings` -> `Printing`。
2. 打开 `Setting`。
3. 在 `Receipt` 中，打开或关闭 `Show Order Contact On Receipt`。
4. 在 `Kitchen Slip` 中，打开或关闭 `Show Order Contact On Kitchen Output`。
5. 点按 `Save`。
6. 列印外带收据或厨房单，确认联络资料只会出现在门市需要的位置。

:::note
如果你需要调整这个区块的收据字体大小，请打开 `Template`，并检查收据字体设定里的 `Customer Contact` 那一列。
:::

## 常见日结报表区块任务

1. 点按 `Settings` -> `Report`。
2. 如果门市需要多份纸本，先设定 `Print Qty`。
3. 在 `Daily Report Sections` 里，依经理收班要列印的内容，打开或关闭 `Summary`、`Cash Movement`、`Sales Breakdown` 与 `Payment Breakdown`。
4. 如果你要控制各区块内的细项，请打开 `Show advanced sections`。
5. 在 `Advanced Sections` 里，打开或关闭 `Open Amount`、`Pay In`、`Pay Out`、`Cash Difference`、`Close Amount`、`Audit`、`Cashier Summary`、`Department Sales` 或 `Payment Tips` 等细项。
6. 点按 `Save`。
7. 执行一次日结报表，确认只列印需要的区块。

:::note
进阶区块开关只有在对应的主区块保持开启时才会生效。
:::

## 整合与渠道可见性行为

- 在 `Third Party Platform` 里，只会显示已启用的整合。
- 在 `ODO` -> `Channel Mapping` 里，只会显示已映射的渠道。
- 如果终端离线，渠道映射会显示仅限线上可用的提示，而且映射列会无法操作。

## 步骤

1. 点按 `Settings`。
2. 在左侧面板选择需要的区块。
3. 修改需要的栏位／开关。
4. 点按 `Save`。
5. 确认更改已套用。

## 你应该会看到

![Settings General with Language and POS Code](/img/manual/en/client/cl-05-settings-general-language-poscode.png)

- `Language Configuration` 网格，包含 `Item Mapping` 与 `Login Quick Switch`
- `Operation` -> `Terminal` 里有 `Mode`，可选 `Restaurant` 与 `Quick Order`
- `General` 里有控制桌台优先／直接开单流程的自动开单与自动分配设定
- `System` -> `Number` 有 `Rounding Method`、`Decimal Places`（视情况显示）与 `Round For Cash Only`
- `Printing` 有 `Mapping`、`Setting` 与 `Template` 页签
- `Printing` -> `Setting` 包含 `Auto Print Receipt`
- `Printing` -> `Setting` 包含 `Show Order Contact On Receipt` 与 `Show Order Contact On Kitchen Output`
- `Printing` -> `Template` 的收据字体设定包含 `Customer Contact`
- `Printing` -> `Template` 包含 `八达通增值单` 和 `入账 / 出账单` 的字体设定
- `打印` -> `模板` 的标签设定包含 `启用自适应文字大小`
- `打印` -> `模板` 包含 `自动重印时显示「自动重印」标签`
- `Report` 包含 `Print Qty`、`Daily Report Sections` 与 `Show advanced sections`
- 设定页面底部有 `Restore` 动作

:::note[待补截图]
需要文件：`client/cl-40-settings-language-configuration-grid.png`
:::

:::note[待补截图]
需要文件：`client/cl-45-settings-print-order-contact-toggles.png`
:::

:::note[待补截图]
需要文件：`client/cl-46-settings-operation-terminal-mode.png`, `client/cl-47-settings-general-order-mode-toggles.png`
:::

:::note[待补截图]
需要文件：`client/cl-48-settings-print-auto-print-receipt.png`, `client/cl-49-settings-report-day-end-sections.png`
:::

:::note[待补截图]
需要文件：`client/cl-51-settings-template-label-adaptive-text-size.png`
:::

:::note[待补截图]
需要文件：`client/cl-53-settings-template-font-profiles.png`
:::

## 如果出现问题

:::warning[无法保存设定]
检查必填栏位（`POS Code` 与必要代码）后再重试。
:::

## 什么时候要找经理／管理员

- 你没有权限更改设定
- 这次变更可能影响所有终端或门市行为
