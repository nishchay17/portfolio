import React, { ReactElement, useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { supabase } from "../lib/supabase";
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
  const [isLoggedin, setIsLoggedin] = useState<boolean>(!!supabase.auth.user());
  useEffect(() => {
    if (withAuth && !isLoggedin) {
      router.push("/");
    }
  }, [withAuth, router, isLoggedin]);

  // const [authView, setAuthView] = useState("sign_in");

  // useEffect(() => {
  //   const { data: authListener } = supabase.auth.onAuthStateChange(
  //     (event, session) => {
  //       if (event === "PASSWORD_RECOVERY") setAuthView("forgotten_password");
  //       if (event === "USER_UPDATED")
  //         fetch("/api/auth", {
  //           method: "POST",
  //           headers: new Headers({ "Content-Type": "application/json" }),
  //           credentials: "same-origin",
  //           body: JSON.stringify({ event, session }),
  //         }).then((res) => res.json());
  //     }
  //   );

  //   return () => {
  //     authListener?.unsubscribe();
  //   };
  // }, []);

  return (
    <>
      {!(withAuth && !isLoggedin) && (
        <MotionBox
          as="main"
          variants={withAnimation ? variants : {}}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ type: "linear", duration: 0.45 }}
        >
          <Head>
            <title>{title !== "" ? `Nishchay | ${title}` : "Nishchay"}</title>
          </Head>
          <>{children}</>
        </MotionBox>
      )}
    </>
  );
}

Layout.defaultProps = {
  title: "",
  withAuth: false,
  withAnimation: true,
};

export default Layout;
