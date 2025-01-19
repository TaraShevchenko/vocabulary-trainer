import dynamic from 'next/dynamic'

import { LangSelectorLoader } from './LangSelector.loader'

export const LangSelector = dynamic(() => import('./LangSelector'), {
    loading: LangSelectorLoader,
    ssr: false,
})
