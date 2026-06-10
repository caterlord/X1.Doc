---
sidebar_position: 3
title: 工作区管理
---

# 工作区管理

:::info[适用对象]
需要维护 HQ 业务结构，或为后台员工分配公司、品牌和门店访问权限的工作区管理员、老板和经理。
:::

## 开始前

- 确认左上角工作区和品牌选择器显示的是正确工作区。
- 先分清楚这次要更新业务结构、邀请工作区成员，还是分配 HQ 业务访问权限。
- 发送邀请前，先准备好成员的邮箱地址。
- 确认对方应该访问哪个 `Company`、`Brand` 或 `Shop`，以及应该获得什么角色。

## 打开此页面

打开左上角的工作区和品牌选择器，然后选择 `Workspace Administration`。

## 本页控制内容

`Workspace Administration` 用于管理当前工作区内的业务结构和 HQ 访问规则。

它控制：

- `Workspace region`
- `Companies`
- `Brands`
- `Shops`
- `Business Access`

它不会创建 POS 终端机的收银员登录。如需创建收银员账号，请使用 [POS Users](./pos-settings/pos-users.md)。

![工作区管理的业务访问页面](/img/hq/workspace-administration-business-access.png)

_`Business Access` 会显示工作区成员、待处理邀请，以及他们的公司、品牌和门店分配。_

## 主要分页

### Companies

使用 `Companies` 创建或维护最高层级的业务结构。一家公司可以包含一个或多个品牌。

### Brands

使用 `Brands` 在公司之下创建或维护品牌。品牌是很多 HQ 设置页面使用的主要范围，品牌记录也可以包含收据品牌资料，例如打印收据使用的标志。

### Shops

使用 `Shops` 在品牌之下创建或维护门店记录。门店记录会用于门店设置、POS 设置、报表和线上点餐。

### Business Access

使用 `Business Access` 查看工作区成员、待处理邀请，以及每个人的 HQ 业务访问权限。

此分页把两件事分开处理：

- 工作区成员资格：对方是否属于此工作区
- HQ 业务访问权限：对方可以在 HQ 中操作哪家公司、品牌或门店

标记为 `Workspace admin` 的成员已经拥有当前工作区的完整访问权限。他们不需要先取得直接的公司、品牌或门店分配，也可以打开 HQ 页面。

## 主要操作

### 创建公司、品牌或门店

1. 选择 `Companies`、`Brands` 或 `Shops`。
2. 点击 `Add New`。
3. 输入必填的 `Name`。
4. 如果 HQ 要求，选择上级 `Company` 或 `Brand`。
5. 如有需要，输入选填的 `Description` 或 `Address`。
6. 保存记录。

### 设置第一个公司、品牌和门店

1. 在新工作区打开 `Dashboard`。
2. 选择 `Start guided setup`。
3. 保持选中 `New Company`。
4. 选择 `Next`。
5. 输入公司资料。
6. 继续完成 `Brand` 和 `Shop`。
7. 检查 `Confirmation`。
8. 只有在公司、品牌和门店名称正确时才保存。
9. 返回 `Dashboard`，确认正常仪表板已显示。

### 邀请工作区成员并分配访问权限

1. 选择 `Business Access`。
2. 点击 `Invite member`。
3. 输入对方的 `Email`。
4. 点击 `Send Invitation`。
5. 找到标记为 `Pending invitation` 的新行。
6. 点击 `Assign access`。
7. 选择 `Access level`。
8. 选择 `Target`。
9. 选择 `Role`。
10. 点击 `Grant access`。
11. 如果对方需要多个公司、品牌或门店的访问权限，重复分配。

### 为现有工作区成员分配访问权限

1. 选择 `Business Access`。
2. 在 `User` 列找到该成员。
3. 点击 `Assign access`。
4. 选择 `Access level`、`Target` 和 `Role`。
5. 点击 `Grant access`。

### 移除直接业务访问权限

1. 选择 `Business Access`。
2. 找到该成员或待处理邀请。
3. 找到要移除的公司、品牌或门店分配。
4. 点击该分配旁的 `Remove`。

如果分配标记为 `Inherited`，请改为移除产生该权限的上级分配。

## 保存后的影响

- `Companies`、`Brands` 和 `Shops` 的更改会影响当前工作区的业务结构。
- `Business Access` 的更改会影响该成员在 HQ 中可以查看或管理的范围。
- 工作区管理员即使没有直接业务访问行，也可以管理当前工作区。
- 加到 `Pending invitation` 的分配，会在受邀人接受邀请并登录后生效。
- 这些更改不会创建或更改 POS 收银员登录。

## 如何检查您的更改

1. 确认新增或更新后的公司、品牌或门店出现在正确分页。
2. 选择 `Business Access`。
3. 确认成员、待处理邀请或分配已经出现在表格。
4. 检查 `Workspace Members`、`Pending Invitations`、`Company Assignments`、`Brand Assignments` 和 `Shop Assignments` 摘要卡。
5. 请该成员登录，确认他们只能看到预期的品牌或门店。

## 如果出现问题

- 如果出现 `Sign-in required`，请受邀人先登录 HQ 一次，然后再为其有效账号分配访问权限。
- 如果出现 `Workspace admin` 而不是 `Assign access`，表示该成员已经拥有整个工作区的 HQ 访问权限，不需要直接分配。
- 如果非工作区管理员显示 `No assignable access`，您的账号可能没有权限为该公司、品牌或门店分配访问权限。
- 如果成员看到太多或太少内容，检查其访问权限是在 `Company`、`Brand` 还是 `Shop` 层级分配。
- 如果分配是继承而来，请移除产生该权限的上级分配。
- 如果您需要 POS 终端机的收银员登录，请改到 [POS Users](./pos-settings/pos-users.md)。

## 何时需要找老板／管理员

- 您无法确认应该修改哪个工作区、公司、品牌或门店。
- 您需要为其他经理授予或移除管理员层级访问权限。
- 您需要删除或停用公司、品牌或门店。
- 访问权限更改会影响实时设置、付款、报表或客户可见渠道。
