import { Button, type ButtonProps } from 'shared/ui/Button'
import { type IconProps } from 'shared/ui/Icon'
import { cn } from 'shared/utils/cn'

import { type InputIconProps } from '../../model/types'

const inputIconClassNames = (side: 'left' | 'right') =>
    cn(
        'text-input-foreground',
        'h-4 w-auto',
        'absolute top-1/2 -translate-y-1/2',
        { 'left-2': side === 'left' },
        { 'right-2': side === 'right' },
    )

export const InputIcon = (props: InputIconProps) => {
    const { icon: Icon, iconProps, side } = props

    if (iconProps && 'onClick' in iconProps) {
        const { className: buttonClassName, ...otherButtonProps } = iconProps as ButtonProps
        return <Button className={cn(inputIconClassNames(side), buttonClassName)} icon={Icon} {...otherButtonProps} />
    }

    const { className: iconClassName, ...otherIconProps } = (iconProps as IconProps) ?? {}
    return <Icon className={cn(inputIconClassNames(side), iconClassName)} {...otherIconProps} />
}
