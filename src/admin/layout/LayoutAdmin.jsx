import React, {useContext} from "react";
import { Outlet, Navigate } from "react-router-dom";
import HeaderAdmin from "../layout/HeaderAdmin";

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
      <div className="md:container mx-auto md:px-0 md:py-8 py-10">
        <Outlet />
      </div>
    </>
  );
};

export default LayoutAdmin;
