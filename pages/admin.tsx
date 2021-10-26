import React, { ReactElement } from "react";
import Login from "../components/Admin/Login";
import Layout from "../components/Layout";

function Admin(): ReactElement {
  return (
    <Layout title="Login">
      <Login />
    </Layout>
  );
}

export default Admin;
