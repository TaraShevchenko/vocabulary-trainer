import { BookOpen, FileText, LayoutDashboard, LogIn } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

import { AnchorWithChild } from 'shared/ui/Button'
import { Text } from 'shared/ui/Text'
import { cn } from 'shared/utils/cn'

const CARDS_DATA = [
    {
        title: 'docs',
        desc: 'access_documentation_to_get_started_and_master_vocabulary_trainer',
        disabled: true,
        href: '/',
        icon: FileText,
    },
    {
        title: 'login',
        desc: 'sign_in_to_your_account_to_track_your_progress',
        href: '/login',
        icon: LogIn,
    },
    {
        title: 'storybook',
        desc: 'explore_our_component_library_and_ui_design_system_for_vocabulary_trainer',
        href: 'http://localhost:6006/',
        icon: BookOpen,
        target: '_blank',
    },
    {
        title: 'dashboard',
        desc: 'view_your_learning_statistics_set_goals_and_manage_your_vocabulary_lists',
        href: '/dashboard',
        icon: LayoutDashboard,
    },
]

export const WelcomeBlock = async () => {
    const t = await getTranslations('global')
    return (
        <div className={cn('container mx-auto px-4 py-4', 'up768:pt-40')}>
            <h1 className={cn('text-center')}>
                <Text
                    className={cn('text-3xl font-extrabold', 'up500:text-4xl', 'up768:text-6xl')}
                    text={t('welcome_to')}
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
                    text={`${' '}Vocabulary Trainer`}
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
                            { 'pointer-events-none opacity-70': disabled },
                        )}
                    >
                        <div className={cn('max-w-full')}>
                            <div className={cn('mb-4 flex items-center')}>
                                <Icon className={cn('mr-3 h-6 w-6 text-decor')} />
                                <Text text={t(title)} variant="title" tag="h2" />
                            </div>
                            <Text className={cn('text-muted-foreground')} text={t(desc)} />
                        </div>
                    </AnchorWithChild>
                ))}
            </div>
        </div>
    )
}
