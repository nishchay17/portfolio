"use client";

import NavContext from "@/context/nav-context";
import { ThemeProvider } from "next-themes";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <NavContext>{children}</NavContext>
    </ThemeProvider>
  );
}

export default Providers;
