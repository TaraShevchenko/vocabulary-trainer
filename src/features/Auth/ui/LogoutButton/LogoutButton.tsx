'use client'

import { LogOut } from 'lucide-react'
import { signOut, useSession } from 'next-auth/react'

import { type ClassName } from 'shared/types'
import { Button } from 'shared/ui/Button'

type LogoutButtonProps = { hideIfNoSession?: boolean } & Partial<ClassName>

export function LogoutButton({ className, hideIfNoSession = true }: LogoutButtonProps) {
    const { data: session } = useSession()
    const handleLogout = async () => {
        await signOut({ callbackUrl: '/' })
    }

    return (
        <>
            {(hideIfNoSession ? !!session : false) && (
                <Button className={className} onClick={handleLogout} icon={LogOut} size={'iconSm'} variant={'ghost'} />
            )}
        </>
    )
}
