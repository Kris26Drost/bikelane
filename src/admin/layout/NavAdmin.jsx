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
    <nav className="bg-white fixed z-30 top-[8%] left-1/2 shadow-lg p-5 rounded-md transform -translate-x-1/2">
      <div className="mx-auto flex justify-between items-center">
        {/* Navigation Links */}
        <menu className="space-x-5">
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
            to="newsadmin"
            className={({ isActive }) =>
              isActive ? "text-safety-orange-blaze-orange" : "text-black"
            }
          >
            Opret/Ret/Slet - News
          </NavLink>
          <NavLink
            to="aboutadmin"
            className={({ isActive }) =>
              isActive ? "text-safety-orange-blaze-orange" : "text-black"
            }
          >
            OM OS - PUT
          </NavLink>
        </menu>

        {/* Search Bar */}
      </div>
    </nav>
  );
};

export default NavAdmin;
