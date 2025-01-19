import { type HTMLAttributes } from 'react'

import { cn } from 'shared/utils/cn'

export function DialogFooter({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
    return <div className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)} {...props} />
}

DialogFooter.displayName = 'DialogFooter'
