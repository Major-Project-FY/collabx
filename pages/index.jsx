import Head from "next/head";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>CollabX: Collaborate with your Projects!</title>
      </Head>
      <Hero />
      {/* <Footer /> */}
    </>
  );
}
