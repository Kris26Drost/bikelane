import React, { useState, useEffect } from "react";
import useRequestData from "../../hooks/useRequestData";
import Error from "../Error";
import Loader from "../Loader";

// scroll
import { useSpring, animated } from "@react-spring/web";
import ScrollTrigger from "react-scroll-trigger";

// icons
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faHandshake,
  faBiking,
  faCrown,
  faMap,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab, faHandshake, faBiking, faCrown, faMap);

const Maltal = () => {
  const [show, setShow] = useState(false);
  const { data, loading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest("goals");
  }, []);

  const Number = ({ n }) => {
    const { number } = useSpring({
      number: n,
      from: { number: 0 },
      config: { mass: 1, tension: 20, friction: 10 },
      delay: 500,
    });
    return (
      <animated.span className="text-secondary text-5xl font-bold">
        {number.to((n) => n.toFixed(0))}
      </animated.span>
    );
  };

  return (
    <ScrollTrigger onEnter={() => setShow(true)} onExit={() => setShow(false)}>
      <section>
        {error && <Error />}
        {loading && <Loader />}
        <div className="md:flex md:justify-evenly md:container bg-hero items-center p-10 text-center">
          {data &&
            data
              .sort((a, b) => (a.order > b.order ? 1 : -1))
              .map((g) => (
                <div key={g._id} className="md:pb-0 pb-10">
                  {show && <Number n={g.goalcount} />}
                  <FontAwesomeIcon
                    className="text-primary border-primary md:p-3 w-3 h-3 p-2 m-2 border-2 rounded-full"
                    icon={g.icon}
                  />

                  <p>{g.goal}</p>
                </div>
              ))}
        </div>
      </section>
    </ScrollTrigger>
  );
};

export default Maltal;
