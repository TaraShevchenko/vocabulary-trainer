import { type HTMLAttributes } from 'react'

import { cn } from 'shared/utils/cn'

export function CardContent({ className, ...props }: HTMLAttributes<HTMLDivElement>, ref: React.Ref<HTMLDivElement>) {
    return <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
}

CardContent.displayName = 'CardContent'
