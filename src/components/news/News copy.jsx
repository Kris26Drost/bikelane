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
    makeRequest("news");
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

      {/* Pagination Prev and Next (no number og page) */}

      {data && (
        <>
          <button
          disabled={currentPage <= 0 }
            onClick={() => {
              setCurrentPage(currentPage - 1);
            }}
          >
            Prev
          </button>

          <button
            disabled={currentPage >= Math.ceil(data.length / itemsPerPage) - 1}
            onClick={() => {
              setCurrentPage(currentPage + 1);
            }}
          >
            Next
          </button>
        </>
      )}
    </section>
  );
};

export default News;
