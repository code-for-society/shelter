import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => (
  <>
    <Head>
      <title>Shelter Template</title>
      <meta name="description" content="An app for shelter societies" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]"></main>
  </>
);

export default Home;
