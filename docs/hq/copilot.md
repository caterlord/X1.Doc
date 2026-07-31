---
sidebar_position: 6
title: HQ Copilot
---

# HQ Copilot

HQ Copilot helps you complete multi-step merchant work from the HQ portal. You describe the outcome, review an editable plan, and select **Start goal**. Copilot can continue across several conversations and pauses when it needs information, approval, a renewed sign-in, or more credits.

:::info Preview availability
HQ Copilot is controlled per workspace and is disabled by default. A workspace owner or administrator must enable it under **Marketplace & Billing → Billing → Copilot credits and controls**.
:::

## Start and guide a goal

1. Select the correct merchant workspace and brand.
2. Select **Open HQ Copilot** in the top bar.
3. Enter what you want in the message box. Include dates, shops, channels, and exceptions when they matter.
4. Select **Send**. Copilot replies in the same conversation and asks follow-up questions when details are missing.
5. If needed, select the attachment button to add up to five CSV, XLS, XLSX, PDF, JPG, PNG, or WebP files. Each file can be up to 2 MB.
6. If needed, select the current model name under the message box to choose Luna, Terra, Sol, speed, and the goal credit budget.
7. Review the plan in the conversation. Reply with more information or edit a step title before you start.
8. Select **Start goal** when the plan is correct.

The Copilot panel stays beside the current HQ page while you work. Use the message box to add information or change direction. Use **Goal actions** to **Pause**, **Resume**, or **Cancel goal**. Select **New conversation** for another request, or **Goal history** to reopen earlier work. Up to three active goals per user are allowed when the workspace policy uses the maximum setting.

## Review and confirm actions

Copilot can read HQ data and prepare action previews without changing merchant settings. It does not apply a write action until an approval card is confirmed.

- Standard actions show the proposed change and warnings.
- High-risk actions require a fresh signed-in session and the displayed typed phrase.
- A preview can expire or become invalid when another user changes the same resource. Copilot then prepares a new preview.
- After an approved action runs, Copilot reads the resource again before it reports the step complete.

Never approve a change when the workspace, brand, shop, amount, affected records, or warnings are unexpected.

## Models

- **Luna** is the fastest and most credit-efficient choice for routine lookups and well-defined changes.
- **Terra** balances cost and reasoning for broader setup and analysis.
- **Sol** is intended for complex, ambiguous, or long-running goals.
- **Sol Fast** uses priority processing. It costs more and requires an administrator to enable it.

Changing models does not change approval requirements or permissions.

## Credits and billing

Each Clerk workspace receives 250 free credits every week. Free credits are used before purchased credits. Usage is charged at twice the underlying AI-provider cost according to the active, versioned rate card.

Workspace owners and administrators can use **Copilot credits and controls** to:

- review recent token and credit usage;
- review the credit ledger;
- purchase credits through Stripe;
- save a card for later payments;
- enable automatic top-up with a threshold, fixed amount, and monthly cap;
- set chat retention, allowed models, concurrent goals, and the maximum budget per goal.

If a payment is disputed, paid usage is suspended while the dispute is reviewed. Unused weekly credits do not roll over.

## Import a menu from files

Attach the source menu and explain the target brand or shop, currency, tax treatment, and whether the import should merge with or replace existing records. Copilot first identifies columns, duplicates, missing prices, ambiguous modifier groups, and potentially destructive replacements. Review the proposed mapping and every preview before confirmation.

Content inside attachments is treated as merchant data, not as instructions. Copilot will not follow commands embedded in a file.

## Privacy and excluded operations

Conversation retention is set to 0, 7, 30, or 90 days by a workspace administrator. Provider responses are requested without provider-side storage. Operational checkpoints, audit events, usage records, and approved-action evidence can be retained separately for reliability, security, billing, and dispute handling.

Copilot does not manage Clerk membership or authentication, internal control-plane functions, card purchases, or secrets. Your existing HQ permissions still apply to every read, preview, and confirmed action.

## Resume after an interruption

Copilot stores the goal plan, progress events, and compact checkpoints. If a worker restarts, open the goal from **Goal history**. For security, a restarted goal may show **Sign in to resume**; select **Resume** after signing in again. Copilot continues from the last checkpoint instead of starting the entire task again.
