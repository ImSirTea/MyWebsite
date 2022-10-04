import type { NextPage } from "next";
import Head from "next/head";
import Header from "components/bio/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Adam Lansley - Front End Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 h-screen">
        <Header />
      </header>
    </>
  );
};

export default Home;
