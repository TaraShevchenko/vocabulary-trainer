import { Role } from '@prisma/client'

import { protectRoute } from 'shared/lib/nextAuth/protectRoute'

export const metadata = {
    title: 'AdminDashboard',
    description: '',
}

export default async function AdminDashboardPage() {
    await protectRoute([Role.ADMIN])

    return <></>
}
