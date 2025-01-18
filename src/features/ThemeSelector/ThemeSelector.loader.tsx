import { SunMoon } from 'lucide-react'

import { Button } from 'shared/ui/Button'

export function ThemeSelectorLoader() {
    return <Button icon={SunMoon} size={'iconSm'} variant={'ghost'} disabled />
}
