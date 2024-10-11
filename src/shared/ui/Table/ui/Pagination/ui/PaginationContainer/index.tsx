import { type FC } from 'react'

import { type Children } from 'shared/types/types'
import { cn } from 'shared/utils/cn'

export const PaginationContainer: FC<Children> = ({ children }) => {
    return <div className={cn('mt-5 flex items-center justify-between px-2')}>{children}</div>
}
