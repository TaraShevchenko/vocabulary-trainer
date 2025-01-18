import { Link } from 'shared/lib/nextIntl'
import { cn } from 'shared/utils/cn'

import { buttonCva } from '../../model/config'
import { type AnchorWithChildProps } from '../../model/types'

export function AnchorWithChild(
    { variant, className, isActive, children, ...otherProps }: AnchorWithChildProps,
    ref: React.Ref<HTMLAnchorElement>,
) {
    const activeByVariant = isActive ? variant : undefined
    return (
        <Link className={cn(buttonCva({ variant, activeByVariant, size: 'fit' }), className)} ref={ref} {...otherProps}>
            {children}
        </Link>
    )
}

AnchorWithChild.displayName = 'AnchorWithChild'
