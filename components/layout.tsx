import React, { ReactElement, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/dist/client/router";
import MotionBox from "./MotionBox";
interface Props {
  children: ReactElement[] | ReactElement;
  title: string;
  withAuth: boolean;
  withAnimation: boolean;
}

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};
function Layout({
  children,
  title,
  withAuth,
  withAnimation,
}: Props): ReactElement {
  const router = useRouter();

  useEffect(() => {
    const isLoggedin: boolean = true;
    if (withAuth && !isLoggedin) {
      router.push("/");
    }
  }, [withAuth, router]);

  return (
    <MotionBox
      as="main"
      variants={withAnimation ? variants : {}}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: "linear" }}
    >
      <Head>
        <title>{title !== "" ? `Nishchay | ${title}` : "Nishchay"}</title>
      </Head>
      {children}
    </MotionBox>
  );
}

Layout.defaultProps = {
  title: "",
  withAuth: false,
  withAnimation: true,
};

export default Layout;
