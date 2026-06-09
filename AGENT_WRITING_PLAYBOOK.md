# Agent Writing Playbook (X1 Manuals)

This is the canonical writing guide for all agents editing this repository.

It applies to:

- POS client documentation
- HQ web portal documentation
- supporting reference pages

It does not apply to **X1 Control Plane**. Do not include X1 Control Plane changes in the online user manual. When reviewing diffs from X1 product repositories to prepare documentation updates, exclude Control Plane changes such as partner control-plane UI, APIs, authorization, dashboard, clients, subscriptions, redeem codes, billing, audit logs, and internal-admin workspace behavior.

The manual is operational training, not developer documentation.

## 1) Objective

Write so a first-time user can complete a task without verbal coaching.

- POS pages train store operators during service.
- HQ pages train admins, managers, and owners doing setup or maintenance.
- Reference pages explain terms, limits, and recovery steps users can act on.

Do not assume the reader understands restaurant systems, configuration scope, or how a change moves from HQ to the POS.

## 2) Audience Model

Write for the user doing the work now.

### POS readers

- front-line cashiers
- shift managers
- store operators

### HQ readers

- owners
- regional managers
- back-office admins
- setup staff responsible for menus, stores, reports, online ordering, and integrations

For HQ pages, assume the reader may be strong in operations but weak in system setup.

## 3) Benchmark Standard

High-quality admin docs should feel like an enterprise platform guide:

- clear section overviews before detail pages
- exact navigation paths
- prerequisite and permission callouts
- scope explanation (`brand`, `shop`, `channel`, or `user`)
- downstream impact explanation
- verification steps after save
- links to adjacent tasks and concepts

This repository should match that level of guidance without copying another product's structure or inventing behavior that our products do not have.

## 4) Core Writing Principles

- Use plain, direct language.
- Write action-first steps.
- Use "you" statements.
- Explain what to do and what result to expect.
- Prefer exact UI labels in backticks.
- Keep one primary user goal per page whenever possible.
- Separate concepts from procedures when combining them would make the page harder to scan.
- In translated docs, use official localized labels from the POS/HQ product repos. Do not translate UI labels from memory.

Do:

- "Open `POS Settings`."
- "Select the correct shop before you edit the schedule."
- "After you save, check that the new payment method is available in the selected shop."

Do not:

- explain internals users cannot act on
- use engineering jargon without plain explanation
- bury important warnings in long paragraphs
- assume users understand brand-level versus shop-level scope

## 4.1) Official Product Terms and Translation

Product UI labels are source-controlled in the product repos. The manual must follow those labels exactly.

For POS client pages:

- Check the POS app localization files and the relevant view/view-model code before writing translated labels.
- Use the POS app's official terms for screen names, tabs, fields, dialogs, buttons, and messages.
- If a POS locale is not available, use the nearest supported POS locale consistently: Traditional Chinese labels for `zh-HK`/`zh-TW`, and Simplified Chinese labels for `zh-CN`/`zh-SG`, unless maintainers provide a separate glossary.

For HQ pages:

- Check the HQ frontend route/menu configuration, page components, and locale/message files before writing translated labels.
- Use the HQ portal's official terms for navigation groups, pages, tabs, fields, buttons, and validation messages.

Rules:

- Keep technical labels in English only when the product locale keeps them in English.
- Do not leave English labels in translated docs when the product has localized labels.
- If a field is technical but the product also has a localized label, use the localized label first and optionally add the English term in parentheses for clarity.
- When a screenshot caption or pending screenshot request names UI, use the same official product label that the user will see on screen.

## 5) Information Architecture

Every manual section should support one of these page types.

### A) Overview / Index page

Use for a major section such as `Store Settings`, `POS Settings`, `Reports`, or `Online Ordering`.

Purpose:

- explain what the section controls
- help beginners choose the correct page
- show recommended reading or setup order
- link to every child task page

### B) Task / How-to page

Use when the user is trying to complete one real task.

Examples:

- create a payment method
- configure a workday schedule
- attach a modifier group

### C) Screen / Settings reference page

Use when a single screen contains many fields or tabs that users need to understand before editing.

Examples:

- `Dashboard`
- `Payment Vendors`
- `Smart Categories`

### D) Concept page

Use for mental models users must understand before editing.

Examples:

- brand vs shop scope
- role access model
- rollout and verification expectations

### E) Troubleshooting page

Use for symptom-led recovery guidance.

## 6) Required HQ Documentation Model

HQ documentation must answer these questions explicitly:

1. Where do I go in HQ?
2. Who should do this task?
3. What scope does this change affect?
4. What should I prepare before editing?
5. What should I change, in what order?
6. What happens after I save?
7. How do I verify the result?
8. When should I stop and ask an owner/admin?

If a page does not answer those questions, it is not done.

## 7) Page Templates

### A) HQ overview page

Use this order:

1. `Who this is for`
2. `Before you start`
3. `What this section is for`
4. `How to use this section`
5. `Common tasks`
6. `What changes after you save`
7. `If something goes wrong`
8. `When to ask owner/admin`

### B) HQ task page

Use this order:

1. `Who this is for`
2. `Before you start`
3. `Open this page`
4. `What this page controls`
5. `Steps`
6. `What changes after you save`
7. `How to check your change`
8. `If something goes wrong`
9. `When to ask owner/admin`

