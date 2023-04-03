import {
  createTRPCRouter,
  publicProcedure
} from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
  user: publicProcedure.query(({ ctx }) => {
    // const userId = ctx.session?.user.id;
    return null;
  }),
});
