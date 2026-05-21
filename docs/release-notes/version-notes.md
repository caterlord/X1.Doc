---
sidebar_position: 1
title: Version Notes
---

This page tracks manual changes by release and update batch across the full X1 documentation set.

It is not limited to the POS app manual. Use it for POS, HQ, shared workflow, and documentation-structure updates.

## 2026-05-21 (v1.7.16 POS and HQ Alignment)

### Updated

- `Sales Flow`: documented the current modifier and meal-set prompt behavior after adding an item.
- `Menu Items`: documented `Auto-show modifier groups on POS`, `Item Relationships`, and the `Manage Relationships` check for modifier groups and meal-set groups.
- `Modifiers` and `Meal Set`: documented `Show recently removed`, the 24-hour restore window, restore-only removed rows, and duplicate-name restore blocking.
- `Categories`, `Smart Categories`, `Menu Items`, `POS Menus`, `Payment Methods`, `Tax & Surcharge`, and `Tables & Sections`: documented recently removed restore flows, 24-hour visibility, restore-only removed rows, and backend validation before restore.
- `Manage Printers`, `Settings`, `Troubleshooting`, and `Function and Feature Map`: documented printer spooler retry details, automatic retry states, and `Show AUTO REPRINT label on automatic retries`.
- `Info Settings`: documented receipt logo printout type coverage for `ODO Slip`.

### Reviewed

- Checked POS source changes from `v1.7.13` through `v1.7.16`, including release notes, print spooler auto retry, ODO slip logo printing, browser sandbox work, macOS camera scanner setup, sync fixes, and modifier/meal-set ordering flow.
- Checked HQ source changes after the prior subscription-seat documentation update, including POS logs, ODO slip logo settings, modifier relationship fixes, modifier printer assignment handling, `Auto-show modifier groups on POS`, POS log filename handling, promotion save handling, Neon channel binding, and deployment docs.
- Confirmed browser sandbox, deployment, dependency-warning, channel-binding, and general stability fixes do not add new cashier/admin manual steps beyond the updates above.

## 2026-05-09 (v1.7.13 POS Rebuild)

### Updated

- `Configure Input Devices`: documented barcode/QR scanner input source selection, including `Camera`, `USB / Bluetooth`, `Test USB/Bluetooth scanner`, and `Enable camera fallback`.
- `Devices` and `Function and Feature Map`: added scanner input source selection to the `Input Devices` scope.

### Screenshot updates

- Updated the pending barcode/QR scanner dialog capture request to show the rebuilt scanner input source controls.

### Reviewed

- Checked the POS source diff added after the first `v1.7.13` GitHub release, including scanner source UX, hardware scanner text input, Mac App Store launch entitlement, and sandbox-safe activation database setup.
- Confirmed the Mac App Store/TestFlight packaging fixes do not add new operator steps in the online manual.

## 2026-05-06 (v1.7.13 POS Alignment)

### Updated

- `Devices`: documented device alert badges, failed print-job counts, `Setup required`, HQ-managed printer `HQ` badges, and `Not configured` printer rows.
- `Manage Printers`: added the HQ-managed printer setup flow and clarified that failed spooler jobs drive the printer alert badge until the error queue is cleared.
- `My Subscriptions` and `First-Time Initialization`: clarified that POS device names are now recorded during activation/validation, and that deleting a POS shop profile releases the related X1 POS subscription seat before removing local setup.
- `Function and Feature Map`: added device alert badges and HQ-managed printer setup status to the `Devices` scope.

### Screenshot updates

- Added pending captures for the `Devices` alert badge states and the HQ-managed printer setup row.

### Reviewed

- Checked the POS source diff from `v1.7.12` to `v1.7.13`, including release notes, UI labels, device alert implementation, subscription activation/validation changes, and shop-profile deletion behavior.
- Confirmed Windows Store/Mac App Store packaging, desktop branding, Windows scaled-layout fixes, and update-store notice changes do not require new operator steps in the current manual baseline.

## 2026-05-04 (HQ X1 POS subscription seats)

### Updated

- `My Subscriptions`: documented the `X1 Product` tab, X1 POS seat counts, occupied and available seat states, masked device ID fallback, and the `Release device` action for replaced tablets.
- `My Subscriptions`: clarified that releasing a POS device seat does not cancel the subscription; it clears the old device so a replacement tablet can register.
- `My Subscriptions`: kept marketplace subscription review and unsubscribe guidance on the `Marketplace` tab.

