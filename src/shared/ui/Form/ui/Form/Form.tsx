'use client'

import { type ReactNode } from 'react'

import { type FieldValues, FormProvider, type UseFormReturn } from 'react-hook-form'

type FormProps<T extends FieldValues> = {
    className?: string
    methods: UseFormReturn<T, unknown>
    onSubmit: (data: T) => void
    children: ReactNode
}

export function Form<T extends FieldValues>({ methods, onSubmit, className, children }: FormProps<T>) {
    return (
        <FormProvider {...methods}>
            <form className={className} onSubmit={methods.handleSubmit(onSubmit)}>
                {children}
            </form>
        </FormProvider>
    )
}
