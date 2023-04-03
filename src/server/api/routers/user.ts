import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure
} from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
  products: publicProcedure.query(async ({ ctx }) => {
    const userId = ctx.session?.user.id;
    if (!userId) return null;
    const useProductOwnerships = await ctx.prisma.userProductOwnership.findMany({
      where: {
        userId,
      },
    });
    const products = await ctx.prisma.product.findMany({
      where: {
        id: {
          in: useProductOwnerships.map((u) => u.productId),
        },
      },
    });
    return products;
  }),

  isPaidForProduct: publicProcedure.input(z.object({
    productId: z.string(),
    accessToken: z.string(),
  })).query(async ({ ctx, input }) => {
    const account = await ctx.prisma.account.findFirst({
      where: {
        access_token: input.accessToken,
      },
    });
    const userProductOwnership = await ctx.prisma.userProductOwnership.findFirst({
      where: {
        userId: account?.userId,
        productId: input.productId
      },
    });
    return userProductOwnership?.paid;
  }),
});
