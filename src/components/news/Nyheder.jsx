import React, { useState, useEffect } from "react";
import useRequestData from "../../hooks/useRequestData";
import { FaBookmark } from "react-icons/fa";
import Latestnews from "./Latestnews";
import Title from "../Title";
import { Link } from "react-router-dom";

import Error from "../Error";
import Loader from "../Loader";

//transalte html
import parse from "html-react-parser";

const Nyheder = () => {
  const [expandedNews, setExpandedNews] = useState(false);

  const { data, loading, error, makeRequest } = useRequestData();
  const [itemsPerPage, setItemsPerPage] = useState(4); // amount of news to show per page
  const [currentPage, setCurrentPage] = useState(0); // current page number

  useEffect(() => {
    makeRequest("events");
  }, [])


   // Function to handle expanding/collapsing news
   const handleExpandNews = (news) => {
    if (expandedNews === news._id) {
      setExpandedNews(null); // Collapse the expanded news
    } else {
      setExpandedNews(news._id); // Expand the clicked news
    }
  };

  return (
    <section>
      <Title headline='News' />

      {error && <Error />}
      {loading && <Loader />}

      <div className="flex flex-col md:flex-row container">
        <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2 p-5 pl-0 w-3/4">
          {data &&
            data 
            .sort((a, b) => new Date(b.received) - new Date(a.received))
            .slice(
              currentPage * itemsPerPage,
              currentPage * itemsPerPage + itemsPerPage
            )
            .map((events) => 
              <Link to={`/events/${events._id}`} key={events._id}>
              <article key={events._id} className="bg-white shadow-md mb-4 md:mb-0 hover:shadow-xl cursor-pointer">
                <div className="relative">
                  <div className="absolute top-0 -left-2 mt-2 ml-2">
                    <div className="relative">
                      <FaBookmark
                        className="text-safety-orange-blaze-orange"
                        style={{ width: "80px", height: "80px" }}
                      />
                      <time className="absolute top-2 left-9 text-md md:text-lg text-white font-semibold">
                        {new Date(events.received).toLocaleDateString("en-US", {
                          day: "numeric",
                        })}
                      </time>
                      <time className="absolute bottom-6 left-7 text-xs md:text-sm text-white font-semibold">
                        {new Date(events.received).toLocaleDateString("en-US", {
                          month: "short",
                        })}
                      </time>
                    </div>
                  </div>
                  <img
                    src={import.meta.env.VITE_IMGPATH + "event/" + events.image}
                    alt={events.image}
                    className="w-full h-auto rounded-t-lg"
                  />
                </div>
                {/* <div className="p-5">
                  <h5 className="text-xl font-semibold">{events.title}</h5>
                  {expandedNews === news._id ? (
                    <div className="text-gray-400 text-xs md:text-sm">
                      {parse(news.content)}
                    </div>
                  ) : (
                    <p className="text-gray-400 text-xs md:text-sm">
                      {parse(news.content.slice(0, 100))} 
                      <button
                        className="text-gray-400 cursor-pointer"
                        onClick={() => handleExpandNews(news)}
                      >
                        ...
                      </button>
                    </p>
                  )}
                  <hr className="p-3 mt-3" />
                  <p className="text-sm text-gray-400">{news.comments?.length} Kommenter</p>
                </div> */}
              </article>
              </Link>
            )}
        </div>

        <div className="p-5 w-full md:w-1/2">
          <Latestnews />
        </div>
      </div>

       {/* Pagination Prev and Next with number of pages  */}
      {data && (
        <div className="white-space">
          <button
          className="bg-white text-black px-4 py-2 rounded-md border-2 border-gray-200 active:bg-safety-orange-blaze-orange m-2"
            disabled={currentPage <= 0}
            onClick={() => {
              setCurrentPage(currentPage - 1);
            }}
          >
            Prev
          </button>

          {[...Array(Math.ceil(data.length / itemsPerPage))].map((x, index) => (
            <button 
            className={`bg-safety-orange-blaze-orange border-2 border-safety-orange-blaze-orange text-white rounded-md m-2 px-4 py-2 
      ${index === currentPage ? "bg-blue-200" : null}`}
            onClick={() => setCurrentPage(index)} key={index}>
              {index + 1}
            </button>
          ))}

          <button
          className="bg-white text-black px-4 py-2 rounded-md border-2 border-gray-200 active:bg-safety-orange-blaze-orange m-2"
            disabled={currentPage >= Math.ceil(data.length / itemsPerPage) - 1}
            onClick={() => {
              setCurrentPage(currentPage + 1);
            }}
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
};

export default Nyheder;
