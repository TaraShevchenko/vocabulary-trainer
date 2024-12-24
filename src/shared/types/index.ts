import { type ReactNode } from 'react'

import { z } from 'zod'

export const Sort = z.enum(['asc', 'desc'])

export const PaginationLimit = z.union([z.literal(10), z.literal(20), z.literal(30), z.literal(40), z.literal(50)])

export const PaginationPayloadScheme = z.object({
    take: PaginationLimit.optional(),
    skip: z.number().optional(),
})

export const PaginationResponseScheme = z.object({
    page: z.number(),
    perPage: PaginationLimit,
    totalPages: z.number(),
    totalItems: z.number(),
})

export const ErrorResponseScheme = z.object({
    status: z.number(),
    data: z.object({
        timestamp: z.string().datetime(),
        path: z.string(),
        message: z.string(),
        messageCode: z.number(),
        originalError: z.any().optional(),
    }),
})

export type Children = {
    children: ReactNode
}

export type XOR<T, U> = T | U extends object ? (T extends U ? never : T) | (U extends T ? never : U) : T | U
