import React, { useEffect } from "react";
import useRequestData from "../../hooks/useRequestData";
import Error from "../Error";
import Loader from "../Loader";
import Title from "../Title";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";

const Interesser = () => {
  const { data, loading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest("interest");
  }, []);

  return (
    <section className="md:container">
      {error && <Error />}
      {loading && <Loader />}
      {data && (
        <div className="md:container md:flex">
          <div className="md:container b:p-0 p-5">
            <Title headline="Dine interesser i centrum" />
            <h2 className="text-3xl font-bold">{data.title}</h2>
            <p className="my-3 text-base font-semibold">{data.content}</p>

            <div className="md:grid-cols-2 grid">
              {data.keypoints.map((k) => (
                <div key={k._id}>
                  <div className="flex">
                    <span className="bg-primary text-primary bg-opacity-20 w-10 h-10 p-1 m-2 rounded-full">
                      <span
                        className={"ph " + k.icon}
                        style={{
                          fontSize: "30px",
                        }}
                      ></span>
                    </span>
                    <div className="md:pb-0 pb-5">
                      <h3 className="text-lg font-bold">{k.keypoint}</h3>

                      <p className="text-sm">{k.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex md:pb-0 pb-20">
            <div className="md:grid-cols-12 grid-cols-4 md:m-4 m-2">
              <img
                src={"http://localhost:5888/images/interest/" + data.image1}
                className=" rounded-lg"
              />
              <img
                src={"http://localhost:5888/images/interest/" + data.image3}
                className="md:mt-10 mt-4 rounded-lg"
              />
            </div>
            <div className="md:grid-cols-12 grid-cols-4 md:m-4 m-2">
              <img
                src={"http://localhost:5888/images/interest/" + data.image2}
                className="rounded-lg"
              />
              <img
                src={"http://localhost:5888/images/interest/" + data.image4}
                className="md:mt-10 mt-4 rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Interesser;
