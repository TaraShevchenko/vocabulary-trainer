import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react'

import { ScrollDownButton } from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'

import { cn } from 'shared/utils/cn'

export const SelectScrollDownButton = forwardRef<
    ElementRef<typeof ScrollDownButton>,
    ComponentPropsWithoutRef<typeof ScrollDownButton>
>(({ className, ...props }, ref) => (
    <ScrollDownButton
        ref={ref}
        className={cn('flex cursor-default items-center justify-center py-1', className)}
        {...props}
    >
        <ChevronDown className="h-4 w-4" />
    </ScrollDownButton>
))
SelectScrollDownButton.displayName = ScrollDownButton.displayName
