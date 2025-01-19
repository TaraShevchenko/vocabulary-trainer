'use client'

import { type ComponentPropsWithoutRef, type ElementRef } from 'react'

import * as RadixDropdownComponents from '@radix-ui/react-dropdown-menu'

import { Button, type ButtonProps } from 'shared/ui/Button'

export function DropdownMenuTrigger(
    {
        text,
        icon,
        buttonProps,
        ...props
    }: Omit<ComponentPropsWithoutRef<typeof RadixDropdownComponents.Trigger>, 'children'> & {
        buttonProps?: Omit<ButtonProps, 'text' | 'icon'>
    } & Pick<ButtonProps, 'text'> &
        Pick<ButtonProps, 'icon'>,
    ref: React.Ref<ElementRef<typeof RadixDropdownComponents.Trigger>>,
) {
    return (
        <RadixDropdownComponents.Trigger ref={ref} asChild {...props}>
            <Button text={text} icon={icon} variant="outline" {...buttonProps} />
        </RadixDropdownComponents.Trigger>
    )
}

DropdownMenuTrigger.displayName = RadixDropdownComponents.Trigger.displayName
