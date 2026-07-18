---
title: Settings
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[Who this is for]
Managers/admin-level users maintaining terminal configuration.
:::

## Before you start

- You are signed in with settings access rights
- You understand store policy for configuration changes
- Your POS user group includes `POS settings admin`

## What this screen is for

Use `Settings` to maintain terminal behavior, service mode, language/POS code, day-end clearing controls, printing, integrations, and operation rules.

## Language configuration

Use the language section in `General` to manage:

- Default UI language for this terminal
- Item name display source per language (`Main` or `Alt`)
- Login-screen quick-switch availability per language

:::tip[How to read `Main` / `Alt`]
`Main` and `Alt` are two item-name sources from your menu setup.  
If one source is blank for an item, POS falls back to the other available name.
:::

## Main sections

<Tabs>
  <TabItem value="general" label="General">
Includes language configuration (`Item Mapping`, `Login Quick Switch`), required codes (`POS Code`, `Cash Register Code`), and `Clearing` controls such as `Local Transaction Retention (Days)`.
  </TabItem>
  <TabItem value="operation" label="Operation">
Includes `Terminal` mode plus order/payment behavior toggles, table controls, and service workflow settings.
  </TabItem>
  <TabItem value="system" label="System">
Includes `Number` controls such as `Rounding Method`, `Decimal Places`, and `Round For Cash Only`.
  </TabItem>
  <TabItem value="printing" label="Printing">
Includes `Mapping`, `Setting`, and `Template` tabs for printer routing and print output behavior.
  </TabItem>
  <TabItem value="platforms" label="Third Party Platform + ODO">
Includes enabled third-party integrations and ODO controls such as `Channel Mapping`.
  </TabItem>
  <TabItem value="report" label="Report">
Includes report-related output settings such as `Print Qty` and `Daily Report Sections`.
  </TabItem>
</Tabs>

## Common language tasks

<Tabs>
  <TabItem value="set-ui-language" label="Set default UI language">
1. Tap `Settings` -> `General`.
2. In language configuration, select the language row you want as default.
3. Confirm UI text updates to the selected language.
4. Tap `Save`.
  </TabItem>
  <TabItem value="item-mapping" label="Set item name mapping">
1. Tap `Settings` -> `General`.
2. In the target language row, set `Item Mapping` to `Main` or `Alt`.
3. Tap `Save`.
4. Open `Ordering` and confirm item names display as expected.
  </TabItem>
  <TabItem value="quick-switch" label="Configure login quick switch">
1. Tap `Settings` -> `General`.
2. Turn `Login Quick Switch` on for the languages staff can switch on login screen.
3. Tap `Save`.
4. Return to login screen and confirm the language quick-switch button appears.
  </TabItem>
</Tabs>

## Switch terminal mode

<Tabs>
  <TabItem value="restaurant" label="Restaurant">
1. Tap `Settings` -> `Operation`.
2. In `Terminal`, set `Mode` to `Restaurant`.
3. Tap `Settings` -> `General`.
4. Turn `Enable Dine In Auto Open Order` off.
5. Turn `Enable Takeaway Auto Open Order` off.
6. Turn `Enable Floor Plan Mode` on if your store uses floor-plan table view.
7. Tap `Save`.
8. Return to `Ordering` and confirm staff must choose a table or takeaway order before adding items.
  </TabItem>
  <TabItem value="quick-order" label="Quick Order">
1. Tap `Settings` -> `Operation`.
2. In `Terminal`, set `Mode` to `Quick Order`.
3. Tap `Settings` -> `General`.
4. Turn `Enable Dine In Auto Open Order` on.
5. Turn `Enable Takeaway Auto Open Order` on.
6. Turn `Enable Default Takeaway Mode` on if takeaway should open first. Leave it off if dine-in should open first.
7. Turn `Enable Dine In Auto Assign Table Code` and `Enable Takeaway Auto Assign Table Code` on if you want POS to rotate counters automatically for new quick orders.
8. Tap `Save`.
9. Return to `Ordering` and confirm POS opens a new order directly instead of asking staff to pick a table first.
  </TabItem>
</Tabs>

:::note[Related settings]
`Enable Dine In Auto Assign Table Code` and `Enable Takeaway Auto Assign Table Code` only appear after the matching auto-open setting is turned on.
:::

:::tip[Quick-order tools]
`Reset Table Counters` in `More Tools` is used with Quick Order mode when your store uses the rotating quick-order counters.
:::

## Keep a paid dine-in table active

Use this option when customers pay before they finish using the table.

