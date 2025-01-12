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
    adapter: PrismaAdapter(db) as Adapter,
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60,
    },
    jwt: {
        maxAge: 30 * 24 * 60 * 60,
    },
    pages: {
        signIn: '/en/login',
    },
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
                console.log('isPasswordValid:', isPasswordValid)
                if (!isPasswordValid) {
                    return null
                }

                const { password: _, ...userWithoutPassword } = user
                console.log('userWithoutPassword:', userWithoutPassword)
                return userWithoutPassword as Omit<PrismaUser, 'password'>
            },
        }),
        GoogleProvider({
            name: 'Google',
            clientId: env.GOOGLE_CLIENT_ID,
            clientSecret: env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async session(session) {
            const { session: sessionData } = session ?? {}

            const userFromDB = await db.user.findUnique({
                where: { email: sessionData?.user?.email ?? '' },
            })

            return {
                ...sessionData,
                user: {
                    ...sessionData?.user,
                    id: userFromDB?.id,
                    role: userFromDB?.role,
                },
            }
        },
        async jwt(jwt) {
            const { token, account, user } = jwt ?? {}

            return {
                ...token,
                accessToken: account?.access_token,
                id: user?.id,
                role: user?.role,
            }
        },
    },
}

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions)
