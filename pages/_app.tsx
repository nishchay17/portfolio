import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";

import "../styles/globals.css";
import { theme } from "../lib/theme";
import Nav from "../components/Nav";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta name="description" content="Nishchay17 Portfolio" />
        <meta name="theme-color" content="#469895" />
        <link rel="icon" href="/favicon.ico" />

	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-HWRQ3ZDRMS"></script>
	<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());

	  gtag('config', 'G-HWRQ3ZDRMS');
	</script>

      </Head>
      <Nav />
      <AnimatePresence>
        <Component {...pageProps} />
      </AnimatePresence>
    </ChakraProvider>
  );
}
export default MyApp;
