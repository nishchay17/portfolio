import "../styles/globals.css";

import type { Metadata } from "next";
import { Mulish } from "next/font/google";

import Analytics from "./Analytics";
import Providers from "./Providers";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Nishchay",
    default: "Nishchay",
  },
  description: "Portfolio made with Next JS | Nishchay17",
  icons: ["/svg/logo.svg"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <Analytics />
      <body className={mulish.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
