import { forwardRef } from 'react'

import { Eye, EyeOff } from 'lucide-react'

import { type PasswordInputProps } from '../../model/types'
import { Input } from '../Input'

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>((props, ref) => {
    const { inputFieldProps, rightIconProps, isShown, toggleShown, ...otherProps } = props
    const { type: rightButtonType = 'button', ...otherRightIconProps } = rightIconProps ?? {}

    const type = isShown ? 'text' : 'password'
    const rightIcon = isShown ? EyeOff : Eye

    return (
        <Input
            ref={ref}
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
})

PasswordInput.displayName = 'PasswordInput'
