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
- `snapop.app/*` is configured as a Cloudflare Workers route.

## Commands

```sh
npm i
npm run dev
npm test
npm run typecheck
npm run deploy
```

## Deployment

Deploys should be handled by Cloudflare Workers Builds, not GitHub Actions.

Configure the existing `snapop-landing-page` Worker in Cloudflare:

- Git repository: `randomor/snapop-landing-page`
- Production branch: `main`
- Root directory: `/`
- Build command: empty
- Deploy command: `npx wrangler deploy`

After that, Cloudflare watches pushes to `main` and deploys from its own build system.
