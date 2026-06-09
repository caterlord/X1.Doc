# AGENTS.md

## Project Goal
Build and maintain the online user manual for **POS X1** using Docusaurus.

## Product Scope
- Product behavior may be verified against companion application codebases when access is available.
- Do not commit local machine paths, private repository URLs, or environment-specific internal references.
- Exclude **X1 Control Plane** changes from the online user manual. The Control Plane is an internal/partner administration surface and must not be documented in public user-facing POS X1 or HQ manuals.
- When asked to review diffs from another X1 repository and prepare documentation updates, ignore changes that belong to the X1 Control Plane, including partner control-plane pages, routes, APIs, authorization, billing, subscriptions, redeem-code, audit-log, dashboard, client-perspective, or internal-admin workspace behavior.
- Only document HQ/POS behavior that is intended for online user documentation; do not convert X1 Control Plane release notes, screenshots, or implementation changes into user manual pages.

## Documentation Structure
- `docs/getting-started/`: onboarding, login, roles, navigation
- `docs/client/`: cashier and store operations in POS app (current priority)
- `docs/hq/`: admin and back-office workflows (WIP)
- `docs/reference/`: glossary, troubleshooting, FAQ-style pages

## Languages
- `en` (default)
- `zh-HK`
- `zh-CN`
- `zh-TW`
- `zh-SG`

## Writing Rules
- Mandatory reference for all documentation work: `AGENT_WRITING_PLAYBOOK.md`
- All agents must follow `AGENT_WRITING_PLAYBOOK.md` before creating or updating any manual page.
- Audience: non-technical store operators and back-office admins.
- Use short imperative steps (`1.`, `2.`, `3.`) for procedures.
- Keep one task per page whenever possible.
- Add explicit prerequisites at the top of operational pages.
- Use real UI labels from product code (avoid paraphrased button names).
- For non-English docs, use the product repo's official localized UI labels and terminology. Do not translate UI labels from memory.
- Prefer screenshots/GIFs under `static/img/` with stable names.
- During release updates, treat the latest released app behavior as baseline documentation behavior.

### Official Terminology Rule (Must Follow)
- Before adding or changing translated manual text, verify UI labels against the relevant product source repo.
- For POS client docs, check the POS app localization files and view code first, for example the POS app `Localization/Languages/*.json` files.
- For HQ docs, check the HQ frontend route/menu configuration, page components, and locale/message files first.
- If a locale does not exist in the product repo, use the closest supported product locale consistently: use Traditional Chinese product labels for `zh-HK`/`zh-TW`, and Simplified Chinese product labels for `zh-CN`/`zh-SG`, unless maintainers provide a separate glossary.
- If the product keeps a technical field in English, keep that exact field label and add a short localized explanation only when needed.
- Do not introduce English labels such as `Settings`, `Devices`, `Payments`, or `Template` into translated docs when the product has localized labels for that locale.

### Version-Note Lifecycle Rule (Must Follow)
- Temporary version callouts in operational pages (for example `v1.6.6+`) are allowed only for newly introduced behavior.
- On later releases, if that behavior is now normal baseline, remove the version-specific label and merge the content into standard instructions.
- Keep release history in `docs/reference/version-notes.md`, not in long-lived operational callouts.
- Only keep version-scoped notes inside operational pages when multiple active app versions are intentionally supported at the same time.

### Baseline Merge Rule For New Releases (Must Follow)
- On every new app release, review operational pages for old version-specific info boxes/callouts.
- If the noted behavior is now standard in the latest release baseline, remove the version label and merge that guidance into the normal page steps/content.
- Do not keep outdated version labels in long-lived operational instructions.
- Keep release history and version timing details only in `docs/reference/version-notes.md`.

### Release Update Checklist (Must Follow)
1. Review release notes and source diff for user-visible changes only.
2. Update operational pages to latest baseline behavior.
3. Convert older version-tagged info boxes into normal instructions when no longer new.
4. Keep date/version history only in `docs/reference/version-notes.md`.
5. Search for stale version tags (`vX.Y.Z`, `vX.Y+`) and remove from operational docs unless explicitly needed for mixed-version operations.
6. If screenshots are newly required, update `SCREENSHOT_PREP_LIST_EN.md` in the same change.

## User-First Writing Standard (Must Follow)

### Primary Readers
- Front-line cashier/staff using POS during service hours.
- Shift manager handling exceptions and day-end.
- Restaurant owner reviewing operations and controls.

### Tone and Voice
- Write like an operations trainer, not an engineer.
- Use plain language and short sentences.
- Explain what to tap/click and what result to expect.
- Prefer "you" statements: "Tap `Checkout`", "You will see...".

### Avoid Developer-Centric Language
- Do not use implementation terms unless unavoidable (`API`, `payload`, `state`, `gateway callback`).
- If a technical term is required, add a plain explanation in the same sentence.
- Do not describe internals that users cannot act on.

### Page Format Template
Each operational page should follow this order:
1. `Who this is for`
2. `Before you start`
3. `Steps`
4. `What you should see`
5. `If something goes wrong`
6. `When to ask manager/admin`

### Step Quality Rules
- One action per step.
- Start every step with a verb (`Tap`, `Select`, `Enter`, `Confirm`).
- Use exact on-screen labels in backticks.
- Keep steps in real screen order.
- Include expected outcome after key actions.

### Screenshot Rules
- Every critical step should have at least one screenshot.
- Add a short caption: what screen this is and why it matters.
- If screenshot is missing, add `Screenshot pending` marker and continue writing.

### Role Clarity Rules
- Mark manager-only actions clearly with `Manager only`.
- Provide cashier-safe fallback if a step needs manager approval.

### Definition of Done (User Manual Quality Gate)
A page is done only when:
- A new cashier can execute the task without verbal explanation.
- No step requires developer knowledge.
- Error handling includes clear escalation boundary.
- UI labels in doc match screenshot labels exactly.

## Contribution Workflow
1. Start dev server: `npm start`
2. Edit docs/components/config
3. Validate: `npm run build`
4. Commit with clear scope in message (for example: `docs(client): add end-of-day flow`)

## Public Repo Issue Workflow
- When handling an issue that originates from a public repository, especially `caterlord/X1.Feedback`, refer to the POS repo's `public-repo-issue-workflow.md` before triage, labeling, mirroring, status updates, or close-out communication.
- In a sibling-checkout workspace, that workflow file should live at `../X1.POS/public-repo-issue-workflow.md`.
- Follow that workflow for product classification, private issue mirroring, public label management, status updates, PR linkage, and release communication.

## Guardrails for Agents
- Do not invent product behavior that cannot be confirmed from source repos.
- If a flow is uncertain, create a `TODO` note and ask maintainers to confirm.
- Keep navigation labels and file naming consistent with existing sections.
- Avoid changing Docusaurus config unless needed for site behavior.
- For non-English locales, keep document IDs/paths aligned with English originals.
- Keep translated docs under `i18n/<locale>/docusaurus-plugin-content-docs/current/`.
- If you add or change any `Screenshot pending` note in docs, you must update `SCREENSHOT_PREP_LIST_EN.md` in the same commit/change.
