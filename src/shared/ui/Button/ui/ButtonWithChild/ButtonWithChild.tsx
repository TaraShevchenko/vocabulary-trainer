import { cn } from 'shared/utils/cn'

import { buttonCva } from '../../model/config'
import { type ButtonWithChildProps } from '../../model/types'

export function ButtonWithChild(
    { variant, className, isActive, children, ...otherProps }: ButtonWithChildProps,
    ref: React.Ref<HTMLButtonElement>,
) {
    const activeByVariant = isActive ? variant : undefined
    return (
        <button
            className={cn(buttonCva({ variant, activeByVariant, size: 'fit' }), className)}
            ref={ref}
            {...otherProps}
        >
            {children}
        </button>
    )
}

ButtonWithChild.displayName = 'ButtonWithChild'
