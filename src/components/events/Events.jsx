import React, { useEffect, useState } from "react";
import useRequestData from "../../hooks/useRequestData";
import Error from "../Error";
import Loader from "../Loader";
import Title from "../Title";
import { Link } from "react-router-dom";
import BlivenOs from "./BlivenOs";
import Sponsor from "./Sponsor";

const Events = () => {
  const { data, loading, error, makeRequest } = useRequestData();

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

  const [category, setCategory] = useState("");
  const currentDate = new Date();
  const [itemsPerPage, setItemsPerPage] = useState(9); // amount of news to show per page
  const [currentPage, setCurrentPage] = useState(0); // current page number

  return (
    <section>
      {error && <Error />}
      {loading && <Loader />}
      <div className="pt-40 ">
        {data && (
          <div key={data._id} className="md:container p-5 md:p-0 text-center md:text-none">
            <Title headline="Events" />
            <h1 className="md:text-3xl text-2xl font-bold">{data[6].title}</h1>
            <div className="md:flex items-center justify-center md:py-5 py-3">
              <div>
                <ul className="flex justify-evenly md:text-base text-xs">
                  {dataEventCategory &&
                    dataEventCategory
                      .slice()
                      .reverse()
                      .map((ec) => (
                        <li
                          onClick={() => setCategory(ec.category)}
                          className="hover:text-primary mx-2 hover:border-b-2 border-dim-gray cursor-pointer"
                          key={ec._id}
                        >
                          {ec.category}
                        </li>
                      ))}
                </ul>
              </div>
            </div>
            <div className="flex flex-wrap md:m-4">
              {dataEvents &&
                dataEvents

                  .filter((e) => new Date(e.eventdate) > currentDate)
                  .filter(
                    (e) => category === "" || e.category.category === category
                  )
                  .sort((a, b) => new Date(a.evendate).getTime() - new Date(b.eventdate).getTime())
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
                        <div className="flex md:flex-none flex-wrap md:text-base text-sm">
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
                        <div className="flex md:pb-0 pb-10">
                          <h3 className="md:text-xl text-lg font-bold">{c.title}</h3>
                        </div>
                      </article>
                    );
                  })}
            </div>
          </div>
        )}
        <div className="md:container">
        < Sponsor />
        </div>
        <BlivenOs />
      </div>
    </section>
  );
};

export default Events;
