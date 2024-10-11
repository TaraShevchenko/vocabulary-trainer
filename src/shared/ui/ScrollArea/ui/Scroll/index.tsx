import { useEffect, useRef, useState } from 'react'

import { Slot } from '@radix-ui/react-slot'

import { cn } from 'shared/utils/cn'

import { ScrollArea, type ScrollAreaProps } from '../ScrollArea'

export const Scroll = ({ className, children, ...otherProps }: ScrollAreaProps) => {
    const contentRef = useRef<HTMLElement>(null)
    const [hasScroll, setHasScroll] = useState(false)
    const checkScroll = () => {
        const content = contentRef.current
        if (content) {
            const hasVerticalScroll = content.scrollHeight > content.clientHeight
            setHasScroll(hasVerticalScroll)
        }
    }

    useEffect(() => {
        checkScroll()
    }, [])

    return (
        <Slot ref={contentRef} className={cn(className)}>
            {hasScroll ? <ScrollArea {...otherProps}>{children}</ScrollArea> : <div>{children}</div>}
        </Slot>
    )
}
