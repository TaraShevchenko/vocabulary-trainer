import { type HTMLAttributes } from 'react'

import { cn } from 'shared/utils/cn'

export function CardDescription(
    { className, ...props }: HTMLAttributes<HTMLParagraphElement>,
    ref: React.Ref<HTMLParagraphElement>,
) {
    return <p ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
}

CardDescription.displayName = 'CardDescription'
