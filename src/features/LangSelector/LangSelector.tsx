'use client'

import { Languages } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'

import { Language, type LanguageType, usePathname, useRouter } from 'shared/lib/nextIntl'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from 'shared/ui/Dropdown'

export default function LangSelector() {
    const t = useTranslations('global')
    const { replace } = useRouter()
    const pathname = usePathname()
    const locale = useLocale()

    const handleLanguageChange = (locale: string) => {
        replace(pathname, { locale: locale as LanguageType | undefined })
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger icon={Languages} buttonProps={{ size: 'iconSm', variant: 'ghost' }} />
            <DropdownMenuContent className={'py-1'} align={'end'}>
                <DropdownMenuLabel text={t('language')} />
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={locale} onValueChange={handleLanguageChange}>
                    <DropdownMenuRadioItem text={t('english')} value={Language.enum.en} />
                    <DropdownMenuRadioItem text={t('ukrainian')} value={Language.enum.ua} />
                    <DropdownMenuRadioItem text={t('russian')} value={Language.enum.ru} />
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
