import { type HTMLAttributes } from 'react'

import { cn } from 'shared/utils/cn'

export function CardTitle(
    { className, ...props }: HTMLAttributes<HTMLHeadingElement>,
    ref: React.Ref<HTMLParagraphElement>,
) {
    return <h3 ref={ref} className={cn('text-2xl font-semibold leading-none tracking-tight', className)} {...props} />
}

CardTitle.displayName = 'CardTitle'
