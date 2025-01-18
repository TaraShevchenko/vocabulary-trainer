'use client'

import { useFormContext, useWatch } from 'react-hook-form'

import { Switch as ClearSwitch, type SwitchProps } from 'shared/ui/Switch'

type SwitchPropsWithRequiredName = {
    name: string
} & Omit<SwitchProps, 'name'>

export function Switch({ name, inputFieldProps, ...otherProps }: SwitchPropsWithRequiredName) {
    const {
        control,
        register,
        formState: { errors },
    } = useFormContext()
    const checked = useWatch({ name, control }) as boolean
    return (
        <ClearSwitch
            isError={!!errors[name]?.message && typeof errors[name]?.message === 'string'}
            inputFieldProps={{ ...inputFieldProps, ...register(name), checked }}
            {...otherProps}
        />
    )
}
