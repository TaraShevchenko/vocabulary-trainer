import type { Meta, StoryObj } from '@storybook/react'

import 'shared/styles/globals.css'

import { Text } from './Text'

export default {
    title: 'Shared/Text',
    component: Text,
    tags: ['autodocs'],
} as Meta<typeof Text>

type Story = StoryObj<typeof Text>

export const Default: Story = {
    args: {
        variant: 'default',
        text: 'default',
    },
}

export const Title: Story = {
    args: {
        variant: 'title',
        text: 'title',
    },
}

export const Subtitle: Story = {
    args: {
        variant: 'subtitle',
        text: 'subtitle',
    },
}

export const Muted: Story = {
    args: {
        variant: 'muted',
        text: 'muted',
    },
}

export const Bold: Story = {
    args: {
        variant: 'bold',
        text: 'bold',
    },
}

export const Sm: Story = {
    args: {
        variant: 'sm',
        text: 'sm',
    },
}

export const SmBold: Story = {
    args: {
        variant: 'smBold',
        text: 'smBold',
    },
}
