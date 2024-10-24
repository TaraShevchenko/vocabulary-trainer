'use client'

import { type ReactNode } from 'react'

import { type Session } from 'next-auth'
import { SessionProvider as OriginalSessionProvider } from 'next-auth/react'

export const SessionProvider = ({ children, session }: { children: ReactNode; session: Session | null }) => {
    return <OriginalSessionProvider session={session}>{children}</OriginalSessionProvider>
}
