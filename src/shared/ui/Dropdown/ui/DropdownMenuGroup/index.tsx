'use client'

import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react'

import * as RadixDropdownComponents from '@radix-ui/react-dropdown-menu'

import { cn } from 'shared/utils/cn'

export const DropdownMenuGroup = forwardRef<
    ElementRef<typeof RadixDropdownComponents.Group>,
    ComponentPropsWithoutRef<typeof RadixDropdownComponents.Group>
>(({ className, children, ...props }, ref) => (
    <RadixDropdownComponents.Group ref={ref} className={cn('px-1', className)} {...props}>
        {children}
    </RadixDropdownComponents.Group>
))
DropdownMenuGroup.displayName = RadixDropdownComponents.Group.displayName
