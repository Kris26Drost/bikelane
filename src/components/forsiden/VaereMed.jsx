import React, { useEffect } from "react";
import useRequestData from "../../hooks/useRequestData";
import Error from "../Error";
import Loader from "../Loader";
import Title from "../Title";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

// import required modules
import { EffectCoverflow,  Navigation } from "swiper/modules";

const VaereMed = () => {
  const { data, loading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest("events");
  }, []);

  return (
    <section>
      {error && <Error />}
      {loading && <Loader />}

      <div className="relative">
        <div
          className="w-full h-[20vh] md:h-[40vh] relative overflow-hidden z-0 bg-blue"
          style={{ backgroundImage: "url(./images/pattern2.png)" }}
        >
          <Title headline="Kom og være med" />

          <div className="flex justify-between m-5">
            <h3 className="relative z-10 text-4xl font-semibold text-center text-white">
              Her er vores seneste arrangementer
            </h3>

            <Link to="/events">
              <button className="bg-primary p-3 px-4 text-white rounded-md">
                Se alle events
              </button>
            </Link>
          </div>
        </div>

        <div className="-top-20 relative z-20">
          <Swiper
            spaceBetween={10}
            effect={"coverflow"} // Apply coverflow effect
            grabCursor={true}
            loop={"4"}
            centeredSlides={true}
            slidesPerView={3}
            coverflowEffect={{
              rotate: 50, // Set the rotate value as needed
              stretch: 0, // Stretch space between slides (in px)
              depth: 100, // Depth offset in px (slides translate in Z axis)
              modifier: 1, // Effect multipler
              slideShadows: false,
            }}
            modules={[EffectCoverflow, Navigation]}
            navigation={true}
            className="mySwiper"
          >
            {data &&
              data.slice(0, 4).map((e) => (
                <SwiperSlide
                  key={e._id}
                  className="swiper-wrapper flex items-center justify-center"
                >
                  <div
                    className="swiper-slide mx-2 mb-4"
                    style={{
                      height: "300px",
                      width: "400px",
                      zIndex: "30", // Increase the z-index value
                      position: "relative", // Add a position value
                    }}
                  >
                    <figure className="group flex justify-center overflow-hidden rounded-md cursor-pointer">
                      <img
                        src={"http://localhost:5888/images/event/" + e.image}
                        alt={e.title}
                        className="group-hover:rotate-6 group-hover:scale-125 object-cover duration-500 ease-in-out rounded-md"
                      />
                      <div className="group-hover:opacity-80 absolute w-full h-full transition-opacity duration-500 bg-black rounded-md opacity-0" />
                    </figure>
                  <div>
                    <h4 className=" text-md font-semibold text-center text-red-600">
                      {e.category.category}: {e.title}
                    </h4>

                    <p className="text-gray-600">{e.destination}</p>
                  </div>
                  </div>
                </SwiperSlide>
              ))}

          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default VaereMed;
