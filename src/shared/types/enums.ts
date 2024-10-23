import { z } from 'zod'

export const Sort = z.enum(['asc', 'desc'])

export const PaginationLimit = z.union([z.literal(10), z.literal(20), z.literal(30), z.literal(40), z.literal(50)])
