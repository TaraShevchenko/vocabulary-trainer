'use client'

import { type ComponentPropsWithoutRef, type ElementRef } from 'react'

import * as RadixDropdownComponents from '@radix-ui/react-dropdown-menu'

import { cn } from 'shared/utils/cn'

export function DropdownMenuSeparator(
    { className, ...props }: ComponentPropsWithoutRef<typeof RadixDropdownComponents.Separator>,
    ref: React.Ref<ElementRef<typeof RadixDropdownComponents.Separator>>,
) {
    return (
        <RadixDropdownComponents.Separator ref={ref} className={cn('-mx-1 my-1 h-px bg-muted', className)} {...props} />
    )
}

DropdownMenuSeparator.displayName = RadixDropdownComponents.Separator.displayName
