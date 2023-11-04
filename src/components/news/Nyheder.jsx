import React, { useState } from "react";

// components
import NewsDetails from "./NewsDetails";

// icons
import { FaBookmark } from "react-icons/fa";

const Nyheder = () => {
  const [itemsPerPage, setItemsPerPage] = useState(4); // amount of news to show per page
  const [currentPage, setCurrentPage] = useState(0); // current page number
  const [expandedNews, setExpandedNews] = useState(null);
  const [selectedNews, setSelectedNews] = useState(null);

  const staticData = [
    {
      _id: 1,
      eventdate: "2023-11-03",
      image: "./images/12.jpg",
      title: "Cykel Konkurrence!",
      author: "Peder Jensen",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod voluptatem...",
    },
    {
      _id: 2,
      eventdate: "2023-11-04",
      image: "./images/about.jpg",
      title: "Hvad er det bedste cykel mærke?",
      author: "Lone Andersen",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod voluptatem...",
    },
    {
      _id: 3,
      eventdate: "2023-11-02",
      image: "./images/12.jpg",
      title: "Hvem vil cykler?",
      author: "Gustav Olesen",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod voluptatem...",
    },
  ];

  // Function to handle expanding/collapsing news
  const handleExpandNews = (id) => {
    if (expandedNews === id) {
      setExpandedNews(null); // Collapse the expanded news
    } else {
      setExpandedNews(id); // Expand the clicked news
    }
  };

  const handleSubmit = (newsId) => {
    setSelectedNews(newsId); // Set the selected news ID when the button is clicked
  };

  return (
    <section
      className="bg-gradient-to-l from-blue to-primary pt-60"
      style={{ backgroundImage: "url(./images/bg2.jpg)" }}
    >
      <div className="md:flex-row container flex flex-col">
        <div className="md:grid-cols-2 lg:grid-cols-4 grid w-full gap-4 p-5 pl-0">
          {staticData.map((data) => (
            <article
              key={data._id}
              className="md:mb-0 hover:shadow-xl w-full h-full mb-4 bg-white rounded-t-lg shadow-md"
            >
              <div className="relative">
                <div className="-left-1 absolute top-0 mt-2 ml-2">
                  <div className="relative">
                    <FaBookmark
                      className="text-primary"
                      style={{ width: "55px", height: "55px" }}
                    />
                    <time className="top-5 left-4 md:text-md absolute text-sm font-semibold text-white">
                      {new Date(data.eventdate).toLocaleDateString("en-US", {
                        month: "short",
                      })}
                    </time>
                    <time className="bottom-7 left-6 md:text-sm absolute text-xs font-semibold text-white">
                      {new Date(data.eventdate).toLocaleDateString("en-US", {
                        day: "numeric",
                      })}
                    </time>
                  </div>
                </div>
                <img
                  src={data.image}
                  alt="cycling"
                  className="h-60 w-full rounded-t-lg"
                />
              </div>
              <div className="p-3">
                <h5 className="text-lg font-semibold">{data.title}</h5>
                <hr className=" p-3" />
                <h4 className="text-primary tet-3xl font-semibold">
                  Forfatter: {data.author}
                </h4>
                {expandedNews === data._id ? (
                  <div className="md:text-sm text-dim-gray text-xs">
                    {data.description}
                  </div>
                ) : (
                  <div className="md:text-sm text-dim-gray text-xs">
                    {data.description
                      ? data.description.slice(0, 30)
                      : "No description available"}
                    {data.description && data.description.length > 30 && (
                      <button
                        className="text-dim-greay cursor-pointer"
                        onClick={() => handleExpandNews(data._id)}
                      >
                        ...
                      </button>
                    )}
                  </div>
                )}
              </div>
              <div className="flex justify-end" onClick={() => handleSubmit(data._id)}>
                <button className="bg-primary p-3 m-3 text-white rounded-md">
                  Læs mere
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Pagination Prev and Next with number of pages  */}
      {staticData && (
        <div className="white-space container">
          <button
            className=" px-4 py-2 text-black bg-white border-2 border-gray-200 rounded-md"
            disabled={currentPage <= 0}
            onClick={() => {
              setCurrentPage(currentPage - 1);
            }}
          >
            Prev
          </button>

          {[...Array(Math.ceil(staticData.length / itemsPerPage))].map(
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
              currentPage >= Math.ceil(staticData.length / itemsPerPage) - 1
            }
            onClick={() => {
              setCurrentPage(currentPage + 1);
            }}
          >
            Next
          </button>
        </div>
      )}
      {selectedNews && <NewsDetails eventID={selectedNews} />}
    </section>
  );
};

export default Nyheder;
