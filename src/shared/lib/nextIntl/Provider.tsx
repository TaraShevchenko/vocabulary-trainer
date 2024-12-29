import { type AbstractIntlMessages, NextIntlClientProvider } from 'next-intl'

import { type Children } from 'shared/types'

import { type LanguageType } from './config'
import enJson from './locales/en.json'
import ruJson from './locales/ru.json'
import uaJson from './locales/ua.json'

export type Locale = Record<'locale', LanguageType>

export type LocalePageProps = {
    params: Locale
}

export type NextIntlProviderProps = LocalePageProps & Children

const messages: Record<LanguageType, AbstractIntlMessages> = {
    en: enJson,
    ua: uaJson,
    ru: ruJson,
}

export function NextIntlProvider({ children, params: { locale } }: NextIntlProviderProps) {
    return (
        <NextIntlClientProvider locale={locale} messages={messages[locale]}>
            {children}
        </NextIntlClientProvider>
    )
}
