import { type AnchorHTMLAttributes, type ButtonHTMLAttributes } from 'react'

import { type VariantProps } from 'class-variance-authority'

import { type LinkProps } from 'shared/lib/nextIntl'
import { type Icon, type IconProps } from 'shared/ui/Icons'
import { type TextProps } from 'shared/ui/Text'

import { type buttonCva } from './config'

export type BaseButtonProps = {
    isActive?: boolean
} & Omit<VariantProps<typeof buttonCva>, 'activeByVariant'>

export type ButtonContentProps = {
    text?: string
    icon?: Icon
    iconProps?: IconProps
    textProps?: Omit<TextProps, 'text'>
} & BaseButtonProps

export type ButtonWithChildProps = Omit<BaseButtonProps, 'size'> & ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = ButtonContentProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>

export type AnchorWithChildProps = Omit<BaseButtonProps, 'size'> & LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>

export type AnchorProps = ButtonContentProps & LinkProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'>

export type FilterButtonProps = {
    activeFilters?: string[]
} & ButtonProps
