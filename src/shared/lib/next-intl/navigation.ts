import { createNavigation } from 'next-intl/navigation'
import { defineRouting } from 'next-intl/routing'

import { defaultLanguage, languages } from './config'

export const routing = defineRouting({
    locales: languages,
    defaultLocale: defaultLanguage,
})

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing)
