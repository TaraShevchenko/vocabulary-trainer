import { type ComponentPropsWithoutRef, type ElementRef } from 'react'

import { Command } from 'cmdk'
import { Search } from 'lucide-react'

import { cn } from 'shared/utils/cn'

const { Input } = Command

export function CommandInput(props: ComponentPropsWithoutRef<typeof Input>, ref: React.Ref<ElementRef<typeof Input>>) {
    const { className, ...otherProps } = props
    return (
        <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <Input
                ref={ref}
                className={cn(
                    'flex h-10 w-full rounded-md bg-transparent py-2 font-montserrat text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
                    className,
                )}
                {...otherProps}
            />
        </div>
    )
}

CommandInput.displayName = Input.displayName
