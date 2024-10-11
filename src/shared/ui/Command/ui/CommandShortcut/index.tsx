import { HTMLAttributes } from 'react'

import { cn } from 'shared/utils/cn'

export const CommandShortcut = ({ className, ...props }: HTMLAttributes<HTMLSpanElement>) => {
    return <span className={cn('ml-auto text-xs tracking-widest text-muted-foreground', className)} {...props} />
}
CommandShortcut.displayName = 'CommandShortcut'
