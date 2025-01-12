import { useFormContext } from 'react-hook-form'

export const useInputRegistration = ({ name }: { name: string }) => {
    const {
        register,
        formState: { errors },
    } = useFormContext()

    const isError = !!errors[name]?.message && typeof errors[name]?.message === 'string'
    const errorMessage = isError ? (errors[name]?.message as string) : ''
    const customError = !!errors[name]?.message ? { text: errorMessage, isError: true } : undefined

    return {
        register,
        errorMessage,
        customError,
    }
}
