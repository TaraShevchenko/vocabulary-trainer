import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Command } from 'cmdk'

import { cn } from 'shared/utils/cn'

const { Separator } = Command
export const CommandSeparator = forwardRef<ElementRef<typeof Separator>, ComponentPropsWithoutRef<typeof Separator>>(
    ({ className, ...props }, ref) => (
        <Separator ref={ref} className={cn('-mx-1 h-px bg-border', className)} {...props} />
    ),
)
CommandSeparator.displayName = Separator.displayName
