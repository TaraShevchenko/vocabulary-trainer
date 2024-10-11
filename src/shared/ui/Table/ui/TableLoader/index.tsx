import { type HTMLAttributes, forwardRef } from 'react'

import { cn } from 'shared/utils/cn'

export const TableLoader = forwardRef<HTMLTableRowElement, HTMLAttributes<HTMLTableRowElement> & { colCount: number }>(
    ({ className, colCount, ...props }, ref) => (
        <tr ref={ref} className={cn(className)} {...props}>
            <td colSpan={colCount}>
                <div className={'relative mx-auto my-10 size-20 text-white'}>
                    <div
                        className={
                            'animation-delay-45 absolute m-2 block size-16 animate-loader rounded-full border-4 border-transparent border-t-current'
                        }
                    ></div>
                    <div
                        className={
                            'animation-delay-30 absolute m-2 block size-16 animate-loader rounded-full border-4 border-transparent border-t-current'
                        }
                    ></div>
                    <div
                        className={
                            'animation-delay-15 absolute m-2 block size-16 animate-loader rounded-full border-4 border-transparent border-t-current'
                        }
                    ></div>
                </div>
            </td>
        </tr>
    ),
)
TableLoader.displayName = 'TableRow'
