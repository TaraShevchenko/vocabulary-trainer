import { AuthCard, AuthVarianceSplitter, RegistrationForm } from 'features/Auth'
import { AuthGoogle } from 'features/Auth/ui/AuthGoogle'

import { type LocalePageProps } from 'shared/lib/nextIntl'
import { Anchor } from 'shared/ui/Button'
import { CardFooter } from 'shared/ui/Card'
import { CardContent } from 'shared/ui/Card'
import { handleGenerateMetadata } from 'shared/utils/handleGenerateMetadata'

export async function generateMetadata({ params }: LocalePageProps) {
    return await handleGenerateMetadata({
        route: '/registration',
        namespace: 'metadata.registration',
        locale: params.locale,
    })
}

export default async function RegistrationPage() {
    return (
        <AuthCard title={'Create Account'} subtitle={'Choose an option below to create your account!'}>
            <CardContent className="grid gap-4">
                <AuthGoogle />
                <AuthVarianceSplitter />
                <RegistrationForm />
            </CardContent>
            <CardFooter className="flex-col gap-2">
                <Anchor href={'/login'} text={'Go to Login'} className={'text-white'} variant={'link'} size={'fit'} />
            </CardFooter>
        </AuthCard>
    )
}
