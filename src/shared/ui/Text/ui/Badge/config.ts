import { cva } from 'class-variance-authority'

export const badgeVariants = cva('flex items-center rounded-sm border px-1 py-0.5', {
    variants: {
        variant: {
            default: 'border-secondary/80 bg-secondary/80 text-primary',
            outline: 'border-border text-primary',
        },
    },
    defaultVariants: {
        variant: 'default',
    },
})
