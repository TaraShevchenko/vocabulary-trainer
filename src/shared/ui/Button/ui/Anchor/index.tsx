import { forwardRef } from 'react'

import { Link } from 'shared/lib/nextIntl'
import { cn } from 'shared/utils/cn'

import { buttonCva } from '../../model/config'
import { type AnchorProps } from '../../model/types'
import { ButtonContent } from '../ButtonContent'

export const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(
    ({ variant, size, className, isActive, text, textProps, icon, iconProps, ...otherProps }, ref) => {
        const activeByVariant = isActive ? variant : undefined
        return (
            <Link className={cn(buttonCva({ variant, activeByVariant, size }), className)} ref={ref} {...otherProps}>
                <ButtonContent
                    variant={variant}
                    size={size}
                    icon={icon}
                    iconProps={iconProps}
                    text={text}
                    textProps={textProps}
                />
            </Link>
        )
    },
)
Anchor.displayName = 'Anchor'
