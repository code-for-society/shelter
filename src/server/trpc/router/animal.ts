import { z } from "zod";
import { publicProcedure, router } from "../trpc";

const animalType = z.enum(["dog", "cat"]);

export const animalRouter = router({
  list: publicProcedure
    .input(
      z.object({
        type: z.optional(animalType),
        limit: z.number().min(1).max(100).nullish(),
        cursor: z.string().nullish(),
      })
    )
    .query(async ({ input }) => {
      const limit = input.limit ?? 50;
      const { cursor, type } = input;

      const items = await prisma?.animal.findMany({
        take: limit + 1,
        cursor: cursor ? { id: cursor } : undefined,
        orderBy: {
          createdAt: "desc",
        },
        where: {
          type,
        },
      });

      let nextCursor: typeof cursor | undefined = undefined;
      if (items && items?.length > limit) {
        const nextItem = items.pop();
        nextCursor = nextItem?.id;
      }

      return {
        items,
        nextCursor,
      };
    }),
  add: publicProcedure
    .input(
      z.object({
        name: z.string(),
        description: z.string(),
        type: animalType,
      })
    )
    .mutation(
      async ({ input }) =>
        await prisma?.animal.create({
          data: input,
        })
    ),
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
