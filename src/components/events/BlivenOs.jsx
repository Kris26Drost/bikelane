import React from "react";
import Title from "../Title";

const BlivenOs = () => {
  return (
    <section>
      <div className="bg-blue ">
        <div className=" md:p-10 p-5">
          <Title headline="Bliv en del af os" />
          <div className="md:flex justify-between">
          <h2 className="md:text-4xl text-2xl font-bold text-white">
            Lad os mødes - lad os cykle sammen
          </h2>
          
            <button className="bg-primary py-3 px-5 md:mt-5 mt-10 text-white rounded-md">
              Kontakt os nu
            </button>
          </div>
        </div>
          
      </div>
    </section>
  );
};

export default BlivenOs;
