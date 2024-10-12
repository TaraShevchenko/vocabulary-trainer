import type { Meta, StoryObj } from '@storybook/react'

import 'shared/styles/globals.css'

import { buttonVariants } from '../../model/config'
import { Anchor } from './index'

export default {
    title: 'Shared/Button/Anchor',
    component: Anchor,
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
