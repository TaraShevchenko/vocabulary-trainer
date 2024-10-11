import { type ComponentPropsWithoutRef } from 'react'

import { type Popover } from '@radix-ui/react-popover'

import { type FilterButtonProps } from 'shared/ui/Button'

export type TableFilterOption = {
    name: string
    value: string
    isActive: boolean
}

export type TableFilterProps = {
    name: string
    text: string
    filters: TableFilterOption[]
    buttonProps?: Omit<FilterButtonProps, 'text' | 'activeFilters'>
    popoverProps?: ComponentPropsWithoutRef<typeof Popover>
    onClear: () => void
    onSelect: (value: string, name: string) => void
}
