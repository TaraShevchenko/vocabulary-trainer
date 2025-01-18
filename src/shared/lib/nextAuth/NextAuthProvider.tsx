'use client'

import { type Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'

import { type Children } from 'shared/types'

type NextAuthProviderProps = {
    session: Session | null
} & Children

export const NextAuthProvider = ({ children, session }: NextAuthProviderProps) => {
    return <SessionProvider session={session}>{children}</SessionProvider>
}
