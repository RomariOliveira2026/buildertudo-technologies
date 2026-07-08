# BuilderTudo Showcase — Real Platform Assets Only

This folder contains **real screenshots** captured from the live Business OS application. No artificial mockups are used on the marketing site.

## Capture Business OS screens

1. Start Business OS (from `buildertudo-framework` monorepo):

```bash
pnpm --filter @buildertudo/business-os build
pnpm --filter @buildertudo/business-os start
```

2. From `buildertudo-site`, run:

```bash
npm run capture:screenshots
```

Screenshots are saved to `business-os/*.webp` and `manifest.json` is updated automatically.

## Product screenshots

Place real product screenshots at:

```
public/showcase/products/{slug}.webp
```

Example: `public/showcase/products/blindcare.webp`

Add the slug to `manifest.json` under `products` after capture.

## Required Business OS screens

- command-center, products-hub, crm, studio, tasks
- analytics, ai-center, framework, settings
- ceo-copilot, deploy, framework-health

Recommended: **1440×900 WebP**, quality 85–90.
