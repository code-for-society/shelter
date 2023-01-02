import { router } from "../trpc";
import { authRouter } from "./auth";
import { animalRouter } from "./animal";

export const appRouter = router({
  animal: animalRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
