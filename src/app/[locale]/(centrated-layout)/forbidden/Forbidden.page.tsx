import { RedirectBlock } from 'features/Auth'

import { type LocalePageProps } from 'shared/lib/nextIntl'
import { handleGenerateMetadata } from 'shared/utils/handleGenerateMetadata'

export async function generateMetadata({ params: { locale } }: LocalePageProps) {
    return await handleGenerateMetadata({
        route: '/forbidden',
        namespace: 'metadata.forbidden',
        locale,
    })
}

export default function ForbiddenPage() {
    return (
        <RedirectBlock
            url="/dashboard"
            title={'access_denied'}
            pageName={'dashboard'}
            // hint={'insufficient_rights'}
            warning={'please_contact_the_site_administrator_to_obtain_access_rights_to_this_page'}
        />
    )
}
