'use client'

import React from 'react'

import { useInputErrorsAndRegister } from 'shared/rhf/model/hooks/useInputErrors'
import { PasswordInput as ClearInput, type PasswordInputProps } from 'shared/ui/Input'

type InputPropsWithRequiredName = {
    name: string
} & Omit<PasswordInputProps, 'name'>

export const PasswordInput = ({ name, hints, inputFieldProps, ...otherProps }: InputPropsWithRequiredName) => {
    const { register, errorMessage, hintsWithErrors } = useInputErrorsAndRegister({ name, hints })
    return (
        <ClearInput
            isError={!!errorMessage}
            hints={hintsWithErrors}
            inputFieldProps={{ ...inputFieldProps, ...register(name) }}
            {...otherProps}
        />
    )
}
