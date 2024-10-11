import { type AnchorHTMLAttributes, type ButtonHTMLAttributes } from 'react'

import { type LinkProps } from 'next/link'

import { type VariantProps } from 'class-variance-authority'
import { type LucideIcon } from 'lucide-react'

import { type Icon, type IconProps } from 'shared/ui/Icons'
import { type TextProps } from 'shared/ui/Text'

import { type buttonVariants } from './config'

export type ButtonContentProps = {
    text?: string
    icon?: LucideIcon | Icon
    iconProps?: IconProps
    isActive?: boolean
    textProps?: Omit<TextProps, 'text'>
} & Omit<VariantProps<typeof buttonVariants>, 'activeByVariant'>

export type ButtonProps = ButtonContentProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>

export type AnchorProps = ButtonContentProps & LinkProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'>

export type FilterButtonProps = {
    activeFilters?: string[]
} & ButtonProps
