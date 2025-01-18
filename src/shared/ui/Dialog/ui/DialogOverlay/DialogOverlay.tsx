import { type ComponentPropsWithoutRef, type ElementRef } from 'react'

import { Overlay } from '@radix-ui/react-dialog'

import { cn } from 'shared/utils/cn'

export function DialogOverlay(
    { className, ...props }: ComponentPropsWithoutRef<typeof Overlay>,
    ref: React.Ref<ElementRef<typeof Overlay>>,
) {
    return (
        <Overlay
            ref={ref}
            className={cn(
                'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80',
                className,
            )}
            {...props}
        />
    )
}

DialogOverlay.displayName = Overlay.displayName
