import { type ComponentPropsWithoutRef } from 'react'

import * as PopoverPrimitive from '@radix-ui/react-popover'

import { cn } from 'shared/utils/cn'

type PopoverContentProps = ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>

export function PopoverContent({ className, align = 'center', sideOffset = 4, ...props }: PopoverContentProps) {
    return (
        <PopoverPrimitive.Portal>
            <PopoverPrimitive.Content
                align={align}
                sideOffset={sideOffset}
                className={cn(
                    'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none',
                    className,
                )}
                {...props}
            />
        </PopoverPrimitive.Portal>
    )
}

PopoverContent.displayName = PopoverPrimitive.Content.displayName
