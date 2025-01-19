import { type HTMLAttributes } from 'react'

import { cn } from 'shared/utils/cn'

type TableHeaderProps = HTMLAttributes<HTMLTableSectionElement>

export function TableHeader({ className, ...props }: TableHeaderProps) {
    return <thead className={cn('[&_tr]:border-b', className)} {...props} />
}
