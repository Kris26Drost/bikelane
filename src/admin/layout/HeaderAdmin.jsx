import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import NavAdmin from "./NavAdmin";
import SignoutBtn from "../../components/SignoutBtn";

const Header = () => {
  const [contactInfo, setContactInfo] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5333/contactinformation")
      .then((res) => {
        setContactInfo(res.data);
      })
      .catch((error) => {
        console.log("Error fetching contact info", error);
      });
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
      {contactInfo && (
        <header className="bg-onyx text-white p-5">
          <div className="max-w-screen-xl mx-auto flex items-center justify-between">
            <div>
              <Link to="/admin">
                <img src={"./images/logo.png"} alt="Stroem logo" />
              </Link>
            </div>

           
              
              <div className="hidden lg:flex space-x-4">
               
                <SignoutBtn />
              </div>
           
          </div>
        </header>
      )}

      <NavAdmin />
    </>
  );
};

export default Header;
