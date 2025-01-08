'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Form, Input, PasswordInput } from 'shared/lib/rhf'
import { Button } from 'shared/ui/Button'

const registrationFormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
}).refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
})

type FormData = z.infer<typeof registrationFormSchema>

export const RegistrationForm = () => {

    const methods = useForm<FormData>({
        mode: 'onSubmit',
        defaultValues: {
            email: '',
            password: '',
            confirmPassword: '',
        },
        resolver: zodResolver(registrationFormSchema),
    })

    const onSubmit = (data: FormData) => {
        console.log(data)
    }

    return (
        <Form className={'flex flex-col gap-4'} methods={methods} onSubmit={onSubmit}>
            <Input label={'Email'} inputFieldProps={{ name: 'email', placeholder: 'm@example.com' }} />
            <PasswordInput label={'Password'} inputFieldProps={{ name: 'password', placeholder: '!Qwer1234' }} />
            <PasswordInput
                label={'Confirm Password'}
                inputFieldProps={{ name: 'confirmPassword', placeholder: '!Qwer1234' }}
            />
            <Button 
                type={'submit'} 
                className="w-full" 
                text={'Create account'}
            />
        </Form>
    )
}
