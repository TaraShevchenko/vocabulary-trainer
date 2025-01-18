import { type ComponentPropsWithoutRef, type ElementRef } from 'react'

import { Description } from '@radix-ui/react-dialog'

import { cn } from 'shared/utils/cn'

//TODO: Integrate Text component
export function DialogDescription(
    { className, ...props }: ComponentPropsWithoutRef<typeof Description>,
    ref: React.Ref<ElementRef<typeof Description>>,
) {
    return <Description ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
}

DialogDescription.displayName = Description.displayName
