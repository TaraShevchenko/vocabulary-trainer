import dynamic from 'next/dynamic'

import { ThemeSelectorLoading } from './ui/ThemeSelectorLoading'

export const ThemeSelector = dynamic(() => import('./ui/ThemeSelector'), {
    loading: ThemeSelectorLoading,
    ssr: false
})
