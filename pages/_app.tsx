import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";

import "../styles/globals.css";
import { theme } from "../lib/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </AnimatePresence>
  );
}
export default MyApp;
