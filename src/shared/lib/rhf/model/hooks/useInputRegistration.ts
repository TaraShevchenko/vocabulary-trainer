import { useMemo } from 'react'

import { useFormContext } from 'react-hook-form'

import { type InputHint } from 'shared/ui/Input'

export const useInputRegistration = ({ name, hints }: { name: string; hints?: InputHint[] }) => {
    const {
        register,
        formState: { errors },
    } = useFormContext()

    const errorMessage =
        !!errors[name]?.message && typeof errors[name]?.message === 'string' ? errors[name]?.message : ''

    const hintsWithErrors = useMemo(() => {
        const errorHint = {
            text: errorMessage,
            isError: true,
        }

        return hints?.length ? [...hints, errorHint] : [errorHint]
    }, [errorMessage, hints])

    return {
        register,
        errorMessage,
        hintsWithErrors,
    }
}
