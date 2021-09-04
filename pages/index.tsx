import type { NextPage } from "next";

import LandingLayout from "../components/Landing/LandingLayout";
import Layout from "../components/layout";

const Home: NextPage = () => {
  return (
    <Layout withAnimation={false}>
      <LandingLayout />
    </Layout>
  );
};

export default Home;
