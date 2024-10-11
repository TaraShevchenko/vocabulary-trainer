import type { Meta, StoryObj } from '@storybook/react'

import 'shared/styles/globals.css'

import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from './index'

const meta: Meta<typeof Table> = {
    title: 'Shared/Table',
    component: Table,
    tags: ['autodocs'],
    parameters: {
        layout: 'padded',
    },
}

export default meta
type Story = StoryObj<typeof Table>

export const Default: Story = {
    args: {},
    render: ({ ...args }) => (
        <Table {...args}>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]" text={'Invoice'} />
                    <TableHead text={'Status'} />
                    <TableHead text={'Method'} />
                    <TableHead className="text-right" text={'Amount'} />
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell className="font-medium" text={'INV001'} />
                    <TableCell text={'Paid'} />
                    <TableCell text={'Credit Card'} />
                    <TableCell className="text-right" text={'$250.00'} />
                </TableRow>
            </TableBody>
            <TableFooter>
                <TableCell className="font-medium" text={'TOTAL'} />
                <TableCell text={'-'} />
                <TableCell text={'-'} />
                <TableCell className="text-right" text={'$25000.00'} />
            </TableFooter>
        </Table>
    ),
}
