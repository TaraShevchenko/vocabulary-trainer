import { Button, type ButtonProps } from 'shared/ui/Button'
import { type IconProps } from 'shared/ui/Icon'
import { cn } from 'shared/utils/cn'

import { type InputIconProps } from '../../model/types'

function inputIconClassNames(side: 'left' | 'right') {
    return cn(
        'text-input-foreground',
        'h-4 w-auto',
        'absolute top-1/2 -translate-y-1/2',
        { 'left-3': side === 'left' },
        { 'right-3': side === 'right' },
    )
}

export function InputIcon({ icon: Icon, iconProps, side }: InputIconProps) {
    if (iconProps && 'onClick' in iconProps) {
        const { className: buttonClassName, ...otherButtonProps } = iconProps as ButtonProps
        return <Button className={cn(inputIconClassNames(side), buttonClassName)} icon={Icon} {...otherButtonProps} />
    }

    const { className: iconClassName, ...otherIconProps } = (iconProps as IconProps) ?? {}
    return <Icon className={cn(inputIconClassNames(side), iconClassName)} {...otherIconProps} />
}
