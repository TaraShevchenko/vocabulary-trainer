'use client'

import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react'

import * as RadixDropdownComponents from '@radix-ui/react-dropdown-menu'

import { cn } from 'shared/utils/cn'

export const DropdownMenuSubContent = forwardRef<
    ElementRef<typeof RadixDropdownComponents.SubContent>,
    ComponentPropsWithoutRef<typeof RadixDropdownComponents.SubContent>
>(({ className, ...props }, ref) => (
    <RadixDropdownComponents.SubContent
        ref={ref}
        className={cn(
            'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg',
            className,
        )}
        {...props}
    />
))
DropdownMenuSubContent.displayName = RadixDropdownComponents.SubContent.displayName
