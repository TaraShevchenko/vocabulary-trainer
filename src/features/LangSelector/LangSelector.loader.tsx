import { Languages } from 'lucide-react'

import { Button } from 'shared/ui/Button'

export function LangSelectorLoader() {
    return <Button icon={Languages} size={'iconSm'} variant={'ghost'} disabled />
}
