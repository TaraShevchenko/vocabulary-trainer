import dynamic from 'next/dynamic'

import { ThemeSelectorLoader } from './ThemeSelector.loader'

export const ThemeSelector = dynamic(() => import('./ThemeSelector'), {
    loading: ThemeSelectorLoader,
    ssr: false,
})
