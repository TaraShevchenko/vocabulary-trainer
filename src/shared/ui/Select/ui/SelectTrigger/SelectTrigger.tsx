import { type ComponentPropsWithoutRef } from 'react'

import { Icon, Trigger } from '@radix-ui/react-select'
import { ChevronsUpDown } from 'lucide-react'

import { cn } from 'shared/utils/cn'

type SelectTriggerProps = ComponentPropsWithoutRef<typeof Trigger>

export function SelectTrigger({ className, children, ...props }: SelectTriggerProps) {
    return (
        <Trigger
            className={cn(
                'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 font-montserrat text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
                className,
            )}
            {...props}
        >
            {children}
            <Icon asChild>
                <ChevronsUpDown className="h-4 w-4 opacity-50" />
            </Icon>
        </Trigger>
    )
}
