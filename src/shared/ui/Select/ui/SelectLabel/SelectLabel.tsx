import { type ComponentPropsWithoutRef } from 'react'

import { Label } from '@radix-ui/react-select'

import { cn } from 'shared/utils/cn'

type SelectLabelProps = ComponentPropsWithoutRef<typeof Label>

export function SelectLabel({ className, ...props }: SelectLabelProps) {
    return <Label className={cn('py-1.5 pl-8 pr-2 text-sm font-semibold', className)} {...props} />
}
