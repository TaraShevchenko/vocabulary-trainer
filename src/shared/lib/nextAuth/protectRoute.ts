import { redirect } from 'next/navigation'

import { getServerSession } from 'next-auth'

import { type Role } from 'entities/User'

import { authOptions } from 'shared/lib/nextAuth'

export const protectRoute = async (allowedRoles: Role[]) => {
    const session = await getServerSession(authOptions)

    if (!session) {
        redirect('/unauthorized')
    }

    if (!allowedRoles.includes(session.user.role)) {
        redirect('/forbidden')
    }

    return { session }
}
