import { hash } from 'bcryptjs'

import { createTRPCRouter, publicProcedure } from 'shared/lib/trpc/trpc'
import { ErrorResponseScheme } from 'shared/types'

import { RegistrationFormSchema } from './schemes'

export const authRouter = createTRPCRouter({
    register: publicProcedure
        .input(RegistrationFormSchema)
        .output(ErrorResponseScheme)
        .mutation(async ({ input, ctx }) => {
            const safeInput = RegistrationFormSchema.parse(input)

            const existedUser = await ctx.db.user.findUnique({
                where: {
                    email: safeInput.email,
                },
            })

            if (existedUser !== null) {
                return {
                    status: 400,
                    data: {
                        message: 'User with this email already exists',
                        messageCode: 2,
                        originalError: null,
                    },
                }
            }

            await ctx.db.user.create({
                data: {
                    email: safeInput.email,
                    password: await hash(safeInput.password, 12),
                },
            })

            return {
                status: 201,
                data: {
                    message: 'User created successfully',
                    messageCode: 1,
                    originalError: null,
                },
            }
        }),
})
