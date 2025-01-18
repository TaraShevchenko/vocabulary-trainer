import { Role } from '@prisma/client'

import { Header } from 'widgets/Header'

import { protectRoute } from 'shared/lib/nextAuth'
import { type LocalePageProps } from 'shared/lib/nextIntl'
import { Container } from 'shared/ui/Container'
import { Text } from 'shared/ui/Text'
import { cn } from 'shared/utils/cn'
import { handleGenerateMetadata } from 'shared/utils/handleGenerateMetadata'

export async function generateMetadata({ params }: LocalePageProps) {
    return await handleGenerateMetadata({
        route: '/admin-dashboard',
        namespace: 'metadata.admin-dashboard',
        locale: params.locale,
    })
}

export default async function AdminDashboardPage() {
    await protectRoute([Role.ADMIN])
    return (
        <>
            <Header withNav />
            <Container className={cn('mt-10 pb-8')}>
                <div className={cn('flex flex-col gap-1')}>
                    <Text variant={'title'} text={'Admin Dashboard'} />
                </div>
            </Container>
        </>
    )
}
