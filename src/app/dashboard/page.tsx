import { Header } from 'widgets/Header'

import { Container } from 'shared/ui/Container'
import { Text } from 'shared/ui/Text'
import { cn } from 'shared/utils/cn'

export default function Dashboard() {
    return (
        <>
            <Header />
            <Container className={cn('mt-10 pb-8')}>
                <div className={cn('flex flex-col gap-1')}>
                    <Text variant={'title'} text={'Dashboard'} />
                </div>
            </Container>
        </>
    )
}