### C) HQ settings reference page

Use this order:

1. `Who this is for`
2. `Before you start`
3. `Open this page`
4. `What this page is for`
5. `Main sections` or `Main tabs`
6. `Key fields` or `Key actions`
7. `What changes after you save`
8. `How to check your change`
9. `If something goes wrong`
10. `When to ask owner/admin`

### D) POS workflow page

Use this order:

1. `Who this is for`
2. `Before you start`
3. `Steps`
4. `What you should see`
5. `If something goes wrong`
6. `When to ask manager/admin`

### E) POS screen guide page

Use this order:

1. `Who this is for`
2. `Before you start`
3. `What this screen is for`
4. `Main views` or `Main sections`
5. `Steps`
6. `What you should see`
7. `If something goes wrong`
8. `When to ask manager/admin`

### F) Concept page

Use this order:

1. `Who this is for`
2. `Why this matters`
3. `Core idea`
4. `How this affects your work`
5. `Related tasks`
6. `When to ask owner/admin`

## 8) Navigation Rules

Every HQ page must include the exact navigation path near the top, using real labels from the product.

Examples:

- `Dashboard`
- `Store Settings` -> `Workday Schedule`
- `POS Settings` -> `Payment Vendors`
- `Marketplace` -> `Billing`

For HQ navigation labels, verify against:

- the HQ frontend route configuration
- related page components and locale strings in the HQ frontend

Do not rely on memory for page names.

## 9) Scope Rules

HQ pages must identify the scope of the change.

Use plain labels such as:

- `Brand-level`
- `Shop-level`
- `Channel-specific`
- `User-specific`

If the scope is mixed, say so explicitly.

Example:

- "Create the payment method at brand level, then enable it per shop."

## 10) Permission Rules

If a task requires elevated access, call it out near the top.

Use simple phrasing:

- `Owner/admin only`
- `Admin or finance lead`
- `Manager with billing access`

If the exact permission name is unknown, describe the business role instead of inventing permission labels.

## 11) Save, Publish, Sync, and Verification Rules

HQ pages must explain what the user should expect after making a change.

Document one of these patterns:

- change is visible immediately in HQ only
- change applies to the selected shop after save
- change requires additional per-shop configuration
- change appears in another channel after that channel refreshes or republishes
- rollout behavior is unclear and needs confirmation

If rollout behavior is not confirmed from code, screenshots, or product owners:

- do not invent it
- document the verification step instead
- add a clear `TODO` only when necessary

Always tell the user how to verify the result.

## 12) Step Writing Rules

- One user action per numbered step.
- Start with verbs: `Open`, `Select`, `Enter`, `Choose`, `Save`, `Confirm`.
- Keep the real screen order.
- Use exact on-screen labels in backticks.
- After critical steps, state expected result.
- If a step changes scope, say it in the same step.

## 13) Field Table Rules

Use a field table when users need to understand more than three settings on one screen.

Recommended columns:

- `Field`
- `What it controls`
- `When to change it`

Optional columns:

- `Scope`
- `Typical value`
- `Risk if set incorrectly`

Do not dump raw schema-style tables into the manual.
Explain user intent, not database design.

## 14) Docusaurus Component Rules

Use admonitions intentionally:

- `:::info` context, role, or scope
- `:::note` clarification
- `:::tip` best practice
- `:::warning` recoverable risk
- `:::danger` destructive or high-risk action

Use `Tabs` only when there are genuinely different valid paths.

Good uses:

- different order types
- different roles
- different channel setups

Do not use tabs as decoration.

For troubleshooting pages with many issues:

- do not use tabs as the main issue container
- use a top `Quick Symptom Index`
- use expandable `<details>` sections per issue

## 15) Screenshot Policy

- Prefer one screenshot for each critical decision point, modal, or result state.
- HQ overview pages do not need screenshots unless navigation would otherwise be unclear.
- If a screenshot is missing, add explicit `Screenshot pending: <filename>.png`.
- Keep pending items synchronized in `SCREENSHOT_PREP_LIST_EN.md`.
- When you add, remove, or change screenshot needs in docs, update `SCREENSHOT_PREP_LIST_EN.md` in the same change.

## 16) Accuracy Rules

- Verify labels from source code, screenshots, or both.
- Do not invent behavior.
- If a workflow is only partially confirmed, limit the page to confirmed behavior and state the boundary clearly.
- Prefer route labels, locale strings, and visible UI text over internal variable names.

## 17) Linkage Rules

- Every overview page must link to its child task pages.
- Every task page must link back to its section overview.
- If two settings are commonly configured together, cross-link them.
- If a page references a follow-up task, provide a clickable link.
- Do not leave users at a dead end after a setup task.

## 18) Quality Gate

A page is done only when:

- a new user can identify whether this is the right page
- the page states the scope of the change
- the page uses exact UI labels
- the page explains what happens after save
- the page tells the user how to verify the result
- escalation boundaries are explicit
- related guides are linked
- screenshot state is explicit

## 19) Final Validation Before Handover

1. Run `npm run build`.
2. Check sidebar visibility for new pages.
3. Verify links are clickable.
4. Verify new HQ pages appear in the correct section.
5. Update `SCREENSHOT_PREP_LIST_EN.md` if screenshot needs changed.
