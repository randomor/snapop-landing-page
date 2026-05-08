# SnaPOP Landing Page Agent Guide

This app was scaffolded with `remix new` and trimmed to a single SnaPOP landing page.

## Commands

```sh
npm i
npm run start
npm test
npm run typecheck
```

## Building Features

Refer to ./agents/skills/remix/SKILL.md

## Deployment

- Cloudflare Workers is configured to watch `origin/main`; commits pushed there automatically trigger a deploy.
- `wrangler.jsonc` remains the local Cloudflare Workers config, but routine deploys should happen through the push-triggered Cloudflare pipeline.

## Design Sources

- App preview and OG image design live in Figma:
  https://www.figma.com/design/7jw2ZlAhPoXgdWzai3LWVA/App-Preview-Design?node-id=0-1&p=f&t=lOjSLx2xpauGdufx-0
- The editable OG source frame is `OG Image - SnaPOP`:
  https://www.figma.com/design/7jw2ZlAhPoXgdWzai3LWVA/App-Preview-Design?node-id=46-2
- Export that Figma frame to update `public/og-image.png`; avoid treating the OG image as a one-off generated raster.

## Layout

- `app/controllers/home.tsx` owns the home page
- `app/ui/snapop-page.tsx` renders the single page
- `public/snapop-icon.png` is the local app icon asset
- `app/routes.ts` defines the route contract
- `app/router.ts` wires routes to route handlers
- `app/utils/render.tsx` centralizes HTML response rendering
- `worker.ts` is the Cloudflare Workers entry point
- `wrangler.jsonc` configures Cloudflare Workers static assets

## Route Ownership

- Start from `app/routes.ts` and map each route to the narrowest owner on disk.
- Keep simple pages in flat files like `app/controllers/home.tsx`.
- Promote a route into a controller folder with `controller.tsx` only when it gains nested routes, multiple actions, or route-owned modules.
- Keep route-owned page modules next to the route that owns them.
- Move shared UI to `app/ui/`, not `app/controllers/`.

## Build-Out Notes

- This starter intentionally begins small; add directories like `app/data/`, `app/middleware/`, `public/`, and `test/` only when you need them.
- Prefer putting code in the narrowest owner before introducing shared modules.
- Avoid generic dumping-ground directories like `app/lib/` or `app/components/`.