1. Tap `Settings` -> `Operation`.
2. Find the `Table` section.
3. Turn `Keep Table Active After Payment` on.
4. Tap `Save`.
5. Complete a fully paid dine-in order and confirm the table remains occupied.
6. Open the paid order to review it. Confirm the warning before you make any further changes.
7. Settle any new outstanding balance after an adjustment.
8. Tap `Release Table` when the customer leaves.

`Release Table` is available only after the order balance is fully settled. Turn this setting off if the table should become available immediately after full payment.

:::note[Screenshot pending]
Needed file: `client/cl-54-settings-keep-table-active-after-payment.png`
:::

## Common rounding tasks

1. Tap `Settings` -> `System`.
2. In `Number`, select `Rounding Method` (`None`, `Round Up`, `Round Down`, or `Round to Nearest 5 cents`).
3. Set `Decimal Places` when that field is shown.
4. Turn `Round For Cash Only` on when rounding should apply only to cash payments.
5. Tap `Save`.
6. Open `Checkout` and confirm totals behave as expected for cash and non-cash methods.

If `Rounding Method` is `Round to Nearest 5 cents`, `Decimal Places` is hidden.

## Restore settings from backup

1. Tap `Settings`.
2. Tap `Restore` in the bottom action bar.
3. Select the backup entry you want to apply.
4. Confirm restore completes.
5. Review key settings and tap `Save`.

Restore now covers more configuration areas in current builds, so verify critical items after restore:

- Printer routing and print settings
- Customer display and terminal behavior settings
- Integration-related settings

## Common print language override task

1. Tap `Settings` -> `Printing`.
2. Open `Template`.
3. Select the target print template.
4. Set `Language` to the required print language (or keep `Follow System`).
5. Tap `Save`.
6. Print a test receipt/slip and confirm output language.

## Common print template font task

1. Tap `Settings` -> `Printing`.
2. Open `Template`.
3. Select the target print template.
4. Adjust the font size rows for that template.
5. Use `Preview` to confirm the output is readable.
6. Tap `Save`.
7. Print a test receipt/slip and confirm the printed output follows the saved font settings.

Current template font profiles include `Receipt / Checklist / Invoice`, `Kitchen Slip`, `Label`, `Pickup Slip`, `Department Slip`, `Item Order Slip`, `ODO QR Code Slip`, `Octopus Add Value Slip`, and `Pay In/Out Slip`.

## Common label text fitting task

1. Tap `Settings` -> `Printing`.
2. Open `Template`.
3. Set `Template` to `Label`.
4. Turn `Enable adaptive text size` on if long item or modifier names should shrink to fit the label width.
5. Leave `Enable adaptive text size` off if your store wants label text to keep the configured body font size.
6. Tap `Save`.
7. Print a label with a long item name and confirm the text is still readable.

## Common automatic reprint label task

1. Tap `Settings` -> `Printing`.
2. Open `Template`.
3. Select the print template that needs recovery labels, such as `Kitchen Slip`, `Department Slip`, or `Item Order Slip`.
4. Turn `Show AUTO REPRINT label on automatic retries` on when kitchen or counter staff need to identify output that was printed again by the automatic spooler retry.
5. Leave it off for customer-facing output where your store does not want the recovery label printed.
6. Tap `Save`.
7. If you are testing a printer recovery case, confirm automatic retry output shows the expected `AUTO REPRINT` label.

## Common receipt auto print task

1. Tap `Settings` -> `Printing`.
2. Open `Setting`.
3. In `Receipt`, turn `Auto Print Receipt` on if receipts should print automatically after successful checkout. Turn it off if staff should decide manually when to print.
4. Tap `Save`.
5. Complete a normal checkout and confirm receipt printing matches your store policy.

`Auto Print Receipt` controls receipt printing only. If the payment method is configured to open the cash drawer, the drawer still opens after checkout when `Auto Print Receipt` is off.

## Common takeaway contact print task

1. Tap `Settings` -> `Printing`.
2. Open `Setting`.
3. In `Receipt`, turn `Show Order Contact On Receipt` on or off.
4. In `Kitchen Slip`, turn `Show Order Contact On Kitchen Output` on or off.
5. Tap `Save`.
6. Print a takeaway receipt or kitchen slip and confirm the contact details show only where your store expects them.

:::note
If you need to adjust receipt font size for this section, open `Template` and review the `Customer Contact` row in the receipt font settings.
:::

## Common day-end report section task

