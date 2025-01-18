'use client'

import { type ComponentPropsWithoutRef, type ElementRef } from 'react'

import * as RadixDropdownComponents from '@radix-ui/react-dropdown-menu'
import { type LucideIcon } from 'lucide-react'

import { Text, type TextProps } from 'shared/ui/Text'
import { cn } from 'shared/utils/cn'

export function DropdownMenuItem(
    {
        className,
        inset,
        icon: Icon,
        text,
        textProps,
        shortcut,
        shortcutProps,
        ...props
    }: Omit<ComponentPropsWithoutRef<typeof RadixDropdownComponents.Item>, 'children'> & {
        inset?: boolean
        icon?: LucideIcon
        text: string
        textProps?: Omit<TextProps, 'text'>
        shortcut?: string
        shortcutProps?: Omit<TextProps, 'text'>
    },
    ref: React.Ref<ElementRef<typeof RadixDropdownComponents.Item>>,
) {
    return (
        <RadixDropdownComponents.Item
            ref={ref}
            className={cn(
                'relative flex cursor-default select-none items-center gap-2 rounded-sm px-2.5 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                inset && 'pl-8',
                className,
            )}
            {...props}
        >
            {!!Icon && <Icon className="h-4 w-4" />}
            <Text text={text} {...textProps} />
            {!!shortcut && (
                <Text
                    className={cn('ml-auto tracking-widest opacity-60', shortcutProps?.className)}
                    variant={'sm'}
                    text={shortcut}
                    {...textProps}
                />
            )}
        </RadixDropdownComponents.Item>
    )
}

DropdownMenuItem.displayName = RadixDropdownComponents.Item.displayName
