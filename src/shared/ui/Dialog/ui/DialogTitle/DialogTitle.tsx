import { type ComponentPropsWithoutRef, type ElementRef } from 'react'

import { Title } from '@radix-ui/react-dialog'

import { cn } from 'shared/utils/cn'

//TODO: Integrate Text component
export function DialogTitle(
    { className, ...props }: ComponentPropsWithoutRef<typeof Title>,
    ref: React.Ref<ElementRef<typeof Title>>,
) {
    return <Title ref={ref} className={cn('text-lg font-semibold leading-none tracking-tight', className)} {...props} />
}

DialogTitle.displayName = Title.displayName
