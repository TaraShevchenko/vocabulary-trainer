import type { Meta, StoryObj } from '@storybook/react'

import 'shared/styles/globals.css'

import { Input } from './Input'

const meta: Meta<typeof Input> = {
    title: 'Shared/Input',
    component: Input,
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
    args: {
        inputFieldProps: {
            name: 'defaultInput',
            placeholder: 'Default input',
        },
    },
}

export const Disabled: Story = {
    args: {
        inputFieldProps: {
            name: 'disabledInput',
            placeholder: 'Disabled input',
            disabled: true,
        },
    },
}

export const WithLabel: Story = {
    args: {
        label: 'With label',
        inputFieldProps: {
            name: 'withLabel',
            placeholder: 'WithLabel',
        },
    },
}
