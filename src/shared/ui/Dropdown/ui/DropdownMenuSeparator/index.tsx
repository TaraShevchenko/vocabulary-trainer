'use client'

import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react'

import * as RadixDropdownComponents from '@radix-ui/react-dropdown-menu'

import { cn } from 'shared/utils/cn'

export const DropdownMenuSeparator = forwardRef<
    ElementRef<typeof RadixDropdownComponents.Separator>,
    ComponentPropsWithoutRef<typeof RadixDropdownComponents.Separator>
>(({ className, ...props }, ref) => (
    <RadixDropdownComponents.Separator ref={ref} className={cn('-mx-1 my-1 h-px bg-muted', className)} {...props} />
))
DropdownMenuSeparator.displayName = RadixDropdownComponents.Separator.displayName
