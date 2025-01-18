'use client'

import { type ComponentPropsWithoutRef, type ElementRef } from 'react'

import * as RadixDropdownComponents from '@radix-ui/react-dropdown-menu'

import { cn } from 'shared/utils/cn'

export function DropdownMenuRadioGroup(
    { className, children, ...props }: ComponentPropsWithoutRef<typeof RadixDropdownComponents.RadioGroup>,
    ref: React.Ref<ElementRef<typeof RadixDropdownComponents.RadioGroup>>,
) {
    return (
        <RadixDropdownComponents.RadioGroup ref={ref} className={cn('px-1', className)} {...props}>
            {children}
        </RadixDropdownComponents.RadioGroup>
    )
}

DropdownMenuRadioGroup.displayName = RadixDropdownComponents.RadioGroup.displayName
