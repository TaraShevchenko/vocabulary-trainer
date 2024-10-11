'use client'

import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react'

import * as RadixDropdownComponents from '@radix-ui/react-dropdown-menu'

import { Button, type ButtonProps } from 'shared/ui/Button'

export const DropdownMenuTrigger = forwardRef<
    ElementRef<typeof RadixDropdownComponents.Trigger>,
    Omit<ComponentPropsWithoutRef<typeof RadixDropdownComponents.Trigger>, 'children'> & {
        buttonProps?: Omit<ButtonProps, 'text' | 'icon'>
    } & Pick<ButtonProps, 'text'> &
        Pick<ButtonProps, 'icon'>
>(({ text, icon, buttonProps, ...props }, ref) => (
    <RadixDropdownComponents.Trigger ref={ref} asChild {...props}>
        <Button text={text} icon={icon} variant="outline" {...buttonProps} />
    </RadixDropdownComponents.Trigger>
))
DropdownMenuTrigger.displayName = RadixDropdownComponents.Trigger.displayName
