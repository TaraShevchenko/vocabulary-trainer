import { cva } from 'class-variance-authority'

export const textVariants = cva('font-montserrat leading-normal', {
    variants: {
        variant: {
            default: 'text-sm text-primary font-medium',
            title: 'text-2xl font-bold tracking-tight text-primary',
            subtitle: 'text-base text-muted-foreground',
            muted: 'text-sm text-muted-foreground',
            bold: 'text-sm font-bold text-primary',
            sm: 'text-xs text-primary',
            smBold: 'text-xs font-semibold text-primary',
        },
    },
    defaultVariants: {
        variant: 'default',
    },
})
