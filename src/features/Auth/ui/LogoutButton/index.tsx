'use client'

import { LogOut } from 'lucide-react'
import { signOut } from 'next-auth/react'

import { Button } from 'shared/ui/Button'

export const LogoutButton = async () => {
    const handleLogout = async () => {
        await signOut({ callbackUrl: '/' })
    }
    return <Button onClick={handleLogout} icon={LogOut} size={'iconSm'} variant={'ghost'} />
}
