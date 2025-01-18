import { type HTMLAttributes } from 'react'

import { cn } from 'shared/utils/cn'

export function DialogHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
    return <div className={cn('flex flex-col space-y-1.5 text-center sm:text-left', className)} {...props} />
}

DialogHeader.displayName = 'DialogHeader'
