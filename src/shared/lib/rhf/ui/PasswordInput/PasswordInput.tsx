'use client'

import { useState } from 'react'

import { PasswordInput as ClearPasswordInput, type PasswordFieldProps, type PasswordInputProps } from 'shared/ui/Input'

import { useInputRegistration } from '../../model/hooks'

type InputPropsWithRequiredName = Omit<PasswordInputProps, 'inputFieldProps' | 'isShown' | 'toggleShown'> & {
    inputFieldProps: {
        name: string
    } & Omit<PasswordFieldProps, 'name'>
}

export function PasswordInput({ hints, inputFieldProps, ...otherProps }: InputPropsWithRequiredName) {
    const { register, errorMessage, customError } = useInputRegistration({ name: inputFieldProps.name })

    const [isShown, setIsShown] = useState(false)
    const toggleShown = () => setIsShown(!isShown)

    return (
        <ClearPasswordInput
            isError={!!errorMessage}
            hints={[...(customError ? [customError] : []), ...(hints ?? [])]}
            inputFieldProps={{
                ...inputFieldProps,
                ...register(inputFieldProps.name),
            }}
            isShown={isShown}
            toggleShown={toggleShown}
            {...otherProps}
        />
    )
}
