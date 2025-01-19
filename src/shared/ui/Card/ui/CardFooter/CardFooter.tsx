import { type HTMLAttributes } from 'react'

import { cn } from 'shared/utils/cn'

export function CardFooter({ className, ...props }: HTMLAttributes<HTMLDivElement>, ref: React.Ref<HTMLDivElement>) {
    return <div ref={ref} className={cn('flex items-center p-6 pt-0', className)} {...props} />
}

CardFooter.displayName = 'CardFooter'
