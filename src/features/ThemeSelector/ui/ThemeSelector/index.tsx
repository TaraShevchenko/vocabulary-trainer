'use client'

import { useEffect, useState } from 'react'

import { SunMoon } from 'lucide-react'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from 'shared/ui/Dropdown'

const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    return savedTheme ? savedTheme : prefersDark ? 'dark' : 'light'
}

const ThemeSelector = () => {
    const [theme, setTheme] = useState(getInitialTheme)

    useEffect(() => {
        const applyTheme = (theme: string) => {
            if (theme === 'system') {
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
                document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light')
            } else {
                document.documentElement.setAttribute('data-theme', theme)
            }
        }

        applyTheme(theme)
        localStorage.setItem('theme', theme)

        if (theme === 'system') {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
            const handleChange = () => applyTheme('system')
            mediaQuery.addEventListener('change', handleChange)
            return () => mediaQuery.removeEventListener('change', handleChange)
        }
    }, [theme])

    const handleThemeChange = (value: string) => {
        setTheme(value)
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger icon={SunMoon} buttonProps={{ size: 'iconSm', variant: 'ghost' }} />
            <DropdownMenuContent className={'py-1'} align={'end'}>
                <DropdownMenuLabel text={'Theme'} />
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={theme} onValueChange={handleThemeChange}>
                    <DropdownMenuRadioItem text={'Dark'} value="dark" />
                    <DropdownMenuRadioItem text={'Light'} value="light" />
                    <DropdownMenuRadioItem text={'System'} value="system" />
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ThemeSelector
