import { AuthCard, AuthVarianceSplitter, LoginForm } from 'features/Auth'
import { AuthGoogle } from 'features/Auth/ui/AuthGoogle'

import { Anchor } from 'shared/ui/Button'
import { CardContent, CardFooter } from 'shared/ui/Card'

export const metadata = {
    title: 'Login - Vocabulary Trainer',
    description: 'Login to your account using the options below!',
}

export default function Login() {
    return (
        <AuthCard title={'Login Account'} subtitle={'Login to your account using the options below!'}>
            <CardContent className="flex flex-col gap-4">
                <AuthGoogle />
                <AuthVarianceSplitter />
                <LoginForm />
            </CardContent>
            <CardFooter className="flex-col gap-2">
                <Anchor
                    href={'/registration'}
                    className="w-full text-white"
                    text={'Register a new Account'}
                    variant={'link'}
                />
            </CardFooter>
        </AuthCard>
    )
}
