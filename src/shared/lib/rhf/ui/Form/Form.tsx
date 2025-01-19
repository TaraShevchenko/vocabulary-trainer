'use client'

import React, { type ReactNode } from 'react'

import { type FieldValues, FormProvider, type UseFormReturn } from 'react-hook-form'

type FormProps<T extends FieldValues> = {
    className?: string
    methods: UseFormReturn<T, unknown>
    onSubmit: (data: T) => void
    children: ReactNode
}

// TODO: Create a story for describing integration of all RHF components
export function Form<T extends FieldValues>(props: FormProps<T>) {
    const { methods, className, onSubmit, children } = props
    return (
        <FormProvider {...methods}>
            <form className={className} onSubmit={methods.handleSubmit(onSubmit)}>
                {children}
            </form>
        </FormProvider>
    )
}
