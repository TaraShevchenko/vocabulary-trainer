'use client'

import { type InputHTMLAttributes } from 'react'

import { Input as ClearInput, type InputProps } from 'shared/ui/Input'

import { useInputRegistration } from '../../model/hooks/useInputRegistration'

type InputPropsWithRequiredName = Omit<InputProps, 'inputFieldProps'> & {
    inputFieldProps: {
        name: string
    } & Omit<InputHTMLAttributes<HTMLInputElement>, 'name'>
}

export const Input = ({ hints, inputFieldProps, ...otherProps }: InputPropsWithRequiredName) => {
    const { register, errorMessage, customError } = useInputRegistration({ name: inputFieldProps.name })
    return (
        <ClearInput
            isError={!!errorMessage}
            hints={[...(customError ? [customError] : []), ...(hints ?? [])]}
            inputFieldProps={{ ...inputFieldProps, ...register(inputFieldProps.name) }}
            {...otherProps}
        />
    )
}
