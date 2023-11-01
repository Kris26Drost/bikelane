import React, { useEffect, useState } from "react";
import useRequestData from "../../hooks/useRequestData";
import Error from "../Error";
import Loader from "../Loader";
import Title from "../Title";
import { useSpring, animated } from "@react-spring/web";
import ScrollTrigger from "react-scroll-trigger";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";

import "../../../node_modules/font-awesome/css/font-awesome.min.css";

const VoresMaal = () => {
  const [show, setShow] = useState(false);
  const { data, loading, error, makeRequest } = useRequestData();

  const {
    data: dataGoals,
    loading: loadingGoals,
    error: errorGoals,
    makeRequest: makeRequestGoals,
  } = useRequestData();

  useEffect(() => {
    makeRequest("heros");
  }, []);

  useEffect(() => {
    makeRequestGoals("goals");
  }, []);

  const Number = ({ n }) => {
    const { number } = useSpring({
      number: n,
      from: { number: 0 },
      config: { mass: 1, tension: 20, friction: 10 },
      delay: 500,
    });
    return (
      <animated.span className="text-3xl font-bold text-white">
        {number.to((n) => n.toFixed(0))}
      </animated.span>
    );
  };

  return (
    <ScrollTrigger onEnter={() => setShow(true)} onExit={() => setShow(false)}>
      <section>
        {error && <Error />}
        {loading && <Loader />}
        <div>
          {data && (
            <article >
              <div className="bg-hero pb-40 container">
                  <Title headline="Vores mål!" />
                <div className="flex container">
                  <h2 className="text-3xl font-bold">{data[2].title}</h2>
                  <p>{data[2].content}</p>
                </div>
              </div>

              <div className="flex relative justify-center w-full h-full pb-20 bg-white">
                <div
                  className="bg-blue flex justify-center items-center rounded-lg w-[60vw] h-[20vh] md:h-[30vh] relative -top-20 overflow-hidden"
                  style={{ backgroundImage: "url(./images/bg1.jpg)" }}
                >
                  {dataGoals &&
                    dataGoals.map((g) => {
                      return (
                        <div className="flex items-center justify-center m-10">
                          <div
                            className="grid-cols grid w-1/4 h-full"
                            key={g._id}
                          >
                            <span className="bg-primary flex justify-center w-10 h-10 p-2 text-white rounded-full">
                              <span
                                className={"fa " + g.icon}
                                style={{
                                  margin: "3px 10px 0 10px",
                                  color: "white",
                                }}
                              ></span>
                            </span>
                            {show && <Number n={g.goalcount} />}
                            <div className="grid grid-cols-4">
                              <p className="text-primary">{g.goal}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>

                <div className=" absolute w-[25vh] h-[50vh] -top-3 right-[10%] flex flex-col">
                  <img
                    src={"http://localhost:5888/images/hero/" + data[2].image}
                    alt={data[0].subject}
                    className="h-1/2 object-cover w-full rounded-lg shadow-xl"
                  />
                  <Link to={data[0].videolink}>
                    <div className="rounded-full bg-white absolute right-[5%] top-[40%] p-4 animate-ping "></div>
                    <div className="absolute right-[3%] top-[39%] p-5 rounded-full bg-white text-primary hover:bg-primary">
                      <FaPlay className="text-primary h-3 w-3 absolute top-[35%] right-[30%] hover:text-white" />
                    </div>
                  </Link>
                </div>
              </div>
            </article>
          )}
        </div>
      </section>
    </ScrollTrigger>
  );
};

export default VoresMaal;
