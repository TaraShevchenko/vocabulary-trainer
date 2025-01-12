import { Role } from '@prisma/client'

import { protectRoute } from 'shared/lib/nextAuth/protectRoute'

export const metadata = {
    title: '<FTName | pascalcase>',
    description: '',
}

export default async function <FTName | pascalcase>Page() {
    await protectRoute([Role.ADMIN, Role.USER])

    return <></>
}