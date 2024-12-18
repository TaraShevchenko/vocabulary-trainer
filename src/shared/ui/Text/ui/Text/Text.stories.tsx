import type { Meta, StoryObj } from '@storybook/react'

import 'shared/styles/globals.css'

import { Text } from './Text'
import { textVariants } from './config'

export default {
    title: 'Shared/Text',
    component: Text,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: Object.keys(textVariants.variant),
        },
    },
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

export const Text5xl: Story = {
    args: {
        variant: '5xl',
        text: '5xl',
    },
}
