import { type ClassName } from 'shared/types'
import { Text } from 'shared/ui/Text'
import { cn } from 'shared/utils/cn'

type AuthVarianceSplitterProps = {} & Partial<ClassName>

export function AuthVarianceSplitter({ className }: AuthVarianceSplitterProps) {
    return (
        <div className={cn('relative', className)}>
            <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
                <Text className="bg-background px-2 text-muted-foreground" variant={'sm'} text={'Or continue with'} />
            </div>
        </div>
    )
}
