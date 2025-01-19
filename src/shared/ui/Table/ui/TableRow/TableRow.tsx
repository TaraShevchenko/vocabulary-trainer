import { type HTMLAttributes } from 'react'

import { cn } from 'shared/utils/cn'

type TableRowProps = HTMLAttributes<HTMLTableRowElement> & {
    canHovered?: boolean
}

export function TableRow({ className, canHovered = true, ...props }: TableRowProps) {
    return (
        <tr
            className={cn(
                'border-b transition-colors',
                '[&_td:last-child]:text-right [&_th:last-child]:text-right',
                'data-[state=selected]:bg-muted',
                canHovered && 'hover:bg-muted/50',
                className,
            )}
            {...props}
        />
    )
}
