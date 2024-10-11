import { type FC } from 'react'

import { type Children } from 'shared/types/types'
import { Text } from 'shared/ui/Text'

export const PaginationPerPageSelectContainer: FC<Children> = ({ children }) => (
    <div className="flex items-center space-x-2">
        <Text text={'Rows per page'} variant={'bold'} />
        {children}
    </div>
)
