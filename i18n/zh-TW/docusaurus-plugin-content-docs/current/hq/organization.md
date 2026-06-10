---
sidebar_position: 3
title: 工作區管理
---

# 工作區管理

:::info[適用對象]
需要維護 HQ 業務架構，或為後勤同事分配公司、品牌及店鋪存取權的工作區管理員、店主及經理。
:::

## 開始前

- 確認左上角工作區及品牌選擇器顯示正確的工作區。
- 先分清楚你要更新業務架構、邀請工作區成員，還是分配 HQ 業務存取權。
- 如果是新工作區，建立第一個公司、品牌或店舖前，先確認永久的 `Workspace region`。
- 發出邀請前，先準備好成員的電子郵件地址。
- 確認對方應該存取哪一個 `Company`、`Brand` 或 `Shop`，以及應取得什麼角色。

## 開啟此頁面

開啟左上角的工作區及品牌選擇器，然後選擇 `Workspace Administration`。

## 此頁控制內容

`Workspace Administration` 用於管理目前工作區內的業務架構及 HQ 存取規則。

它控制：

- `Workspace region`
- `Companies`
- `Brands`
- `Shops`
- `Business Access`

它不會建立 POS 終端機的收銀員登入。如要建立收銀員帳號，請使用 [POS 使用者](./pos-settings/pos-users.md)。

![工作區管理的業務存取頁面](/img/hq/workspace-administration-business-access.png)

_`Business Access` 會顯示工作區成員、待處理邀請，以及他們的公司、品牌及店鋪分配。_

## 主要分頁

### Companies

使用 `Companies` 建立或維護最高層級的業務架構。一間公司可以包含一個或多個品牌。

### Brands

使用 `Brands` 在公司之下建立或維護品牌。品牌是很多 HQ 設定頁面使用的主要範圍，品牌記錄也可以包含收據品牌資料，例如列印收據使用的標誌。

### Shops

使用 `Shops` 在品牌之下建立或維護店鋪記錄。店鋪記錄會用於店鋪設定、POS 設定、報表及線上點餐。

### Business Access

使用 `Business Access` 檢查工作區成員、待處理邀請，以及每個人的 HQ 業務存取權。

此分頁把兩件事分開處理：

- 工作區成員資格：對方是否屬於此工作區
- HQ 業務存取權：對方可以在 HQ 內操作哪一間公司、品牌或店鋪

標記為 `Workspace admin` 的成員已擁有目前工作區的完整存取權。他們不需要先取得直接的公司、品牌或店鋪分配，也可以開啟 HQ 頁面。

## 主要操作

### 建立公司、品牌或店鋪

1. 選擇 `Companies`、`Brands` 或 `Shops`。
2. 按 `Add New`。
3. 輸入必填的 `Name`。
4. 如果 HQ 要求，選擇上層 `Company` 或 `Brand`。
5. 如有需要，輸入選填的 `Description` 或 `Address`。
6. 儲存記錄。

### 設定第一個公司、品牌及店舖

1. 在新工作區開啟 `Dashboard`。
2. 選擇 `Start guided setup`。
3. 保持選中 `New Company`。
4. 選擇 `Next`。
5. 輸入公司資料。
6. 繼續完成 `Brand` 及 `Shop`。
7. 檢查 `Confirmation`。
8. 只有在公司、品牌及店舖名稱正確時才儲存。
9. 返回 `Dashboard`，確認正常儀表板已顯示。

### 邀請工作區成員並分配存取權

1. 選擇 `Business Access`。
2. 按 `Invite member`。
3. 輸入對方的 `Email`。
4. 按 `Send Invitation`。
5. 找到標記為 `Pending invitation` 的新列。
6. 按 `Assign access`。
7. 選擇 `Access level`。
8. 選擇 `Target`。
9. 選擇 `Role`。
10. 按 `Grant access`。
11. 如果對方需要多個公司、品牌或店鋪的存取權，重複分配。

### 為現有工作區成員分配存取權

1. 選擇 `Business Access`。
2. 在 `User` 欄找到該成員。
3. 按 `Assign access`。
4. 選擇 `Access level`、`Target` 及 `Role`。
5. 按 `Grant access`。

### 移除直接業務存取權

1. 選擇 `Business Access`。
2. 找到該成員或待處理邀請。
3. 找到要移除的公司、品牌或店鋪分配。
4. 按該分配旁的 `Remove`。

如果分配標記為 `Inherited`，請改為移除產生該權限的上層分配。

## 儲存後的影響

- `Companies`、`Brands` 及 `Shops` 的變更會影響目前工作區的業務架構。
- `Business Access` 的變更會影響該成員在 HQ 內可以查看或管理的範圍。
- 工作區管理員即使沒有直接業務存取列，也可以管理目前工作區。
- 加到 `Pending invitation` 的分配，會在受邀人接受邀請並登入後套用。
- 這些變更不會建立或更改 POS 收銀員登入。

## 如何檢查你的變更

1. 確認新增或更新後的公司、品牌或店鋪出現在正確分頁。
2. 選擇 `Business Access`。
3. 確認成員、待處理邀請或分配已出現在表格。
4. 檢查 `Workspace Members`、`Pending Invitations`、`Company Assignments`、`Brand Assignments` 及 `Shop Assignments` 摘要卡。
5. 請該成員登入，確認他們只看到預期的品牌或店鋪。

## 如發生問題

- 如果出現 `Sign-in required`，請受邀人先登入 HQ 一次，然後再為其有效帳號分配存取權。
- 如果出現 `Workspace admin` 而不是 `Assign access`，表示該成員已擁有整個工作區的 HQ 存取權，不需要直接分配。
- 如果非工作區管理員顯示 `No assignable access`，你的帳號可能沒有權限為該公司、品牌或店鋪分配存取權。
- 如果成員看到太多或太少內容，檢查其存取權是在 `Company`、`Brand` 還是 `Shop` 層級分配。
- 如果分配是繼承而來，請移除產生該權限的上層分配。
- 如果你需要 POS 終端機的收銀員登入，請改到 [POS 使用者](./pos-settings/pos-users.md)。

## 何時要請店主／管理員協助

- 你未能確認應修改哪個工作區、公司、品牌或店鋪。
- 你需要為其他經理授予或移除管理員層級存取權。
- 你需要刪除或停用公司、品牌或店鋪。
- 存取權變更會影響即時設定、付款、報表或客戶可見渠道。
