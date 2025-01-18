import Image from 'next/image'

import { LangSelector } from 'features/LangSelector'
import { ThemeSelector } from 'features/ThemeSelector'

import { type Children, type ClassName } from 'shared/types'
import { Card, CardDescription, CardHeader, CardTitle } from 'shared/ui/Card'
import { Text } from 'shared/ui/Text'
import { cn } from 'shared/utils/cn'

import logo from 'public/logo.png'

type AuthCardProps = {
    title: string
    subtitle: string
} & Children &
    Partial<ClassName>

export function AuthCard({ children, className, title, subtitle }: AuthCardProps) {
    return (
        <Card className={cn('w-full max-w-[400px]', className)}>
            <CardHeader className="space-y-1">
                <div className={cn('mb-2 flex items-center justify-between')}>
                    <Image className={cn('mt-1 h-auto w-8')} src={logo} alt="Vocabulary Trainer Logo" />
                    <div className={cn('flex items-center gap-1')}>
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
    )
}
