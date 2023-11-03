import React, { useEffect, useState } from "react";
import useRequestData from "../hooks/useRequestData";
import { Link } from "react-router-dom";
// import NewsSub from "../components/NewsSub";
import Loader from "../components/Loader";
import Error from "../components/Error";
import "../../node_modules/font-awesome/css/font-awesome.min.css";

import { MdKeyboardArrowRight } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdClose } from "react-icons/md";

const Footer = () => {
  const { data, loading, error, makeRequest } = useRequestData();

  const [show, setShow] = useState(false);

  const {
    data: dataEvents,
    loading: loadingEvents,
    error: errorEvents,
    makeRequest: makeRequestEvents,
  } = useRequestData();

  useEffect(() => {
    makeRequest("contactinformation");
  }, []);

  useEffect(() => {
    makeRequestEvents("events");
  }, []);

  return (
    <footer className="bg-gradient-to-r from-secondary to-blue text-silver">
      {error && <Error />}
      {loading && <Loader />}
      <div
        className="md:px-40 px-10"
        style={{ backgroundImage: "url(./images/contour.png)" }}
      >
        {data && (
          <div key={data._id}>
            <div className="md:flex-row flex flex-col">
              <div className="md:w-1/4 w-1/2">
                <Link to="/">
                  <img
                    src={"./images/logo.png"}
                    alt="BikeLane Logo"
                    className="w-[200px] pt-5"
                  />
                </Link>
                <p className="md:mt-8 mt-4 text-sm">{data.companypayoff}</p>

                <div className="md:mt-6 mt-4">
                  <div className="flex">
                    <i className="fa fa-map-marker mr-2"></i>
                    <p className="text-sm font-bold">
                      Klubhuset:{data.address},{data.zipcity}
                    </p>
                  </div>

                  <div className="flex">
                    <MdEmail className="mr-2" />
                    <p className="text-sm font-bold">{data.email}</p>
                  </div>
                </div>
              </div>
              <div className="md:w-3/4 md:flex-row md:mt-4 flex flex-col justify-between mt-5 mb-5">
                {/* Column 1 */}
                <div className="md:w-1/3 flex flex-col w-1/2 m-3">
                  <div className="border-b-[1px] border-dim-gray">
                    <h4 className="md:text-xl mb-8 text-lg font-bold text-white">
                      Kommende events
                    </h4>
                  </div>
                  {dataEvents &&
                    dataEvents.slice(0, 4).map((c) => {
                      return (
                        <div
                          className="hover:translate-x-5 flex items-center py-2 transition duration-200 transform"
                          key={c._id}
                        >
                          <Link
                            to={"/events/" + c._id}
                            className="hover:text-primary font-semibold"
                          >
                            <div className="md:flex-1 flex">
                              <span key={c._id}>
                                <MdKeyboardArrowRight className="text-primary" />
                              </span>
                              {c.title}
                            </div>
                          </Link>
                        </div>
                      );
                    })}
                </div>

                {/* Column 2 */}
                <div className="md:w-1/3 flex flex-col w-1/2 m-3">
                  <div className="border-b-[1px] border-dim-gray">
                    <h4 className="md:text-xl mb-8 text-lg font-bold text-white">
                      Indhold
                    </h4>
                  </div>
                  <div className="hover:translate-x-5 inline-block py-2 transition duration-200 transform">
                    <Link
                      to="/about"
                      className="hover:text-primary font-semibold"
                    >
                      <MdKeyboardArrowRight className="text-primary inline-block" />{" "}
                      Om os
                    </Link>
                  </div>
                  <div className="hover:translate-x-5 inline-block py-2 transition duration-200 transform">
                    <Link
                      to="/events"
                      className="hover:text-primary font-semibold"
                    >
                      <MdKeyboardArrowRight className="text-primary inline-block" />{" "}
                      Events
                    </Link>
                  </div>
                  <div className="hover:translate-x-5 inline-block py-2 transition duration-200 transform">
                    <Link
                      to="/contact"
                      className="hover:text-primary font-semibold"
                    >
                      <MdKeyboardArrowRight className="text-primary inline-block" />{" "}
                      Kontakt{" "}
                    </Link>
                  </div>
                  <div className="inline-block py-2">
                    <Link
                      to="/news"
                      className="hover:text-primary font-semibold"
                    >
                      <div className="hover:translate-x-2 transition duration-200 transform">
                        <MdKeyboardArrowRight className="text-primary inline-block" />{" "}
                        <span className="md:transform-none">Nyheder</span>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Column 3 */}
                <div className="md:w-1/3 flex flex-col m-3">
                  <div className="border-b-[1px] border-dim-gray">
                    <h4 className="md:text-xl mb-8 text-lg font-bold text-white">
                      Galleri
                    </h4>
                  </div>
                  <div className="md:flex-wrap flex">
                    <div className="md:grid-cols-3 md:grid-rows-1 grid grid-cols-1">
                      {dataEvents &&
                        dataEvents.slice(0, 6).map((gallery) => {
                          return (
                            <div key={gallery._id} className="m-1">
                              <img
                                src={
                                  "http://localhost:5888/images/event/" +
                                  gallery.image
                                }
                                alt={gallery.title}
                                className="w-full h-full rounded-lg shadow-xl"
                                onClick={() => setShow(true)}
                              />
                              {show ? (
                                <div className="bg-opacity-30 fixed top-0 left-0 z-30 w-full h-full bg-black">
                                  <img
                                    src={
                                      "http://localhost:5888/images/event/" +
                                      gallery.image
                                    }
                                    alt=""
                                    className="absolute top-40 left-[25%] w-[50%] h-[50%]"
                                  />

                                  <img
                                    src={
                                      "http://localhost:5888/images/event/" +
                                      gallery.image
                                    }
                                    alt=""
                                    className="absolute top-[75%] left-[10%] w-[20%] h-[20%]"
                                  />

                                  <button
                                    onClick={() => setShow(false)}
                                    className="top-5 right-5 absolute p-2 text-4xl font-bold text-white"
                                  >
                                    <MdClose />
                                  </button>
                                </div>
                              ) : (
                                <></>
                              )}
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 md:mt-8 border-t-[1px] border-dim-gray text-silver text-center md:text-left">
              <div className="py-20">
                <p>&copy; Copyright {new Date().getFullYear()} Bikelane.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};
export default Footer;
