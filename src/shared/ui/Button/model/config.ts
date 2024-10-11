import { type VariantProps, cva } from 'class-variance-authority'

import { type textVariants } from 'shared/ui/Text'

export const buttonVariants = cva(
    [
        'inline-flex items-center justify-center whitespace-nowrap rounded-md ring-offset-background transition-colors gap-2',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-50',
    ],
    {
        variants: {
            variant: {
                'default': [
                    'border-primary bg-primary text-primary-foreground',
                    'hover-yes:hover:bg-primary/90 hover-no:active:bg-primary/90',
                ],
                'outline': [
                    'border border-input bg-background',
                    'hover-yes:hover:bg-accent hover-no:active:bg-accent',
                    'hover-yes:hover:text-accent-foreground hover-no:text-accent-foreground',
                ],
                'outline-dashed': [
                    'border border-input bg-background border-dashed',
                    'hover-yes:hover:bg-accent hover-no:active:bg-accent',
                    'hover-yes:hover:text-accent-foreground hover-no:text-accent-foreground',
                ],
                'ghost': ['text-primary', 'hover-yes:hover:bg-accent hover-no:active:bg-accent'],
                'link': ['text-muted-foreground', 'hover-yes:hover:text-primary/80 hover-no:active:text-primary/80'],
            },
            activeByVariant: {
                'default': '',
                'outline': '',
                'outline-dashed': '',
                'ghost': '',
                'link': 'pointer-events-none text-primary',
            },
            size: {
                default: 'h-10 px-4 py-2',
                sm: 'h-8 px-3',
                icon: 'h-10 w-10',
                iconSm: 'h-8 w-8',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    },
)

export const buttonIconVariants = cva('h-4 w-auto', {
    variants: {
        color: {
            default: 'primary',
            foreground: 'primary-foreground',
        },
    },
    defaultVariants: {
        color: 'default',
    },
})

export const TEXT_PROPS_BY_BUTTON_SIZE: Record<
    NonNullable<VariantProps<typeof buttonVariants>['size']>,
    VariantProps<typeof textVariants>['variant']
> = {
    default: 'default',
    sm: 'sm',
    icon: 'default',
    iconSm: 'default',
}

export const ICON_COLOR_BY_BUTTON_VARIANT: Record<
    NonNullable<VariantProps<typeof buttonVariants>['variant']>,
    VariantProps<typeof buttonIconVariants>['color']
> = {
    'default': 'foreground',
    'outline': 'default',
    'outline-dashed': 'default',
    'ghost': 'default',
    'link': 'default',
}
