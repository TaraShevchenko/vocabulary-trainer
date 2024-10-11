'use client'

import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react'

import * as RadixDropdownComponents from '@radix-ui/react-dropdown-menu'
import { Circle } from 'lucide-react'

import { Text, type TextProps } from 'shared/ui/Text'
import { cn } from 'shared/utils/cn'

export const DropdownMenuRadioItem = forwardRef<
    ElementRef<typeof RadixDropdownComponents.RadioItem>,
    ComponentPropsWithoutRef<typeof RadixDropdownComponents.RadioItem> & {
        text: string
        textProps?: Omit<TextProps, 'text'>
    }
>(({ className, children, text, textProps, ...props }, ref) => (
    <RadixDropdownComponents.RadioItem
        ref={ref}
        className={cn(
            'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-9 pr-2.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
            className,
        )}
        {...props}
    >
        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
            <RadixDropdownComponents.ItemIndicator>
                <Circle className="h-2 w-2 fill-current" />
            </RadixDropdownComponents.ItemIndicator>
        </span>
        <Text text={text} {...textProps} />
    </RadixDropdownComponents.RadioItem>
))
DropdownMenuRadioItem.displayName = RadixDropdownComponents.RadioItem.displayName
