import { forwardRef } from 'react'

import Link from 'next/link'

import { cn } from 'shared/utils/cn'

import { buttonVariants } from '../../model/config'
import { type AnchorProps } from '../../model/types'
import { ButtonContent } from '../ButtonContent'

export const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(
    ({ variant, size, className, isActive, text, textProps, icon, iconProps, ...otherProps }, ref) => {
        const activeByVariant = isActive ? variant : undefined
        return (
            <Link
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
            </Link>
        )
    },
)
Anchor.displayName = 'Anchor'
