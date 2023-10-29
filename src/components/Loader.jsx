import React from "react";
import { ClipLoader } from "react-spinners";

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
      <ClipLoader
        size={100}
        color="rgba(255, 102, 0, 1"
      />
    </div>
   );
}
 
export default Loader;


