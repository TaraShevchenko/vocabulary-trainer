import { AuthCard, RegistrationForm } from 'features/Auth'

export default function Registration() {
    return (
        <AuthCard title={'Create Account'} subtitle={'Choose an option below to create your account!'}>
            <RegistrationForm />
        </AuthCard>
    )
}
