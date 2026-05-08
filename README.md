# SnaPOP Landing Page

A minimal Remix 3 beta landing page for SnaPOP.

## Shape

- `app/controllers/home.tsx` owns the home page.
- `app/ui/snapop-page.tsx` renders the single page.
- `public/snapop-icon.png` is served through Remix static middleware.
- `app/routes.ts` defines the route contract.
- `app/router.ts` wires routes to handlers.
- `app/utils/render.tsx` centralizes HTML response rendering.
- `worker.ts` is the Cloudflare Workers entry point.
- `wrangler.jsonc` configures the Worker and static assets.

## Commands

```sh
npm i
npm run dev
npm test
npm run typecheck
npm run deploy
```
