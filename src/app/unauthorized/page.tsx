'use client'

import { useEffect, useState } from 'react'

import { useRouter } from 'next/navigation'

import { Anchor } from 'shared/ui/Button'
import { Card, CardFooter, CardHeader } from 'shared/ui/Card'
import { Text } from 'shared/ui/Text'
import { cn } from 'shared/utils/cn'

export default function UnauthorizedPage() {
    const router = useRouter()
    const [countdown, setCountdown] = useState(15)

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prevCount) => {
                if (prevCount <= 1) {
                    clearInterval(timer)
                    router.push('/login')
                    return 0
                }
                return prevCount - 1
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [router])

    return (
        <div className={cn('flex min-h-screen items-center justify-center bg-background p-4')}>
            <Card className={cn('w-full max-w-md')}>
                <CardHeader>
                    <Text variant="title" className={cn('text-center')} text={'Unauthorized Access'} />
                    <Text
                        variant="muted"
                        className={cn('text-center')}
                        text={'You do not have permission to access this page.'}
                    />
                </CardHeader>
                <div
                    className={cn('mx-10 mb-5 flex h-auto w-auto flex-row rounded-lg border-2 border-destructive p-5')}
                >
                    <div
                        className={cn(
                            'mr-4 flex h-6 w-6 items-center justify-center rounded-full border-2 border-destructive',
                        )}
                    >
                        <Text variant="bold" className={cn('text-destructive')} text="!" />
                    </div>
                    <div className={'flex flex-col'}>
                        <Text variant="bold" className={cn('text-destructive')} text="Access Denied" />
                        <Text
                            variant="default"
                            className={cn('mt-2 text-destructive')}
                            text="Please login to access the page"
                        />
                    </div>
                </div>
                <CardFooter className="flex flex-col items-center space-y-4">
                    <p className={cn('text-center text-sm text-muted-foreground')}>
                        You will be redirected to the login page in {countdown} seconds.
                    </p>
                    <Anchor href="/login" text={'Go to Login Page'} />
                </CardFooter>
            </Card>
        </div>
    )
}
