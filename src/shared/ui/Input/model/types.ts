import { type InputHTMLAttributes } from 'react'

import type { XOR } from 'shared/types'
import type { ButtonProps } from 'shared/ui/Button'
import type { Icon, IconProps } from 'shared/ui/Icons'
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

export type InputProps = {
    className?: string
    label?: string
    labelTextProps?: TextProps
    inputFieldProps?: InputHTMLAttributes<HTMLInputElement>
    leftIcon?: Icon
    leftIconProps?: IconOrButtonProps
    rightIcon?: Icon
    rightIconProps?: IconOrButtonProps
    hints?: InputHint[]
    isError?: boolean
}

export type PasswordInputProps = Omit<InputProps, 'inputFieldProps' | 'rightIcon' | 'rightIconProps'> & {
    inputFieldProps?: Omit<InputHTMLAttributes<HTMLInputElement>, 'name' | 'type'>
    rightIconProps?: Omit<ButtonProps, 'icon'>
}
