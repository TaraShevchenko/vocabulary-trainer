'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import type { z } from 'zod'

import { useLogin } from 'features/Auth/model/hooks/useLogin'

import { Form, Input, PasswordInput } from 'shared/lib/rhf'
import { api } from 'shared/lib/trpc/client'
import { Button } from 'shared/ui/Button'

import { RegistrationFormSchema } from '../../model/schemes'

export const RegistrationForm = () => {
    const methods = useForm<z.infer<typeof RegistrationFormSchema>>({
        mode: 'onSubmit',
        defaultValues: {
            email: '',
            password: '',
            confirmPassword: '',
        },
        resolver: zodResolver(RegistrationFormSchema),
    })

    const { mutate, isPending } = api.auth.register.useMutation()

    const { handleLogin } = useLogin()

    const onSuccess = async (data: z.infer<typeof RegistrationFormSchema>) => {
        await handleLogin({ email: data.email, password: data.password })
        methods.reset()
    }

    const onSubmit = (data: z.infer<typeof RegistrationFormSchema>) => {
        mutate(data, {
            onSuccess: () => void onSuccess(data),
            onError: (error) => toast.error(error.message),
        })
    }

    return (
        <Form className={'flex flex-col gap-4'} methods={methods} onSubmit={onSubmit}>
            <Input label={'Email'} inputFieldProps={{ name: 'email', placeholder: 'm@example.com' }} />
            <PasswordInput label={'Password'} inputFieldProps={{ name: 'password', placeholder: '!Qwer1234' }} />
            <PasswordInput
                label={'Confirm Password'}
                inputFieldProps={{ name: 'confirmPassword', placeholder: '!Qwer1234' }}
            />
            <Button disabled={isPending} type={'submit'} className="w-full" text={'Create account'} />
        </Form>
    )
}
