'use client'

import { useInputRegistration } from '../../model'
import { Input as ClearInput, type InputProps } from 'shared/ui/Input'

type InputPropsWithRequiredName = {
    name: string
} & Omit<InputProps, 'name'>

export const Input = ({ name, hints, inputFieldProps, ...otherProps }: InputPropsWithRequiredName) => {
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
