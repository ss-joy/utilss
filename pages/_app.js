import MainHeader from "@/components/Home/MainHeader";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>utilss</title>
      </Head>
      <MainHeader />
      <Component {...pageProps} />
    </>
  );
}
