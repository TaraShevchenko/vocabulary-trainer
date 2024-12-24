import { forwardRef } from 'react'

import { type InputProps } from '../../model/types'
import { Text } from 'shared/ui/Text'
import { cn } from 'shared/utils/cn'

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const { className, label, inputFieldProps, leftIcon, leftIconProps, rightIcon, rightIconProps, hints } = props
    const { className: inputFieldClassName, type = 'text', id: inputFieldId, ...otherProps } = inputFieldProps ?? {}
    const id = inputFieldId ?? crypto.randomUUID()

    return (
        <label htmlFor={id} className={cn('flex flex-col gap-1', className)}>
            {!!label && <Text text={label} variant={'smBold'} />}
            
            <span className={cn('relative h-12')}>
                <input
                    id={id}
                    ref={ref}
                    type={type}
                    className={cn(
                        'h-8 rounded-md border border-solid border-input bg-background px-3 py-1.5 font-montserrat text-sm text-primary placeholder-muted-foreground ring-offset-background',
                        'hover-yes:hover:border-muted-foreground/40 hover-no:active:border-muted-foreground/40',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                        'disabled:cursor-not-allowed disabled:opacity-50',
                        inputFieldClassName,
                    )}
                    {...otherProps}
                />
                {!!leftIcon && <InputIcon icon={leftIcon} iconProps={leftIconProps} side={'left'} />}
                {!!rightIcon && <InputIcon icon={rightIcon} iconProps={rightIconProps} side={'right'} />}
            </span>
            {!!hints?.length && (
                <span className={cn('flex flex-col')}>
                    {hints.map(({ text, isError }) => (
                        <Text key={text} className={cn({ 'text-error': isError })} text={text} />
                    ))}
                </span>
            )}
        </label>
    )
})
Input.displayName = 'Input'
