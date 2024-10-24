'use client'

import { LogOut } from 'lucide-react'
import { signOut, useSession } from 'next-auth/react'

import { Button } from 'shared/ui/Button'

export const LogoutButton = () => {
    const { data: session } = useSession()
    const handleLogout = async () => {
        await signOut({ callbackUrl: '/' })
    }

    return <>{!!session && <Button onClick={handleLogout} icon={LogOut} size={'iconSm'} variant={'ghost'} />}</>
}
