import { type HTMLAttributes } from 'react'

import { cn } from 'shared/utils/cn'

type TableBodyProps = HTMLAttributes<HTMLTableSectionElement>

export function TableBody({ className, ...props }: TableBodyProps) {
    return <tbody className={cn('[&_tr:last-child]:border-0', className)} {...props} />
}
