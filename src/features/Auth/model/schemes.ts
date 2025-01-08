import { z } from 'zod'

export const LoginFormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
})

export const RegistrationFormSchema = z
    .object({
        email: z.string().email(),
        password: z.string().min(8),
        confirmPassword: z.string().min(8),
    })
    .refine((data) => data.password === data.confirmPassword, {
        path: ['confirmPassword'],
        message: 'Passwords do not match',
    })
