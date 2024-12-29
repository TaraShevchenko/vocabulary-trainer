'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Lock, Mail } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Form, Input, PasswordInput } from 'shared/lib/rhf'
import { Button } from 'shared/ui/Button'

const loginFormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
})

export const LoginForm = () => {
    const methods = useForm<z.infer<typeof loginFormSchema>>({
        mode: 'onSubmit',
        defaultValues: {
            email: '',
            password: '',
        },
        resolver: zodResolver(loginFormSchema),
    })
    const onSubmit = (data: z.infer<typeof loginFormSchema>) => {
        console.log(data)
    }

    return (
        <Form className={'flex flex-col gap-4'} methods={methods} onSubmit={onSubmit}>
            <Input label={'Email'} leftIcon={Mail} inputFieldProps={{ name: 'email', placeholder: 'm@example.com' }} />
            <PasswordInput
                label={'Password'}
                leftIcon={Lock}
                inputFieldProps={{ name: 'password', placeholder: '!Qwer1234' }}
            />
            <Button className="w-full" text={'Login'} type={'submit'} />
        </Form>
    )
}
