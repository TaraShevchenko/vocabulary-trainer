import dynamic from 'next/dynamic'

import { LangSelectorLoading } from './ui/LangSelectorLoading'

export const LangSelector = dynamic(() => import('./ui/LangSelector'), {
    loading: LangSelectorLoading,
    ssr: false
})
