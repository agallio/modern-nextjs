import Header from "@/components/Header";

import { type AppProps } from "next/app";

import "../app/globals.css";

export default function App({ Component, pageProps, router }: AppProps) {
  const { pathname } = router;

  return (
    <>
      {pathname !== "/" && <Header />}

      <Component {...pageProps} />
    </>
  );
}
