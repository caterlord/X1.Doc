---
sidebar_position: 5
title: 通用设置
---

:::info[适用对象]
在品牌与菜单结构已经就绪后，需要管理门店级线上点餐设置的管理员。
:::

## 开始前

- 确认已选择正确的品牌。
- 确认您知道要编辑哪一家门店。
- 先判断您要调整的是基础门店行为、支付、渠道、通知，还是 [3rd Party Platforms](./third-party-platforms.md)。

## 打开此页面

打开 `Online Ordering` -> `General Settings`。

## 本页用途

`General Settings` 是门店级线上点餐设置的入口页。

您可以在这里：

- 查看当前品牌下所有可用门店
- 确认每家门店是否标记为 `In use`
- 打开指定门店的 `Shop Settings`

进入某家门店后，`Shop Settings` 会提供 `Basic Setup`、`Ordering Channels`、`Payments`、`3rd Party Platforms`、`Webhooks` 等分区。

![通用设置](/img/hq/online-ordering/oo_general_settings_page.png)

## 主要区域

### 门店列表

`General Settings` 主页面会按每家门店一行显示。

主要列包括：

- `Store Name`
- `In use`
- `Actions`

请在正确行使用编辑操作，打开该门店的 `Shop Settings`。

### Shop Settings

进入某家门店后，左侧导航可能包含：

- `Basic Setup`
- `Category Display`
- `UI & Appearance`
- `Ordering Channels`
- `Payments`
- `Members`
- `Notifications`
- `3rd Party Platforms`
- `Webhooks`

请只进入与本次变更相关的分区，不要在同一次操作中顺手修改无关设置。

### 地区网上付款

在店铺的付款分区，选择 `新增付款方式`，加入 `Alipay CN`、`HSBC PayMe`、`UnionPay` `Octopus` 或 `FPS`。`Octopus` 使用 QFPay。在 `Octopus App`，使用原有服务时选择 `八达通`，使用 KPay 时选择 `KPay`。

| 付款方式 | 供应商选项 |
|---|---|
| Alipay CN | KPay、QFPay、Global Payments EFT Pay、Aigens |
| HSBC PayMe / UnionPay | KPay、QFPay、OssPay |
| Octopus | QFPay |
| FPS | KPay |
| Alipay HK / WeChat Pay | KPay、QFPay、Global Payments EFT Pay、Aigens、OssPay |

1. 在 `供应商` 选择付款合作伙伴指定的选项。
2. 选择链接至 ODO Online Pay 的 `付款方式 ID`。如未有此选项，先在[付款方式](../pos-settings/payment-methods.md)创建或检查。
3. 输入该付款方式的凭证。Global Payments EFT Pay 使用用户确认密钥及秘密密钥。Aigens 使用 API URL、店铺 ID 及身份验证令牌。QFPay 使用应用程序代码及客户端密钥，商户 ID 为选填。
4. 按合作伙伴指示设置 `正式环境`。Aigens 没有环境开关。
5. 选择 `保存设定`，重新打开同一店铺，检查已保存的供应商与设置值。

切换供应商会保留其他供应商的凭证。移除付款方式并保存后，会停用该方式并清除其所有供应商凭证。更改正式付款凭证前，请先询问所有者或管理员，并在完成设置后于相关网店核对付款方式。

#### KPay 设置

`Credit Card`、`Google Pay` 和 `Apple Pay` 也可使用 KPay。

1. 在 `供应商` 选择 `KPay`。
2. 按付款合作伙伴确认的环境设置 `正式环境`。付款方式需要同时设置网上结账和 KPay 环境时，两者共用同一个开关。
3. 输入 `商户代码`。
4. 合作伙伴确认后，开启 `服务商模式`。关闭此模式时，输入 `私钥（PKCS8 Base64）` 和 `平台公钥（PKCS8 Base64）`。开启此模式后，界面会隐藏这两个字段。
5. 使用 `Google Pay` 时，输入 `Google Pay 商户 ID`。在网页使用 `Apple Pay` 时，如合作伙伴提供了资料，请填写 `Apple Pay 商户标识符`、`Apple Pay 证书密码` 和 `Apple Pay 商户身份证书（.p12 Base64）`。
6. 选择 `保存设定`，再到相同环境的网店核对付款方式。

> Screenshot pending: `hq/online-ordering/oo_regional_payment_providers.png` — 使用示例凭证显示地区付款方式及供应商设置。

## 步骤

1. 打开 `Online Ordering` -> `General Settings`。
2. 确认品牌正确。
3. 在 `Store Name` 下找到正确行。
4. 如果需要确认门店是否已有线上点餐设置，先查看 `In use` 状态。
5. 选择该门店的编辑操作。
6. 在 `Shop Settings` 中打开所需分区。
7. 完成门店级变更后，选择 `Save Settings`。

## 保存后的影响

变更只会应用到您在 `Shop Settings` 中打开的那家门店。

有些设置只影响该门店的顾客前台行为，另一些则会进一步影响该门店的渠道可用性或合作平台集成。

## 如何检查你的变更

1. 返回 `General Settings`，重新打开同一家门店。
2. 确认您刚刚修改的分区仍显示更新后的值。
3. 到相关前台流程或下游设置页检查结果。

## 如发生问题

- 确认您在打开 `Shop Settings` 前选中了正确的门店行。
- 重新检查这项变更是否其实应该在 `Payments`、`Ordering Channels` 或 [3rd Party Platforms](./third-party-platforms.md) 中处理。
- 如果缺少相关订单渠道，请到 [市集](../marketplace/catalog.md) 检查平台订阅。

## 何时请店主／管理员协助

- 您不确定应该修改哪一家门店。
- 该变更会影响营业中的线上点餐流程。
- 您需要支付、Webhook 或第三方平台设置的账号资料或批准。
