import { z } from "zod";
import { publicProcedure, router } from "../trpc";

export const mainRouter = router({
  animals: publicProcedure
    .input(z.object({ type: z.optional(z.enum(["dog", "cat"])) }))
    .query(({ input }) => {
      return {
        animals: [
          {
            id: 1,
            name: "jojo",
            description:
              "Best bitch ever. Loves cuddles, snacks and long walks on the beach. Definitely recommend.",
            type: "dog",
          },
          {
            id: 2,
            name: "Котя",
            description: "Sometimes grumpy sometimes sweet. Definitely a 10.",
            type: "dog",
          },
        ].filter((animal) =>
          !!input.type ? animal.type === input.type : true
        ),
      };
    }),
});
