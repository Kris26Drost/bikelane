import React from "react";
import News from "../components/news/News";

const AdminHome = () => {
  return (
  <div className="pt-40 text-center flex flex-col justify-center">
  <h1 className="font-bold text-5xl text-secondary"> <span className="text-primary"> Velkommen</span> <span className="text-4xl"> til</span> <span className="text-primary"> Admin</span></h1>
  <p className="text-secondary mt-3">Vælg venligst det du vil oprette / rette eller slet</p>
 {/* < News  /> */}
 
  </div>
  );
};

export default AdminHome;
