import { Header } from 'widgets/Header'
import { WelcomeBlock } from 'widgets/WelcomeBlock'

import { type LocalePageProps } from 'shared/lib/nextIntl'
import { handleGenerateMetadata } from 'shared/utils/handleGenerateMetadata'

export async function generateMetadata({ params }: LocalePageProps) {
    return await handleGenerateMetadata({
        route: '/',
        namespace: 'metadata.welcome',
        locale: params.locale,
    })
}

export default async function WelcomePage() {
    return (
        <>
            <Header />
            <WelcomeBlock />
        </>
    )
}
