import { AuthCard, LoginForm } from 'features/Auth'

export const metadata = {
    title: 'Login - Coinroller',
    description: 'Keep your coins',
}

export default async function Login() {
    return (
        <AuthCard title={'Login Account'} subtitle={'Login to your account using the options below!'}>
            <LoginForm />
        </AuthCard>
    )
}
