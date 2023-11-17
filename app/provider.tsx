"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";

import { theme } from "../lib/theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <AnimatePresence>{children}</AnimatePresence>
    </ChakraProvider>
  );
}
