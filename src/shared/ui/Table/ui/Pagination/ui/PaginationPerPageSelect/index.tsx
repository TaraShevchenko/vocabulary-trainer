import dynamic from 'next/dynamic'

import { PaginationPerPageSelectLoading } from './ui/PaginationPerPageSelectLoading'

export const PaginationPerPageSelect = dynamic(() => import('./ui/PaginationPerPageSelect'), {
    loading: PaginationPerPageSelectLoading,
})

export { PaginationPerPageSelectLoading }
