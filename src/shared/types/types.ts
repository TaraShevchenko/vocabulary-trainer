import { type ReactNode } from 'react'

import { z } from 'zod'

import { PaginationLimit } from 'shared/types/enums'

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
