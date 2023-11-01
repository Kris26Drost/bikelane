import { useEffect, useState } from "react";
import { BsArrowUpShort } from "react-icons/bs";
import { useLocation } from "react-router-dom";

import { classNames } from "../utils/classNames";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  if (location.pathname === "/") {
    return (
      <div className="fixed bottom-3 right-3 z-30">
        <button
          type="button"
          onClick={scrollToTop}
          className={classNames(
            isVisible ? "opacity-100" : "opacity-0",
            "bg-white inline-flex items-center rounded-md p-3 shadow-md transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-secondary text-secondary hover:text-white"
          )}
        >
          <BsArrowUpShort className="h-6 w-6 " aria-hidden="true" />
        </button>
      </div>
    );
  } else {
    return null;
  }
};

export default ScrollToTop;
