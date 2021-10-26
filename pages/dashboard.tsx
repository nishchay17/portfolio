import React, { ReactElement } from "react";
import { GetServerSideProps } from "next";

import DashboardLayout from "../components/Admin/Dashboard/DashboardLayout";
import Layout from "../components/Layout";
import { supabase } from "../lib/supabase";
import { Project } from "../interface/Project";

interface Props {
  data: Project[];
}

function Dashboard({ data }: Props): ReactElement {
  return (
    <Layout title="Dashboard" withAnimation={false} withAuth={true}>
      <DashboardLayout projectList={data} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data, error } = await supabase.from("Project").select();

  if (error) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: { data },
  };
};

export default Dashboard;
