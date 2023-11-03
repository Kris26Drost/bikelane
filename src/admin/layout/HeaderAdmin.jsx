import React, { useEffect, useState } from "react";
import useRequestData from "../../hooks/useRequestData";
import { Link } from "react-router-dom";
import NavAdmin from "./NavAdmin";
import SignoutBtn from "../../components/SignoutBtn";

import "../../../node_modules/font-awesome/css/font-awesome.min.css";

import { ImLocation } from "react-icons/im";
import { FiClock } from "react-icons/fi";
import { FaRegBuilding } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  const { data, loading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest("contactinformation");
  }, []);

  // Check if the screen width is less than a certain threshold to determine if it's a mobile screen
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the width threshold as needed
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {data && (
        <header className="text-secondary px-5 py-10">
          <div className="flex items-center justify-between max-w-screen-xl mx-auto">
            {isMobile ? (
              // Render mobile layout
              <div className="lg:hidden flex items-center">
                <FaRegBuilding className="text-safety-orange-blaze-orange" />
                <p className="ml-2">
                  Klubuset: {data.address},{data.zipcity}
                </p>
              </div>
            ) : (
              // Render desktop layout
              <div className="lg:flex hidden space-x-4">
                <div className="flex items-center">
                  <FaRegBuilding className="text-safety-orange-blaze-orange" />
                  <p className="ml-2">
                    Klubuset: {data.address}, {data.zipcity}
                  </p>
                </div>
                <div className="flex items-center">
                  <FiClock className="text-safety-orange-blaze-orange" />
                  <p className="ml-2">{data.openinghours}</p>
                </div>
                <div className="flex items-center">
                  <MdEmail className="text-safety-orange-blaze-orange" />
                  <p className="ml-2">{data.email}</p>
                </div>

                <SignoutBtn />
              </div>
            )}

            <div>
              {data.some.map((icons) => (
                <Link to={icons.link} key={icons._id}>
                  <span
                    className={"fa " + icons.icon}
                    style={{ margin: "0 10px 0 10px" }}
                  ></span>
                </Link>
              ))}
            </div>
          </div>
        </header>
      )}

      <NavAdmin />
    </>
  );
};

export default Header;
