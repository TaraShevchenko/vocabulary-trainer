'use client'

import { type ComponentPropsWithoutRef, type ElementRef } from 'react'

import * as RadixDropdownComponents from '@radix-ui/react-dropdown-menu'

import { cn } from 'shared/utils/cn'

export function DropdownMenuContent(
    { className, sideOffset = 4, ...props }: ComponentPropsWithoutRef<typeof RadixDropdownComponents.Content>,
    ref: React.Ref<ElementRef<typeof RadixDropdownComponents.Content>>,
) {
    return (
        <RadixDropdownComponents.Portal>
            <RadixDropdownComponents.Content
                ref={ref}
                sideOffset={sideOffset}
                className={cn(
                    'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md',
                    className,
                )}
                {...props}
            />
        </RadixDropdownComponents.Portal>
    )
}

DropdownMenuContent.displayName = RadixDropdownComponents.Content.displayName
