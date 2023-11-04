import React, { useEffect, useState } from "react";
import useRequestData from "../../hooks/useRequestData";
import Error from "../Error";
import Loader from "../Loader";
import Title from "../Title";

// scroll animation
import { useSpring, animated } from "@react-spring/web";
import ScrollTrigger from "react-scroll-trigger";

// icons
import { FaPlay } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";

const VoresMaal = () => {
  const { data, loading, error, makeRequest } = useRequestData();

  const [showModal, setShowModal] = useState(false);
  const [show, setShow] = useState(false);

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
            <article>
              <div className="bg-hero md:container mb:p-0 p-5 pt-10 pb-40">
                <div className="md:container ">
                  <Title headline="Vores mål!" />
                  <div className="md:flex">
                    <h2 className="text-3xl font-bold">{data[2].title}</h2>
                    <p>{data[2].content}</p>
                  </div>
                </div>
              </div>

              <div className="md:flex md:pb-20 b:p-0 md:bg-white bg-hero relative justify-center w-full h-full p-5 pb-10">
                <div
                  className="bg-blue md:flex md:justify-evenly items-center rounded-lg md:w-[60vw] md:h-[30vh] relative -top-20 overflow-hidden"
                  style={{ backgroundImage: "url(./images/bg1.jpg)" }}
                >
                  {dataGoals &&
                    dataGoals
                      .sort((a, b) => (a.order > b.order ? 1 : -1))
                      .map((g, i) => {
                        return (
                          <div
                            className="justify-evenly flex items-center m-10"
                            key={i}
                          >
                            <div
                              className="flex flex-col items-center justify-center w-1/4"
                              key={g._id}
                            >
                              <span className="bg-primary flex justify-center w-10 h-10 p-2 text-white rounded-full">
                                <FontAwesomeIcon
                                  icon={g.icon}
                                  style={{
                                    margin: "3px 10px 0 10px",
                                    color: "white",
                                  }}
                                />
                              </span>
                              {show && <Number n={g.goalcount} />}
                              <div className="flex flex-wrap">
                                <p className="text-primary">{g.goal}</p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                </div>

                <div className="md:absolute md:w-[25vh] md:h-[50vh] md:-top-[20%] md:right-[10%] md:flex md:flex-col">
                  <img
                    src={"http://localhost:5888/images/hero/" + data[2].image}
                    alt={data[0].subject}
                    className="h-1/2 object-cover w-full rounded-lg shadow-lg"
                  />

                  <div className="rounded-full bg-white absolute md:right-[5%] right-[8%] md:top-[39%] top-[90%] p-4 animate-ping "></div>
                  <div
                    onClick={() => setShowModal(true)}
                    className="absolute md:right-[3%] right-[7%] md:top-[38%] top-[90%] p-5 rounded-full bg-white text-primary hover:bg-primary cursor-pointer"
                  >
                    <FaPlay className="text-primary h-3 w-3 absolute top-[35%] right-[30%] hover:text-white" />
                  </div>
                </div>
              </div>
            </article>
          )}
          {showModal ? (
            <div className="top-1 left-1 bg-opacity-80 fixed z-30 w-full h-full bg-black">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/H55W1NhAbQo?si=81C5V5zz_cwsrbis"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute top-20 left-[10%] w-[80%] h-[80%]"
              ></iframe>
              <button
                onClick={() => setShowModal(false)}
                className="top-5 right-5 absolute p-2 text-4xl font-bold text-white"
              >
                <MdClose />
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
      </section>
    </ScrollTrigger>
  );
};

export default VoresMaal;
