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
          <article className="md:container md:px-0 px-5">
            <div className="md:container pt-10 md:flex md:gap-20">
              <div>
                <Title headline="Klubbens historie" />
                <h1 className="text-5xl font-bold">{data[1].title}</h1>
              </div>
              <div className="pt-10">
                <p>{data[1].content}</p>
                <button className="bg-secondary p-3 px-4 text-white rounded-md my-3">
                  Kom og vær med!
                </button>
              </div>
            </div>
            <div className=" relative flex justify-center md:w-full md:h-full md:pb-40 pb-20">
              <figure className=" md:w-[60vw] md:h-[50vh] relative md:m-10 ">
                <img
                className="rounded-lg shadow-xl"
                  src={"http://localhost:5888/images/hero/" + data[1].image}
                  alt={data[1].subject}
                />
              </figure>
            </div>
          </article>
        )}
      </div>
    </section>
  );
};

export default KlubHistorie;
