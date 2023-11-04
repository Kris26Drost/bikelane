import React from "react";
import { Outlet } from "react-router-dom";

// components
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const Layout = () => {
  return (
    <>
      <Header />

      <Outlet className="container" />

      <Footer />
    </>
  );
};

export default Layout;
