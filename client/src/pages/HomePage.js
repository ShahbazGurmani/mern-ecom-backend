import React from "react";
import Layout from "../components/layout/Layout";
import { useAuth } from "../context/AuthContext";

export default function HomePage() {
  const [auth, setAuth] = useAuth();
  return (
    <Layout title={"best offer"}>
      <h1>Home Page</h1>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </Layout>
  );
}
