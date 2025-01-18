import { Skeleton } from 'shared/ui/Skeleton'

import { PaginationPerPageSelectContainer } from '../PaginationPerPageSelectContainer'

export function PaginationPerPageSelectLoading() {
    return (
        <PaginationPerPageSelectContainer>
            <Skeleton className={'h-8 w-[70px]'} />
        </PaginationPerPageSelectContainer>
    )
}
