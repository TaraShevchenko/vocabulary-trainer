import Link from 'next/link'

import { BookOpen, FileText, LayoutDashboard, LogIn } from 'lucide-react'

import { Card, CardContent } from 'shared/ui/Card'

export const metadata = {
    title: 'Welcome to Vocabulary-Trainer',
    description: '',
}

export default async function Welcome() {
    return (
        <div className="up768:pt-40 container mx-auto px-4 py-8">
            <h1 className="text-center text-5xl font-extrabold">
                Welcome to{' '}
                <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                    Vocabulary Trainer
                </span>
            </h1>
            <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-6 md:grid-cols-2">
                <Link href="/docs" className="group pointer-events-none opacity-70">
                    <Card className="transform transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-lg">
                        <CardContent className="p-6">
                            <div className="mb-4 flex items-center">
                                <FileText className="mr-3 h-6 w-6 text-purple-400" />
                                <h2 className="text-2xl font-semibold">Docs</h2>
                            </div>
                            <p className="text-gray-600">
                                Access documentation to get started and master Vocabulary Trainer.
                            </p>
                        </CardContent>
                    </Card>
                </Link>
                <Link href="/login" className="group">
                    <Card className="transform transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-lg">
                        <CardContent className="p-6">
                            <div className="mb-4 flex items-center">
                                <LogIn className="mr-3 h-6 w-6 text-purple-400" />
                                <h2 className="text-2xl font-semibold">Login</h2>
                            </div>
                            <p className="text-gray-600">Sign in to your account to track your progress.</p>
                        </CardContent>
                    </Card>
                </Link>
                <Link href="http://localhost:6006/" target="_blank" className="group">
                    <Card className="transform transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-lg">
                        <CardContent className="p-6">
                            <div className="mb-4 flex items-center">
                                <BookOpen className="mr-3 h-6 w-6 text-purple-400" />
                                <h2 className="text-2xl font-semibold">Storybook</h2>
                            </div>
                            <p className="text-gray-600">
                                Explore our component library and UI design system for Vocabulary Trainer.
                            </p>
                        </CardContent>
                    </Card>
                </Link>
                <Link href="/dashboard" className="group">
                    <Card className="transform transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-lg">
                        <CardContent className="p-6">
                            <div className="mb-4 flex items-center">
                                <LayoutDashboard className="mr-3 h-6 w-6 text-purple-400" />
                                <h2 className="text-2xl font-semibold">Dashboard</h2>
                            </div>
                            <p className="text-gray-600">
                                View your learning statistics, set goals, and manage your vocabulary lists.
                            </p>
                        </CardContent>
                    </Card>
                </Link>
            </div>
        </div>
    )
}
