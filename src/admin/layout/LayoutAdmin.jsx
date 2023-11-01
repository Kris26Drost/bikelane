import React, {useContext} from "react";
import { Outlet, Navigate } from "react-router-dom";
import HeaderAdmin from "../layout/HeaderAdmin";
import Footer from "../layout/FooterAdmin";

// contextprovider som udbyder om der er logget id eller ej
import {LoginContext} from "../../context/LoginContext";

const  LayoutAdmin = () => {
  const {user} = useContext (LoginContext)

  if(!user) {
    return <Navigate to="/login" replace />
  }

  return (
    <>
      <HeaderAdmin />

      {/* Content for the admin section */}
      <div className="container mx-auto px-4 py-8">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default LayoutAdmin;
