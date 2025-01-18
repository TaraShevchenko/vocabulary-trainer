import type { z } from 'zod'

import type { PaginationResponseScheme } from 'shared/types'

import { PaginationContainer } from '../PaginationContainer'
import { type PaginationControlFunctions, PaginationControls } from '../PaginationControls'
import { PaginationControlsContainer } from '../PaginationControlsContainer'
import { PaginationPageInfo } from '../PaginationPageInfo'
import { PaginationPerPageSelect } from '../PaginationPerPageSelect'
import { PaginationRowsInfo } from '../PaginationRowsInfo'

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
