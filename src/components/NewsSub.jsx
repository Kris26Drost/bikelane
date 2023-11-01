// CONTROL COMPONENT  
import {useState, useEffect} from "react";
import useRequestData from "../hooks/useRequestData";
import Error from "./Error";
import Loader from "./Loader";

const NewsSub = ({NewsSubTitle}) => {

  // POST request
  const { data, loading, error, makeRequest } = useRequestData();

  const [email, setEmail] = useState();

  const handleSubscribe = () => {
    e.preventDefault();

    const fd = new FormData(e.target);
    fd.append("email", email)

    makeRequest("newssubscription", null, null, "POST", fd);
  };

  //  DELETE request
   const handleUnsubscribe = () => {
    e.preventDefault();

  //  DELETE
    makeRequest("newssubscription/afmeld" + email, null, null, "DELETE");
  };

  return (
    // <div>
    //   <h2>Tilmeld nyhedsbrev ({NewsSubTitle}) </h2>

    //   {error && <Error />}
    //   {loading && <Loader />}
    //   {data && 
    //     <h2 className="bg-green-300 text-black">Tak for din tilmelding</h2>
    //   }

    //   {!data && 
    //     <form>
    //       <input
    //         type="email"
    //         // onInput={e => {setEmail(e.target.value)}}
    //         required
    //         placeholder="Udflyd med email"
    //         pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
    //         className="px-2 py-1 my-3 rounded-md border-2 border-none opacity-80 focus:outline-none bg-onyx"
    //       />
    //       <input
    //         type="button" onClick={handleSubscribe} value="Tilmeld"
    //         className="w-full md:w-1/2 bg-safety-orange-blaze-orange text-cultured px-4 py-2 mt-2 rounded-md hover:bg-safety-orange-dark-orange font-semibold"
    //       >
    //         Tilmeld
    //       </input>
    //       <input
    //         type="button" onClick={handleUnsubscribe} value="Afmeld"
    //         className="w-full md:w-1/2 bg-safety-orange-blaze-orange text-cultured px-4 py-2 mt-2 rounded-md hover:bg-safety-orange-dark-orange font-semibold"
    //       >
    //         Afmeld
    //       </input>
    //     </form>
    //   }
    // </div>
  );
};

export default NewsSub;
