'use client'

import { PasswordInput as ClearInput, type PasswordInputProps } from 'shared/ui/Input'

import { useInputRegistration } from '../../model/hooks/useInputRegistration'

type InputPropsWithRequiredName = {
    name: string
} & PasswordInputProps

export const PasswordInput = ({ name, hints, inputFieldProps, ...otherProps }: InputPropsWithRequiredName) => {
    const { register, errorMessage, hintsWithErrors } = useInputRegistration({ name, hints })
    return (
        <ClearInput
            isError={!!errorMessage}
            hints={hintsWithErrors}
            inputFieldProps={{ ...inputFieldProps, ...register(name) }}
            {...otherProps}
        />
    )
}
