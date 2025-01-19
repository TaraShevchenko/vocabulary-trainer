import { type HTMLAttributes } from 'react'

import { cn } from 'shared/utils/cn'

type TableCaptionProps = HTMLAttributes<HTMLTableCaptionElement>

export function TableCaption({ className, ...props }: TableCaptionProps) {
    return <caption className={cn('mt-4 text-sm text-muted-foreground', className)} {...props} />
}
