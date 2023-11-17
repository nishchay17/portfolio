import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Providers } from "./provider";
import Analytics from "./Analytics";

export const metadata: Metadata = {
  title: {
    template: "%s | Nishchay",
    default: "Nishchay",
  },
  description: "Portfolio made with Next JS | Nishchay17",
  icons: ["/svg/logo.svg"],
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Analytics />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
