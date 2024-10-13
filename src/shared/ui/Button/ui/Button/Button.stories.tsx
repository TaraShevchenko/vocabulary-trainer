import type { Meta, StoryObj } from '@storybook/react'

import 'shared/styles/globals.css'

import { buttonVariants } from '../../model/config'
import { Button } from './index'

export default {
    title: 'Shared/Button/Button',
    component: Button,
    tags: ['autodocs'],

    argTypes: {
        variant: {
            control: 'select',
            options: Object.keys(buttonVariants.variant),
        },
        size: {
            control: 'select',
            options: Object.keys(buttonVariants.size),
        },
    },
} as Meta<typeof Button>

type Story = StoryObj<typeof Button>

export const Default: Story = {
    args: {
        variant: 'default',
        size: 'default',
        text: 'Default',
    },
}
