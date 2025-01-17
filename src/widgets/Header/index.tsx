import Image from 'next/image'

import { getTranslations } from 'next-intl/server'

import { LogoutButton } from 'features/Auth/ui/LogoutButton'
import { LangSelector } from 'features/LangSelector'
import { ThemeSelector } from 'features/ThemeSelector'

import { Anchor } from 'shared/ui/Button'
import { Container } from 'shared/ui/Container'
import { Text } from 'shared/ui/Text'
import { cn } from 'shared/utils/cn'

import logo from 'public/logo.png'

type HeaderProps = {
    withNav?: boolean
}

export const Header = async ({ withNav }: HeaderProps) => {
    const t = await getTranslations('global')
    return (
        <header>
            <Container className={cn('flex h-14 items-center justify-between')}>
                <div className={cn('flex items-center gap-5')}>
                    <div className={cn('flex items-center gap-4')}>
                        <Image className={cn('mt-1 h-auto w-8')} src={logo} alt={'logo'} priority={false} />
                        <Text variant={'title'} text={'Vocabulary Trainer'} />
                    </div>
                    {withNav && (
                        <nav>
                            <ul className={cn('flex')}>
                                <li>
                                    <Anchor href={'dashboard'} variant={'link'} text={t('dashboard')} />
                                </li>
                            </ul>
                        </nav>
                    )}
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
