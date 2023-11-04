import React, { useState, useContext, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import useRequestData from "../hooks/useRequestData";

// login & logout
import SignoutBtn from "../components/SignoutBtn";
import { LoginContext } from "../context/LoginContext";

const Navbar = () => {
  const [category, setCategory] = useState("");

  const [showEventsDropdown, setShowEventsDropdown] = useState(false);

  const handleEventsClick = () => {
    setShowEventsDropdown(!showEventsDropdown);
  };

  // Get the user from the LoginContext
  const { user } = useContext(LoginContext);

  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  const { data, loading, error, makeRequest } = useRequestData();

  const {
    data: dataEvents,
    loading: loadingEvents,
    error: errorEvents,
    makeRequest: makeRequestEvents,
  } = useRequestData();

  useEffect(() => {
    makeRequest("eventcategories");
  }, []);

  useEffect(() => {
    makeRequestEvents("events");
  }, []);

  return (
    <nav className=" bg-white shadow-md rounded-lg fixed z-30 md:top-[13%] top-3 md:w-[85%] w-[90%] md:mx-auto md:left-1/2 left-4 md:transform md:-translate-x-1/2">
      {/* Mobile Menu (Burger Menu) */}
      <div className="lg:hidden items-center">
        <div className="flex justify-between p-5 bg-white rounded">
          <Link to="/">
            <figure>
              <img
                src="./images/logo-black.png"
                alt="Bikelane Logo"
                className="w-[100px]"
              />
            </figure>
          </Link>
          <button
            onClick={() => setShowBurgerMenu(!showBurgerMenu)}
            className="text-secondary focus:outline-none block"
          >
            <svg
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              {showBurgerMenu ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="lg:flex hidden">
        {/* Navigation Links */}
        <menu className="lg:flex items-center justify-between w-full p-5">
          <div className="flex items-center justify-center">
            <Link to="/">
              <figure>
                <img
                  src="./images/logo-black.png"
                  alt="Bikelane Logo"
                  className="w-[180px]"
                />
              </figure>
            </Link>
          </div>

          <div className="flex items-center justify-between">
            <ul className="flex space-x-5">
              {user && (
                <li>
                  <NavLink
                    to="/admin"
                    className={({ isActive }) =>
                      isActive
                        ? "text-primary border-b-4 border-primary pb-9"
                        : "hover:border-b-4 hover:border-primary pb-9"
                    }
                  >
                    &lt; Tilbage til Admin
                  </NavLink>
                </li>
              )}
              <li>
                <NavLink
                  exact="true"
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary border-b-4 border-primary pb-9"
                      : "hover:border-b-4 hover:border-primary pb-9"
                  }
                >
                  Forside
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary border-b-4 border-primary pb-9"
                      : "hover:border-b-4 hover:border-primary pb-9"
                  }
                >
                  Om os
                </NavLink>
              </li>
              <li className="flex items-center justify-center mx-auto">
                <div className="group relative cursor-pointer">
                  <div className=" flex items-center justify-between bg-white">
                    <NavLink
                      to="/events"
                      className={({ isActive }) =>
                        isActive
                          ? "text-primary border-b-4 border-primary"
                          : " "
                      }
                    >
                      Events
                    </NavLink>
                    <svg
                      className="group-hover:rotate-180 w-4 h-4 transition-transform fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                  <ul className="group-hover:block text-secondary absolute hidden w-auto pt-1 bg-white rounded-lg">
                    {data &&
                      data.map((ec) => (
                        <li
                          onClick={() => setCategory(ec.category)}
                          className="hover:text-primary px-4 py-4 cursor-pointer"
                          key={ec._id}
                        >
                          {ec.category}
                        </li>
                      ))}
                  </ul>
                </div>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary border-b-4 border-primary pb-9"
                      : "hover:border-b-4 hover:border-primary pb-9"
                  }
                >
                  Kontakt
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/news"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary border-b-4 border-primary pb-9"
                      : "hover:border-b-4 hover:border-primary pb-9"
                  }
                >
                  Nyheder
                </NavLink>
              </li>
            </ul>
          </div>
        </menu>
        <Link to="/contact">
          <div className="bg-primary hover:bg-opacity-70 text-white rounded-r-md w-[180px] h-[100px]">
            <p className="py-9 px-5"> Gratis prøveperiode</p>
          </div>
        </Link>
      </div>

      {/* Mobile Menu List */}
      {showBurgerMenu && (
        <div className="lg:hidden -top-3 bg-secondary absolute -left-4 block w-1/2 h-[100vh] text-white rounded shadow-lg animate-slide-left">
          <button
            onClick={() => setShowBurgerMenu(!showBurgerMenu)}
            className="text-white focus:outline-none block relative top-[3%] -right-[80%]"
          >
            <svg
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              {showBurgerMenu ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              )}
            </svg>
          </button>
          <ul className="space-y-2">
            <li>
              <Link to="/">
                <figure>
                  <img
                    src="./images/logo.png"
                    alt="Bikelane Logo"
                    className="w-[180px] m-5"
                  />
                </figure>
              </Link>
            </li>
            <li className=" p-5 text-white transition-colors">
              <NavLink to="/" onClick={() => setShowBurgerMenu(false)}>
                Forside
              </NavLink>
            </li>
            <li className="p-5 text-white transition-colors">
              <NavLink to="/about" onClick={() => setShowBurgerMenu(false)}>
                Om os
              </NavLink>
            </li>
            <li className=" p-5 text-white">
              <div className="group relative cursor-pointer">
                <div className="group relative cursor-pointer">
                  <div className=" flex items-center justify-between">
                    <NavLink
                      to="/events"
                      onClick={() => setShowBurgerMenu(false)}
                    >
                      Events
                    </NavLink>
                    <svg
                      className="group-hover:rotate-180 w-4 h-4 transition-transform fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>

                  <ul className="group-hover:block bg-secondary pt-1rounded-lg absolute hidden w-auto text-white">
                    {data &&
                      data.map((ec) => (
                        <li
                          onClick={() => setCategory(ec.category)}
                          className="hover:text-primary px-4 py-4 cursor-pointer"
                          key={ec._id}
                        >
                          {ec.category}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </li>

            <li className=" p-5 text-white transition-colors">
              <NavLink to="/contact" onClick={() => setShowBurgerMenu(false)}>
                Kontakt
              </NavLink>
            </li>
            <li className=" p-5 text-white transition-colors">
              <NavLink to="/news" onClick={() => setShowBurgerMenu(false)}>
                Nyheder
              </NavLink>
            </li>
            {user && (
              <>
                <li className=" p-5 text-white transition-colors">
                  <NavLink to="/admin" onClick={() => setShowBurgerMenu(false)}>
                    Admin
                  </NavLink>
                </li>
                <li className=" p-5 text-white transition-colors">
                  <SignoutBtn onClick={() => setShowBurgerMenu(false)} />
                </li>
              </>
            )}
            {!user && (
              <li className="bg-onyx hover:bg-safety-orange-blaze-orange hover:text-onyx p-5 text-white transition-colors">
                <NavLink to="/login" onClick={() => setShowBurgerMenu(false)}>
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
