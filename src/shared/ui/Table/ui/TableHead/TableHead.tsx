import { type ThHTMLAttributes } from 'react'

import { Text, type TextProps } from 'shared/ui/Text'
import { cn } from 'shared/utils/cn'

type TableHeadProps = {
    text: string
    textProps?: Omit<TextProps, 'text'>
} & ThHTMLAttributes<HTMLTableCellElement>

export function TableHead({ className, text, textProps, ...props }: TableHeadProps) {
    return (
        <th
            className={cn(
                'h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0',
                className,
            )}
            {...props}
        >
            <Text text={text} inheritColor {...textProps} />
        </th>
    )
}