### Reviewed

- Checked X1.HQ PR #242 and X1.POS PR #401 against the manual baseline.
- Confirmed no new screenshot request was added in this documentation pass.

## 2026-05-01 (v1.7.12 POS Alignment)

### Updated

- `Manage Printers` and `Devices`: documented advanced printer output settings in the printer edit dialog, including `Print Scale (%)`, line-feed controls, and dot-matrix density/color options.
- `Settings`: clarified that `Auto Print Receipt` controls receipt printing only. A payment method configured to open the drawer still opens the drawer after checkout when receipt auto-print is off.
- `Function and Feature Map`: updated the `Devices` scope for advanced printer output settings.

### Screenshot updates

- Added a pending capture for dot-matrix advanced printer settings.

### Reviewed

- Checked the POS source diff from `v1.7.11` to `v1.7.12`, including release notes and source changes.
- Confirmed the drawer-kick checkout change is a behavior fix and does not add a new cashier step.

## 2026-04-29 (v1.7.11 POS Alignment)

### Updated

- `Settings`: documented `Printing` -> `Template` -> `Label` -> `Enable adaptive text size` for long label item/modifier names.
- `Configure Payment Devices` and `Devices`: documented the Octopus V3 reader `Device ID` field and save requirement.
- New function guide: `Octopus Settlement` from the order function menu.
- `Sales Flow` and `Function and Feature Map`: added `Octopus Settlement` to the documented order functions.

### Screenshot updates

- Added pending captures for label adaptive text sizing and Octopus settlement.
- Updated the Octopus V3 reader screenshot request to include `Device ID`.

### Reviewed

- Checked POS source changes from the previous POS manual baseline through `v1.7.11`, including release notes and source diff.
- Confirmed ODO checkout status sync, background ODO uploads, takeaway navigation context, Octopus add-value slip header sizing, settlement responsiveness, and stability/crash-handling changes are behavior fixes or reliability improvements that do not require additional cashier steps beyond the updates above.

## 2026-04-25 (HQ POS user bulk creation and workspace access)

### Updated

- `POS Users`: documented `Beast Mode` for creating several POS users from one `New POS User` modal, including per-row fields and shared `User Groups`, `Shop`, login-method, and status settings.
- `Workspace Administration`: documented the `Workspace admin` access state and clarified that workspace admins already have access across the active workspace without direct company, brand, or shop assignments.

### Reviewed

- Checked the deployed HQ portal changes from X1.HQ PR #183 and PR #184 against the manual baseline.
- Confirmed no new screenshot request was added in this documentation pass.

## 2026-04-23 (HQ branding and menu-item workflow alignment)

### Updated

- `Workspace Administration` and `Brand, Shop, and Channel Scope`: documented that brand records can carry receipt branding details such as the printed receipt logo.
- `Menu Items`: documented the drawer header record context, the tab-preserving `Skip to Next` / `Update & Next` workflow, and the refined shop-settings wording for per-shop enablement.

### Reviewed

- Reviewed the HQ portal changes in `0a18a87`, `158922f`, `24fe946`, and `76a7a36` against the current manual baseline.
- Confirmed the remaining menu-catalog and workspace wording in this window did not need additional standalone pages beyond the updates above.

## 2026-04-19 (HQ/POS Permissions Alignment)

### Updated

- `POS Users`: documented user group `Permissions`, permission sections, protected POS action examples, and how saved group permissions affect POS runtime behavior.
- `Roles and Permissions`: added runtime prompt guidance for `Permission denied`, `Input staff code`, `Input authorizing staff code`, and second-authorizer checks.
- `More Tools`, `Online Orders`, and `Settings`: clarified which permission failures staff may see and when to escalate.
- `Button Styles`, `Categories`, `Smart Categories`, `Menu Items`, and `Online Categories`: documented inline `Create button style` from supported `Button Style` selectors.

### Reviewed

- Checked the latest X1.POS changes through `9f898e4` and X1.HQ changes through `b1e558c` for user-visible manual impact.
- Confirmed KPay sign error reporting, menu-item column visibility persistence, meal-set copy cleanup, and workday overlap wording are behavior/message fixes that do not need separate operational workflows beyond this release note.

