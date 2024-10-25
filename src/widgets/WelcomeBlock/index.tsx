import { BookOpen, FileText, LayoutDashboard, LogIn } from 'lucide-react'

import { AnchorWithChild } from 'shared/ui/Button'
import { Text } from 'shared/ui/Text'
import { cn } from 'shared/utils/cn'

const CARDS_DATA = [
    {
        title: 'Docs',
        desc: 'Access documentation to get started and master Vocabulary Trainer.',
        disabled: true,
        href: '/',
        icon: FileText,
    },
    {
        title: 'Login',
        desc: 'Sign in to your account to track your progress.',
        href: '/login',
        icon: LogIn,
    },
    {
        title: 'Storybook',
        desc: 'Explore our component library and UI design system for Vocabulary Trainer.',
        href: 'http://localhost:6006/',
        icon: BookOpen,
        target: '_blank',
    },
    {
        title: 'Dashboard',
        desc: 'View your learning statistics, set goals, and manage your vocabulary lists.',
        href: '/dashboard',
        icon: LayoutDashboard,
    },
]

export const WelcomeBlock = () => {
    return (
        <div className={cn('container mx-auto px-4 py-8', 'up768:pt-40')}>
            <h1 className={cn('text-center')}>
                <Text
                    className={cn('text-3xl font-extrabold', 'up500:text-4xl', 'up768:text-6xl')}
                    text="Welcome to "
                    variant="title"
                    tag="span"
                />
                <Text
                    className={cn(
                        'text-3xl font-extrabold',
                        'bg-decor-gradient bg-clip-text text-transparent',
                        'up500:text-4xl',
                        'up768:text-6xl',
                    )}
                    text="Vocabulary Trainer"
                    variant="title"
                    tag="span"
                />
            </h1>
            <div className={cn('mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-6', 'up768:grid-cols-2')}>
                {CARDS_DATA.map(({ title, desc, disabled, href, icon: Icon, target }) => (
                    <AnchorWithChild
                        key={title}
                        href={href}
                        target={target}
                        variant="outline"
                        className={cn(
                            'items-start justify-start',
                            'p-6 hover-yes:hover:bg-accent/50 hover-no:active:bg-accent/50',
                            disabled ? 'pointer-events-none opacity-70' : '',
                        )}
                    >
                        <div className={cn('max-w-full')}>
                            <div className={cn('mb-4 flex items-center')}>
                                <Icon className={cn('text-decor mr-3 h-6 w-6')} />
                                <Text text={title} variant="title" tag="h2" />
                            </div>
                            <Text className={cn('text-muted-foreground')} text={desc} />
                        </div>
                    </AnchorWithChild>
                ))}
            </div>
        </div>
    )
}
