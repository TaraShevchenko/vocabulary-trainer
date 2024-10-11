import { type FC } from 'react'

import type { z } from 'zod'

import { type PaginationResponseScheme } from 'shared/types/types'
import { PaginationPerPageSelect } from 'shared/ui/Table/ui/Pagination/ui/PaginationPerPageSelect'

import { PaginationContainer } from '../PaginationContainer'
import { type PaginationControlFunctions, PaginationControls } from '../PaginationControls'
import { PaginationControlsContainer } from '../PaginationControlsContainer'
import { PaginationPageInfo } from '../PaginationPageInfo'
import { PaginationRowsInfo } from '../PaginationRowsInfo'

type PaginationProps = {
    onPerPageChange: (perPage: string) => void
    paginationControls: PaginationControlFunctions
} & z.infer<typeof PaginationResponseScheme>

export const Pagination: FC<PaginationProps> = ({
    page,
    perPage,
    totalItems,
    totalPages,
    onPerPageChange,
    paginationControls,
}) => (
    <PaginationContainer>
        <PaginationRowsInfo perPage={perPage} total={totalItems} />
        <PaginationControlsContainer>
            <PaginationPerPageSelect perPage={perPage} onPerPageChange={onPerPageChange} />
            <PaginationPageInfo currentPage={page} lastPage={totalPages} />
            <PaginationControls {...paginationControls} />
        </PaginationControlsContainer>
    </PaginationContainer>
)
