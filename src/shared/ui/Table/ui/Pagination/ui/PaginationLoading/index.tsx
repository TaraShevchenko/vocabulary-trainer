import { PaginationContainer } from '../PaginationContainer'
import { PaginationControls } from '../PaginationControls'
import { PaginationControlsContainer } from '../PaginationControlsContainer'
import { PaginationPageInfo } from '../PaginationPageInfo'
import { PaginationPerPageSelectLoading } from '../PaginationPerPageSelect'
import { PaginationRowsInfo } from '../PaginationRowsInfo'

export const PaginationLoading = () => {
    return (
        <PaginationContainer>
            <PaginationRowsInfo isLoading />
            <PaginationControlsContainer>
                <PaginationPerPageSelectLoading />
                <PaginationPageInfo isLoading />
                <PaginationControls isLoading />
            </PaginationControlsContainer>
        </PaginationContainer>
    )
}
