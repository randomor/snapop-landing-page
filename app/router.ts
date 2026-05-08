import { createRouter } from 'remix/fetch-router'
import type { Router } from 'remix/fetch-router'

import { home } from './controllers/home.tsx'
import { routes } from './routes.ts'

export function mapAppRoutes(target: Router = createRouter()) {
  target.map(routes.home, home)
  return target
}

export const router = mapAppRoutes()
