import { type ComponentPropsWithoutRef, type ElementRef } from 'react'

import { Command } from 'cmdk'

const { Empty } = Command

export function CommandEmpty(props: ComponentPropsWithoutRef<typeof Empty>, ref: React.Ref<ElementRef<typeof Empty>>) {
    return <Empty ref={ref} className="py-6 text-center text-sm" {...props} />
}

CommandEmpty.displayName = Empty.displayName
