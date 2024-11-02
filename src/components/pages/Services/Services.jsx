import React from "react";
import PageTitle from "../Dashboard/PageTitle";
import "./Services.css";
import Products from "./Products";

const Services = () => {
  return (
    <main id="main" className="main">
      <PageTitle page="Services" />
      <Products />
    </main>
  );
};

export default Services;
