import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react'

import { Separator } from '@radix-ui/react-select'

import { cn } from 'shared/utils/cn'

export const SelectSeparator = forwardRef<ElementRef<typeof Separator>, ComponentPropsWithoutRef<typeof Separator>>(
    ({ className, ...props }, ref) => (
        <Separator ref={ref} className={cn('-mx-1 my-1 h-px bg-muted', className)} {...props} />
    ),
)
SelectSeparator.displayName = Separator.displayName
