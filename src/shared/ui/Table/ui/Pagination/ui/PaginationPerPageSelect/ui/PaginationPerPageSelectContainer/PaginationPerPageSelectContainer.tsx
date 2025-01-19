import { type Children } from 'shared/types'
import { Text } from 'shared/ui/Text'

export function PaginationPerPageSelectContainer({ children }: Children) {
    return (
        <div className="flex items-center space-x-2">
            <Text text={'Rows per page'} variant={'bold'} />
            {children}
        </div>
    )
}
