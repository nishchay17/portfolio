import "../styles/globals.css";
import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";

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

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={notoSans.className}>
        <Analytics />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
