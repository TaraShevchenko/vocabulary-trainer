'use client'

import { type ComponentPropsWithoutRef, type ElementRef } from 'react'

import * as RadixDropdownComponents from '@radix-ui/react-dropdown-menu'
import { type LucideIcon } from 'lucide-react'

import { Text, type TextProps } from 'shared/ui/Text'
import { cn } from 'shared/utils/cn'

export function DropdownMenuLabel(
    {
        className,
        inset,
        text,
        textProps,
        ...props
    }: Omit<ComponentPropsWithoutRef<typeof RadixDropdownComponents.Label>, 'children'> & {
        text: string
        icon?: LucideIcon
        inset?: boolean
        textProps?: Omit<TextProps, 'text'>
    },
    ref: React.Ref<ElementRef<typeof RadixDropdownComponents.Label>>,
) {
    return (
        <RadixDropdownComponents.Label
            ref={ref}
            className={cn('px-2.5 py-1.5 text-sm font-semibold', inset && 'pl-8', className)}
            {...props}
        >
            <Text text={text} variant={'bold'} {...textProps} />
        </RadixDropdownComponents.Label>
    )
}

DropdownMenuLabel.displayName = RadixDropdownComponents.Label.displayName
