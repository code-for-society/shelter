import { type NextPage } from "next";
import Head from "next/head";
import { Sidebar } from "../components/sidebar";
import jojo from "../../public/jojo.jpeg";
import { Card } from "../components/card";

const Home: NextPage = () => (
  <>
    <Head>
      <title>Shelter Template</title>
      <meta name="description" content="An app for shelter societies" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="m-2 flex flex-row justify-around gap-2">
      <Sidebar />
      <main className="flex flex-row justify-around">
        <Card
          name="Jojo"
          image={jojo}
          description="Best bitch ever. Loves cuddles, snacks and long walks on the beach. Definitely recommend."
        />
        <Card
          name="Jojo"
          image={jojo}
          description="Best bitch ever. Loves cuddles, snacks and long walks on the beach. Definitely recommend."
        />
      </main>
    </div>
  </>
);

export default Home;
