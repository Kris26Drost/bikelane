import React, { useState, useEffect } from "react";
import axios from "axios";

const Latestnews = ({ pageNumber }) => {
  const [latestNews, setLatestNews] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5333/news/?page=" + pageNumber)
      .then((res) => {
        // Handle the fetched data
        const latestNewsData = res.data.slice(0, 4);
        setLatestNews(latestNewsData);
      })
      .catch((error) => {
        console.error("Error fetching latest news", error);
      });
  }, [pageNumber]);

  return (
    <div>
      <h2 className="text-xl font-semibold text-black p-5">Arkiv</h2>
      {latestNews &&
        latestNews.map((newsItem, index) => (
          <div key={newsItem._id}>
            <div className="bg-white mb-4 flex cursor-pointer">
              <div className="w-1/4">
                <img
                  src={import.meta.env.VITE_IMGPATH + "news/" + newsItem.image}
                  alt={newsItem.image}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="flex-1 px-3 py-2">
                <h5 className="text-md font-semibold leading-snug">
                  {newsItem.title}
                </h5>
                <p className=" text-gray-500 text-sm">
                  {new Date(newsItem.received).toLocaleDateString("en-US", {
                    year: "numeric",
                    day: "numeric",
                    month: "short",
                  })}
                </p>
              </div>
            </div>
            {(index === 0 || index === 1 || index === 2) && (
              <hr className="my-4 w-full border-gray-300" />
            )}
          </div>
        ))}
    </div>
  );
};

export default Latestnews;
