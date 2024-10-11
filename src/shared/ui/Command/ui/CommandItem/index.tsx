import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Command } from 'cmdk'

import { cn } from 'shared/utils/cn'

const { Item } = Command
export const CommandItem = forwardRef<ElementRef<typeof Item>, ComponentPropsWithoutRef<typeof Item>>(
    ({ className, ...props }, ref) => (
        <Item
            ref={ref}
            className={cn(
                'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                className,
            )}
            {...props}
        />
    ),
)

CommandItem.displayName = Item.displayName
