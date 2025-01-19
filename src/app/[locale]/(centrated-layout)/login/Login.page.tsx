import { AuthCard, AuthVarianceSplitter, LoginForm } from 'features/Auth'
import { AuthGoogle } from 'features/Auth/ui/AuthGoogle'

import { type LocalePageProps } from 'shared/lib/nextIntl'
import { Anchor } from 'shared/ui/Button'
import { CardContent, CardFooter } from 'shared/ui/Card'
import { handleGenerateMetadata } from 'shared/utils/handleGenerateMetadata'

export async function generateMetadata({ params }: LocalePageProps) {
    return await handleGenerateMetadata({
        route: '/login',
        namespace: 'metadata.login',
        locale: params.locale,
    })
}

export default async function LoginPage() {
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
                    text={'Register a new Account'}
                    className={'text-white'}
                    variant={'link'}
                    size={'fit'}
                />
            </CardFooter>
        </AuthCard>
    )
}
