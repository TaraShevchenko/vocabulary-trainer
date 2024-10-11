import { type FC } from 'react'

import { type z } from 'zod'

import { PaginationLimit } from 'shared/types/enums'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from 'shared/ui/Select'
import { PaginationPerPageSelectContainer } from 'shared/ui/Table/ui/Pagination/ui/PaginationPerPageSelect/ui/PaginationPerPageSelectContainer'

type PaginationPerPageSelectProps = {
    perPage: z.infer<typeof PaginationLimit>
    onPerPageChange: (perPage: string) => void
}

const PaginationPerPageSelect: FC<PaginationPerPageSelectProps> = ({ perPage, onPerPageChange }) => {
    return (
        <PaginationPerPageSelectContainer>
            <Select value={perPage.toString()} onValueChange={onPerPageChange}>
                <SelectTrigger className="h-8 w-[70px]">
                    <SelectValue placeholder={'Per Page'} />
                </SelectTrigger>
                <SelectContent side="top">
                    {PaginationLimit.options.map(({ value }) => (
                        <SelectItem key={value} value={value.toString()} text={value.toString()} />
                    ))}
                </SelectContent>
            </Select>
        </PaginationPerPageSelectContainer>
    )
}

export default PaginationPerPageSelect
