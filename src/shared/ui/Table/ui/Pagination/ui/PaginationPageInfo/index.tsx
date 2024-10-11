import type { FC } from 'react'

import { Skeleton } from 'shared/ui/Skeleton'
import { Text } from 'shared/ui/Text'

type PaginationPageInfoProps =
    | {
          currentPage: number
          lastPage: number
      }
    | {
          isLoading: boolean
      }

export const PaginationPageInfo: FC<PaginationPageInfoProps> = (props) => (
    <div className="flex w-[100px] items-center justify-center gap-1 text-sm font-medium">
        <Text text={'Page'} variant={'bold'} />

        {'isLoading' in props ? (
            <Skeleton className={'h-4 w-5'} />
        ) : (
            <Text text={`${props.currentPage}`} variant={'bold'} />
        )}

        <Text text={'of'} variant={'bold'} />

        {'isLoading' in props ? (
            <Skeleton className={'h-4 w-5'} />
        ) : (
            <Text text={`${props.lastPage}`} variant={'bold'} />
        )}
    </div>
)
