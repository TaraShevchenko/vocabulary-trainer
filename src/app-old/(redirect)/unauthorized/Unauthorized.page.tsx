'use client'

import { useTranslations } from 'next-intl'

import { RedirectBlock } from 'features/Auth'

export const metadata = {
    title: 'Unauthorized',
    description: '',
}

export default function UnauthorizedPage() {
    const t = useTranslations('global')

    return (
        <RedirectBlock
            url="/login"
            title={t('access_denied')}
            pageName={t('login_page_name')}
            hint={t('please_login_to_access_the_page')}
            getWarning={(countdown: number) =>
                t('you_will_be_redirected_to_the_login_page_in_{countdown}_seconds', {
                    countdown,
                })
            }
        />
    )
}
