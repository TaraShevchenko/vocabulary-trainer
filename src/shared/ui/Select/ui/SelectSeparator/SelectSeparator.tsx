import { type ComponentPropsWithoutRef } from 'react'

import { Separator } from '@radix-ui/react-select'

import { cn } from 'shared/utils/cn'

type SelectSeparatorProps = ComponentPropsWithoutRef<typeof Separator>

export function SelectSeparator({ className, ...props }: SelectSeparatorProps) {
    return <Separator className={cn('-mx-1 my-1 h-px bg-muted', className)} {...props} />
}
