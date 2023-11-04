import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavAdmin = () => {
  // State to track whether the mobile menu is open or closed
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="z-30 fixed p-5 bg-white rounded-md shadow-md md:top-[13%] top-13 md:w-[85%] w-[90%] md:mx-auto md:left-1/2 left-4 md:transform md:-translate-x-1/2">
      {/* Mobile Menu (Burger Menu) */}
      <div className="lg:hidden items-center">
        <div className="flex justify-between p-5 bg-white rounded">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-primary" : "text-secondary"
            }
          >
            &lt; Tilbage til forsiden
          </NavLink>
          <div></div>
          <button
            onClick={() => setShowBurgerMenu(!showBurgerMenu)}
            className="text-safety-orange-blaze-orange hover:text-safety-orange-dark-orange focus:outline-none block"
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="lg:flex items-center justify-between hidden w-full">
        {/* Navigation Links */}
        <menu className="lg:flex md:items-center md:justify-center md:space-x-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-primary" : "text-secondary"
            }
          >
            &lt; Tilbage til forsiden
          </NavLink>

          <NavLink
            to="/admin"
            className={({ isActive }) =>
              isActive ? "text-primary" : "text-secondary"
            }
          >
            <span className="font-bold"> Admin</span> Home
          </NavLink>

          <NavLink
            to="eventsadmin"
            className={({ isActive }) =>
              isActive ? "text-primary" : "text-secondary"
            }
          >
            <span className="font-bold"> Opret/Ret/Slet</span> -{" "}
            <span className="underline-offset-4 underline"> Events</span>
          </NavLink>
          <NavLink
            to="goalsadmin"
            className={({ isActive }) =>
              isActive ? "text-primary" : "text-secondary"
            }
          >
            <span className="font-bold"> Ret</span> -{" "}
            <span className="underline-offset-4 underline"> Goals</span>
          </NavLink>
          <NavLink
            to="herosadmin"
            className={({ isActive }) =>
              isActive ? "text-primary" : "text-secondary"
            }
          >
            <span className="font-bold"> Ret</span> -{" "}
            <span className="underline-offset-4 underline"> Heros</span>
          </NavLink>
          <NavLink
            to="contactadmin"
            className={({ isActive }) =>
              isActive ? "text-primary" : "text-secondary"
            }
          >
            <span className="font-bold"> Get</span> -{" "}
            <span className="underline-offset-4 underline"> Contact</span>
          </NavLink>
        </menu>
      </div>

      {/* Mobile Menu List */}
      {showBurgerMenu && (
        <div className="lg:hidden top-30 bg-secondary absolute right-0 block w-full text-white rounded shadow-lg">
          <ul className="space-y-2">
            <li className="bg-onyx hover:bg-safety-orange-blaze-orange hover:text-onyx p-5 text-white transition-colors">
              <NavLink to="/" onClick={() => setShowBurgerMenu(false)}>
                Tilbage til Forside
              </NavLink>
            </li>
            <li className="bg-onyx hover:bg-safety-orange-blaze-orange hover:text-onyx p-5 text-white transition-colors">
              <NavLink to="/admin" onClick={() => setShowBurgerMenu(false)}>
                <span className="font-bold"> Admin</span> Home
              </NavLink>
            </li>
            <li className="bg-onyx hover:bg-safety-orange-blaze-orange hover:text-onyx p-5 text-white transition-colors">
              <NavLink
                to="eventsadmin"
                onClick={() => setShowBurgerMenu(false)}
              >
                <span className="font-bold"> Opret/Ret/Slet</span> -{" "}
                <span className="underline-offset-4 underline"> Events</span>
              </NavLink>
            </li>

            <li className="bg-onyx hover:bg-safety-orange-blaze-orange hover:text-onyx p-5 text-white transition-colors">
              <NavLink to="goalsadmin" onClick={() => setShowBurgerMenu(false)}>
                <span className="font-bold"> Ret</span> -{" "}
                <span className="underline-offset-4 underline"> Goals</span>
              </NavLink>
            </li>
            <li className="bg-onyx hover:bg-safety-orange-blaze-orange hover:text-onyx p-5 text-white transition-colors">
              <NavLink to="herosadmin" onClick={() => setShowBurgerMenu(false)}>
                <span className="font-bold"> Ret</span> -{" "}
                <span className="underline-offset-4 underline"> Heros</span>
              </NavLink>
            </li>
            <li className="bg-onyx hover:bg-safety-orange-blaze-orange hover:text-onyx p-5 text-white transition-colors">
              <NavLink
                to="contactadmin"
                onClick={() => setShowBurgerMenu(false)}
              >
                <span className="font-bold"> Get</span> -{" "}
                <span className="underline-offset-4 underline"> Contact</span>
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavAdmin;
