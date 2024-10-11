import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Command as CommandPrimitive } from 'cmdk'

import { cn } from 'shared/utils/cn'

export const Command = forwardRef<
    ElementRef<typeof CommandPrimitive>,
    ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
    <CommandPrimitive
        ref={ref}
        className={cn(
            'flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground',
            className,
        )}
        {...props}
    />
))
Command.displayName = CommandPrimitive.displayName
