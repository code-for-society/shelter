import { type NextPage } from "next";
import Head from "next/head";
import { Sidebar } from "../components/sidebar";
import jojo from "../../public/jojo.jpeg";
import { Card } from "../components/card";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const animals = trpc.main.animals.useQuery({ type: "dog" });
  return (
    <>
      <Head>
        <title>Shelter Template</title>
        <meta name="description" content="An app for shelter societies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="m-2 flex flex-row justify-around gap-2">
        <Sidebar />
        <main className="flex flex-row justify-evenly">
          {!animals.data ?? <div>Loading...</div>}
          {animals.data &&
            animals.data.animals.map((animal) => (
              <Card
                key={animal.id}
                name={animal.name}
                image={jojo}
                description={animal.description}
              />
            ))}
        </main>
      </div>
    </>
  );
};

export default Home;
