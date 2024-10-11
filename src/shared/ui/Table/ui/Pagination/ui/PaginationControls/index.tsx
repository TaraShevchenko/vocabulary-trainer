import { type FC } from 'react'

import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react'

import { Button } from 'shared/ui/Button'

export type PaginationControlFunctions = {
    onFirstPage: () => void
    onPrevPage: () => void
    onNextPage: () => void
    onLastPage: () => void
}

type PaginationControlsProps =
    | PaginationControlFunctions
    | {
          isLoading: boolean
      }

export const PaginationControls: FC<PaginationControlsProps> = (props) => {
    const onFirstPage = 'onFirstPage' in props ? props.onFirstPage : undefined
    const onPrevPage = 'onPrevPage' in props ? props.onPrevPage : undefined
    const onNextPage = 'onNextPage' in props ? props.onNextPage : undefined
    const onLastPage = 'onLastPage' in props ? props.onLastPage : undefined
    const isLoading = 'isLoading' in props && props.isLoading

    return (
        <div className="flex items-center space-x-2">
            <Button
                onClick={onFirstPage}
                disabled={isLoading}
                variant={'outline'}
                size={'iconSm'}
                icon={ChevronsLeft}
            />
            <Button onClick={onPrevPage} disabled={isLoading} variant={'outline'} size={'iconSm'} icon={ChevronLeft} />
            <Button onClick={onNextPage} disabled={isLoading} variant={'outline'} size={'iconSm'} icon={ChevronRight} />
            <Button
                onClick={onLastPage}
                disabled={isLoading}
                variant={'outline'}
                size={'iconSm'}
                icon={ChevronsRight}
            />
        </div>
    )
}
