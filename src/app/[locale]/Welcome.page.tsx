import { Header } from 'widgets/Header'
import { WelcomeBlock } from 'widgets/WelcomeBlock'

export const metadata = {
    title: 'Welcome to Vocabulary trainer',
    description: 'Read use full information about Vocabulary trainer',
}

export default async function WelcomePage() {
    return (
        <>
            <Header />
            <WelcomeBlock />
        </>
    )
}
