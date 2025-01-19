import { type HTMLAttributes } from 'react'

import { cn } from 'shared/utils/cn'

export function CardHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>, ref: React.Ref<HTMLDivElement>) {
    return <div ref={ref} className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />
}

CardHeader.displayName = 'CardHeader'
