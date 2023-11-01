import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Footer = () => {
  const [contactInfo, setContactInfo] = useState({});

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

  return (
    contactInfo && (
      <footer className="bg-onyx text-platinum p-5">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex:col md:flex-row">
            <div className="md:w-1/4">
              <img src={"./images/logo.png"} alt="Stroem logo" />
              <p className="text-sm mt-3 md:mt-0">
                Som medlem af Elinstallatørernes Landsorganisation, ELFO, er vi
                tilsluttet et ankernævn og en grantiordning
              </p>
            </div>
            <div className="md:w-3/4 flex flex-col md:flex-row justify-between mt-5 md:mt-0">
              {/* Column 1 */}
              <div className="flex flex-col md:w-1/4">
                <h4 className="text-lg font-semibold">Link</h4>
                <ul>
                  <li className="hover:text-safety-orange-blaze-orange">
                    <Link to="/faq"> &gt; FAQ </Link>
                  </li>
                  <li className="hover:text-safety-orange-blaze-orange">
                    <Link to="/about"> &gt;Om Os</Link>
                  </li>
                  <li className="hover:text-safety-orange-blaze-orange">
                    <Link to="/contact"> &gt;Kontakt os</Link>
                  </li>
                  <li className="hover:text-safety-orange-blaze-orange">
                    <Link to="/service"> &gt;Services</Link>
                  </li>
                </ul>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col md:w-1/4 mt-5 md:mt-0">
                <h4 className="text-lg font-semibold">Kontakt os</h4>
                <p className="inline-block">
                  <span className="font-semibold">Address:</span>{" "}
                  {contactInfo.address}
                </p>
                <p className="inline-block">
                  <span className="font-semibold">Telefon:</span>{" "}
                  {contactInfo.phone}
                </p>
                <p className="inline-block">
                  <span className="font-semibold">Email: </span>
                  {contactInfo.email}
                </p>
              </div>

              {/* Column 3 */}
              <div className="flex flex-col md:w-1/4 mt-5 md:mt-0">
                <h4 className="text-lg font-semibold">Nyhedsbrev</h4>
                <p>Tilmeld dig vores nyhedsbrev her</p>
                <form>
                  <input
                    type="email"
                    name="email"
                    placeholder="Dit email"
                    className="px-2 py-1 my-3 rounded-md border-2 border-none focus:outline-none opacity-30"
                  />
                </form>
                <button className="w-full md:w-1/2 bg-safety-orange-blaze-orange text-cultured px-4 py-2 mt-2 rounded-md hover:bg-safety-orange-dark-orange font-semibold">
                  TILMELD
                </button>
              </div>
            </div>
          </div>
          <div className="mt-4 md:mt-8 border-t-[1px] border-onyx text-center md:text-left">
            <p>
              <span className="text-safety-orange-blaze-orange">Strøm</span>{" "}
              &copy; {new Date().getFullYear()} All rights Reserved
            </p>
          </div>
        </div>
      </footer>
    )
  );
};

export default Footer;
