import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react'

import { Label } from '@radix-ui/react-select'

import { cn } from 'shared/utils/cn'

export const SelectLabel = forwardRef<ElementRef<typeof Label>, ComponentPropsWithoutRef<typeof Label>>(
    ({ className, ...props }, ref) => (
        <Label ref={ref} className={cn('py-1.5 pl-8 pr-2 text-sm font-semibold', className)} {...props} />
    ),
)
SelectLabel.displayName = Label.displayName
