'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Form, Input, PasswordInput } from 'shared/lib/rhf'
import { Button } from 'shared/ui/Button'

const registrationFormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
})

export const RegistrationForm = () => {
    const methods = useForm<z.infer<typeof registrationFormSchema>>({
        mode: 'onSubmit',
        defaultValues: {
            email: '',
            password: '',
            confirmPassword: '',
        },
    })

    const onSubmit = (data: z.infer<typeof registrationFormSchema>) => {
        console.log(data)
    }

    return (
        <Form className={'flex flex-col gap-4'} methods={methods} onSubmit={onSubmit}>
            <Input label={'Email'} inputFieldProps={{ name: 'email', placeholder: 'm@example.com' }} />
            <PasswordInput label={'Password'} inputFieldProps={{ name: 'password', placeholder: '!Qwer1234' }} />
            <PasswordInput
                label={'Confirm Password'}
                inputFieldProps={{ name: 'password', placeholder: '!Qwer1234' }}
            />
            <Button className="w-full" text={'Create account'} />
        </Form>
    )
}
