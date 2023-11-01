import React, { useState, useEffect } from "react";
import useRequestData from "../../hooks/useRequestData";
import Error from "../Error";
import Loader from "../Loader";
import { useSpring, animated } from "@react-spring/web";
import ScrollTrigger from "react-scroll-trigger";

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
      <animated.span className="text-secondary text-3xl font-bold">
        {number.to((n) => n.toFixed(0))}
      </animated.span>
    );
  };

  return (
    <ScrollTrigger onEnter={() => setShow(true)} onExit={() => setShow(false)}>
      <section>
        {error && <Error />}
        {loading && <Loader />}
        <div className="flex justify-evenly bg-hero p-10">
          {data &&
            data.map((g) => (
              <div key={g._id}>
                {show && <Number n={g.goalcount} />}
                <div className="grid grid-cols-4">
                  <p>{g.goal}</p>
                </div>
              </div>
            ))}
        </div>
      </section>
    </ScrollTrigger>
  );
};

export default Maltal;
