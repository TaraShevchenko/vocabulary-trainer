import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react'

import { ScrollUpButton } from '@radix-ui/react-select'
import { ChevronUp } from 'lucide-react'

import { cn } from 'shared/utils/cn'

export const SelectScrollUpButton = forwardRef<
    ElementRef<typeof ScrollUpButton>,
    ComponentPropsWithoutRef<typeof ScrollUpButton>
>(({ className, ...props }, ref) => (
    <ScrollUpButton
        ref={ref}
        className={cn('flex cursor-default items-center justify-center py-1', className)}
        {...props}
    >
        <ChevronUp className="h-4 w-4" />
    </ScrollUpButton>
))
SelectScrollUpButton.displayName = ScrollUpButton.displayName
