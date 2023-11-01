import React, { useState, useEffect, useRef } from "react";
import useRequestData from "../../hooks/useRequestData";
import Map from "../map";
import Title from "../Title";
import Error from "../Error";
import Loader from "../Loader";

// icons
import { ImLocation } from "react-icons/im";
import { FiClock } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

const Kontakt = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState();

  // GET request
  const { data, loading, error, makeRequest } = useRequestData();

  const {
    data: dataHero,
    loading: loadingHero,
    error: errorHero,
    makeRequest: makeHeroRequest,
  } = useRequestData();

  const formRef = useRef();

  // POST request
  const {
    data: formData,
    loading: formLoading,
    error: formError,
    makeRequest: makeFormRequest,
  } = useRequestData();

  const handleSubmit = (e) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append("name", name);
    fd.append("email", email);
    fd.append("phone", phone);
    fd.append("message", message);

    makeFormRequest("inqueries", null, null, "POST", fd);

    // e.target.reset();
  };

  useEffect(() => {
    makeRequest("contactinformation", null, null, "GET");
    if (formData) {
      formRef.current.reset();
    }
  }, [formData]);

  useEffect(() => {
    makeHeroRequest("heros");
  }, []);

  return (
    <section>
      {error && <Error />}
      {loading && <Loader />}
      <div
        className="bg-blue pt-40"
        style={{ backgroundImage: "url(./images/bg1.jpg)" }}
      >
        {dataHero && (
          <div className="relative">
            <p className="text-center text-white">{dataHero[7].title}</p>

            <h2 className="text-5xl font-bold text-center text-white">
              {dataHero[7].buttontext}
            </h2>
          </div>
        )}
      </div>
      <div
        className="relative flex justify-center w-full h-full"
        style={{ backgroundImage: "url(./images/bg1.jpg)" }}
      >
        {dataHero && (
          <div className=" flex justify-center items-center rounded-lg w-[60vw] h-[20vh] md:h-[60vh] relative top-20 overflow-hidden">
            <img
              src={"http://localhost:5888/images/hero/" + dataHero[7].image}
              alt={dataHero[7].title}
              className="top-[70%] left-[50%] relative transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        )}
      </div>
      <article
        className="container flex flex-wrap pt-20"
        style={{ backgroundImage: "url(./images/bg4.png)" }}
      >
        <div className="w-1/3 mt-10">
          {data && (
            <div className="bg-hero w-auto p-5 mr-5 rounded-md">
              <div className="flex">
                <ImLocation className=" text-primary inline-block m-2" />

                <p className="inline-block">
                  {data.address}, {data.zipcity}
                </p>
              </div>

              <div className="flex">
                <FiClock className=" text-primary inline-block m-2" />

                <p className="inline-block">{data.openinghours}</p>
              </div>

              <div className="flex">
                <MdEmail className=" text-primary inline-block m-2" />

                <p className="inline-block">{data.email}</p>
              </div>
            </div>
          )}
        </div>
        <form
          onSubmit={handleSubmit}
          ref={formRef}
          className=" flex-1 my-10"
        >
          <div className=" flex flex-col">
            <label>Navn</label>
            <input
              type="text"
              name="name"
              minLength="2"
              placeholder="Dit navn"
              onInput={(e) => setName(e.target.value)}
              className="focus:outline-none p-3 my-3 mr-3 border-2 border-gray-300 rounded-md"
              required
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
              placeholder="Din email"
              onInput={(e) => setEmail(e.target.value)}
              className="focus:outline-none p-3 my-3 mr-3 border-2 border-gray-300 rounded-md"
              required
            />
            <label>Telefon</label>
            <input
              type="tel"
              name="phone"
              pattern="[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}"
              placeholder="Telefon nr."
              onInput={(e) => setPhone(e.target.value)}
              className="focus:outline-none p-3 my-3 mr-3 border-2 border-gray-300 rounded-md"
              required
            />
            <label>Besked</label>
            <textarea
              name="message"
              placeholder="Din besked.."
              onInput={(e) => setMessage(e.target.value)}
              className="focus:outline-none w-full min-h-full p-3 border-2 border-gray-300 rounded-md"
              required
            />
            <button
              className="bg-secondary hover:bg-safety-orange-dark-orange flex justify-center items-center w-1/5 py-2 mt-4 text-white rounded-md"
              type="submit"
              value="Tilmeld"
            >
              Send besked
            </button>
          </div>
        </form>
      </article>

      <Map className="h-96 object-fi" />
    </section>
  );
};
export default Kontakt;
