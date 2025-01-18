import type { z } from 'zod'

import type { PaginationResponseScheme } from 'shared/types'

import { PaginationContainer } from './ui/PaginationContainer'
import { type PaginationControlFunctions, PaginationControls } from './ui/PaginationControls'
import { PaginationControlsContainer } from './ui/PaginationControlsContainer'
import { PaginationPageInfo } from './ui/PaginationPageInfo'
import { PaginationPerPageSelect } from './ui/PaginationPerPageSelect'
import { PaginationRowsInfo } from './ui/PaginationRowsInfo'

type PaginationProps = {
    onPerPageChange: (perPage: string) => void
    paginationControls: PaginationControlFunctions
} & z.infer<typeof PaginationResponseScheme>

export function Pagination({
    page,
    perPage,
    totalItems,
    totalPages,
    onPerPageChange,
    paginationControls,
}: PaginationProps) {
    return (
        <PaginationContainer>
            <PaginationRowsInfo perPage={perPage} total={totalItems} />
            <PaginationControlsContainer>
                <PaginationPerPageSelect perPage={perPage} onPerPageChange={onPerPageChange} />
                <PaginationPageInfo currentPage={page} lastPage={totalPages} />
                <PaginationControls {...paginationControls} />
            </PaginationControlsContainer>
        </PaginationContainer>
    )
}
