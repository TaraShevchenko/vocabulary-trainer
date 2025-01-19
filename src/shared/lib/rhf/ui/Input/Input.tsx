'use client'

import { Input as ClearInput, type InputFieldProps, type InputProps } from 'shared/ui/Input'

import { useInputRegistration } from '../../model/hooks'

type InputPropsWithRequiredName = Omit<InputProps, 'inputFieldProps'> & {
    inputFieldProps: {
        name: string
    } & Omit<InputFieldProps, 'name'>
}

export function Input({ hints, inputFieldProps, ...otherProps }: InputPropsWithRequiredName) {
    const { register, errorMessage, customError } = useInputRegistration({ name: inputFieldProps.name })
    return (
        <ClearInput
            isError={!!errorMessage}
            hints={[...(customError ? [customError] : []), ...(hints ?? [])]}
            inputFieldProps={{
                ...inputFieldProps,
                ...register(inputFieldProps.name),
            }}
            {...otherProps}
        />
    )
}
