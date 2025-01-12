import { Role } from '@prisma/client'

import { Header } from 'widgets/Header'

import { protectRoute } from 'shared/lib/nextAuth/protectRoute'
import { Container } from 'shared/ui/Container'
import { Text } from 'shared/ui/Text'
import { cn } from 'shared/utils/cn'

export const metadata = {
    title: 'Dashboard',
    description: 'Manage your account and settings',
}

export default async function DashboardPage() {
    await protectRoute([Role.ADMIN, Role.USER])

    return (
        <>
            <Header withNav />
            <Container className={cn('mt-10 pb-8')}>
                <div className={cn('flex flex-col gap-1')}>
                    <Text variant={'title'} text={'Dashboard'} />
                </div>
            </Container>
        </>
    )
}