import "../styles/globals.css";

import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";

import Analytics from "./Analytics";

const notoSans = Noto_Sans({ subsets: ["latin"] });

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
    <html lang="en">
      <Analytics />
      <body className={notoSans.className}>{children}</body>
    </html>
  );
}
