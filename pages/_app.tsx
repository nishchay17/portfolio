import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import Script from "next/script";
import Head from "next/head";
import { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import "@fontsource/source-sans-pro";
import "@fontsource/ibm-plex-serif";
import "@fontsource/prata";

import "../styles/globals.css";
import { theme } from "../lib/theme";
import * as gtag from "../lib/gtag";
import { Global } from "@emotion/react";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Global
        styles={`
          @font-face {
            font-family: 'Refinest';
            font-style: normal;
            font-display: swap;
            src: url('./fonts/RefinestPersonalUe/RefinestPersonalUe-DOPK9.otf') format('opentype');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
        `}
      />
      <Head>
        <meta name="description" content="Nishchay17 Portfolio" />
        <meta name="theme-color" content="#469895" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <ChakraProvider theme={theme}>
        <AnimatePresence>
          <Component {...pageProps} />
        </AnimatePresence>
      </ChakraProvider>
    </>
  );
}
export default MyApp;
