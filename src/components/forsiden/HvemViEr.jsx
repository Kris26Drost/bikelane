import React, { useEffect } from "react";
import useRequestData from "../../hooks/useRequestData";
import Error from "../Error";
import Loader from "../Loader";
import Title from "../Title";

import "../../assets/Fonts/thin/style.css";

const HvemViEr = () => {
  const { data, loading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest("http://localhost:5888/testimonials");
  }, []);

  return (
    <section className="bg-hero md:p-10 p-5">
      {error && <Error />}
      {loading && <Loader />}
      <div className="grid md:grid-cols-2 md:container">
        <div className="md:container">
          <Title headline="Hvem vi er" />
          <h2 className="text-3xl font-bold">Et udvalg af os i klubben</h2>
        </div>
        <div >
          <p className="text-dark-gray md:text-base text-sm md:py-0 py-5">
            Vi er over 1.400 medlemmer og tæller mange forskellige typer - lige
            fra motionisten, der elsker naturen til den ekstreme biker, hvor det
            ikke kan blive hurtigt eller farligt nok! Og en masse ind i mellem -
            og der er selvfølgelig også plads til børn og unge ♥
          </p>
        </div>
      </div>
      <div className="md:flex flex-wrap justify-center md:pb-20 pb-10">
        {data &&
          data.slice(0, 4).map((t) => (
            <article key={t._id} className=" md:w-1/5 md:p-5 md:pl-0">
              <img
                src={"http://localhost:5888/images/testimonial/" + t.image}
                alt={t.name}
                className="w-full h-full rounded-lg"
              />

              <div className="relative -top-[10%] md:mb-5 mb-20 z-10">
                <div className="absolute md:top-0 -top-20 mx-5 bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="p-5">
                    <div className="relative h-auto">
                      <h3 className="text-xl">{t.name}</h3>
                      <p className="text-primary text-md">{t.experience}</p>
                      <p className="italic">{t.motivation}</p>
                      <span>{t.icon}</span>
                      <div className="rounded-full w-10 h-10 bg-primary opacity-60 absolute top-30 -right-10"/>
                      <div className="rounded-full w-10 h-20 bg-primary opacity-40 absolute top-20 -right-10 z-1"/>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
      </div>
    </section>
  );
};

export default HvemViEr;
