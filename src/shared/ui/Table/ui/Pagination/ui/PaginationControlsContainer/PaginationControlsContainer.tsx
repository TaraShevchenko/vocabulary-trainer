import { type ReactNode } from 'react'

import { cn } from 'shared/utils/cn'

type PaginationControlsContainerProps = {
    children: ReactNode
}

export function PaginationControlsContainer({ children }: PaginationControlsContainerProps) {
    return <div className={cn('flex items-center space-x-6 lg:space-x-8')}>{children}</div>
}
