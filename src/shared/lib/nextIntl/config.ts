import { getRequestConfig } from 'next-intl/server'
import { z } from 'zod'

export const Language = z.enum(['en', 'ua', 'ru'])
export type LanguageType = z.infer<typeof Language>
export const defaultLanguage = Language.enum.en
export const languages = Language.options

export default getRequestConfig(async ({ requestLocale }) => {
    const locale = await requestLocale
    return {
        locale,
        messages: ((await import(`./locales/${locale ?? defaultLanguage}.json`)) as { default: Record<string, string> })
            .default,
    }
})
