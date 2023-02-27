import { router } from "../trpc";
import { postRouter } from "./post";
import { userRouter } from "./user";
import { authRouter } from "./auth";

export const appRouter = router({
  post: postRouter,
  auth: authRouter,
  user: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
