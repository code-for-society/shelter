import { router } from "../trpc";
import { authRouter } from "./auth";
import { mainRouter } from "./main";

export const appRouter = router({
  main: mainRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
