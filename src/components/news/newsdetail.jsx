import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Latestnews from "./Latestnews";
import Comments from "./comments"; // Import the Comments component
import Title from "../Title";

const NewsDetail = () => {
  const { id } = useParams(); // Get the news ID from the URL
  const [newsDetail, setNewsDetail] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5333/news/${id}`)
      .then((res) => {
        setNewsDetail(res.data);
      })
      .catch((error) => {
        console.log("Error fetching news details", error);
      });
  }, [id]);

  if (!newsDetail) {
    // Handle loading state here
    return <div>Loading...</div>;
  }

  return (
    <div>
       <Title headline={newsDetail.title} />
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 p-5">
            <div className="bg-white rounded-lg shadow-lg">
              <img
                src={import.meta.env.VITE_IMGPATH + "news/" + newsDetail.image}
                alt={newsDetail.title}
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-3 md:p-5">
                <h2 className="text-2xl font-semibold">{newsDetail.title}</h2>
                <p className="text-gray-400 text-xs md:text-sm mt-4">
                  {newsDetail.content}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-5">
            <Latestnews />
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-xl font-semibold">
            Kommentar({newsDetail.comments?.length})
          </h3>
          <Comments newsId={id} />
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
