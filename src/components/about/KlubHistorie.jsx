import React, { useEffect } from "react";
import useRequestData from "../../hooks/useRequestData";
import Error from "../Error";
import Loader from "../Loader";
import Title from "../Title";

const KlubHistorie = () => {
  const { data, loading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest("heros");
  }, []);

  return (
    <section className="bg-hero pt-40">
      {error && <Error />}
      {loading && <Loader />}
      <div>
        {data && (
          <div>
            <div className="container grid grid-cols-2 grid-rows-1">
              <div>
                <Title headline="Klubbens historie" />
                <h1 className="text-5xl font-bold">{data[1].title}</h1>
              </div>
              <div className="">
                <p>{data[1].content}</p>
                <button className="bg-secondary p-3 px-4 text-white rounded-md my-3">
                  Kom og vær med!
                </button>
              </div>
            </div>
            <div className=" relative flex justify-center w-full h-full pb-40">
              <figure className=" w-[60vw] h-[30vh] md:h-[50vh] relative m-10">
                <img
                className="rounded-lg shadow-xl"
                  src={"http://localhost:5888/images/hero/" + data[1].image}
                  alt={data[1].subject}
                />
              </figure>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default KlubHistorie;
