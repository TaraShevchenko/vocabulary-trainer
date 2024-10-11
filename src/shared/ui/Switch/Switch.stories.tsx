import type { Meta, StoryObj } from '@storybook/react'

import 'shared/styles/globals.css'

import { Switch } from './Switch'

const meta: Meta<typeof Switch> = {
    title: 'Shared/Switch',
    component: Switch,
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = {
    args: {
        type: 'checkbox',
        variant: 'bordered',
        label: 'Bordered checkbox',
        name: 'BorderedCheckbox',
    },
}

export const BorderedRadio: Story = {
    args: {
        type: 'radio',
        variant: 'bordered',
        label: 'Bordered radio',
        name: 'BorderedRadio',
    },
}

export const ClearCheckbox: Story = {
    args: {
        type: 'checkbox',
        variant: 'clear',
        label: 'Clear checkbox',
        name: 'ClearCheckbox',
    },
}

export const ClearRadio: Story = {
    args: {
        type: 'radio',
        variant: 'clear',
        label: 'Clear radio',
        name: 'ClearRadio',
    },
}
