import React, { useState, useEffect } from "react";
import useRequestData from "../../hooks/useRequestData";
import { FaBookmark } from "react-icons/fa";
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
  }, []);

  // Function to handle expanding/collapsing news
  const handleExpandNews = (events) => {
    if (expandedNews === events._id) {
      setExpandedNews(null); // Collapse the expanded news
    } else {
      setExpandedNews(events._id); // Expand the clicked news
    }
  };

  return (
    <section
      className="bg-gradient-to-l from-blue to-primary pt-20"
      style={{ backgroundImage: "url(./images/bg2.jpg)" }}
    >
      <Title headline="Vores Nyheder" />
      {error && <Error />}
      {loading && <Loader />}

      <div className="md:flex-row container flex flex-col">
        <div className="md:grid-cols-2 lg:grid-cols-4 grid w-full gap-4 p-5 pl-0">
          {data &&
            data
              .sort((a, b) => new Date(b.eventdate) - new Date(a.eventdate))
              .slice(
                currentPage * itemsPerPage,
                currentPage * itemsPerPage + itemsPerPage
              )
              .map((data) => (
                <article
                  key={data._id}
                  className="md:mb-0 hover:shadow-xl w-full h-full mb-4 bg-white shadow-md rounded-t-lg"
                >
                  <div className="relative">
                    <div className="-left-1 absolute top-0 mt-2 ml-2">
                      <div className="relative">
                        <FaBookmark
                          className="text-primary"
                          style={{ width: "55px", height: "55px" }}
                        />
                        <time className="top-5 left-4 md:text-md absolute text-sm font-semibold text-white">
                          {new Date(data.eventdate).toLocaleDateString(
                            "en-US",
                            {
                              month: "short",
                            }
                          )}
                        </time>
                        <time className="bottom-7 left-6 md:text-sm absolute text-xs font-semibold text-white">
                          {new Date(data.eventdate).toLocaleDateString(
                            "en-US",
                            {
                              day: "numeric",
                            }
                          )}
                        </time>
                      </div>
                    </div>
                    <img
                      src={"http://localhost:5888/images/event/" + data.image}
                      alt={data.title}
                      className="h-60 w-full rounded-t-lg"
                    />
                  </div>
                  <div className="p-3">
                    <h5 className="text-lg font-semibold">{data.title}</h5>
                    <hr className=" p-3" />
                    {expandedNews === data._id ? (
                      <div className="md:text-sm text-dim-gray text-xs">
                        {parse(data.content)}
                      </div>
                    ) : (
                      <div className="md:text-sm text-dim-gray text-xs">
                        {parse(data.content.slice(0, 100))}
                        <button
                          className="text-dim-greay cursor-pointer"
                          onClick={() => handleExpandNews(data)}
                        >
                          ...
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="flex justify-end">
                    <Link to={"events/" + data._id}>
                      <button className="bg-primary p-3 m-3 text-white rounded-md">
                        Læs mere
                      </button>
                    </Link>
                  </div>
                </article>
              ))}
        </div>
      </div>

      {/* Pagination Prev and Next with number of pages  */}
      {data && (
        <div className="white-space">
          <button
            className=" px-4 py-2 text-black bg-white border-2 border-gray-200 rounded-md"
            disabled={currentPage <= 0}
            onClick={() => {
              setCurrentPage(currentPage - 1);
            }}
          >
            Prev
          </button>

          {[...Array(Math.ceil(data.length / itemsPerPage))].map((x, index) => (
            <button
              className={`bg-white border-2 border-safety-orange-blaze-orange text-secondary rounded-md m-2 px-4 py-2 
      ${index === currentPage ? "bg-blue-200" : null}`}
              onClick={() => setCurrentPage(index)}
              key={index}
            >
              {index + 1}
            </button>
          ))}

          <button
            className="bg-white px-4 py-2 m-2 text-black border-2 border-gray-200 rounded-md"
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
