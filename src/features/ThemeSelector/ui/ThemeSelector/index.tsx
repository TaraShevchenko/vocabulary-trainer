'use client'

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

const ThemeSelector = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger icon={SunMoon} buttonProps={{ size: 'iconSm', variant: 'ghost' }} />
            <DropdownMenuContent className={'py-1'} align={'end'}>
                <DropdownMenuLabel text={'Theme'} />
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value="dark">
                    <DropdownMenuRadioItem text={'Dark'} value="dark" />
                    <DropdownMenuRadioItem text={'Light'} value="light" />
                    <DropdownMenuRadioItem text={'System'} value="system" />
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ThemeSelector
