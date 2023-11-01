import React, { useEffect } from "react";
import useRequestData from "../../hooks/useRequestData";
import Error from "../Error";
import Loader from "../Loader";
import Title from "../Title";

const HvemViEr = () => {
  const { data, loading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest("http://localhost:5888/testimonials");
  }, []);

  return (
    <section className="bg-hero p-10 pb-20">
      {error && <Error />}
      {loading && <Loader />}
      <div className="grid grid-cols-2">
        <div>
          <Title headline="Hvem vi er" />
          <h2 className="text-3xl font-semibold">Et udvalg af os i klubben</h2>
        </div>
        <div>
          <p className="text-dark-gray ">
            Vi er over 1.400 medlemmer og tæller mange forskellige typer - lige
            fra motionisten, der elsker naturen til den ekstreme biker, hvor det
            ikke kan blive hurtigt eller farligt nok! Og en masse ind i mellem -
            og der er selvfølgelig også plads til børn og unge ♥
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {data &&
          data.slice(0, 4).map((t, i) => (
            <article key={t._id} className=" w-1/5 p-5 pl-0">
              <img
                src={"http://localhost:5888/images/testimonial/" + t.image}
                alt={t.name}
                className="w-full h-auto rounded-lg"
              />

              <div className="bg-white relative bottom-[10%] shadow-md mb-5 hover:shadow-xl z-10">
                <div className="absolute mx-5 bg-white rounded-lg shadow-lg">
                  <div className="p-5">
                    <div className="relative h-auto">
                      <h3 className="text-xl">{t.name}</h3>
                      <p className="text-primary text-md">{t.experience}</p>
                      <p className="italic">{t.motivation}</p>
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
