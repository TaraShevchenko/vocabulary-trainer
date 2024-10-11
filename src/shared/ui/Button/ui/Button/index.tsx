import { forwardRef } from 'react'

import { cn } from 'shared/utils/cn'

import { buttonVariants } from '../../model/config'
import { type ButtonProps } from '../../model/types'
import { ButtonContent } from '../ButtonContent'

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ variant, size, className, isActive, text, icon, iconProps, textProps, ...otherProps }, ref) => {
        const activeByVariant = isActive ? variant : undefined
        return (
            <button
                className={cn(buttonVariants({ variant, activeByVariant, size }), className)}
                ref={ref}
                {...otherProps}
            >
                <ButtonContent
                    variant={variant}
                    size={size}
                    icon={icon}
                    iconProps={iconProps}
                    text={text}
                    textProps={textProps}
                />
            </button>
        )
    },
)
Button.displayName = 'Button'
