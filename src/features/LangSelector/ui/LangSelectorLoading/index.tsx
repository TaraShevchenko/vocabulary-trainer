import { Languages } from 'lucide-react'

import { Button } from 'shared/ui/Button'

export const LangSelectorLoading = () => {
    return <Button icon={Languages} size={'iconSm'} variant={'ghost'} disabled />
}
