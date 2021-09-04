import type { NextPage } from "next";

import LandingLayout from "../components/Landing/LandingLayout";
import Layout from "../components/layout";
import Nav from "../components/Nav";

const Home: NextPage = () => {
  return (
    <Layout>
      <Nav />
      <LandingLayout />
    </Layout>
  );
};

export default Home;
