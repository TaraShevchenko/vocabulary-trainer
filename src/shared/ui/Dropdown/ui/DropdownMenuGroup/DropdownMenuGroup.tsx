'use client'

import { type ComponentPropsWithoutRef, type ElementRef } from 'react'

import * as RadixDropdownComponents from '@radix-ui/react-dropdown-menu'

import { cn } from 'shared/utils/cn'

export function DropdownMenuGroup(
    { className, children, ...props }: ComponentPropsWithoutRef<typeof RadixDropdownComponents.Group>,
    ref: React.Ref<ElementRef<typeof RadixDropdownComponents.Group>>,
) {
    return (
        <RadixDropdownComponents.Group ref={ref} className={cn('px-1', className)} {...props}>
            {children}
        </RadixDropdownComponents.Group>
    )
}

DropdownMenuGroup.displayName = RadixDropdownComponents.Group.displayName
