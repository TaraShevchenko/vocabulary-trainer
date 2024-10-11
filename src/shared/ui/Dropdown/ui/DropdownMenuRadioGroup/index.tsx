'use client'

import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react'

import * as RadixDropdownComponents from '@radix-ui/react-dropdown-menu'

import { cn } from 'shared/utils/cn'

export const DropdownMenuRadioGroup = forwardRef<
    ElementRef<typeof RadixDropdownComponents.RadioGroup>,
    ComponentPropsWithoutRef<typeof RadixDropdownComponents.RadioGroup>
>(({ className, children, ...props }, ref) => (
    <RadixDropdownComponents.RadioGroup ref={ref} className={cn('px-1', className)} {...props}>
        {children}
    </RadixDropdownComponents.RadioGroup>
))
DropdownMenuRadioGroup.displayName = RadixDropdownComponents.RadioGroup.displayName
