import { getServerSession } from 'next-auth'
import { getLocale } from 'next-intl/server'

import { type Role } from 'entities/User'

import { redirect } from 'shared/lib/next-intl'
import { authOptions } from 'shared/lib/nextAuth'

export const protectRoute = async (allowedRoles: Role[]) => {
    const locale = await getLocale()
    const session = await getServerSession(authOptions)

    if (!session) {
        redirect({
            href: '/unauthorized',
            locale,
        })
    }

    if (session && !allowedRoles.includes(session.user.role)) {
        redirect({
            href: '/forbidden',
            locale,
        })
    }

    return { session }
}
