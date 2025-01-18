import { getTranslations } from 'next-intl/server'

import type { Locale } from 'shared/lib/nextIntl'
import type { RoutesPathsType } from 'shared/routes'

type GenerateMetadataProps = {
    route: RoutesPathsType
    namespace: string
} & Locale

export async function handleGenerateMetadata({ route, namespace, locale }: GenerateMetadataProps) {
    const t = await getTranslations({ locale, namespace })
    const url = `${process.env.NEXT_PUBLIC_URL}/${locale}/${route}`
    return {
        title: t('title'),
        description: t('description'),
        openGraph: {
            title: t('title'),
            description: t('description'),
            url,
            type: 'website',
        },
        alternates: {
            canonical: url,
        },
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            'name': t('title'),
            'description': t('description'),
            'url': url,
        },
    }
}
