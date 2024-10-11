import { type TdHTMLAttributes, forwardRef } from 'react'

import { Skeleton } from 'shared/ui/Skeleton'
import { Text, type TextProps } from 'shared/ui/Text'
import { cn } from 'shared/utils/cn'

type TableCell = {
    text: string
    textProps?: Omit<TextProps, 'text'>
    subText?: string
    subTextProps?: Omit<TextProps, 'text'>
    isLoading?: boolean
} & Omit<TdHTMLAttributes<HTMLTableCellElement>, 'children'>

export const TableCell = forwardRef<HTMLTableCellElement, TableCell>(
    ({ className, text, textProps, subText, subTextProps, isLoading, ...props }, ref) => (
        <td
            ref={ref}
            className={cn('p-4 align-middle [&:has([role=checkbox])]:pr-0', !!subText && 'py-2', className)}
            {...props}
        >
            {isLoading ? (
                <Skeleton className={'h-[16px] w-[120px]'} />
            ) : (
                <Text text={text} inheritColor {...textProps} />
            )}
            {!!subText && (
                <>
                    {isLoading ? (
                        <Skeleton className={'mt-2 h-[12px] w-[80px]'} />
                    ) : (
                        <Text
                            className={'block text-muted-foreground'}
                            variant={'sm'}
                            text={subText}
                            {...subTextProps}
                        />
                    )}
                </>
            )}
        </td>
    ),
)
TableCell.displayName = 'TableCell'
