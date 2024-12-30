import { AuthCard, AuthVarianceSplitter, RegistrationForm } from 'features/Auth'
import { AuthGoogle } from 'features/Auth/ui/AuthGoogle'

import { Anchor } from 'shared/ui/Button'
import { CardFooter } from 'shared/ui/Card'
import { CardContent } from 'shared/ui/Card'

export default function Registration() {
    return (
        <AuthCard title={'Create Account'} subtitle={'Choose an option below to create your account!'}>
            <CardContent className="grid gap-4">
                <AuthGoogle />
                <AuthVarianceSplitter />
                <RegistrationForm />
            </CardContent>
            <CardFooter className="flex-col gap-2">
                <Anchor href={'/login'} className="w-full text-white" variant={'link'} text={'Go to Login'} />
            </CardFooter>
        </AuthCard>
    )
}
