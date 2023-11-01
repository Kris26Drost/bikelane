import React, { useEffect } from "react";
import useRequestData from "../../hooks/useRequestData";
import Error from "../Error";
import Loader from "../Loader";
import Title from "../Title";

const Faelleskab = () => {
  const { data, loading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest("community");
  }, []);

  return (
    <section>
      {error && <Error />}
      {loading && <Loader />}
      {data && (
        <div className="container flex">
          <div className="md:grid-cols-12 grid-cols-4 m-4">
            <img
              src={"http://localhost:5888/images/community/" + data.image1}
              className=" rounded-lg"
            />
            <img
              src={"http://localhost:5888/images/community/" + data.image3}
              className="mt-10 rounded-lg"
            />
          </div>
          <div className="md:grid-cols-12 grid-cols-4 m-4">
            <img
              src={"http://localhost:5888/images/community/" + data.image2}
              className="rounded-lg"
            />
            <img
              src={"http://localhost:5888/images/community/" + data.image4}
              className="mt-10 rounded-lg"
            />
          </div>

          <div>
            <Title headline="Fælleskab!" />
            <h2 className="text-3xl font-bold">{data.title}</h2>
            <p className="font-semibold">{data.content}</p>

            <div className="grid grid-cols-2 gap-10 mt-10">
              {data.keypoints.map((kp) => (
                <div key={kp._id} className="flex">
                  <div >
                    <p>{kp.keypoint}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Faelleskab;
