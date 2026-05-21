---
sidebar_position: 2
title: Troubleshooting
---

:::info[How to use this page]
Use the symptom index first, then open only the matching issue card below.
:::

## Quick Symptom Index

| Symptom | First action | Jump to |
| --- | --- | --- |
| Cannot sign in | Retry PIN once, check internet | [Login fails](#login-fails) |
| Printer/device not ready | Check status, run `Test Print` | [Printer or device not ready](#printer-or-device-not-ready) |
| `POS Code is required` | Fill `POS Code` in `Settings` | [POS code required](#pos-code-required) |
| Payment fails or is unclear | Retry once only if clearly failed | [Payment cannot complete](#payment-cannot-complete) |
| Cannot modify completed payment | Check third-party/payment lock rules | [Modify payment is blocked](#modify-payment-is-blocked) |
| Cannot split/merge/void | Send pending items, clear edits | [Split, merge, or void is blocked](#split-merge-or-void-is-blocked) |
| Day-end cannot proceed | Re-check business date and pending transactions | [Day-end cannot proceed](#day-end-cannot-proceed) |

## Global Triage Rules

:::warning[Stop repeated retries]
For payment and financial actions, do not retry repeatedly when result is unclear. Retry once, then escalate.
:::

:::note[Always capture evidence before escalation]
Keep transaction number, terminal POS code, timestamp, and the exact on-screen message.
:::

For log handling and retention expectations, see [Data Retention and Storage](./data-retention-and-storage).

## Issues by Symptom

### Login fails

<details>
  <summary>Open steps</summary>

1. Re-enter PIN carefully and tap `SIGN IN`.
2. Confirm correct staff account/role is being used.
3. Verify internet is stable.

Escalate to manager/admin when:

1. Login still fails after two attempts.
2. Subscription/offline warning blocks login.

</details>

### Printer or device not ready

<details>
  <summary>Open steps</summary>

1. Open `Devices` -> `Printer`.
2. Check status dot and open `Info`.
3. Run `Test Print`.
4. Check paper, cover, and network.
5. Use `Manage Spooler` if queue is stuck.
6. Open the spooler job details and check `Status`, `Attempts`, `Next retry`, and `Error`.
7. If the job is `Waiting for auto retry`, bring the printer back online and wait for the retry. If it is `Permanent error`, remove the failed job and resend the print request after the printer is ready.

Escalate to manager/admin when:

1. Test print keeps failing.
2. Printer remains offline after local checks.
3. Spooler jobs keep returning to `Error` after automatic or manual retry.

</details>

### POS code required

<details>
  <summary>Open steps</summary>

1. Open `Settings` -> `General`.
2. Fill `POS Code`.
3. Tap `Save`.
4. Return to `Devices` and retry.

![Settings General with POS Code](/img/manual/en/client/cl-05-settings-general-language-poscode.png)

Escalate to manager/admin when:

1. Cashier cannot edit settings.
2. POS code is unknown or rejected.

</details>

### Payment cannot complete

<details>
  <summary>Open steps</summary>

1. Confirm selected payment method is valid for this order.
2. If discount rules require a method (for example Octopus-linked), use that method.
3. Retry once only if status is clearly failed/cancelled.
4. If still failing, switch method based on store policy.

Escalate to manager/admin when:

1. Payment outcome is unclear (duplicate risk).
2. Payment flow appears stuck.

</details>

### Modify payment is blocked

<details>
  <summary>Open steps</summary>

1. Check whether payment is third-party linked.
2. Follow store policy for correction (often `Return` flow).
3. Record transaction details before handoff.

Escalate to manager/admin when:

1. Financial impact requires approval.
2. Both modify and return paths are blocked.

</details>

### Split, merge, or void is blocked

<details>
  <summary>Open steps</summary>

1. Send unsent items.
2. Clear pending edits.
3. Retry action once.

Escalate to manager/admin when:

1. Action stays blocked after clean retry.
2. Operation needs manager approval.

</details>

### Day-end cannot proceed

<details>
  <summary>Open steps</summary>

1. Re-check business date/time.
2. Confirm no active/pending transactions remain.
3. Retry with manager account.
4. If you see `Day-end has already been processed for the selected day`, do not retry the same date.
5. Select another date, or review the existing report for that date.

Escalate to admin when:

1. Business date appears incorrect.
2. Day-end validation remains blocked.
3. Selected-date turnover/report output is inconsistent after successful day-end.

</details>

## Escalation Data Template

Always provide:

- Terminal POS code
- User name
- Transaction/receipt number (if applicable)
- Exact screen/action
- Error message text
- Timestamp
