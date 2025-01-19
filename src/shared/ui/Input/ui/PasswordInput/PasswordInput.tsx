import { Eye, EyeOff } from 'lucide-react'

import { type PasswordInputProps } from '../../model/types'
import { Input } from '../Input'

export function PasswordInput({
    inputFieldProps,
    rightIconProps,
    isShown,
    toggleShown,
    ...otherProps
}: PasswordInputProps) {
    const { type: rightButtonType = 'button', ...otherRightIconProps } = rightIconProps ?? {}

    const type = isShown ? 'text' : 'password'
    const rightIcon = isShown ? EyeOff : Eye

    return (
        <Input
            inputFieldProps={{ type, ...inputFieldProps }}
            rightIcon={rightIcon}
            rightIconProps={{
                type: rightButtonType,
                onClick: toggleShown,
                variant: 'link',
                className: 'p-0',
                ...otherRightIconProps,
            }}
            {...otherProps}
        />
    )
}

PasswordInput.displayName = 'PasswordInput'
