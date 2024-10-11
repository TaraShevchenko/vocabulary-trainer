import { type HTMLAttributes, forwardRef } from 'react'

import { cn } from 'shared/utils/cn'

export const Table = forwardRef<
    HTMLTableElement,
    HTMLAttributes<HTMLTableElement> & { tableClassName?: string; colSizes?: string[] }
>(({ className, tableClassName, colSizes, children, ...props }, ref) => (
    <div className={cn('relative w-full overflow-auto rounded-md border', className)}>
        <table ref={ref} className={cn('w-full caption-bottom text-sm', tableClassName)} {...props}>
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
))
Table.displayName = 'Table'
