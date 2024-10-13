import Image from 'next/image'

import { LogoutButton } from 'features/Auth/ui/LogoutButton'
import { LangSelector } from 'features/LangSelector'
import { ThemeSelector } from 'features/ThemeSelector'

import { Anchor } from 'shared/ui/Button'
import { Container } from 'shared/ui/Container'
import { Text } from 'shared/ui/Text'
import { cn } from 'shared/utils/cn'

import logo from './assets/Logo.png'

export const Header = () => {
    return (
        <header>
            <Container className={cn('flex h-14 items-center justify-between')}>
                <div className={cn('flex items-center gap-5')}>
                    <div className={cn('flex items-center gap-4')}>
                        <Image className={cn('h-auto w-8 mt-1')} src={logo} alt={'logo'} priority={false} />
                        <Text variant={'title'} text={'Vocabulary Trainer'} />
                    </div>
                    <nav>
                        <ul className={cn('flex')}>
                            <li>
                                <Anchor href={'dashboard'} variant={'link'} text={'Dashboard'} />
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={cn('flex items-center gap-2')}>
                    <ThemeSelector />
                    <LangSelector />
                    <LogoutButton />
                </div>
            </Container>
        </header>
    )
}
