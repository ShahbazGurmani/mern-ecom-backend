import React from "react";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import Layout from "../components/layout/Layout";

export default function Contact() {
  return (
    <Layout title={"contact us ecom"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="./images/contactus.jpeg"
            style={{ width: "100%" }}
            alt="contact"></img>
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">Contact Us</h1>
          <p className="text-justify mt-2">
            any query and info about products feel free to call anytime we 24x7
            avaiable.
          </p>
          <p className="mt-3">
            <BiMailSend /> : shahbazgurmani786@gmail.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : +923447572425
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-000-000
          </p>
        </div>
      </div>
    </Layout>
  );
}
