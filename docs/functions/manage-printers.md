---
title: Manage Printers
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info[Who this is for]
Manager or authorized staff managing printer setup and maintenance in `Devices` -> `Printer`.
:::

## Before you start

- You are signed in with device-setting permission
- Target printer is powered on and connected to the same network
- `POS Code` is set
- If the printer was created in HQ, confirm the HQ printer name before editing the POS connection details

## Quick flow

1. Open `Devices`.
2. Open `Printer` tab.
3. Check any row badge such as `HQ`, `Not configured`, or failed-job count.
4. Select the printer row (or tap `Add Printer`).
5. Run the required action (`Info`, `Test Print`, edit, remove, or spooler).
6. Verify status before returning to operations.

## Tasks

<Tabs>
  <TabItem value="add-printer" label="Add Printer">
1. Tap `Add Printer`.
2. Fill `Name`, `Printer Type`, `Connection`, `IP Address`, and `Port`.
3. Tap `Save`.
4. Tap `Test Print`.

What to verify:

- Printer appears in list
- Status is connected/ready
- Test print success message appears
- If this is an HQ-managed printer, the row still shows `HQ` after the local connection details are saved

![Add Printer dialog](/img/manual/en/client/miss_3_device_printer_add.png)
![Printer added successfully](/img/manual/en/client/miss_4_device_printer_add_completed.png)
</TabItem>
  <TabItem value="hq-managed" label="HQ-managed Printer">
1. Open the `Printer` tab.
2. Find the printer row with the `HQ` badge.
3. If the row also shows `Not configured`, tap edit.
4. Fill the local connection details such as `Printer Type`, `Connection`, `IP Address`, and `Port`.
5. Tap `Save`.
6. Tap `Test Print`.

What to verify:

- The `HQ` badge remains on the printer row
- The `Not configured` label clears after the local setup is saved
- `Test Print` succeeds before you return to service

</TabItem>
  <TabItem value="info-status" label="Printer Info and Status">
1. Tap `Info` on target printer row.
2. Review `Connection Details` and `Status Details`.
3. Tap `Close`.

What to verify:

- `Type`, `Address`, `Status`, and `Last checked` are correct

![Printer Info status dialog](/img/manual/en/client/cl-02-devices-printer-info-status.png)
  </TabItem>
  <TabItem value="test-print" label="Test Print">
1. Tap `Test Print` on target printer row.
2. Wait for result message.
3. Confirm physical test slip output.

What to verify:

- Success message: `Test print sent to '<PrinterName>' successfully`

![Test Print result](/img/manual/en/client/cl-03-devices-test-print-result.png)
  </TabItem>
  <TabItem value="edit-remove" label="Edit or Remove Printer">
1. Tap edit icon to update `Name`, `Printer Type`, `Connection`, `IP Address`, and `Port`.
2. Turn `Show advanced settings` on when you need output adjustments.
3. Set `Print Scale (%)`, `Header extra line feed`, or `Footer extra line feed` only when the test output needs adjustment.
4. If `Printer Type` is `Dot Matrix`, set `Dot matrix density` and `Dot matrix color`.
5. Tap `Save`.
6. To remove, tap delete icon.
7. Confirm removal prompt.

What to verify:

- Updated settings are shown in printer row
- For `Dot Matrix`, `High density` prints clearer but slower, and `Normal density` prints faster with less detail
- `Color (red / black)` sends red content to the red ribbon; `Black only` prints all content in black
- Removed printer disappears from list

> Screenshot pending: `functions/fn-printer-remove-confirm-dialog.png`
> Screenshot pending: `functions/fn-printer-dot-matrix-advanced-settings.png`
  </TabItem>
  <TabItem value="spooler" label="Manage Printer Spooler">
1. Tap `Manage Spooler` on target printer row.
2. Review tabs: `Queue`, `History`, `Needs attention`.
3. Select the job thumbnail to use `Open print preview`. In the preview, pinch or scroll to zoom and drag to pan, then tap `Close`.
4. Select the row info button when you need to inspect a job. The details can show `Status`, `Driver`, `Delivery`, `Retry source`, `Attempts`, `Vendor job ID`, `Next retry`, and `Printer message`.
5. Use required actions:
   - `Refresh`
   - `Clear Selection`
   - `Remove Selected`
   - `Remove All`
6. In `Needs attention`, use the bulk actions `Select All`, `Retry selected safe jobs`, and `Retry all safe jobs` when appropriate.
7. For an individual job, use the action that matches its state:
   - `Retry now` for a job that is confirmed not sent
   - `Retry anyway` only after reviewing the duplicate-risk warning
   - `Mark as printed` when the job was already printed elsewhere and must not be sent again
   - `Cancel` to cancel a queued job

What to verify:

- Queue decreases after retry/remove actions
- A job marked `Waiting for auto retry` may clear by itself after the printer is ready again
- A job marked `Permanent error` needs manual review, removal, or a fresh print request
- A job marked `Outcome unknown` may already have printed; review it individually before retrying or marking it as printed
- New print jobs are processed normally
- Removing jobs from `Needs attention` cancels them and keeps them in `History`
- The failed-job badge on the printer row clears after the `Needs attention` queue is empty

> Screenshot pending: `functions/fn-printer-spooler-manager-dialog.png`
> Screenshot pending: `functions/fn-printer-spooler-preview-dialog.png`
> Screenshot pending: `functions/fn-printer-spooler-needs-attention-actions.png`
  </TabItem>
</Tabs>

## If something goes wrong

:::warning[Test print fails]
Check IP/port, paper, printer cover, and network, then retry once.
:::

:::warning[Status remains disconnected]
Verify power/network on printer first, then run `Test Print`.
:::

:::note[Spooler retries do not clear error jobs]
Open the spooler job details. If the job is waiting for automatic retry, confirm the printer is online and wait for the next retry. If the job is a permanent error or repeated retries fail, remove the failed job, validate connectivity, then resend the order or print request.
:::

:::warning[`Not configured` on an HQ-managed printer]
Edit the printer row and save the local connection details for this POS. The HQ record defines that the printer should exist, but each terminal still needs a working local connection before it can print.
:::

:::warning[Failed to remove printer]
If removal partially fails, refresh printer list and confirm whether spooler files still exist.
:::

## When to ask manager/admin

- `POS Code` is required but you cannot edit settings
- Printer settings save succeeds but printer remains unavailable
- Spooler error queue keeps growing after retry/remove
