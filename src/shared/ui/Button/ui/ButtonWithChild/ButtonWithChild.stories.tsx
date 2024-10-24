import type { Meta, StoryObj } from '@storybook/react'

import 'shared/styles/globals.css'
import { Text } from 'shared/ui/Text'

import { buttonVariants } from '../../model/config'
import { ButtonWithChild } from './index'

export default {
    title: 'Shared/Button/ButtonWithChild',
    component: ButtonWithChild,
    tags: ['autodocs'],

    argTypes: {
        variant: {
            control: 'select',
            options: Object.keys(buttonVariants.variant),
        },
    },
} as Meta<typeof ButtonWithChild>

type Story = StoryObj<typeof ButtonWithChild>

export const Default: Story = {
    args: {
        variant: 'default',
        children: (
            <span className="flex flex-col gap-2 p-2">
                <Text text="Default" className="text-red-300" />
                <Text text="Default" className="text-red-400" />
                <Text text="Default" className="text-red-500" />
                <Text text="Default" className="text-red-600" />
            </span>
        ),
    },
}
