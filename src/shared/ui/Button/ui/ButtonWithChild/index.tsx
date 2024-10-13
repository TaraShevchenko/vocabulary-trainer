import { forwardRef } from 'react'

import { cn } from 'shared/utils/cn'

import { buttonCva } from '../../model/config'
import { type ButtonWithChildProps } from '../../model/types'

export const ButtonWithChild = forwardRef<HTMLButtonElement, ButtonWithChildProps>(
    ({ variant, className, isActive, children, ...otherProps }, ref) => {
        const activeByVariant = isActive ? variant : undefined
        return (
            <button
                className={cn(buttonCva({ variant, activeByVariant, size: 'auto' }), className)}
                ref={ref}
                {...otherProps}
            >
                {children}
            </button>
        )
    },
)
ButtonWithChild.displayName = 'ButtonWithChild'
