import React, { useEffect } from "react";
import useRequestData from "../../hooks/useRequestData";
import Error from "../Error";
import Loader from "../Loader";
import Title from "../Title";

const Sponsor = () => {
  const { data, loading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest("sponsors");
  }, []);

  return (
    <section className="border-t-2 border-silver">
      {error && <Error />}
      {loading && <Loader />}
      <div className="md:container pt-20">
        {data && (
          <div key={data._id} className="md:flex ">
            <div className="md:w-[70%] md:text-none text-center">
            <Title headline="Sponsor" />
            <h1 className="text-3xl font-bold">Støt vores sponsor - de støtter os</h1>
            </div>
            <div className="flex items-center justify-center overflow-hidden my-20">
              <div className="w-full inline-flex flex-nowrap">
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                  {data &&
                    data
                      .slice()
                      .reverse()
                      .map((s) => (
                        <li key={s._id} className="mx-2 text-xl font-bold">
                          <figure className="">
                          <img src={"http://localhost:5888/images/sponsor/" + s.logo} alt={s.sponsor} className="grayscale w-40"/>
                          </figure>
                        </li>
                      ))}
                </ul>
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                  {data &&
                    data
                      .slice()
                      .reverse()
                      .map((s) => (
                        <li key={s._id} className="mx-2 text-xl font-bold">
                          
                          <img src={"http://localhost:5888/images/sponsor/" + s.logo} alt={s.sponsor} className="grayscale w-40"/>
                        </li>
                      ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Sponsor;