## 2026-04-18 (HQ Beast Mode Bulk Creation)

### Updated

- `Categories`: documented `Category Code`, category `Shop Settings`, and `Beast Mode` for creating multiple categories with shared settings.
- `Smart Categories`: documented `Beast Mode` for creating multiple smart categories with shared settings.
- `Payment Methods`: documented `Beast Mode` for creating multiple payment methods by `Code` and `Name`.
- `Departments`: documented `Beast Mode` for `Departments`, `Sub-Departments`, and `Revenue Centers` using `Code`, `Name`, and `Description`.
- `Reasons`: documented `Beast Mode` for creating multiple reasons by `Reason Code` and `Description`.
- `Device Settings`: documented `Beast Mode` for creating multiple printer/KDS records by `Printer Name`.
- `Online Categories`: documented `Beast Mode` for creating multiple online categories by `Name` and `Name Alt`.
- `Menu Items`: documented the copy action, deep-copy behavior, `Beast Mode` multi-copy rows, shared destination category/department, and duplicate `Item Code` validation.
- `Modifier Groups`: documented the row-level copy action, source preselection, `Beast Mode` shared copy settings, and deep-copy of linked modifier items and shop pricing details.
- `Meal Sets`: documented the row-level copy action, source preselection, `Beast Mode` shared copy settings, and deep-copy of linked set items and shop pricing details.
- `Beast Mode` badges: updated the enabled badge to use the lightning icon across copy modals.

### Reviewed

- Checked the merged HQ portal updates from PR #138 and PR #139 against the manual baseline.
- Confirmed no new screenshot request was added in this documentation pass.

## 2026-04-17 (HQ Navigation and Billing Alignment)

### Updated

- `Marketplace & Billing`: renamed the HQ docs section to match the portal sidebar grouping.
- `My Subscriptions`: updated the access path to the top-level `My Subscriptions` sidebar item.
- `Billing`: updated the access path to the top-level `Billing` sidebar item and clarified custom offline contract billing.
- `Billing`: replaced promotional/free-plan wording with `Custom Contract` and `Offline Contract` guidance.
- `Promotions` and `Discounts`: updated the documented access path from `Menu Management` to `POS Settings`.

### Reviewed

- Checked the HQ portal navigation changes for subscription, billing, promotion, and discount pages against the manual baseline.
- Confirmed no new screenshots were required because this update changes navigation labels and billing wording only.

## 2026-04-14 (v1.7.9 Alignment)

### Updated

- `Settings`: documented `General` -> `Clearing` -> `Local Transaction Retention (Days)` and the device-only cleanup behavior for older closed workdays.
- `End of Day`: clarified that successful day-end can trigger local cleanup of older closed workday history based on the retention setting.
- `Data Retention and Storage`: updated local database guidance to reflect device-side cleanup of closed workday transaction history.
- `Function and Feature Map`: updated `Settings` scope for `Clearing` controls and `Local Transaction Retention (Days)`.

### Screenshot updates

- Added a pending capture for `General` -> `Clearing` showing `Local Transaction Retention (Days)`.

### Reviewed

- Checked the POS source diff from `v1.7.7` to `v1.7.9` and the published `RELEASE_NOTES_1.7.9.txt` for user-visible changes.
- Confirmed the `v1.7.8` fixes for kitchen print naming, ODO link-button visibility, and KPay handling did not require new cashier/manager instructions in the current manual baseline.
- Confirmed the `v1.7.9` disabled-modifier-group fix is a behavior correction only and does not add a new operator workflow.

### Writing cleanup

- Re-checked operational pages for stale version-specific callouts and kept release history in this page only.

## 2026-04-12 (HQ Marketplace and Channel Settings Review)

### Updated

- `Online Ordering`: rewrote `General Settings` to match the current store list and `Shop Settings` workflow.
- `Online Ordering`: added a new `3rd Party Platforms` page for store-level platform subscription and setup.
- `Online Ordering`: rewrote `Channel Settings` to match the new `By Category`, `By Shop`, and `By Channel` matrix views.
- `Online Ordering`: rewrote `Categories and Items`, `Call to Action`, `Menus and Combinations`, and `UI Translations` into the current HQ task/reference format.
- `Marketplace`: updated `Marketplace` and `My Subscriptions` guidance for platform subscriptions and downstream setup impact.

