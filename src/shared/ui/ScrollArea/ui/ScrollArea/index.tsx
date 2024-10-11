import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react'

import { Corner, Root, Viewport } from '@radix-ui/react-scroll-area'

import { type Children } from 'shared/types/types'
import { cn } from 'shared/utils/cn'

import { ScrollBar, type ScrollbarClassNames, type ScrollbarProps } from '../ScrollBar'

export type ScrollAreaProps = {
    className?: string
    viewportClassName?: string
    cornerClassName?: string
    cornerProps?: Omit<ComponentPropsWithoutRef<typeof Corner>, 'className'>
    scrollAreaProps?: Omit<ComponentPropsWithoutRef<typeof Root>, 'className' | 'children'>
    scrollbarProps?: Omit<ScrollbarProps, 'variant'>
} & ScrollbarClassNames &
    Children

export const ScrollArea = forwardRef<ElementRef<typeof Root>, ScrollAreaProps>(
    (
        {
            className,
            scrollAreaProps,
            viewportClassName,
            children,
            scrollbarClassName,
            thumbClassName,
            scrollbarProps,
            cornerClassName,
            cornerProps,
        },
        ref,
    ) => {
        const { type = 'always', ...otherScrollAreaProps } = scrollAreaProps ?? {}
        return (
            <Root
                ref={ref}
                type={type}
                className={cn('relative h-full w-full overflow-hidden', className)}
                {...otherScrollAreaProps}
            >
                <Viewport className={cn('h-full w-full rounded-[inherit] pr-2.5', viewportClassName)}>
                    {children}
                </Viewport>
                <ScrollBar
                    scrollbarClassName={scrollbarClassName}
                    thumbClassName={thumbClassName}
                    {...scrollbarProps}
                />
                <Corner className={cornerClassName} {...cornerProps} />
            </Root>
        )
    },
)
ScrollArea.displayName = Root.displayName
