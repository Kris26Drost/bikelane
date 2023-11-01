import React from "react";
import parse from "html-react-parser";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {

const stripHtmlTags = (htmlTekst) => {
  // Use a regular expression to remove HTML tags
    return htmlTekst.replace(/<[^>]*>?/gm, "");
}

  return (
    <article key={news._id} className="w-1/4 p-5 pl-0">
      
        <div className="bg-white shadow-md mb-4 hover:shadow-xl">
          <img
            src={import.meta.env.VITE_IMGPATH + "news/" + news.image}
            alt={"foto til nyheden om" + news.title}
            className="w-full h-auto rounded-t-lg"
          />
          <div className="p-5">
            <h2 className="text-xl">{news.title}</h2>
            <div className="relative">
              <div> {stripHtmlTags(news.content).slice(0, 100)}... </div>
              {/* counts only the comments that are available? */}
              <p>Antal kommentar {news.comments?.length}</p>
              {/* counts only the comments that are published? */}
              <p>Antal kommentar: {news.comments?.reduce((count, c) => {return c.publish ? count + 1 : count}, 0 )} </p>

              <Link to={"/news/" + news._id}>
                Læs mere om nyheden
              </Link>
            </div>
          </div>
        </div>
      
    </article>
  );
};

export default NewsCard;
