import type { Meta, StoryObj } from '@storybook/react'

import { Button } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input'

import { Popover, PopoverContent, PopoverTrigger } from './index'

const meta: Meta<typeof Popover> = {
    title: 'Shared/Popover',
    component: Popover,
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Popover>

export const Default: Story = {
    render: () => (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline" text={'Open popover'}></Button>
            </PopoverTrigger>
            <PopoverContent>
                <div className="grid gap-4">
                    <div className="space-y-2">
                        <h4 className="font-medium leading-none">Dimensions</h4>
                        <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
                    </div>
                    <div className="grid gap-2">
                        <Input label={'Width'} inputFieldProps={{ name: 'width', id: 'width', defaultValue: '100%' }} />
                        <Input
                            label={'Max Width'}
                            inputFieldProps={{ name: 'maxWidth', id: 'maxWidth', defaultValue: '300px' }}
                        />
                        <Input
                            label={'Height'}
                            inputFieldProps={{ name: 'height', id: 'height', defaultValue: '25px' }}
                        />
                        <Input
                            label={'Max Height'}
                            inputFieldProps={{ name: 'maxHeight', id: 'maxHeight', defaultValue: 'none' }}
                        />
                        <Button text={'Change sizes'} size={'sm'} />
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    ),
}
