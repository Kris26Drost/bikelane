import React, { useEffect } from "react";
import useRequestData from "../../hooks/useRequestData";
import Error from "../Error";
import Loader from "../Loader";
import Title from "../Title";
import { FaQuoteRight } from "react-icons/fa";

const Testimonial = () => {
  const { data, loading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest("heros");
  }, []);

  return (
    <section>
      {error && <Error />}
      {loading && <Loader />}
      <div className="pb-20">
        <div
          className="bg-blue overflow-hidden"
          style={{ backgroundImage: "url(./images/pattern2.png)" }}
        >
          <div className="flex items-center justify-center px-10">
            {data && (
              <div className="grid grid-cols-2">
                <div className="flex flex-wrap items-center">
                  <Title headline="Testimonial" />
                  <h2 className="text-4xl text-white font-bold"> {data[3].title}</h2>

                  <div className="flex flex-cols gap-none">
                  <p className="text-md text-white">{data[3].content}</p>

                    <div className="flex items-center justify-center text-4xl bg-primary p-4 m-5 text-white rounded-full">
                      <FaQuoteRight className="m-3"/>
                    </div>
                 </div>
                </div>

                <figure className="flex relative left-20">
                  <img
                    src={
                      "http://localhost:5888/images/" + "hero/" + data[3].image
                    }
                    alt=""
                  />
                </figure>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
