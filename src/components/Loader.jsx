import React from "react";
import { MoonLoader } from "react-spinners";

const Loader = () => {
  return ( 
    <div
    className="
      h-[70vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    "
    >
      <MoonLoader
        size={100}
        color="rgb(212, 93, 121)"
      />
    </div>
   );
}
 
export default Loader;


