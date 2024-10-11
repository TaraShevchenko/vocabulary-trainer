import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Command } from 'cmdk'

import { cn } from 'shared/utils/cn'

const { List } = Command
export const CommandList = forwardRef<ElementRef<typeof List>, ComponentPropsWithoutRef<typeof List>>(
    ({ className, ...props }, ref) => (
        <List ref={ref} className={cn('max-h-[300px] overflow-y-auto overflow-x-hidden', className)} {...props} />
    ),
)

CommandList.displayName = List.displayName
