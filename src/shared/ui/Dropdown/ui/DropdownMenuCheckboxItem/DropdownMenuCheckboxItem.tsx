'use client'

import { type ComponentPropsWithoutRef, type ElementRef } from 'react'

import * as RadixDropdownComponents from '@radix-ui/react-dropdown-menu'
import { Check } from 'lucide-react'

import { Text, type TextProps } from 'shared/ui/Text'
import { cn } from 'shared/utils/cn'

export function DropdownMenuCheckboxItem(
    {
        className,
        text,
        textProps,
        ...props
    }: Omit<ComponentPropsWithoutRef<typeof RadixDropdownComponents.CheckboxItem>, 'children'> & {
        text: string
        textProps?: Omit<TextProps, 'text'>
    },
    ref: React.Ref<ElementRef<typeof RadixDropdownComponents.CheckboxItem>>,
) {
    return (
        <RadixDropdownComponents.CheckboxItem
            ref={ref}
            className={cn(
                'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-9 pr-2.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                className,
            )}
            {...props}
        >
            <>
                <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                    <RadixDropdownComponents.ItemIndicator>
                        <Check className="h-4 w-4" />
                    </RadixDropdownComponents.ItemIndicator>
                </span>
                <Text text={text} {...textProps} />
            </>
        </RadixDropdownComponents.CheckboxItem>
    )
}

DropdownMenuCheckboxItem.displayName = RadixDropdownComponents.CheckboxItem.displayName