1. Tap `Settings` -> `Report`.
2. Set `Print Qty` if your store needs more than one printed copy.
3. In `Daily Report Sections`, turn `Summary`, `Cash Movement`, `Sales Breakdown`, and `Payment Breakdown` on or off based on what managers should print at close.
4. Turn `Show advanced sections` on if you need to control parts inside those sections.
5. In `Advanced Sections`, turn specific parts such as `Open Amount`, `Pay In`, `Pay Out`, `Cash Difference`, `Close Amount`, `Audit`, `Cashier Summary`, `Department Sales`, or `Payment Tips` on or off.
6. Tap `Save`.
7. Run a day-end report and confirm only the required sections are printed.

:::note
Advanced section toggles only apply when the matching parent section stays on.
:::

## Common local transaction retention task

1. Tap `Settings` -> `General`.
2. Scroll to `Clearing`.
3. In `Local Transaction Retention (Days)`, enter how many days of closed workday transaction history this device should keep locally.
4. Tap `Save`.
5. After later day-end processing or scheduled cleanup, confirm recent transaction history still matches your store's expected local lookup window.

:::note[What this setting changes]
Only older closed workdays are removed from this device when they are outside the retention window. Open workdays and unclosed orders are not removed.
:::

:::warning[Retention is one-way on this device]
If you increase `Local Transaction Retention (Days)` later, POS does not restore local history that was already removed. Full history remains available in the cloud according to your company policy.
:::

## Integration and channel visibility behavior

- In `Third Party Platform`, only enabled integrations are shown.
- In `ODO` -> `Channel Mapping`, only mapped channels are shown.
- If the terminal is offline, channel mapping shows an online-only hint and mapping rows are unavailable.

## Steps

1. Tap `Settings`.
2. Select the section on left panel.
3. Update required fields/toggles.
4. Tap `Save`.
5. Verify changes are applied.

## What you should see

![Settings General with Language and POS Code](/img/manual/en/client/cl-05-settings-general-language-poscode.png)

- `Language Configuration` grid with `Item Mapping` and `Login Quick Switch`
- `Operation` -> `Terminal` includes `Mode` with `Restaurant` and `Quick Order`
- `Operation` -> `Table` includes `Keep Table Active After Payment`
- `General` includes the auto-open and auto-assign settings that control table-first vs direct-order flow
- `System` -> `Number` with `Rounding Method`, `Decimal Places` (when shown), and `Round For Cash Only`
- `Printing` with `Mapping`, `Setting`, and `Template` tabs
- `Printing` -> `Setting` includes `Auto Print Receipt`
- `Printing` -> `Setting` includes `Show Order Contact On Receipt` and `Show Order Contact On Kitchen Output`
- `Printing` -> `Template` receipt font settings include `Customer Contact`
- `Printing` -> `Template` includes font profiles for `Octopus Add Value Slip` and `Pay In/Out Slip`
- `Printing` -> `Template` label settings include `Enable adaptive text size`
- `Printing` -> `Template` includes `Show AUTO REPRINT label on automatic retries`
- `General` -> `Clearing` includes `Local Transaction Retention (Days)` and the warning text about older closed workdays being removed from this device
- `Report` includes `Print Qty`, `Daily Report Sections`, and `Show advanced sections`
- `Restore` action at the bottom of settings

:::note[Screenshot pending]
Needed file: `client/cl-40-settings-language-configuration-grid.png`
:::

:::note[Screenshot pending]
Needed file: `client/cl-45-settings-print-order-contact-toggles.png`
:::

:::note[Screenshot pending]
Needed file: `client/cl-53-settings-template-font-profiles.png`
:::

:::note[Screenshot pending]
Needed files: `client/cl-46-settings-operation-terminal-mode.png`, `client/cl-47-settings-general-order-mode-toggles.png`
:::

:::note[Screenshot pending]
Needed files: `client/cl-48-settings-print-auto-print-receipt.png`, `client/cl-49-settings-report-day-end-sections.png`
:::

:::note[Screenshot pending]
Needed file: `client/cl-51-settings-template-label-adaptive-text-size.png`
:::

:::note[Screenshot pending]
Needed file: `client/cl-50-settings-general-clearing-local-transaction-retention.png`
:::

## If something goes wrong

:::warning[Cannot save settings]
Check required fields (`POS Code`, required codes) and retry.
:::

:::warning[`Permission denied`]
Your POS user group does not allow settings changes. Ask a manager/admin to update the group in HQ `POS Users` or have an authorized person make the change.
:::

## When to ask manager/admin

- You do not have permission to change settings
- Change may affect all terminals/store behavior
