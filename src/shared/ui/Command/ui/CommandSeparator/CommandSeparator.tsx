import { type ComponentPropsWithoutRef, type ElementRef } from 'react'

import { Command } from 'cmdk'

import { cn } from 'shared/utils/cn'

const { Separator } = Command

export function CommandSeparator(
    props: ComponentPropsWithoutRef<typeof Separator>,
    ref: React.Ref<ElementRef<typeof Separator>>,
) {
    const { className, ...otherProps } = props
    return <Separator ref={ref} className={cn('-mx-1 h-px bg-border', className)} {...otherProps} />
}

CommandSeparator.displayName = Separator.displayName
