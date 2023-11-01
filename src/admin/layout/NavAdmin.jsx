import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavAdmin = () => {
  // State to track whether the mobile menu is open or closed
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white w-full  z-30 shadow-lg p-5 rounded-md">
      <div className="mx-auto flex justify-between items-center">
        {/* Navigation Links */}
        <menu className="space-x-5 flex justify-center items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-safety-orange-blaze-orange" : "text-black"
            }
          >
            &lt; Tilbage til forsiden
          </NavLink>

          <NavLink
            to="/admin"
            className={({ isActive }) =>
              isActive ? "text-safety-orange-blaze-orange" : "text-black"
            }
          >
            Admin Home
          </NavLink>

          <NavLink
            to="eventsadmin"
            className={({ isActive }) =>
              isActive ? "text-safety-orange-blaze-orange" : "text-black"
            }
          >
            Opret/Ret/Slet -  Events
          </NavLink>
          <NavLink
            to="goalsadmin"
            className={({ isActive }) =>
              isActive ? "text-safety-orange-blaze-orange" : "text-black"
            }
          >
            Ret - Goals 
          </NavLink>
        </menu>

        {/* Search Bar */}
      </div>
    </nav>
  );
};

export default NavAdmin;
