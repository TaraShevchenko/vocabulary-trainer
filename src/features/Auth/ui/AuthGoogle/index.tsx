'use client'

import { signIn } from 'next-auth/react'

import { Button } from 'shared/ui/Button'
import { Google } from 'shared/ui/Icons'

export const AuthGoogle = () => {
    const handleSignIn = () => {
        signIn('google', { callbackUrl: '/accounts' }).catch((error) => {
            console.error('Sign-in error:', error)
        })
    }

    return <Button onClick={handleSignIn} variant="outline" text={'Google'} icon={Google} />
}
