import { useCallback, useMemo } from 'react'

import { PlusCircle } from 'lucide-react'

import { FiltersButton } from 'shared/ui/Button/ui/FiltersButton'
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from 'shared/ui/Command'
import { Popover, PopoverContent, PopoverTrigger } from 'shared/ui/Popover'
import { Switch } from 'shared/ui/Switch'
import { Text } from 'shared/ui/Text'

import { type TableFilterProps } from './types'

export const TableFilter = ({
    name,
    text,
    filters,
    buttonProps,
    onClear,
    onSelect,
    popoverProps,
}: TableFilterProps) => {
    const activeFilters = useMemo(
        () => filters.filter((filter) => filter.isActive).map((filter) => filter.name),
        [JSON.stringify(filters)],
    )

    const handleOnSelect = useCallback(
        (value: string) => {
            onSelect(value, name)
        },
        [name, onSelect],
    )

    return (
        <Popover {...popoverProps}>
            <PopoverTrigger asChild>
                <FiltersButton
                    size={'sm'}
                    text={text}
                    icon={PlusCircle}
                    variant={'outline-dashed'}
                    activeFilters={activeFilters}
                    {...buttonProps}
                />
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0" align="start">
                <Command>
                    <CommandInput placeholder={text} />
                    <CommandList>
                        <CommandEmpty>
                            <Text text={'No results found.'} />
                        </CommandEmpty>
                        <CommandGroup>
                            {filters.map(({ name, value, isActive }) => (
                                <CommandItem key={value} onSelect={handleOnSelect}>
                                    <Switch name={value} label={name} checked={isActive} />
                                </CommandItem>
                            ))}
                        </CommandGroup>

                        {!!activeFilters.length && (
                            <>
                                <CommandSeparator />
                                <CommandGroup>
                                    <CommandItem onSelect={onClear} className="justify-center text-center">
                                        <Text text={'Clear filters'} />
                                    </CommandItem>
                                </CommandGroup>
                            </>
                        )}
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
