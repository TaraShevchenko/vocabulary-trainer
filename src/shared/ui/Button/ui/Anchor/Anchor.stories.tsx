import type { Meta, StoryObj } from '@storybook/react'

import 'shared/styles/globals.css'

import { Anchor } from './index'

export default {
    title: 'Shared/Button/Anchor',
    component: Anchor,
    tags: ['autodocs'],
} as Meta<typeof Anchor>

type Story = StoryObj<typeof Anchor>

export const Default: Story = {
    args: {
        variant: 'link',
        text: 'Link',
        href: '#',
    },
}

export const LinkActive: Story = {
    args: {
        variant: 'link',
        isActive: true,
        text: 'Active Link',
        href: '#',
    },
}
