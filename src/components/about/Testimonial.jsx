import React, { useEffect } from "react";
import useRequestData from "../../hooks/useRequestData";
import Error from "../Error";
import Loader from "../Loader";
import Title from "../Title";

// icons
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
          className="bg-blue md:container overflow-hidden"
          style={{ backgroundImage: "url(./images/pattern2.png)" }}
        >
          <div className="md:flex md:px-10 items-center justify-center px-5">
            {data && (
              <div className="md:grid grid-cols-2">
                <div className="md:flex md:flex-wrap items-center">
                  <Title headline="Testimonial" />
                  <h2 className="text-4xl font-bold text-white">
                    {" "}
                    {data[3].title}
                  </h2>
                  <div className="flex">
                    <p className="md:text-md text-sm text-white">
                      {data[3].content.slice(0, 219)}
                    </p>

                    <div className="bg-primary flex items-center justify-center w-20 h-20 p-5 m-5 text-white rounded-full">
                      <FaQuoteRight className="text-3xl" />
                    </div>
                  </div>
                </div>

                <figure className="md:left-20 relative flex">
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
