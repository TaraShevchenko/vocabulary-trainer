import { Text } from 'shared/ui/Text'

export const AuthVarianceSplitter = () => {
    return (
        <div className="relative">
            <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
                <Text className="bg-background px-2 text-muted-foreground" variant={'sm'} text={'Or continue with'} />
            </div>
        </div>
    )
}
