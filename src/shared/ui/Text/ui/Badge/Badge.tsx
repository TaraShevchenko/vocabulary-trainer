import { Slot } from '@radix-ui/react-slot'
import type { VariantProps } from 'class-variance-authority'

import { Text, TextProps } from '../Text/Text'
import { badgeVariants } from './config'

type BadgeType = {
    text: string
    textProps?: Omit<TextProps, 'text'>
    className?: string
}

export type BadgeProps = BadgeType & VariantProps<typeof badgeVariants>

export const Badge = ({ variant, className, textProps, text }: BadgeProps) => {
    return (
        <Slot className={badgeVariants({ variant, className })}>
            <Text variant={'sm'} {...textProps} text={text} />
        </Slot>
    )
}
