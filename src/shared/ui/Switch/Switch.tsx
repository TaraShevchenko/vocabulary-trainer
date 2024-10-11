'use client'

import { type HTMLInputTypeAttribute, type InputHTMLAttributes, forwardRef, useMemo, useState } from 'react'

import { type VariantProps } from 'class-variance-authority'

import { Text } from 'shared/ui/Text'
import { cn } from 'shared/utils/cn'

import { handleGetTypeAndVariantName, switchIcon, switchVariants } from './config'

export type CheckboxProps = {
    name: string
    label?: string
    isError?: boolean
    className?: string
    buttonClassName?: string
    labelClassName?: string
} & VariantProps<typeof switchVariants> &
    InputHTMLAttributes<HTMLInputElement>

export const Switch = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
    const {
        name,
        type = 'checkbox',
        variant = 'bordered',
        checked,
        className,
        onChange,
        label,
        labelClassName,
        buttonClassName,
        ...otherProps
    } = props

    const typeAndVariantName = useMemo(() => handleGetTypeAndVariantName(type, variant), [type, variant])
    const Icon = useMemo(() => (typeAndVariantName ? switchIcon[typeAndVariantName] : undefined), [typeAndVariantName])

    const [active, setActive] = useState<VariantProps<typeof switchVariants>['active']>(
        checked ? typeAndVariantName : undefined,
    )

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setActive(e.target.checked ? typeAndVariantName : undefined)
        !!onChange && onChange(e)
    }

    return (
        <span className={cn('relative flex items-center gap-3', className)}>
            <button className={cn(switchVariants({ type, variant, active }), buttonClassName)}>
                {Icon && <Icon className={cn('transition', active ? 'opacity-100' : 'opacity-0')} />}
            </button>
            <input
                {...otherProps}
                type={type as HTMLInputTypeAttribute}
                ref={ref}
                id={name}
                onChange={handleChange}
                checked={checked}
                className={cn('absolute opacity-0', className)}
            />
            {!!label && (
                <label htmlFor={name} className={cn(labelClassName)}>
                    <Text text={label} />
                </label>
            )}
        </span>
    )
})
Switch.displayName = 'Switch'
