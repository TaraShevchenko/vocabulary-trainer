'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import type { z } from 'zod'

import { Form, Input, PasswordInput } from 'shared/lib/rhf'
import { type ClassName } from 'shared/types'
import { Button } from 'shared/ui/Button'
import { cn } from 'shared/utils/cn'

import { useLogin } from '../../model/hooks'
import { LoginFormSchema } from '../../model/schemes'

type LoginFormProps = {} & Partial<ClassName>

export function LoginForm({ className }: LoginFormProps) {
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
        <Form className={cn('flex flex-col gap-4', className)} methods={methods} onSubmit={handleLogin}>
            <Input label={'Email'} inputFieldProps={{ name: 'email', placeholder: 'm@example.com' }} />
            <PasswordInput label={'Password'} inputFieldProps={{ name: 'password', placeholder: '!Qwer1234' }} />
            <Button className="w-full" text={'Login'} type={'submit'} />
        </Form>
    )
}
