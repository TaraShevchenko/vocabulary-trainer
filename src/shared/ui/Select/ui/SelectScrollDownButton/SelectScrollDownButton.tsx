import { type ComponentPropsWithoutRef } from 'react'

import { ScrollDownButton } from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'

import { cn } from 'shared/utils/cn'

type SelectScrollDownButtonProps = ComponentPropsWithoutRef<typeof ScrollDownButton>

export function SelectScrollDownButton({ className, ...props }: SelectScrollDownButtonProps) {
    return (
        <ScrollDownButton className={cn('flex cursor-default items-center justify-center py-1', className)} {...props}>
            <ChevronDown className="h-4 w-4" />
        </ScrollDownButton>
    )
}
