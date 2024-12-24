import { getServerSession } from 'next-auth'
import { getLocale } from 'next-intl/server'

import { type Role } from 'entities/User'

import { authOptions } from 'shared/lib/nextAuth'
import { redirect } from 'shared/lib/nextIntl'

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
