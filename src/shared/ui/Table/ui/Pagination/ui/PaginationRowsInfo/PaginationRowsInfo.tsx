import { type z } from 'zod'

import { type PaginationLimit } from 'shared/types'
import { Skeleton } from 'shared/ui/Skeleton'
import { Text } from 'shared/ui/Text'

type PaginationRowsInfoProps =
    | {
          total: number
          perPage: z.infer<typeof PaginationLimit>
      }
    | {
          isLoading: boolean
      }

export function PaginationRowsInfo(props: PaginationRowsInfoProps) {
    return (
        <div className={'flex items-center gap-1'}>
            {'isLoading' in props ? (
                <Skeleton className={'h-4 w-5'} />
            ) : (
                <Text text={`${Math.min(props.perPage, props.total)}`} />
            )}
            <Text text={`of`} variant={'muted'} />
            {'isLoading' in props ? <Skeleton className={'h-4 w-5'} /> : <Text text={`${props.total}`} />}
            <Text text={`row(s) displayed.`} variant={'muted'} />
        </div>
    )
}
