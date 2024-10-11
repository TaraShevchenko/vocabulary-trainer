import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Title } from '@radix-ui/react-dialog'

import { cn } from 'shared/utils/cn'

//TODO: Integrate Text component
export const DialogTitle = forwardRef<ElementRef<typeof Title>, ComponentPropsWithoutRef<typeof Title>>(
    ({ className, ...props }, ref) => (
        <Title ref={ref} className={cn('text-lg font-semibold leading-none tracking-tight', className)} {...props} />
    ),
)
DialogTitle.displayName = Title.displayName
