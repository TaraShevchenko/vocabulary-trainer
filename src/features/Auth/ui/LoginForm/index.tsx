'use client'

import { Button } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input'

import { Form } from 'shared/ui/Form'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const loginFormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
})

export const LoginForm = () => {
    const methods = useForm<z.infer<typeof loginFormSchema>>({
        resolver: zodResolver(loginFormSchema),
    })
    const onSubmit = (data: z.infer<typeof loginFormSchema>) => {
        console.log(data)
    }
    
    return (
        <Form className={'flex flex-col gap-4'} methods={methods} onSubmit={onSubmit}>
            <Input
                label={'Email'}
                inputFieldProps={{ name: 'email', placeholder: 'm@example.com'}}
            />
            <Input
                label={'Password'}
                inputFieldProps={{ name: 'password', placeholder: '!Qwer1234' }}
            />
            <Button className="w-full" text={'Login'} disabled />
        </Form>
    )
}
