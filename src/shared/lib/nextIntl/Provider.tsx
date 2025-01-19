import { type AbstractIntlMessages, NextIntlClientProvider } from 'next-intl'

import { type LanguageType } from './config'
import enJson from './locales/en.json'
import ruJson from './locales/ru.json'
import uaJson from './locales/ua.json'
import { type NextIntlProviderProps } from './types'

const messages: Record<LanguageType, AbstractIntlMessages> = {
    en: enJson,
    ua: uaJson,
    ru: ruJson,
}

export function NextIntlProvider({ locale, children }: NextIntlProviderProps) {
    return (
        <NextIntlClientProvider locale={locale} messages={messages[locale]}>
            {children}
        </NextIntlClientProvider>
    )
}
