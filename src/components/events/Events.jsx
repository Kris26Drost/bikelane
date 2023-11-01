import React, { useEffect, useState } from "react";
import useRequestData from "../../hooks/useRequestData";
import Error from "../Error";
import Loader from "../Loader";
import Title from "../Title";

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

  const [itemsPerPage, setItemsPerPage] = useState(9); // amount of news to show per page
  const [currentPage, setCurrentPage] = useState(0); // current page number

  return (
    <section>
      {error && <Error />}
      {loading && <Loader />}
      <div className="container pt-40">
        {data && (
          <div key={data._id}>
            <Title headline="Events" />
            <h1 className="text-3xl font-bold">{data[6].title}</h1>
            <div className="flex items-center justify-center">
              {dataEventCategory &&
                dataEventCategory.map((e) => {
                  return (
                    <div className="flex" key={e._id}>
                      <ul>
                        <li className="hover:text-primary m-2 cursor-pointer">
                          {e.category}
                        </li>
                      </ul>
                    </div>
                  );
                })}
            </div>
            <div className="flex flex-wrap m-4">
              {dataEvents &&
                dataEvents
                  .sort((a, b) => new Date(b.received) - new Date(a.received))
                  .slice(
                    currentPage * itemsPerPage,
                    currentPage * itemsPerPage + itemsPerPage
                  )
                  .map((c, i) => {
                    return (
                      <article className="w-1/3 p-5 pl-0" key={i}>
                        <img
                          src={
                            "http://localhost:5888/images/" + "event/" + c.image
                          }
                          alt={c.category.category}
                          className="w-full h-auto rounded-lg"
                        />
                        <div className="flex">
                          <time className="text-primary lowercase">
                            {" "}
                            {new Date(c.eventdate).toLocaleDateString("en-US", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </time>

                          <p className="text-primary ml-1">
                            {" "}
                            | Målgruppe: {c.category.category}
                          </p>
                        </div>
                        <div className="flex">
                          <h3 className="text-xl font-bold">{c.title}</h3>
                        </div>

                        
                      </article>

                      
                    );
                  })}
            </div>

            {/* Pagination Prev and Next with number of pages  */}
            {dataEvents && (
              <div className="white-space">
                <button
                  className="active:bg-safety-orange-blaze-orange px-4 py-2 m-2 text-black bg-white border-2 border-gray-200 rounded-md"
                  disabled={currentPage <= 0}
                  onClick={() => {
                    setCurrentPage(currentPage - 1);
                  }}
                >
                  Prev
                </button>

                {[...Array(Math.ceil(data.length / itemsPerPage))].map(
                  (x, index) => (
                    <button
                      className={`bg-safety-orange-blaze-orange border-2 border-safety-orange-blaze-orange text-white rounded-md m-2 px-4 py-2 
      ${index === currentPage ? "bg-blue-200" : null}`}
                      onClick={() => setCurrentPage(index)}
                      key={index}
                    >
                      {index + 1}
                    </button>
                  )
                )}

                <button
                  className=" px-4 py-2 m-2 text-black bg-white border-2 border-gray-200 rounded-md"
                  disabled={
                    currentPage >= Math.ceil(data.length / itemsPerPage) - 1
                  }
                  onClick={() => {
                    setCurrentPage(currentPage + 1);
                  }}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Events;
