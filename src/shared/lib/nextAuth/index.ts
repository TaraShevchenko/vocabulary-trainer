import { PrismaAdapter } from '@auth/prisma-adapter'
import { type DefaultSession, type NextAuthOptions, getServerSession } from 'next-auth'
import { type Adapter } from 'next-auth/adapters'
// import CredentialsProvider from 'next-auth/providers/credentials'
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
            // ...other properties
            // role: UserRole;
        } & DefaultSession['user']
    }

    // interface User {
    //   // ...other properties
    //   // role: UserRole;
    // }
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
            },
        }),
    },
    adapter: PrismaAdapter(db) as Adapter,
    providers: [
        GoogleProvider({
            name: 'Google',
            clientId: env.GOOGLE_CLIENT_ID,
            clientSecret: env.GOOGLE_CLIENT_SECRET,
        }),
        // CredentialsProvider({
        // name: 'Credentials',
        // credentials: {
        //     username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        //     password: { label: 'Password', type: 'password' },
        // },
        // async authorize(credentials, req) {
        // const user = { id: '1', name: 'J Smith', email: 'jsmith@example.com' }

        // if (user) {
        // Any object returned will be saved in `user` property of the JWT
        // return user
        // } else {
        // If you return null then an error will be displayed advising the user to check their details.
        // return null
        // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        // }
        // },
        // }),
    ],
}

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions)
