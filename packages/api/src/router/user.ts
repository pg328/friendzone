import {
  router,
  publicProcedure,
} from "../trpc";
import { z } from "zod";

export const userRouter = router({
  all: publicProcedure
    .query(({ ctx }) => ctx.prisma.user.findMany()),
});
