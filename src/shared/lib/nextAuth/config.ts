import { PrismaAdapter } from '@auth/prisma-adapter'
import { type User as PrismaUser } from '@prisma/client'
import { compare } from 'bcryptjs'
import { type DefaultSession, type NextAuthOptions, getServerSession } from 'next-auth'
import { type Adapter } from 'next-auth/adapters'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'

import { db } from 'shared/lib/prisma'
import { env } from 'shared/utils/env'

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module 'next-auth' {
    interface Session extends DefaultSession {
        user: {
            id: string
            role: PrismaUser['role']
        } & DefaultSession['user']
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface User extends Omit<PrismaUser, 'password'> {}
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
    callbacks: {
        session: ({ session, user }) => ({
            ...session,
            user: {
                ...session.user,
                id: user.id,
                role: user.role,
            },
        }),
        jwt: ({ token }) => {
            return token
        },
    },
    adapter: PrismaAdapter(db) as Adapter,
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null
                }

                const user = await db.user.findUnique({
                    where: { email: credentials.email },
                })

                if (!user?.password) {
                    return null
                }

                const isPasswordValid = await compare(credentials.password, user.password)

                if (!isPasswordValid) {
                    return null
                }

                const { password: _, ...userWithoutPassword } = user
                return userWithoutPassword as Omit<PrismaUser, 'password'>
            },
        }),
        GoogleProvider({
            name: 'Google',
            clientId: env.GOOGLE_CLIENT_ID,
            clientSecret: env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    session: {
        strategy: 'jwt',
    },
    pages: {
        signIn: '/login',
    },
}

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions)
