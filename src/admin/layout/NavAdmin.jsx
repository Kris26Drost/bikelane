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
    <nav className="z-30 w-full p-5 bg-white rounded-md shadow-lg">
      <div className="flex items-center justify-between mx-auto">
        {/* Navigation Links */}
        <menu className="flex items-center justify-center space-x-5">
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
            <span className="font-bold"> Opret/Ret/Slet</span> - <span className="underline underline-offset-4"> Events</span>
          </NavLink>
          <NavLink
            to="goalsadmin"
            className={({ isActive }) =>
              isActive ? "text-primary" : "text-secondary"
            }
          >
            <span className="font-bold"> Ret</span> - <span className="underline underline-offset-4"> Goals</span>
          </NavLink>
          <NavLink
            to="herosadmin"
            className={({ isActive }) =>
              isActive ? "text-primary" : "text-secondary"
            }
          >
            <span className="font-bold"> Ret</span> - <span className="underline underline-offset-4"> Heros</span>
          </NavLink>
        </menu>

        {/* Search Bar */}
      </div>
    </nav>
  );
};

export default NavAdmin;
