import { type HTMLAttributes } from 'react'

import { cn } from 'shared/utils/cn'

type TableProps = HTMLAttributes<HTMLTableElement> & {
    tableClassName?: string
    colSizes?: string[]
}

export function Table({ className, tableClassName, colSizes, children, ...props }: TableProps) {
    return (
        <div className={cn('relative w-full overflow-auto rounded-md border', className)}>
            <table className={cn('w-full caption-bottom text-sm', tableClassName)} {...props}>
                {!!colSizes?.length && (
                    <colgroup>
                        {colSizes.map((size, i) => (
                            <col key={`${size}_${i}`} style={{ width: size }} />
                        ))}
                    </colgroup>
                )}
                {children}
            </table>
        </div>
    )
}
