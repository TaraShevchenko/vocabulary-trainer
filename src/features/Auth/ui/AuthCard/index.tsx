import { type FC } from 'react'

import Image from 'next/image'

import logo from 'widgets/Header/assets/Logo.png'

import { LangSelector } from 'features/LangSelector'
import { ThemeSelector } from 'features/ThemeSelector'

import { type Children } from 'shared/types/types'
import { Card, CardDescription, CardHeader, CardTitle } from 'shared/ui/Card'
import { Text } from 'shared/ui/Text'
import { cn } from 'shared/utils/cn'

type AuthCardProps = {
    title: string
    subtitle: string
} & Children

export const AuthCard: FC<AuthCardProps> = ({ title, subtitle, children }) => {
    return (
        <div className={'flex flex-col items-center pt-16'}>
            <Card className={'w-[400px]'}>
                <CardHeader className="space-y-1">
                    <div className={cn('mb-2 flex items-center justify-between')}>
                        {/* <Logo className={cn('h-9 w-fit')} /> */}
                        <Image className={cn('h-auto w-8 mt-1')} src={logo} alt="Vocabulary Trainer Logo" />
                        <div className={cn('flex items-center gap-2')}>
                            <ThemeSelector />
                            <LangSelector />
                        </div>
                    </div>
                    <CardTitle>
                        <Text variant={'title'} text={title} />
                    </CardTitle>
                    <CardDescription>
                        <Text variant={'muted'} text={subtitle} />
                    </CardDescription>
                </CardHeader>
                {children}
            </Card>
        </div>
    )
}
