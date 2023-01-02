import { type NextPage } from "next";
import Head from "next/head";
import { Sidebar } from "../components/sidebar";
import jojo from "../../public/jojo.jpeg";
import { Card } from "../components/card";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const utils = trpc.useContext();

  const animalsQuery = trpc.animal.list.useInfiniteQuery(
    { limit: 20, type: "dog" },
    {
      getPreviousPageParam(lastPage) {
        return lastPage.nextCursor;
      },
    }
  );

  const addAnimal = trpc.animal.add.useMutation({
    async onSuccess() {
      await utils.animal.list.invalidate();
    },
  });

  return (
    <>
      <Head>
        <title>Shelter Template</title>
        <meta name="description" content="An app for shelter societies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="m-2 flex flex-row justify-around gap-2">
        <Sidebar />
        <div className="grid grid-cols-3 gap-2">
          {!animalsQuery.data ?? <div>Loading...</div>}
          {animalsQuery.data?.pages.map((page) =>
            page.items?.map((animal) => (
              <Card
                key={animal.id}
                name={animal.name}
                image={jojo}
                description={animal.description}
              />
            ))
          )}
        </div>
      </main>
      <button
        onClick={async () => {
          await addAnimal.mutateAsync({
            name: "jojo",
            description:
              "Best bitch ever. Loves cuddles, snacks and long walks on the beach. Definitely recommend.",
            type: "dog",
          });
        }}
      >
        add
      </button>
    </>
  );
};

export default Home;
