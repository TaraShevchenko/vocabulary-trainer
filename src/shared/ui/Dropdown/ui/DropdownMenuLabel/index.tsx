'use client'

import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react'

import * as RadixDropdownComponents from '@radix-ui/react-dropdown-menu'
import { type LucideIcon } from 'lucide-react'

import { Text, type TextProps } from 'shared/ui/Text'
import { cn } from 'shared/utils/cn'

// TODO Add icon to a component in props it already exists
export const DropdownMenuLabel = forwardRef<
    ElementRef<typeof RadixDropdownComponents.Label>,
    Omit<ComponentPropsWithoutRef<typeof RadixDropdownComponents.Label>, 'children'> & {
        text: string
        icon?: LucideIcon
        inset?: boolean
        textProps?: Omit<TextProps, 'text'>
    }
>(({ className, inset, icon: Icon, text, textProps, ...props }, ref) => (
    <RadixDropdownComponents.Label
        ref={ref}
        className={cn('px-2.5 py-1.5 text-sm font-semibold', inset && 'pl-8', className)}
        {...props}
    >
        <Text text={text} variant={'bold'} {...textProps} />
    </RadixDropdownComponents.Label>
))
DropdownMenuLabel.displayName = RadixDropdownComponents.Label.displayName
