'use client'

import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react'

import * as RadixDropdownComponents from '@radix-ui/react-dropdown-menu'
import { ChevronRight, type LucideIcon } from 'lucide-react'

import { Text, type TextProps } from 'shared/ui/Text'
import { cn } from 'shared/utils/cn'

export const DropdownMenuSubTrigger = forwardRef<
    ElementRef<typeof RadixDropdownComponents.SubTrigger>,
    ComponentPropsWithoutRef<typeof RadixDropdownComponents.SubTrigger> & {
        inset?: boolean
        icon?: LucideIcon
        textProps?: Omit<TextProps, 'text'>
    } & Pick<TextProps, 'text'>
>(({ className, inset, icon: Icon, text, textProps, children, ...props }, ref) => (
    <RadixDropdownComponents.SubTrigger
        ref={ref}
        className={cn(
            'flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent',
            inset && 'pl-8',
            className,
        )}
        {...props}
    >
        {!!Icon && <Icon className="h-4 w-4" />}
        <Text text={text} {...textProps} />
        <ChevronRight className="ml-auto h-4 w-4" />
    </RadixDropdownComponents.SubTrigger>
))
DropdownMenuSubTrigger.displayName = RadixDropdownComponents.SubTrigger.displayName
