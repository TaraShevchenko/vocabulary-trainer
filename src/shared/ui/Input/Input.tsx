import { type InputHTMLAttributes, forwardRef } from 'react'

import { Text } from 'shared/ui/Text'
import { cn } from 'shared/utils/cn'

export type InputProps = {
    label?: string
    className?: string
    inputFieldProps: InputFieldProps
}

type InputFieldProps = {
    name: string
} & InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const { className, label, inputFieldProps } = props
    const { className: inputFieldClassName, type = 'text', name, ...otherProps } = inputFieldProps

    return (
        <label htmlFor={name} className={cn('flex flex-col gap-1', className)}>
            {!!label && <Text text={label} variant={'smBold'} />}
            <input
                type={type}
                ref={ref}
                id={name}
                className={cn(
                    'h-8 rounded-md border border-solid border-input bg-background px-3 py-1.5 font-montserrat text-sm text-primary placeholder-muted-foreground ring-offset-background',
                    'hover-yes:hover:border-muted-foreground/40 hover-no:active:border-muted-foreground/40',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                    'disabled:cursor-not-allowed disabled:opacity-50',
                    inputFieldClassName,
                )}
                {...otherProps}
            />
        </label>
    )
})
Input.displayName = 'Input'
