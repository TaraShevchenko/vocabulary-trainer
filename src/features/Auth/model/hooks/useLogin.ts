'use client'

import { signIn } from 'next-auth/react'
import toast from 'react-hot-toast'
import type { z } from 'zod'

import { useRouter } from 'shared/lib/nextIntl'

import type { LoginFormSchema } from '../schemes'

export const useLogin = () => {
    const router = useRouter()

    const handleLogin = async ({ email, password }: z.infer<typeof LoginFormSchema>) => {
        await signIn('credentials', {
            email,
            password,
            redirect: false,
        })
            .then((res) => {
                if (res?.error) {
                    toast.error('Invalid credentials')
                } else {
                    router.push('/dashboard')
                }
            })
            .catch((error) => {
                console.error(JSON.stringify(error))
            })
    }

    return { handleLogin }
}
