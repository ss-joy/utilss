import type { AppProps } from "next/app";
import MainHeader from "@/components/ui/MainHeader";
import "@/styles/globals.css";
import Head from "next/head";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: "400",
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>utilss </title>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/fav-icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/fav-icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/fav-icons/favicon-16x16.png"
        />
      </Head>
      <MainHeader />
      <Component {...pageProps} />
    </>
  );
}
