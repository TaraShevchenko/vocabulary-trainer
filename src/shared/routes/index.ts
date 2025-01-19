import { z } from 'zod'

export const ROUTES_PATHS = [
    '/',
    '/forbidden',
    '/unauthorized',
    '/login',
    '/registration',
    '/dashboard',
    '/admin-dashboard',
] as const

export const RoutesPaths = z.enum(ROUTES_PATHS)

export type RoutesPathsType = z.infer<typeof RoutesPaths>
