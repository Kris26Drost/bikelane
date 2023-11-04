import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useRequestData from "../../hooks/useRequestData";
import Error from "../../components/Error";
import Loader from "../../components/Loader";

// icons
import { FaPlay } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const Hero = () => {
  const { data, loading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest("heros");
  }, []);

  const [showModal, setShowModal] = useState(false);

  const titleGroup = ["Grupper", "Alle", "Entusiaster"];
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle(
        currentTitle === titleGroup.length - 1 ? 0 : currentTitle + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, [titleGroup]);

  return (
    <section className="bg-hero text-secondary md:pt-60 md:container pt-40">
      {error && <Error />}
      {loading && <Loader />}
      <div className="md:container md:mx-0 mx-5">
        {data && (
          <div className="md:grid grid-cols-2">
            <div className="flex flex-col">
              <h1 className="md:text-6xl text-3xl font-bold">
                {data[0].title?.slice(0, 30)}
              </h1>
              <h2 className="text-primary animate-fade-in-right md:text-6xl text-3xl font-bold">
                {titleGroup[currentTitle]}
              </h2>
              <p className="text-dim-gray mt-10 text-lg">{data[0].content}</p>

              <div>
                <Link to="/contact">
                  <button className="bg-primary md:mb-0 p-4 mt-10 mb-10 text-white rounded-md">
                    Kom og deltag
                  </button>
                </Link>
              </div>
            </div>
            <div className="md:pb-40 relative flex flex-col pb-20">
              <img
                src={"http://localhost:5888/images/hero/" + data[0].image}
                alt={data[0].subject}
                className="w-full  h-[60vh] object-cover rounded-lg"
              />

              <div className="rounded-full bg-white absolute right-[5.5%] top-[5.5%] p-4 animate-ping "></div>
              <div
                onClick={() => setShowModal(true)}
                className="absolute right-[5%] top-[5%] p-5 rounded-full bg-white text-primary hover:bg-primary cursor-pointer"
              >
                <FaPlay className="text-primary h-3 w-3 absolute top-[35%] right-[30%] hover:text-white" />
              </div>
            </div>
          </div>
        )}
      </div>

      {showModal ? (
        <div className="top-1 left-1 bg-opacity-80 fixed z-30 w-full h-full bg-black">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/H55W1NhAbQo?si=81C5V5zz_cwsrbis"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute top-20 left-[10%] w-[80%] h-[80%]"
          ></iframe>
          <button
            onClick={() => setShowModal(false)}
            className="top-5 right-5 absolute p-2 text-4xl font-bold text-white"
          >
            <MdClose />
          </button>
        </div>
      ) : (
        <></>
      )}
    </section>
  );
};

export default Hero;
