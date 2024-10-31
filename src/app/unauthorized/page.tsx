export const metadata = {
    title: 'Unauthorized Page',
    description: 'You should be logged in to access this page',
}

export default async function Unauthorized() {
    return <div>Unauthorized Page - You should be logged in to access this page</div>
}
