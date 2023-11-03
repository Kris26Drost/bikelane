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
import { EffectCoverflow, Navigation } from "swiper/modules";

const VaereMed = () => {
  const { data, loading, error, makeRequest } = useRequestData();

  const currentDate = new Date();

  useEffect(() => {
    makeRequest("events");
  }, []);

  return (
    <section>
      {error && <Error />}
      {loading && <Loader />}

      <div className="relative">
        <div
          className="w-full md:h-[40vh] h-[60vh] overflow-hidden z-0 bg-blue md:container"
          style={{ backgroundImage: "url(./images/pattern2.png)" }}
        >
          <div className="md:flex justify-between m-5">
          <Title headline="Kom og være med" />
            <h3 className="relative z-10 md:text-4xl text-3xl font-bold md:text-center text-white">
              Her er vores seneste arrangementer
            </h3>

            <Link to="/events">
              <button className="bg-primary p-3 px-4 text-white rounded-md">
                Se alle events
              </button>
            </Link>
          </div>
        </div>

        <div className="md:-top-20 -top-20 md:m-0 m-5 relative z-20">
          <Swiper
            spaceBetween={10}
            effect={"coverflow"} // Apply coverflow effect
            grabCursor={true}
            loop={true}
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
            className="mySwiper md:container md:rounded-none rounded-md overflow-hidden md:overflow-none"
          >
            {data &&
              data
                .sort(
                  (a, b) =>
                    new Date(a.evendate).getTime() -
                    new Date(b.eventdate).getTime()
                )
                .filter((e) => new Date(e.eventdate) > currentDate)
                .reverse()
                .slice(0, 4)
                .map((e) => (
                  <SwiperSlide
                    key={e._id}
                    className="swiper-wrapper flex items-center justify-center"
                  >
                    <div
                      className="swiper-slide overflow:hidden mx-2 mb-4"
                      style={{
                        height: "300px",
                        width: "400px",
                        zIndex: "30",  // Increase the z-index valu
                        position: "relative",  // Add a position valu
                      }}
                    >
                      <Link to={"/events/" + e._id}>
                        <figure className="group flex justify-center overflow-hidden md:w-full w-[90%] h-[90%] rounded-md cursor-pointer ">
                          <img
                            src={
                              "http://localhost:5888/images/event/" + e.image
                            }
                            alt={e.title}
                            className=" group-hover:rotate-6 group-hover:scale-125 group-hover:bg-black group-hover:bg-opacity-80 overflow:hidden object-cover duration-500 ease-in-out rounded-md"
                          />
                          <div className="group-hover:opacity-80 absolute w-[100%] h-[90%] transition-opacity duration-500 bg-black text-white opacity-0 rounded-md">
                            <span className="absolute top-[40%] left-[45%] text-5xl">
                              +
                            </span>
                          </div>
                          {/* <div className="group-hover:opacity-80 absolute w-[100%] h-[90%] transition-opacity duration-500  rounded-md opacity-0 " /> */}
                        </figure>
                      </Link>
                      <div>
                        <h5 className=" text-md text-primary font-semibold text-center">
                          {e.category.category}: {e.title}
                        </h5>

                        <h4 className="text-dim-gray text-xl font-bold">
                          {e.destination}
                        </h4>
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
