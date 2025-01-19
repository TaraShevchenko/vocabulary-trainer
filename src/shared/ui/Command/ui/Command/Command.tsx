import { type ComponentPropsWithoutRef, type ElementRef } from 'react'

import { Command as CommandPrimitive } from 'cmdk'

import { cn } from 'shared/utils/cn'

export function Command(
    { className, ...props }: ComponentPropsWithoutRef<typeof CommandPrimitive>,
    ref: React.Ref<ElementRef<typeof CommandPrimitive>>,
) {
    return (
        <CommandPrimitive
            ref={ref}
            className={cn(
                'flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground',
                className,
            )}
            {...props}
        />
    )
}

Command.displayName = CommandPrimitive.displayName
