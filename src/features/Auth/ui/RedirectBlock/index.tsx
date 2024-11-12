'use client'

import { type FC, useEffect, useState } from 'react'

import { useTranslations } from 'next-intl'

import { useRouter } from 'shared/lib/next-intl'
import { Anchor } from 'shared/ui/Button'
import { Card, CardFooter, CardHeader } from 'shared/ui/Card'
import { Text } from 'shared/ui/Text'
import { cn } from 'shared/utils/cn'

type RedirectBlockProps = {
    url: string
    title: string
    pageName: string
    hint: string
    getWarning: (countdown: number) => string
}

const DEFAULT_REDIRECT_TIME = 15
export const RedirectBlock: FC<RedirectBlockProps> = ({ url, title, pageName, hint, getWarning }) => {
    const t = useTranslations('global')
    const router = useRouter()
    const [countdown, setCountdown] = useState(DEFAULT_REDIRECT_TIME)

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prevCount) => {
                if (prevCount <= 1) {
                    clearInterval(timer)
                    router.push(url)
                    return 0
                }
                return prevCount - 1
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [router, url])

    return (
        <Card className={cn('m-auto w-full max-w-md')}>
            <CardHeader>
                <Text variant="title" className={cn('text-center')} text={title} />
                <Text
                    variant="muted"
                    className={cn('text-center')}
                    text={t('you_do_not_have_permission_to_access_this_page')}
                />
            </CardHeader>
            <div className={cn('mx-10 mb-5 flex h-auto w-auto flex-row rounded-lg border-2 border-destructive p-5')}>
                <div
                    className={cn(
                        'mr-4 flex h-6 w-6 items-center justify-center rounded-full border-2 border-destructive',
                    )}
                >
                    <Text variant="bold" className={cn('text-destructive')} text="!" />
                </div>
                <div className={'flex flex-col'}>
                    <Text variant="bold" className={cn('text-destructive')} text={t('access_denied')} />
                    <Text variant="default" className={cn('mt-2 text-destructive')} text={hint} />
                </div>
            </div>
            <CardFooter className="flex flex-col items-center space-y-4">
                <p className={cn('text-center text-sm text-muted-foreground')}>{getWarning(countdown)}</p>
                <Anchor href={url} text={t('go_to_{pageName}_page', { pageName })} />
            </CardFooter>
        </Card>
    )
}
