import { AuthCard, LoginForm } from 'features/Auth'

export const metadata = {
    title: 'Login - Vocabulary Trainer',
    description: 'Login to your account using the options below!',
}

export default function Login() {
    return (
        <AuthCard title={'Login Account Test'} subtitle={'Login to your account using the options below!'}>
            <LoginForm />
        </AuthCard>
    )
}
