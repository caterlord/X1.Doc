# POS X1 English Manual - Pending Screenshot List

This file now contains only screenshots that are still required.

## Where to put screenshots

Put all screenshots under:

`static/img/manual/en/`

HQ screenshots used by `docs/hq/` should go under:

`static/img/hq/`

Use these subfolders:

- `static/img/manual/en/getting-started/`
- `static/img/manual/en/client/`
- `static/img/manual/en/functions/`

## Pending checklist

| Filename (relative to `static/img/manual/en/`) | Document placement | What to capture |
|---|---|---|
| `getting-started/gs-10-login-quick-language-switch.png` | `docs/getting-started/access-and-navigation.md`, `docs/functions/sign-in.md` | Login screen with quick language switch button (`EN` / `繁` / `简`) visible |
| `client/cl-04-devices-pos-code-required.png` | `docs/client/start-shift.md`, `docs/reference/troubleshooting.md` | Actual `POS Code is required` warning/state |
| `client/cl-13-checkout-payment-methods-more.png` | `docs/client/checkout-and-payments.md` | Checkout payment methods list including `More` |
| `client/cl-17-payment-failed-dialog.png` | `docs/client/payment-errors-and-retry.md` | Real payment failed prompt/message |
| `client/cl-18-payment-retry-state.png` | `docs/client/payment-errors-and-retry.md` | Retry/cancel state after failure |
| `client/cl-22-modify-payment-3rdparty-warning.png` | `docs/client/refunds-and-voids.md` | Third-party linked payment modification warning |
| `functions/fn-change-table-function-menu.png` | `docs/functions/change-table.md` | Function menu showing `Change Table` |
| `functions/fn-change-table-select-table.png` | `docs/functions/change-table.md` | `Change Table` target table selector |
| `functions/fn-change-table-result-on-destination.png` | `docs/functions/change-table.md` | Order visible on destination table after change |
| `functions/fn-split-merge-function-menu.png` | `docs/functions/split-merge-transaction.md` | Function menu showing `Split / Merge Txn` |
| `functions/fn-split-merge-dialog-transfer.png` | `docs/functions/split-merge-transaction.md` | `Split / Merge Txn` screen with `>` and `All` |
| `functions/fn-split-merge-result.png` | `docs/functions/split-merge-transaction.md` | Result after confirm (items moved to target transaction) |
| `functions/fn-switch-order-type-function-menu.png` | `docs/functions/to-dine-in-to-takeaway.md` | Function menu showing `To Dine-In` / `To Takeaway` |
| `functions/fn-switch-order-type-result.png` | `docs/functions/to-dine-in-to-takeaway.md` | Order after switching type (label/state changed) |
| `functions/fn-member-login-select-provider.png` | `docs/functions/member-login.md` | `Select Member Provider` dialog/list |
| `functions/fn-member-login-member-details.png` | `docs/functions/member-login.md` | Member details shown after successful login |
| `functions/fn-pay-in-out-dialog.png` | `docs/functions/pay-in-pay-out.md` | `Pay In / Pay Out` entry dialog (reason + amount) |
| `functions/fn-pay-in-out-confirm-record.png` | `docs/functions/pay-in-pay-out.md` | `Confirm this record?` or saved pay-in/out record |
| `functions/fn-reprint-receipt-select-completed-transaction.png` | `docs/functions/reprint-receipt.md` | Completed transaction selected before `Reprint Receipt` |
| `functions/fn-reopen-order-confirm-dialog.png` | `docs/functions/reopen-order.md` | `Confirm to reopen the Txn?` dialog |
| `client/cl-26-orders-overview-tabs-list.png` | `docs/client/orders-overview.md` | `Orders Overview` main list with tab bar (`Open`, `Closed`, `Deposit`, `Search`) |
| `client/cl-27-orders-overview-search-dialog.png` | `docs/client/orders-overview.md` | `Orders Overview` search/filter dialog |
| `client/cl-28-online-orders-server-tab.png` | `docs/client/online-orders.md` | `Online Orders` `Server` tab with status counters |
| `client/cl-29-online-orders-pickup-actions.png` | `docs/client/online-orders.md` | `Online Orders` `Pickup` tab showing action buttons (`View`, `Reject`, `Accept`, `Prepare`, `Pick up`, `Create`) |
| `client/cl-30-inventory-sold-out-tab.png` | `docs/client/inventory.md` | `Inventory` `Sold Out` tab list and controls |
| `client/cl-31-inventory-limited-item-tab.png` | `docs/client/inventory.md` | `Inventory` `Limited Item` tab with quota/remain |
| `client/cl-32-reports-selector-and-print.png` | `docs/client/reports.md` | `Reports` screen with `14. Voided Order Report` selected, date controls, audit detail columns, and `Print` |
| `client/cl-55-reports-sales-dashboard-charts.png` | `docs/client/reports.md` | v1.8.0 `Sales Dashboard` showing summary cards, `Hourly Sales Trend`, `Payment Mix`, `Sales by Category`, `Sales by Department`, and a `DETAILS` table |
| `client/cl-33-info-page-version-debug-offline-export.png` | `docs/client/info.md` | `Info` screen showing app version, debug mode, offline status, and `Export Logs` |
| `client/cl-37-ordering-table-view-toggle-floorplan-tablelist.png` | `docs/client/sales-flow.md` | Table screen showing the round view toggle button for `Floor Plan` / `Table List` |
| `client/cl-38-info-log-file-selection-export-upload-remove.png` | `docs/client/info.md` | `Select Log Files` dialog showing selected files and all actions: `Export`, `Upload`, `Remove` |
| `client/cl-39-info-log-upload-success-message.png` | `docs/client/info.md` | Success message after uploading logs (`Logs uploaded to ...`) |
| `client/cl-40-settings-language-configuration-grid.png` | `docs/client/settings.md` | `Settings` -> `General` language configuration grid with `Item Mapping` and `Login Quick Switch` columns |
| `client/cl-41-order-item-name-language-mapping.png` | `docs/client/sales-flow.md` | Ordering screen showing item names after language/mapping change (`Main` / `Alt`) |
| `client/cl-42-select-function-dialog-pagination.png` | `docs/client/sales-flow.md` | `Select Function` dialog showing multiple pages with `Previous` and `Next` tiles |
| `client/cl-43-order-remark-display-edit.png` | `docs/client/sales-flow.md` | Order screen showing saved order remark under the header with the pencil edit button |
| `client/cl-44-checkout-payment-remark-edit-button.png` | `docs/client/checkout-and-payments.md` | Checkout `Paid` summary area showing the edit button for `Payment Remark` |
| `client/cl-45-settings-print-order-contact-toggles.png` | `docs/client/settings.md` | `Settings` -> `Printing` -> `Setting` showing `Show Order Contact On Receipt` and `Show Order Contact On Kitchen Output` |
| `client/cl-46-settings-operation-terminal-mode.png` | `docs/client/settings.md` | `Settings` -> `Operation` -> `Terminal` showing `Mode` with `Restaurant` and `Quick Order` |
| `client/cl-47-settings-general-order-mode-toggles.png` | `docs/client/settings.md` | `Settings` -> `General` showing `Enable Dine In Auto Open Order`, `Enable Takeaway Auto Open Order`, `Enable Default Takeaway Mode`, and auto-assign options |
| `client/cl-48-settings-print-auto-print-receipt.png` | `docs/client/settings.md` | `Settings` -> `Printing` -> `Setting` showing `Auto Print Receipt` in the `Receipt` section |
| `client/cl-49-settings-report-day-end-sections.png` | `docs/client/settings.md` | `Settings` -> `Report` showing `Print Qty`, `Daily Report Sections`, and `Show advanced sections` |
| `client/cl-50-settings-general-clearing-local-transaction-retention.png` | `docs/client/settings.md` | `Settings` -> `General` -> `Clearing` showing `Local Transaction Retention (Days)` and its warning text |
| `client/cl-34-devices-payments-tab-list.png` | `docs/client/devices.md`, `docs/functions/configure-payment-devices.md` | `Devices` `Payments` tab list with status + info/edit actions |
| `client/cl-35-devices-input-devices-tab-list.png` | `docs/client/devices.md`, `docs/functions/configure-input-devices.md` | `Devices` `Input Devices` tab list with status + info/edit actions |
| `client/cl-36-devices-x1-products-tab-list.png` | `docs/client/devices.md`, `docs/functions/configure-x1-products.md` | `Devices` `X1 Products` tab list with status + info/edit actions |
| `client/cl-52-devices-alert-badges.png` | `docs/client/devices.md` | Left menu `Devices` badge and `Devices` tab badges when at least one printer or device needs attention |
| `client/cl-53-reservations-board.png` | `docs/client/reservations.md` | POS `Reservations` board opened from `More Tools`, with counters, the `Refresh` button, and at least one booking row showing the `Arrived`, `Seat`, `No-show`, and `Cancel` buttons |
| `functions/fn-printer-hq-managed-not-configured.png` | `docs/functions/manage-printers.md` | `Devices` -> `Printer` row showing `HQ` and `Not configured` badges for an HQ-managed printer that still needs local POS setup |
| `functions/fn-printer-failed-job-badge.png` | `docs/functions/manage-printers.md` | `Devices` -> `Printer` row showing a failed-job badge such as `1 error` or `3 errors` before the spooler error queue is cleared |
| `functions/fn-change-table-view-toggle-floorplan-tablelist.png` | `docs/functions/change-table.md` | `Change Table` dialog showing the lower-right view toggle for `Floor Plan` / `Table List` |
| `functions/fn-order-contact-function-menu.png` | `docs/functions/order-contact.md` | `Select Function` dialog showing `Order Contact` on a takeaway order |
| `functions/fn-order-contact-dialog-result.png` | `docs/functions/order-contact.md` | `Order Contact` dialog and the saved name/phone shown under the takeaway order header |
| `functions/fn-printer-remove-confirm-dialog.png` | `docs/functions/manage-printers.md` | Remove printer confirmation dialog (`Are you sure you want to remove printer...`) |
| `functions/fn-printer-dot-matrix-advanced-settings.png` | `docs/functions/manage-printers.md` | Edit/Add Printer dialog with `Printer Type` set to `Dot Matrix`, `Show advanced settings` on, and `Dot matrix density` / `Dot matrix color` visible |
| `functions/fn-printer-spooler-manager-dialog.png` | `docs/functions/manage-printers.md` | Printer spooler manager main dialog with `Queue`, `History`, and `Needs attention` tabs plus `Refresh`, `Clear Selection`, `Remove Selected`, and `Remove All` |
| `functions/fn-printer-spooler-preview-dialog.png` | `docs/functions/manage-printers.md` | `Open print preview` dialog showing the rendered job, `Pinch or scroll to zoom. Drag to pan.`, `Reset`, and `Close` |
| `functions/fn-printer-spooler-needs-attention-actions.png` | `docs/functions/manage-printers.md` | `Needs attention` tab showing `Select All`, `Retry selected safe jobs`, `Retry all safe jobs`, an `Outcome unknown` warning, and individual retry/cancel actions |
| `functions/fn-payment-octopus-v3-reader-dialog.png` | `docs/functions/configure-payment-devices.md` | Octopus V3 reader edit dialog (`Device ID`, `API ID`, `API Token`, toggles) |
| `client/cl-51-settings-template-label-adaptive-text-size.png` | `docs/client/settings.md` | `Settings` -> `Printing` -> `Template` with `Template` set to `Label` and `Enable adaptive text size` visible |
| `client/cl-53-settings-template-font-profiles.png` | `docs/client/settings.md` | `Settings` -> `Printing` -> `Template` with the template selector showing `Octopus Add Value Slip` and `Pay In/Out Slip`, plus preview/font-size rows for one selected profile |
| `client/cl-54-settings-keep-table-active-after-payment.png` | `docs/client/settings.md` | `Settings` -> `Operation` -> `Table` with `Keep Table Active After Payment` visible, plus a paid dine-in order showing `Release Table` |
| `functions/fn-octopus-settlement-function-menu.png` | `docs/functions/octopus-settlement.md`, `docs/client/sales-flow.md` | `Select Function` dialog showing `Octopus Settlement` when Octopus V3 is enabled and available |
| `functions/fn-octopus-settlement-success.png` | `docs/functions/octopus-settlement.md` | `Octopus Settle Success` dialog showing deduct/add-value counts, totals, and settlement file name |
| `functions/fn-payment-linkly-terminal-dialog.png` | `docs/functions/configure-payment-devices.md` | Linkly EFTPOS terminal settings dialog (`Environment`, `Username`, `Password`, `Pair Code`, `Pair`) |
| `functions/fn-payment-generic-device-dialog.png` | `docs/functions/configure-payment-devices.md` | Generic payment device edit dialog (`Connection`, `IP Address`, `Port`) |
| `functions/fn-input-barcode-scanner-dialog.png` | `docs/functions/configure-input-devices.md` | Barcode/QR scanner edit dialog showing `Scanner Input Sources`, `Camera`, `USB / Bluetooth`, `Scanner Preview`, `Test USB/Bluetooth scanner`, and `Enable camera fallback` |
| `functions/fn-x1-customer-display-host-dialog.png` | `docs/functions/configure-x1-products.md` | `Customer Display Host` dialog (host details + pairing QR) |
| `functions/fn-x1-pickup-display-dialog.png` | `docs/functions/configure-x1-products.md` | `Pickup Display` device dialog (controller mode + pairing) |
| `functions/fn-x1-express-checkout-kiosk-dialog.png` | `docs/functions/configure-x1-products.md` | `Express Checkout Kiosks` pairing dialog |

