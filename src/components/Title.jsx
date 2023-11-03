import React from "react";
import Breadcrumbs from "./Breadcrumbs";

const Title = ({ headline }) => {
  return (
    <h1 className="text-md md:text-md lg:text-lg text-primary my-3 font-semibold">
      {headline}
    </h1>
  );
};

export default Title;
