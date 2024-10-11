'use client'

import { Languages } from 'lucide-react'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from 'shared/ui/Dropdown'

const LangSelector = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger icon={Languages} buttonProps={{ size: 'iconSm', variant: 'ghost' }} />
            <DropdownMenuContent className={'py-1'} align={'end'}>
                <DropdownMenuLabel text={'Language'} />
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value="en">
                    <DropdownMenuRadioItem text={'English'} value="en" />
                    <DropdownMenuRadioItem text={'Ukrainian'} value="ua" />
                    <DropdownMenuRadioItem text={'Russian'} value="ru" />
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default LangSelector
