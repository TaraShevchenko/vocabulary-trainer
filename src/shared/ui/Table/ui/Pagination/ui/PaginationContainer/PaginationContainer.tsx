import { type ReactNode } from 'react'

import { cn } from 'shared/utils/cn'

type PaginationContainerProps = {
    children: ReactNode
}

export function PaginationContainer({ children }: PaginationContainerProps) {
    return <div className={cn('mt-5 flex items-center justify-between px-2')}>{children}</div>
}