### Screenshot updates

- Added HQ screenshots for the new `Channel Settings` matrix view and the `3rd Party Platforms` shop page.

### Reviewed

- Checked commit `05a38e1` in X1 HQ (`feat: add marketplace platforms, channel subscription filtering, and pivot views`) against the current manual baseline.
- Confirmed that the user-visible doc impact is in online-ordering platform setup, channel visibility, and marketplace subscription guidance.

## 2026-04-02 (v1.7.7 Alignment)

### Updated

- `Settings`: documented `Printing` -> `Setting` -> `Auto Print Receipt`.
- `Settings`: documented `Report` -> `Daily Report Sections`, `Show advanced sections`, and the related day-end report content controls.
- `Day-end` (`client` and `functions`): clarified that printed day-end content follows the `Report` settings.
- `Function and Feature Map`: updated `Settings` scope for receipt auto-print and configurable day-end report sections.

### Screenshot updates

- Added pending captures for the new receipt auto-print toggle and the `Report` day-end section settings.

### Reviewed

- Checked the new manual price `±` button in the number input dialog against current manual coverage. No existing operator page currently teaches that dialog, so no standalone page change was required in this release batch.

### Writing cleanup

- Re-checked operational pages for stale version-specific callouts and kept release history in this page only.

## 2026-03-25 (Issue #82 Settings Mode Guidance)

### Updated

- `Settings`: added operational guidance for switching between `Restaurant` and `Quick Order` terminal modes, including the related `General` settings that control table-first vs direct-order flow.
- `Function and Feature Map`: updated `Settings` scope to include terminal mode and quick-order related general toggles.

### Screenshot updates

- Added pending captures for `Operation` -> `Terminal` mode selection and the related `General` order-mode toggles.

### Writing cleanup

- Re-checked the settings guide against current UI labels and kept the new mode guidance in the settings screen guide instead of scattering version-specific notes elsewhere.

## 2026-03-24 (v1.7.6 Alignment)

### Updated

- `Sales Flow`: added takeaway `Order Contact` availability in the function menu and clarified that saved contact details appear under the takeaway order header.
- New function guide: `Order Contact` for saving customer `Name` and `Phone` on takeaway orders.
- `Settings`: documented `Printing` -> `Setting` toggles for `Show Order Contact On Receipt` and `Show Order Contact On Kitchen Output`, plus the `Customer Contact` row in receipt template font settings.
- `Function and Feature Map`: updated ordering and settings scope for takeaway contact capture and printing controls.

### Screenshot updates

- Added pending captures for takeaway order contact entry/result and printing order-contact toggles.

### Writing cleanup

- Re-checked operational pages for stale version-specific callouts and kept release history in this page only.

## 2026-03-15 (v1.7.5 Review)

### Reviewed

- Checked `v1.7.5` release notes and source diff for user-facing changes.
- Re-checked dialog-driven workflows that use popup titles, input prompts, selection lists, date/time pickers, loading dialogs, and the paged `Select Function` dialog.

### Outcome

- No operational instruction changes were required for this release.
- No UI labels, button names, or user steps changed from the `v1.7.4` baseline.
- Existing screenshots and pending screenshot requests remain valid for documentation purposes.

### Writing cleanup

- Re-checked operational pages for stale version-specific callouts and kept release history in this page only.

## 2026-03-13 (v1.7.4 Alignment)

### Updated

- `Sales Flow`: documented paged `Select Function` behavior, added `Order Remark`, and clarified where the saved order remark appears for editing.
- `Checkout and Payments`: documented paged `Payment Methods` selection from `More` and current `Payment Remark` / `Deposit Remark` entry points.
- Function-menu guides (`Apply Discount`, `Apply Service Charge`, `Member Login`, `Split or Merge Transaction`, `To Dine-In or To Takeaway`, `Void vs Return`, `Refunds and Voids`): updated entry steps to match the paged `Select Function` dialog.
- `Change Table`: documented the selector dialog toggle between `Table List` and `Floor Plan`, plus `Show Split` / `Hide Split` behavior.
- `Function and Feature Map`: updated ordering and checkout scope for selector pagination and remark flows.

### Screenshot updates

- Added pending captures for function selector pagination, order remark display/edit, checkout payment remark edit button, and change-table dialog view toggle.

