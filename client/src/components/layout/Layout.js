import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

export default function Layout({ children, title, description, keywords }) {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />

        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <title>{title}</title>
      </Helmet>

      <Header />
      <main style={{ minHeight: "70vh" }}>{children}</main>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Ecommerce App -shop",
  description: "mern Stack project",
  keywords: "mern,react,node,express",
};
