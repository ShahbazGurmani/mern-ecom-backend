import React from "react";
import Layout from "../components/layout/Layout";

export default function Policy() {
  return (
    <Layout title={"privacy policy"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="./images/about.jpeg"
            style={{ width: "100%" }}
            alt="privacy"></img>
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">Our Policie's</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </Layout>
  );
}
