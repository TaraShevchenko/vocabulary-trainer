import { type ReactNode } from 'react'

import { cn } from 'shared/utils/cn'

type TContainerProps = {
    className?: string
    children: ReactNode
}

export const Container = ({ children, className }: TContainerProps) => {
    return <div className={cn('mx-auto w-full max-w-[1440px] px-2', className)}>{children}</div>
}
