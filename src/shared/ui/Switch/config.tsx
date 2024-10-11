import { type ReactNode } from 'react'

import { type VariantProps, cva } from 'class-variance-authority'
import { Check, Circle } from 'lucide-react'

import { cn } from 'shared/utils/cn'

type Type = 'checkbox' | 'radio'
type Variant = 'bordered' | 'clear'
type TypeAndVariant = `${Type}-${Variant}`
type Icon = (props: { className?: string }) => ReactNode

export const handleGetTypeAndVariantName = (
    type: VariantProps<typeof switchVariants>['type'],
    variant: VariantProps<typeof switchVariants>['variant'],
): VariantProps<typeof switchVariants>['active'] => {
    return type && variant ? `${type}-${variant}` : undefined
}

export const switchIcon: Record<TypeAndVariant, Icon> = {
    ['checkbox-bordered']: ({ className }) => <Check className={cn('h-3 w-3 text-primary-foreground', className)} />,
    ['checkbox-clear']: ({ className }) => <Check className={cn('h-4 w-4 text-primary', className)} />,
    ['radio-bordered']: ({ className }) => (
        <Circle className={cn('h-2 w-2 fill-current text-primary-foreground', className)} />
    ),
    ['radio-clear']: ({ className }) => <Circle className={cn('h-2 w-2 fill-current text-primary', className)} />,
}

const type: Record<Type, string> = {
    checkbox: 'rounded',
    radio: 'rounded-2xl',
}

const variant: Record<Variant, string> = {
    bordered: 'border border-primary h-4 w-4',
    clear: '',
}

const active: Record<TypeAndVariant, string> = {
    ['checkbox-bordered']: 'bg-primary',
    ['checkbox-clear']: '',
    ['radio-bordered']: 'bg-primary',
    ['radio-clear']: '',
}

const error: Record<TypeAndVariant, string> = {
    ['checkbox-bordered']: '',
    ['checkbox-clear']: '',
    ['radio-bordered']: '',
    ['radio-clear']: '',
}

export const switchVariants = cva('flex items-center justify-center', {
    variants: {
        type,
        variant,
        active,
        error,
    },
})
