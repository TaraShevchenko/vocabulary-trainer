import { forwardRef } from 'react'

import { Link } from 'shared/lib/next-intl'
import { cn } from 'shared/utils/cn'

import { buttonCva } from '../../model/config'
import { type AnchorWithChildProps } from '../../model/types'

export const AnchorWithChild = forwardRef<HTMLAnchorElement, AnchorWithChildProps>(
    ({ variant, className, isActive, children, ...otherProps }, ref) => {
        const activeByVariant = isActive ? variant : undefined
        return (
            <Link
                className={cn(buttonCva({ variant, activeByVariant, size: 'auto' }), className)}
                ref={ref}
                {...otherProps}
            >
                {children}
            </Link>
        )
    },
)
AnchorWithChild.displayName = 'AnchorWithChild'
