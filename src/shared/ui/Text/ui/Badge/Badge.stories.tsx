import type { Meta, StoryObj } from '@storybook/react'

import 'shared/styles/globals.css'

import { Badge } from './Badge'

export default {
    title: 'Shared/Badge',
    component: Badge,
    tags: ['autodocs'],
} as Meta<typeof Badge>

type Story = StoryObj<typeof Badge>

export const Default: Story = {
    args: {
        variant: 'default',
        text: 'Default',
    },
}

export const Outline: Story = {
    args: {
        variant: 'outline',
        text: 'outline',
    },
}

export const WithClassName: Story = {
    args: {
        variant: 'default',
        text: 'With class name',
        className: 'bg-red-300',
    },
}