### Writing cleanup

- Re-checked operational pages for stale version-specific callouts and kept release history in this page only.

## 2026-03-10 (v1.7.3 Alignment)

### Updated

- `Settings`: expanded to cover current section layout (`General`, `Operation`, `System`, `Printing`, `Third Party Platform`, `ODO`, `Report`), restore-from-backup flow, print language override in `Printing` -> `Template`, and mapped/enabled filtering behavior.
- `Function and Feature Map`: updated `Settings` scope to include restore action, print language override, enabled-only integrations list, and mapped-only ODO channel mapping list.

### Writing cleanup

- Re-checked operational pages for stale version-specific callouts and kept release history in this page only.

## 2026-03-06 (v1.7.2 Alignment)

### Updated

- `Settings`: added `System` -> `Number` guidance for `Rounding Method`, `Decimal Places`, and `Round For Cash Only`.
- `Checkout and Payments`: clarified cash-only rounding behavior and expected real-time refresh of `Rounding` totals during checkout changes.
- `Payment Errors and Retry`: clarified expected table unlock behavior when leaving checkout through back/navigation and added cash-only rounding rule context.

### Writing cleanup

- Re-checked operational pages for stale version-specific info boxes; no additional old version callouts required conversion in this release batch.

## 2026-03-05 (v1.7.1 Alignment)

### Updated

- `Settings`: documented redesigned language configuration layout and task flows.
- `Access and Navigation` + `Sign In`: added login quick language switch guidance.
- `Sales Flow`: clarified item names follow selected language and item mapping (`Main` / `Alt`).
- `Function and Feature Map` + `Terminology`: added language/item-mapping/quick-switch references.

### Writing cleanup

- Re-checked operational pages for stale version-specific notice boxes and kept release history only in this page.

## 2026-03-05 (v1.7.0 Alignment)

### Updated

- `Configure Payment Devices`: added `Linkly EFTPOS Terminal` setup flow (pairing and save checklist).
- `Devices`: clarified `Payments` tab includes Linkly EFTPOS terminal setup.
- `Checkout and Payments`: clarified `Split By Item` can proceed even with unsent lines.
- `Payment Errors and Retry`: added EFTPOS terminal handling note (wait for terminal/POS result before retrying).
- `Info`: clarified log export includes Octopus logs when available.

### Writing cleanup

- Removed older release-specific version labels from operational tips/headings (for example `v1.6.5+`, `v1.6.6+`) and merged behavior into normal baseline instructions.

## 2026-02-27 (Data Retention Guide Added)

### Added

- New reference page: `Data Retention and Storage` with end-user guidance on local logs, media cache, local database persistence, and support uploads.

### Updated

- `Info`, `Troubleshooting`, and `Function and Feature Map` now link to the retention guide for faster policy lookup.

## 2026-02-27 (v1.6.6 Alignment)

### Updated

- `Sales Flow`: added `Floor Plan`/`Table List` toggle behavior on table screen.
- `Info`: updated log workflow to match current app actions: `Export`, `Upload`, and `Remove` selected log files.
- `Info`: clarified support path expectations for local export vs cloud upload.

### Screenshot updates

- Added new pending captures for table view toggle and updated log picker/upload UI states.

## 2026-02-22 (v1.6.5 Alignment)

### Updated

- `First-Time Initialization`: clarified that selected language applies immediately during setup and setup text is localized.
- `Day-end` (`client` and `functions`): clarified selected-date processing behavior and duplicate day-end blocking for already-closed dates.
- `Troubleshooting`: added guidance for `Day-end has already been processed for the selected day`.

## 2026-02-21 (English Draft Refresh)

### Added

- New getting-started guide: `Quick Start (15 mins)`
- New SOP page: `Daily Operations`
- New full function index: `Function and Feature Map`
- New version tracking page
- Initialization flow updated to 7 steps with language selection
- Post-initialization order-data sync flow

### Enhanced

- Troubleshooting rewritten into decision-style guidance
- Refund/void and day-end pages now include `Do / Don't` guardrails
- Role/permission guidance rewritten as practical cashier vs manager boundaries
- Screenshot mapping aligned with latest provided captures

### Pending

- Remaining screenshots listed in `SCREENSHOT_PREP_LIST_EN.md`
- HQ documentation expansion after HQ workflow is finalized
