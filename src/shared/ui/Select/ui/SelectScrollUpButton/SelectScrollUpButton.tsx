import { type ComponentPropsWithoutRef } from 'react'

import { ScrollUpButton } from '@radix-ui/react-select'
import { ChevronUp } from 'lucide-react'

import { cn } from 'shared/utils/cn'

type SelectScrollUpButtonProps = ComponentPropsWithoutRef<typeof ScrollUpButton>

export function SelectScrollUpButton({ className, ...props }: SelectScrollUpButtonProps) {
    return (
        <ScrollUpButton className={cn('flex cursor-default items-center justify-center py-1', className)} {...props}>
            <ChevronUp className="h-4 w-4" />
        </ScrollUpButton>
    )
}
