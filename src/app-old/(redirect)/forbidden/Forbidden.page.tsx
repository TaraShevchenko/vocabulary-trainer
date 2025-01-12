'use client'

import { useTranslations } from 'next-intl'

import { RedirectBlock } from 'features/Auth'

export const metadata = {
    title: 'Forbidden',
    description: '',
}

export default function ForbiddenPage() {
    const t = useTranslations('global')
    return (
        <RedirectBlock
            url="/dashboard"
            title={t('access_denied')}
            pageName={t('dashboard')}
            hint={t('insufficient_rights')}
            getWarning={(countdown: number) =>
                t(
                    'please_contact_the_site_administrator_to_obtain_access_rights_to_this_page_you_will_be_redirected_to_dashboard_in_{countdown}_seconds',
                    {
                        countdown,
                    },
                )
            }
        />
    )
}
