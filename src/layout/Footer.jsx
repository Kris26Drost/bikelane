import React, { useEffect } from "react";
import useRequestData from "../hooks/useRequestData";
import { Link } from "react-router-dom";
// import NewsSub from "../components/NewsSub";
import Loader from "../components/Loader";
import Error from "../components/Error";
import "../../node_modules/font-awesome/css/font-awesome.min.css";

import { MdKeyboardArrowRight } from "react-icons/md";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const { data, loading, error, makeRequest } = useRequestData();

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
    makeRequestEvents("events", null, null, "GET");
  }, []);

  return (
    <footer className="bg-gradient-to-r from-secondary to-blue text-silver">
      {error && <Error />}
      {loading && <Loader />}
      <div className="px-40" style={{ backgroundImage: "url(./images/contour.png)" }}>
      {data && (
        <div>
          <div className="flex:col md:flex-row flex">
            <div className="md:w-1/4">
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
                  <MdEmail className="mr-2"/>
                  <p className="text-sm font-bold">{data.email}</p>
                </div>
              </div>
            </div>
            <div className="md:w-3/4 md:flex-row md:mt-4 flex flex-col justify-between mt-5 mb-5">
              {/* Column 1 */}
              <div className="md:w-1/3 flex flex-col w-1/2 m-3">
                <div className="border-b-[1px] border-dim-gray">
                  <h4 className="mb-8 text-xl font-semibold text-white">
                    Kommende events
                  </h4>
                </div>
                <div>
                  {dataEvents &&
                    dataEvents.slice(0, 4).map((c) => {
                      return (
                        <div key={c._id} className="flex items-center py-2">
                          <MdKeyboardArrowRight className="text-primary" />{" "}
                          {c.title}
                        </div>
                      );
                    })}
                </div>
              </div>

              {/* Column 2 */}
              <div className="md:w-1/3 flex flex-col w-1/2 m-3">
                <div className="border-b-[1px] border-dim-gray">
                  <h4 className="mb-8 text-xl font-semibold text-white">
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
                  <Link to="/news" className="hover:text-primary font-semibold">
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
                  <h4 className="mb-8 text-xl font-semibold text-white">
                    Galleri
                  </h4>
                </div>

                <div className="flex-cols-1 flex-rows-1 flex">
                  <div className="grid-cols md:grid-cols-3 md:grid-rows-1 grid grid-rows-1">
                    <img src="./images/biker.png" alt="" />
                    <img src="./images/biker.png" alt="" />
                    <img src="./images/biker.png" alt="" />
                  </div>
                </div>
                <div className="flex-cols-1 flex-rows-1 flex">
                  <div className="md:grid-cols-3 md:grid-rows-1 grid grid-cols-2 grid-rows-1">
                    <img src="./images/biker.png" alt="" />
                    <img src="./images/biker.png" alt="" />
                    <img src="./images/biker.png" alt="" />
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
