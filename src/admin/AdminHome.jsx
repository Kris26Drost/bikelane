import React from "react";

const AdminHome = () => {
  return (
    <div className="flex flex-col justify-center pt-40 text-center">
      <h1 className="text-secondary text-5xl font-bold">
        {" "}
        <span className="text-primary"> Velkommen</span>{" "}
        <span className="text-4xl"> til</span>{" "}
        <span className="text-primary"> Admin</span>
      </h1>
      <p className="text-secondary mt-3">
        Vælg venligst det du vil oprette / rette eller slet
      </p>
    </div>
  );
};

export default AdminHome;
