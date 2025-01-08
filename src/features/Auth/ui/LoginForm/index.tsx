'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import type { z } from 'zod'

import { useLogin } from 'features/Auth/model/hooks/useLogin'

import { Form, Input, PasswordInput } from 'shared/lib/rhf'
import { Button } from 'shared/ui/Button'

import { LoginFormSchema } from '../../model/schemes'

export const LoginForm = () => {
    const methods = useForm<z.infer<typeof LoginFormSchema>>({
        mode: 'onSubmit',
        defaultValues: {
            email: '',
            password: '',
        },
        resolver: zodResolver(LoginFormSchema),
    })

    const { handleLogin } = useLogin()
    return (
        <Form className={'flex flex-col gap-4'} methods={methods} onSubmit={handleLogin}>
            <Input label={'Email'} inputFieldProps={{ name: 'email', placeholder: 'm@example.com' }} />
            <PasswordInput label={'Password'} inputFieldProps={{ name: 'password', placeholder: '!Qwer1234' }} />
            <Button className="w-full" text={'Login'} type={'submit'} />
        </Form>
    )
}
