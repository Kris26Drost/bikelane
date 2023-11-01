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
    <section>
      {error && <Error />}
      {loading && <Loader />}
      {data && (
        <div className="flex  container">
          <div>
            <Title headline="Dine interesser i centrum" />
            <h2 className="text-3xl font-bold">{data.title}</h2>
            <p className="font-semibold">{data.content}</p>

            <div className="grid grid-cols-2">
              {data.keypoints.map((k) => (
                <div key={k._id}>
                  <span
                    className={"ph " + k.icon}
                    style={{
                      margin: "0 10px 0 10px",
                      color: "black",
                      fontSize: "50px",
                      backgroundColor: "primary",
                    }}
                  ></span>
                  <h3>{k.keypoint}</h3>
                  <p>{k.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:grid-cols-12 grid-cols-4 m-4">
            <img
              src={"http://localhost:5888/images/interest/" + data.image1}
              className=" rounded-lg"
            />
            <img
              src={"http://localhost:5888/images/interest/" + data.image3}
              className="mt-10 rounded-lg"
            />
          </div>
          <div className="md:grid-cols-12 grid-cols-4 m-4">
            <img
              src={"http://localhost:5888/images/interest/" + data.image2}
              className="rounded-lg"
            />
            <img
              src={"http://localhost:5888/images/interest/" + data.image4}
              className="mt-10 rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Interesser;
