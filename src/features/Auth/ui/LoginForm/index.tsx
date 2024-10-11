import { Anchor, Button } from 'shared/ui/Button'
import { CardContent, CardFooter } from 'shared/ui/Card'
import { Input } from 'shared/ui/Input'

import { AuthGoogle } from '../AuthGoogle'
import { AuthVarianceSplitter } from '../AuthVarianceSplitter'

export const LoginForm = () => {
    return (
        <>
            <CardContent className="grid gap-4">
                <AuthGoogle />
                <AuthVarianceSplitter />
                <Input
                    label={'Email'}
                    inputFieldProps={{ name: 'email', placeholder: 'm@example.com', disabled: true }}
                />
                <Input
                    label={'Password'}
                    inputFieldProps={{ name: 'password', placeholder: '!Qwer1234', disabled: true }}
                />
            </CardContent>
            <CardFooter className="flex-col gap-2">
                <Button className="w-full" text={'Login'} disabled />
                <Anchor
                    href={'/registration'}
                    className="w-full text-white"
                    variant={'link'}
                    text={'Register a new Account'}
                />
            </CardFooter>
        </>
    )
}
