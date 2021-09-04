import React, { ReactElement, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/dist/client/router";

interface Props {
  children: ReactElement[] | ReactElement;
  title: string;
  withAuth: boolean;
}

function Layout({ children, title, withAuth }: Props): ReactElement {
  const router = useRouter();

  useEffect(() => {
    const isLoggedin: boolean = true;
    if (withAuth && !isLoggedin) {
      router.push("/");
    }
  }, [withAuth, router]);

  return (
    <>
      <Head>
        <title>{title !== "" ? `Nishchay | ${title}` : "Nishchay"}</title>
        <meta name="description" content="Send files" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  );
}

Layout.defaultProps = {
  title: "",
  withAuth: false,
};

export default Layout;
