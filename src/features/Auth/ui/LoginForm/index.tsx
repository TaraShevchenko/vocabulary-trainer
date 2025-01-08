'use client'

import { useEffect } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { signIn, useSession } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { useRouter } from 'shared/lib/nextIntl'
import { Form, Input, PasswordInput } from 'shared/lib/rhf'
import { Button } from 'shared/ui/Button'

const loginFormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
})

export const LoginForm = () => {
    const session = useSession()
    const router = useRouter()
    const methods = useForm<z.infer<typeof loginFormSchema>>({
        mode: 'onSubmit',
        defaultValues: {
            email: '',
            password: '',
        },
        resolver: zodResolver(loginFormSchema),
    })

    const onSubmit = async (data: z.infer<typeof loginFormSchema>) => {
        const result = await signIn('credentials', {
            email: data.email,
            password: data.password,
            redirect: false,
        })

        if (result?.error) {
            console.error('Sign-in credentials error:', result.error)
        } else {
            router.push('/dashboard')
        }
    }

    useEffect(() => {
        console.log('Session:', session)
    }, [session])

    return (
        <Form className={'flex flex-col gap-4'} methods={methods} onSubmit={onSubmit}>
            <Input label={'Email'} inputFieldProps={{ name: 'email', placeholder: 'm@example.com' }} />
            <PasswordInput label={'Password'} inputFieldProps={{ name: 'password', placeholder: '!Qwer1234' }} />
            <Button className="w-full" text={'Login'} type={'submit'} />
        </Form>
    )
}
