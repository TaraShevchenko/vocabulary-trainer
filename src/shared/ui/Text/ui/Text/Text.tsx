import type { VariantProps } from 'class-variance-authority'

import { cn } from 'shared/utils/cn'

import { textVariants } from './config'

type TextType = {
    className?: string
    text: string
    tag?: 'span' | 'div' | 'p' | 'h1' | 'h2' | 'h3'
    inheritColor?: boolean
}

export type TextProps = TextType & VariantProps<typeof textVariants>

export const Text = ({ className, text, variant, tag, inheritColor }: TextProps) => {
    const Comp = tag ? tag : 'span'
    return <Comp className={cn(textVariants({ variant, className }), { 'text-inherit': inheritColor })}>{text}</Comp>
}
