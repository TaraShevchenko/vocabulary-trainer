import { type ElementRef, forwardRef } from 'react'

import { ScrollAreaScrollbar, type ScrollAreaScrollbarProps, ScrollAreaThumb } from '@radix-ui/react-scroll-area'

import { cn } from 'shared/utils/cn'

export type ScrollbarClassNames = {
    scrollbarClassName?: string
    thumbClassName?: string
}

export type ScrollbarProps = {
    scrollbarProps?: Omit<ScrollAreaScrollbarProps, 'className'>
}
type ScrollBarAllProps = ScrollbarClassNames & ScrollbarProps

export const ScrollBar = forwardRef<ElementRef<typeof ScrollAreaScrollbar>, ScrollBarAllProps>(
    ({ scrollbarClassName, thumbClassName, scrollbarProps }, ref) => {
        const { orientation = 'vertical', ...props } = scrollbarProps ?? {}
        return (
            <ScrollAreaScrollbar
                ref={ref}
                orientation={orientation}
                className={cn(
                    'flex touch-none select-none bg-primary-foreground transition-colors',
                    orientation === 'vertical' && 'h-full w-2 border-l border-l-transparent p-[1px]',
                    orientation === 'horizontal' && 'h-2 flex-col border-t border-t-transparent p-[1px]',
                    scrollbarClassName,
                )}
                {...props}
            >
                <ScrollAreaThumb className={cn('relative flex-1 rounded-full bg-border', thumbClassName)} />
            </ScrollAreaScrollbar>
        )
    },
)
ScrollBar.displayName = ScrollAreaScrollbar.displayName
