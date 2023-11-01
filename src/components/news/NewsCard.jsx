import React from "react";
import parse from "html-react-parser";
import { Link } from "react-router-dom";

const NewsCard = ({ events }) => {

const stripHtmlTags = (htmlTekst) => {
  // Use a regular expression to remove HTML tags
    return htmlTekst.replace(/<[^>]*>?/gm, "");
}

  return (
    <article key={events._id} className="w-1/4 p-5 pl-0 ">
      
        <div className="bg-white shadow-md mb-4 hover:shadow-xl">
          <img
            src={"http://localhost:5888/images/event/" + events.image}
            alt={"foto til nyheden om" + events.title}
            className="w-full h-auto rounded-t-lg"
          />
          <div className="p-5">
            <h2 className="text-xl">{events.title}</h2>
            <div className="relative rounded-t-lg">
              <div> {stripHtmlTags(events.content).slice(0, 100)}... </div>
              <div className="absolute bottom-0 right-0">
                <Link to={"events/" + events._id}>
                  <button className="bg-primary text-white p-2 rounded-md">
                    Læs mere
                  </button>
                </Link>
              
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
