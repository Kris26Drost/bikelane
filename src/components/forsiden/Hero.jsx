import React, { useEffect } from "react";
import useRequestData from "../../hooks/useRequestData";
import Error from "../../components/Error";
import Loader from "../../components/Loader";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";

const Hero = () => {
  const { data, loading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest("heros");
  }, []);

  return (
    <section className="bg-hero text-secondary pt-40">
      {error && <Error />}
      {loading && <Loader />}
      {data && (
        <div className="container">
          <div className="grid grid-cols-2">
            <div className="flex flex-col">
              <h1 className="text-6xl font-bold">{data[0].title}</h1>
              <p className="text-lg text-dim-gray mt-10">{data[0].content}</p>
              <Link>
                <button className="bg-primary text-white p-4 rounded-md mt-10">
                  Kom og deltag
                </button>
              </Link>
            </div>
            <div className="flex flex-col relative pb-40">
              <img
                src={"http://localhost:5888/images/hero/" + data[0].image}
                alt={data[0].subject}
                className="w-full  h-[60vh] object-cover rounded-lg"
              />
              <Link to={data[0].videolink}>
                <div className="rounded-full bg-white absolute right-[5.5%] top-[5.5%] p-4 animate-ping "></div>
                <div className="absolute right-[5%] top-[5%] p-5 rounded-full bg-white text-primary hover:bg-primary">
                  <FaPlay className="text-primary h-3 w-3 absolute top-[35%] right-[30%] hover:text-white" />
                </div>
              </Link>
            </div>
            {/* <span className="relative inline-block">
        <svg
          viewBox="0 0 25 20"
          fill="currentColor"
          className="text-fuchsia-500 absolute bottom-40 left-20 z-0 -mt-8 -ml-20 hidden w-32 sm:block lg:-ml-28 lg:-mt-10 lg:w-32"
        >
          <defs>
            <pattern
              id="e77df901-b9d7-4b9b-822e-16b2d410795b"
              x="0"
              y="0"
              width=".1"
              height=".2"
            >
              <circle cx="1" cy="1" r=".9" />
            </pattern>
          </defs>
          <rect
            fill="url(#e77df901-b9d7-4b9b-822e-16b2d410795b)"
            width="30"
            height="20"
          />
        </svg>
      </span> */}
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
