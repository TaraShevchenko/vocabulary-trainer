import { type NextRequest, NextResponse } from 'next/server'

import { TRPCError } from '@trpc/server'
import { fetchRequestHandler } from '@trpc/server/adapters/fetch'

import { appRouter } from 'shared/lib/trpc/root'
import { createTRPCContext } from 'shared/lib/trpc/trpc'
import { env } from 'shared/utils/env'

const createContext = async (req: NextRequest) => {
    return createTRPCContext({
        headers: req.headers,
    })
}

const handler = (req: NextRequest) =>
    fetchRequestHandler({
        endpoint: '/api/trpc',
        req,
        router: appRouter,
        createContext: () => createContext(req),
        onError: ({ error }) => {
            if (error instanceof TRPCError && error.code === 'UNAUTHORIZED') {
                console.log('Redirected', NextResponse)
                return NextResponse.redirect('/login')
            }
            if (env.NODE_ENV === 'development') {
                console.error(`❌ tRPC failed: ${error.message}`)
            }
        },
    })

export { handler as GET, handler as POST }
