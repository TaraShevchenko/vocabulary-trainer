import { PaginationContainer } from './ui/PaginationContainer'
import { PaginationControls } from './ui/PaginationControls'
import { PaginationControlsContainer } from './ui/PaginationControlsContainer'
import { PaginationPageInfo } from './ui/PaginationPageInfo'
import { PaginationPerPageSelectLoading } from './ui/PaginationPerPageSelect'
import { PaginationRowsInfo } from './ui/PaginationRowsInfo'

export function PaginationLoader() {
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
