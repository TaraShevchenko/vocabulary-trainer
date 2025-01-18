import { type HTMLAttributes } from 'react'

import { cn } from 'shared/utils/cn'

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>, ref: React.Ref<HTMLDivElement>) {
    return (
        <div
            ref={ref}
            className={cn('rounded-lg border bg-card text-card-foreground shadow-sm', className)}
            {...props}
        />
    )
}

Card.displayName = 'Card'
