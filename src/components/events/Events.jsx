import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useRequestData from "../../hooks/useRequestData";
import Error from "../Error";
import Loader from "../Loader";
import Title from "../Title";

// components
import BlivenOs from "./BlivenOs";
import Sponsor from "./Sponsor";

// icons
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Events = () => {
  const { data, loading, error, makeRequest } = useRequestData();
  const [category, setCategory] = useState("");
  const currentDate = new Date();
  const [itemsPerPage, setItemsPerPage] = useState(9); // amount of news to show per page
  const [currentPage, setCurrentPage] = useState(0); // current page number

  const {
    data: dataEvents,
    loading: loadingEvents,
    error: errorEvents,
    makeRequest: makeRequestEvents,
  } = useRequestData();

  const {
    data: dataEventCategory,
    loading: loadingEventCategory,
    error: errorEventCategory,
    makeRequest: makeRequestEventCategory,
  } = useRequestData();

  useEffect(() => {
    makeRequest("heros");
  }, []);

  useEffect(() => {
    makeRequestEventCategory("eventcategories");
  }, []);

  useEffect(() => {
    makeRequestEvents("events");
  }, []);

  return (
    <section>
      {error && <Error />}
      {loading && <Loader />}
      <div className=" pt-40">
        {data && (
          <div
            key={data._id}
            className="md:container md:p-0 md:text-none p-5 text-center"
          >
            <Title headline="Events" />
            <h1 className="md:text-3xl text-2xl font-bold">{data[6].title}</h1>
            <div className="md:flex md:py-5 items-center justify-center py-3">
              <div>
                <ul className="justify-evenly md:text-base flex text-xs">
                  {dataEventCategory &&
                    dataEventCategory
                      .slice(
                        currentPage * itemsPerPage,
                        currentPage * itemsPerPage + itemsPerPage
                      )
                      .reverse()
                      .map((ec) => (
                        <li
                          onClick={() => setCategory(ec.category)}
                          className="hover:text-primary hover:border-b-2 border-dim-gray mx-2 cursor-pointer"
                          key={ec._id}
                        >
                          {ec.category}
                        </li>
                      ))}
                </ul>
              </div>
            </div>
            <div className="md:m-4 flex flex-wrap">
              {dataEvents &&
                dataEvents

                  .filter((e) => new Date(e.eventdate) > currentDate)
                  .filter(
                    (e) => category === "" || e.category.category === category
                  )
                  .sort(
                    (a, b) =>
                      new Date(a.evendate).getTime() -
                      new Date(b.eventdate).getTime()
                  )
                  .reverse()
                  .map((c) => {
                    return (
                      <article className="md:w-1/3 md:p-5 md:pl-0" key={c._id}>
                        <Link to={"/events/" + c._id}>
                          <div className="w-full h-[40vh] md:h-[40vh]">
                            <img
                              src={
                                "http://localhost:5888/images/event/" + c.image
                              }
                              alt={c.category.category}
                              className="h-full rounded-lg"
                            />
                          </div>
                        </Link>
                        <div className="md:flex-none md:text-base flex flex-wrap text-sm">
                          <time className="text-primary lowercase">
                            {" "}
                            {new Date(c.eventdate).toLocaleDateString("dk-DA", {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </time>

                          <p className="text-primary ml-1">
                            {" "}
                            | Målgruppe: {c.category.category}
                          </p>
                        </div>
                        <div className="md:pb-0 flex pb-10">
                          <h3 className="md:text-xl text-lg font-bold">
                            {c.title}
                          </h3>
                        </div>
                      </article>
                    );
                  })}
            </div>
            {/* Pagination Prev and Next with number of pages  */}
            {data && (
              <div className="white-space container">
                <button
                  className=" px-4 py-2 text-black bg-white border-2 border-gray-200 rounded-md"
                  disabled={currentPage <= 0}
                  onClick={() => {
                    setCurrentPage(currentPage - 1);
                  }}
                >
                  <FaArrowLeft/>
                </button>

                {[...Array(Math.ceil(data.length / itemsPerPage))].map(
                  (x, index) => (
                    <button
                      className={`bg-white border-2 border-safety-orange-blaze-orange text-secondary rounded-md m-2 px-4 py-2 
      ${index === currentPage ? "bg-blue-200" : null}`}
                      onClick={() => setCurrentPage(index)}
                      key={index}
                    >
                      {index + 1}
                    </button>
                  )
                )}

                <button
                  className="px-4 py-2 m-2 text-black bg-white border-2 border-gray-200 rounded-md"
                  disabled={
                    currentPage >= Math.ceil(data.length / itemsPerPage) - 1
                  }
                  onClick={() => {
                    setCurrentPage(currentPage + 1);
                  }}
                >
                  <FaArrowRight/>
                </button>
              </div>
            )}
          </div>
        )}
        <div className="md:container">
          <Sponsor />
        </div>
        <BlivenOs />
      </div>
    </section>
  );
};

export default Events;
