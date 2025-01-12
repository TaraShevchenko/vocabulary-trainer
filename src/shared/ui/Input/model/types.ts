import { type InputHTMLAttributes } from 'react'

import type { XOR } from 'shared/types'
import type { ButtonProps } from 'shared/ui/Button'
import type { Icon, IconProps } from 'shared/ui/Icon'
import { type TextProps } from 'shared/ui/Text'

export type IconOrButtonProps = XOR<IconProps, Omit<ButtonProps, 'icon'>>
export type InputIconProps = {
    icon: Icon
    iconProps?: IconOrButtonProps
    side: 'left' | 'right'
}

export type InputHint = {
    text: string
    isError?: boolean
}

export type InputFieldProps = InputHTMLAttributes<HTMLInputElement>

export type InputProps = {
    className?: string
    label?: string
    labelTextProps?: TextProps
    inputFieldProps?: InputFieldProps
    leftIcon?: Icon
    leftIconProps?: IconOrButtonProps
    rightIcon?: Icon
    rightIconProps?: IconOrButtonProps
    hints?: InputHint[]
    isError?: boolean
}

export type PasswordFieldProps = Omit<InputFieldProps, 'type'>

export type PasswordInputProps = Omit<InputProps, 'inputFieldProps' | 'rightIcon' | 'rightIconProps'> & {
    inputFieldProps?: PasswordFieldProps
    rightIconProps?: Omit<ButtonProps, 'icon' | 'onClick'>
    isShown: boolean
    toggleShown: () => void
}
