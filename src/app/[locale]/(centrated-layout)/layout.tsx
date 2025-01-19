import { type Children } from 'shared/types'
import { cn } from 'shared/utils/cn'

export default function AuthLayout({ children }: Children) {
    return <div className={cn('flex h-screen w-full flex-col items-center justify-center p-4')}>{children}</div>
}
