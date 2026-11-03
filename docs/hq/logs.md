---
title: Logs
---

:::info[Who this is for]
Owners, managers, support staff, and back-office admins who need to review third-party communications and POS diagnostic files from HQ.
:::

## Before you start

- Confirm you are signed in to the correct HQ workspace.
- Confirm the correct brand is selected.
- Confirm which shop or terminal needs investigation.
- Use this page for operational troubleshooting. Do not download or share logs unless your business process allows it.

## Open this page

1. Open `Logs` from the Analytics area.
2. Select `API Logs` for third-party communications, or `POS Logs` for terminal files.

Screenshot pending: `logs/logs_overview_page.png` (API Logs card enabled).

## What this page controls

`Logs` is the overview for log-related tools in HQ.

- `HQ Audit Trails`: coming soon. This will be used for administrative and user-action history.
- `API Logs`: review existing third-party requests, responses and errors by brand or shop.
- `POS Logs`: available now. Use this to review log files uploaded by POS terminals.

`POS Logs` does not change POS behavior. It helps you inspect files that were already uploaded from POS.

## Review third-party API logs

1. Open `Logs` → `API Logs`.
2. Select the required scope in `Brand / Shop`.
3. Select a `Log type`. Choose `Keeta / MeiTuan` for Keeta menu sync.
4. Enter `Start date (UTC)` and `End date (UTC)`.
5. Select `Apply`.
6. Select `View` beside a request to open `Log details`.
7. Expand `Response body` and the request sections to inspect the result.

Dates include both selected days, up to 7 days. Convert the time of the issue to UTC before selecting dates. Use the page controls for more results; the newest requests appear first. `Refresh` reloads the applied filters.

`Brand logs only` excludes shop logs. Select the specific shop to find its communications. Users with shop-only access see only assigned shops and cannot inspect brand logs.

`Log details` includes HTTP status, time, method, domain, origin, request query, headers and bodies. Credentials are masked, but logs may contain other personal or business data. Review them before sharing. Long fields show a preview limit message; the preview contains up to 32,768 characters per field.

An HTTP success status does not confirm that a partner completed an operation. Read the response and verify the result in the partner system. If there are no logs, confirm the shop, log type and UTC dates. If the service reports too much data or times out, select a shorter range. If the source is unavailable, ask your administrator; an error is different from an empty result.

If `Sync Menu` explains that Keeta settings are disabled, review `Webhook enabled` and `Menu sync enabled` in MeiTuan settings with your administrator. Save the intended configuration before retrying. Viewing API logs never enables an integration or retries an operation.

Screenshot pending: `logs/api_logs_page.png` and `logs/api_log_details.png`.

## Main sections

![POS Logs page](/img/hq/logs/pos_logs_page.png)

### Crash Reports

Use `Crash Reports` for crash files automatically uploaded by POS. These usually help support understand why an app session stopped unexpectedly.

### Application Logs

Use `Application Logs` for runtime logs that a user manually uploaded from POS.

### Octopus Logs

Use `Octopus Logs` when troubleshooting Octopus payment activity from POS.

### Other Uploaded Logs

Use `Other Uploaded Logs` for manually uploaded diagnostic files that do not match the other sections.

## Key actions

### Filter by shop

1. Open `POS Logs`.
2. Use the shop filter at the top right.
3. Select `All shops` to review every mapped shop, or select one shop to narrow the tables.

Each table shows up to 500 rows per page. Use the page controls at the bottom of a table if more files are available.

### Search within a log section

1. Find the section you need, such as `Crash Reports` or `Application Logs`.
2. Use the search field in that section.
3. Search by file name, shop, platform, app version, or date text.

### Quick view a log

1. Find the log file.
2. Select `Quick view`.
3. Review the preview.
4. Download the file if you need the full content.

The preview may show only the beginning of a large file.

### Download a log

1. Find the log file.
2. Select `Download`.
3. Store or share the file according to your internal support process.

## What changes after you save

There is no save action on this page. Viewing, filtering, previewing, and downloading logs do not change POS settings or store data.

## How to check your result

- Confirm the selected brand and shop filter are correct.
- Confirm the file name, `Shop`, `Occurred at`, and `Uploaded at` values match the issue you are investigating.
- For crash reports, check `Platform` and `App version` before escalating.

## If something goes wrong

- If the page says `No logs found`, confirm the correct brand and shop are selected.
- If a shop is missing, confirm the shop has a POS shop mapping.
- If a file is not present, ask the POS user to upload logs again from the POS terminal.
- If `Quick view` does not show enough content, use `Download`.

## When to ask owner/admin

- You do not have access to the required brand or shop.
- The log may contain customer or staff-sensitive information.
- You need to send the file outside your organization.
- You are investigating repeated crashes, payment failures, or security-related activity.
