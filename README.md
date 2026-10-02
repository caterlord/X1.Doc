# X1 Documentation

Public documentation site for the X1 platform, built with Docusaurus.

This repository contains the manuals for:

- POS store operations
- HQ back-office administration
- MCP integration guidance

Official links:

- Documentation: [https://docs.posx1.ai/](https://docs.posx1.ai/)
- X1 website: [https://posx1.ai/](https://posx1.ai/)

## What Is In This Repository

- `docs/getting-started/`: onboarding and first-use guidance
- `docs/client/`: POS workflows for store teams
- `docs/hq/`: HQ workflows for managers and admins
- `docs/reference/`: troubleshooting, glossary, and support references
- `docs/mcp/`: MCP and integration documentation
- `src/`: landing page and theme-level customization
- `i18n/`: translated content and theme strings

## Languages

- English (`en`)
- Traditional Chinese, Hong Kong (`zh-HK`)
- Traditional Chinese, Taiwan (`zh-TW`)
- Simplified Chinese, Singapore (`zh-SG`)
- Simplified Chinese (`zh-CN`)

## Local Development

Prerequisites:

- Node.js `20+`
- npm

Start the site locally:

```bash
npm install
npm start
```

Build the production site:

```bash
npm run build
npm run serve
```

Write translation files for a locale:

```bash
npm run write-translations -- --locale zh-HK
npm run write-translations -- --locale zh-TW
npm run write-translations -- --locale zh-SG
npm run write-translations -- --locale zh-CN
```

## Contributing

Contributions are welcome.

If you found a problem in the manual or want to improve it:

1. Open an issue using the repository issue forms.
2. Fork the repository and create a focused branch for your change.
3. Update the relevant page, screenshot, or wording.
4. Run `npm run build`.
5. Submit a pull request and link the related issue.

See [CONTRIBUTING.md](./CONTRIBUTING.md) for the full workflow.

## Reporting Documentation Problems

Use GitHub Issues for:

- incorrect steps
- outdated UI labels
- missing screenshots
- unclear wording
- broken links
- missing pages or workflows

Issue tracker:

- [https://github.com/caterlord/X1.Doc/issues](https://github.com/caterlord/X1.Doc/issues)

## Repository Policy

- This repository is public and intended for documentation collaboration.
- Do not commit local machine paths, private repository URLs, credentials, or environment-specific internal references.
- Companion product source repositories may have separate visibility and access rules.

## CI

GitHub Actions validates the documentation build on pull requests and on updates to `main`.
