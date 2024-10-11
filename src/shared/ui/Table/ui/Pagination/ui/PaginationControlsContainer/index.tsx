import { type FC } from 'react'

import { type Children } from 'shared/types/types'
import { cn } from 'shared/utils/cn'

export const PaginationControlsContainer: FC<Children> = ({ children }) => {
    return <div className={cn('flex items-center space-x-6 lg:space-x-8')}>{children}</div>
}
