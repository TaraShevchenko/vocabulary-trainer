import { createTRPCRouter, protectedProcedure } from 'shared/lib/trpc/trpc'

export const userRouter = createTRPCRouter({
    getUser: protectedProcedure.query(async ({ ctx }) => {
        const user = await ctx.db.user.findFirst({
            where: {
                id: ctx.session.user.id,
            },
        })
        return {
            status: 200,
            data: {
                user,
            },
        }
    }),
})
