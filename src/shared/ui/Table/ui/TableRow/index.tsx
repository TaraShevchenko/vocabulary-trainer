import { type HTMLAttributes, forwardRef } from 'react'

import { cn } from 'shared/utils/cn'

export const TableRow = forwardRef<HTMLTableRowElement, HTMLAttributes<HTMLTableRowElement> & { canHovered?: boolean }>(
    ({ className, canHovered = true, ...props }, ref) => (
        <tr
            ref={ref}
            className={cn(
                'border-b transition-colors',
                '[&_td:last-child]:text-right [&_th:last-child]:text-right',
                'data-[state=selected]:bg-muted',
                canHovered && 'hover:bg-muted/50',
                className,
            )}
            {...props}
        />
    ),
)
TableRow.displayName = 'TableRow'
