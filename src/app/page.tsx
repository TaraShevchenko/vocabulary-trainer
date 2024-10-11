import Link from "next/link"

export const metadata = {
    title: 'Welcome to Vocabulary-Trainer',
    description: '',
}

export default async function Login() {
    return (
        <div>Welcome to Vocabulary-Trainer <Link href="/login">To Login</Link></div>
    )
}
