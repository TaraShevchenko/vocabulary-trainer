import { type ComponentPropsWithoutRef, type ElementRef } from 'react'

import { Command } from 'cmdk'

import { cn } from 'shared/utils/cn'

const { List } = Command

export function CommandList(props: ComponentPropsWithoutRef<typeof List>, ref: React.Ref<ElementRef<typeof List>>) {
    const { className, ...otherProps } = props
    return (
        <List ref={ref} className={cn('max-h-[300px] overflow-y-auto overflow-x-hidden', className)} {...otherProps} />
    )
}

CommandList.displayName = List.displayName
