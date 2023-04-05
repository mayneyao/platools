import z from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";
import { bindLicenseForUser } from "~/server/license";

export const productRouter = createTRPCRouter({
  active: protectedProcedure.input(z.object({
    licenseKey: z.string()
  })).mutation(async ({ ctx, input }) => {
    const userId = ctx.session?.user.id
    if (!userId) {
      throw new Error('No user id');
    }
    const { licenseKey } = input;
    const resp = await bindLicenseForUser(
      licenseKey,
      userId
    )
    return resp
  }),
});