## Pending HQ screenshots

| Filename (relative to `static/img/hq/`) | Document placement | What to capture |
|---|---|---|
| `store-settings/reservations_board.png` | `docs/hq/store-settings/reservations.md` | HQ `Bookings` -> `Booking Board` with shop and date selectors, counters, and at least one row showing the quick actions |
| `store-settings/reservations_settings.png` | `docs/hq/store-settings/reservations.md` | HQ `Bookings` -> `Booking Settings` showing the public booking controls, the `Time zone`, `First slot time`, `Last slot time`, and `Slot interval (minutes)` fields, and the policy text |
| `store-settings/reservations_detail_history.png` | `docs/hq/store-settings/reservations.md` | HQ `Booking details` dialog showing the state action buttons and the `Status history` timeline with at least one `POS:` entry and one `Guest` entry |
| `store-settings/reservations_reports.png` | `docs/hq/store-settings/reservations.md` | HQ `Bookings` -> `Booking Reports` showing the range presets, stat cards (`Total bookings`, `Total covers`, `No-show rate`, `Cancellation rate`), and the `Daily breakdown` table |
| `menu-catalog/modifiers-used-by-items.png` | `docs/hq/menu-catalog/modifiers.md` | Expanded modifier group with `Used by Items` selected and linked item rows visible |
| `menu-catalog/meal-sets-used-by-items.png` | `docs/hq/menu-catalog/meal-sets.md` | Expanded meal-set group with `Used by Items` selected and linked parent items visible |
| `menu-catalog/promotions-rule-editor-save-actions.png` | `docs/hq/menu-catalog/promotions.md` | Promotion rule editor with `Choose save action` open, showing `Save and continue` and `Save and close` |
| `online-ordering/meituan-webhook-settings.png` | `docs/hq/online-ordering/third-party-platforms.md` | `MeiTuan` card showing `API URL`, `Shop ID`, masked token fields, `Token expiry date/time`, and webhook/menu-sync switches |
| `menu-catalog/menu-items-shop-takeaway-surcharge.png` | `docs/hq/menu-catalog/menu-items.md` | Menu item `Shop Settings`/availability area showing per-shop `Price`, `Takeaway Surcharge`, and expandable `Additional Settings` |
| `menu-catalog/smart-categories-odo-public-display.png` | `docs/hq/menu-catalog/smart-categories.md` | Smart category shop display details showing `Published`, `Public Display`, and the `Publish` switch |
| `menu-catalog/discount-percent-multiplier.png` | `docs/hq/menu-catalog/discounts.md` | Discount rule editor showing `Discount: Percent`, `Discount Percent`, the retained-price multiplier example/help, and `Applied On Item Level` |
| `online-ordering/online-categories-publication-status.png` | `docs/hq/online-ordering/categories-and-items.md` | `Online Categories` list showing `Published` and `Show unpublished`, plus the selected category's shop publication state |
| `online-ordering/online-menu-publication-and-shop-schedule.png` | `docs/hq/online-ordering/menus-and-combinations.md` | `Online Menus` editor showing `Published`, `Categories ({count})`, `Shop Schedule ({count})`, `Public`, `Public Display`, and `Visible in ODO` |
| `online-ordering/foodpanda-settings-and-menu-sync.png` | `docs/hq/online-ordering/third-party-platforms.md` | Foodpanda card showing `Connect Foodpanda`, store details, searchable `Payment method`/`Discount`, `Container charge item`, `More order options`, `Save Settings`, and `Menu synchronization`/`Sync Menu` |
