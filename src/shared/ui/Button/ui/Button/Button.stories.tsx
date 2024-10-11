import type { Meta, StoryObj } from '@storybook/react'

import 'shared/styles/globals.css'

import { Button } from './index'

export default {
    title: 'Shared/Button/Button',
    component: Button,
    tags: ['autodocs'],
} as Meta<typeof Button>

type Story = StoryObj<typeof Button>

export const Default: Story = {
    args: {
        variant: 'default',
        text: 'Default',
    },
}
