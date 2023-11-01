import React, { useEffect, useState } from "react";
import useRequestData from "../../hooks/useRequestData";
import Error from "../Error";
import Loader from "../Loader";
import NewsCard from "./NewsCard";

const News = () => {
  const { data, loading, error, makeRequest } = useRequestData();

  const [itemsPerPage, setItemsPerPage] = useState(3); // amount of news to show per page
  const [currentPage, setCurrentPage] = useState(0); // current page number

  useEffect(() => {
    makeRequest("events");
  }, []);

  return (
    <section>
      <h1 className="text-3xl ">News</h1>

      {error && <Error />}
      {loading && <Loader />}

      <div className="flex flex-wrap mx-4">
        {data &&
          data
            .slice(
              currentPage * itemsPerPage,
              currentPage * itemsPerPage + itemsPerPage
            )
            .map((n) => <NewsCard news={n} key={n._id} />)}
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

export default News;
