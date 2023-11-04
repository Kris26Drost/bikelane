import React, { useEffect } from "react";
import useRequestData from "../../hooks/useRequestData";
import Error from "../Error";
import Loader from "../Loader";
import Title from "../Title";

// icons
import { BsCheckLg } from "react-icons/bs";

// scroll animation
import { useInView } from "react-intersection-observer";

const Faelleskab = () => {
  const { data, loading, error, makeRequest } = useRequestData();

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    makeRequest("community");
  }, []);

  return (
    <section className="md:container">
      <div
        ref={ref}
        className={`animate-slide-left ${
          inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
        }`}
      >
        {error && <Error />}
        {loading && <Loader />}
        {data && (
          <div className="md:container md:flex flex-none my-10">
            <div className=" flex">
              <div className=" md:grid-cols-12 md:m-4 grid-cols-2 m-2">
                <img
                  src={"http://localhost:5888/images/community/" + data.image1}
                  className=" rounded-lg"
                />
                <img
                  src={"http://localhost:5888/images/community/" + data.image3}
                  className="md:mt-10 mt-4 rounded-lg"
                />
              </div>
              <div className="md:grid-cols-12 md:m-4 grid-cols-6 m-2">
                <img
                  src={"http://localhost:5888/images/community/" + data.image2}
                  className="rounded-lg"
                />
                <img
                  src={"http://localhost:5888/images/community/" + data.image4}
                  className="md:mt-10 mt-4 rounded-lg"
                />
              </div>
            </div>

            <div className="">
              <Title headline="Fælleskab!" />
              <h2 className="text-3xl font-bold">{data.title}</h2>
              <p className="font-semibold">{data.content}</p>

              <div className="md:grid-cols-2 grid gap-10 mt-10">
                {data.keypoints.map((kp) => (
                  <div key={kp._id} className="flex">
                    <div className="flex items-center">
                      <span className="bg-primary text-primary bg-opacity-30 p-1 m-2 rounded-full">
                        <BsCheckLg />
                      </span>
                      <p> {kp.keypoint}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Faelleskab;
