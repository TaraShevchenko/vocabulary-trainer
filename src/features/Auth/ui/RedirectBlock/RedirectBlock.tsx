import { getTranslations } from 'next-intl/server'

import { type ClassName } from 'shared/types'
import { Anchor } from 'shared/ui/Button'
import { Card, CardFooter, CardHeader } from 'shared/ui/Card'
import { Text } from 'shared/ui/Text'
import { cn } from 'shared/utils/cn'

type RedirectBlockProps = {
    url: string
    title: string
    pageName: string
    warning: string
} & Partial<ClassName>

export async function RedirectBlock({ url, title, pageName, warning, className }: RedirectBlockProps) {
    const t = await getTranslations('global')

    return (
        <Card className={cn('m-auto w-full max-w-md', className)}>
            <CardHeader>
                <Text variant="title" className={cn('text-center text-destructive')} text={t(title)} />
                <Text
                    variant="muted"
                    className={cn('text-center')}
                    text={t('you_do_not_have_permission_to_access_this_page')}
                />
            </CardHeader>
            <CardFooter className="flex flex-col items-center space-y-4">
                <Text className={cn('text-balance text-center')} text={t(warning)} />
                <Anchor href={url} text={t('go_to_{pageName}_page', { pageName: t(pageName) })} />
            </CardFooter>
        </Card>
    )
}
