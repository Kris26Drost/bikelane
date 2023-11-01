import React, { useEffect } from "react";
import useRequestData from "../../hooks/useRequestData";
import { useParams } from "react-router-dom";
import Loader from "../Loader";
import Error from "../Error";
import Parse from "html-react-parser";

const NewsDetail = () => {
  const { eventID } = useParams();

  const { data, loading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest("events/" + eventID);
  }, []);

  return (
    <section>
      {loading && <Loader />}
      {error && <Error />}
      {data && (
        <div className="container pt-40">
          <div>
            <div className="flex p-5">
              <div className="w-full h-full">
                <img
                  src={"http://localhost:5888/images/event/" + data.image}
                  alt={data.title}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:p-5 p-3">
                <div className="flex justify-between">
                  <h2 className="m-2 text-3xl font-semibold text-center">
                    {data.title}
                  </h2>
                  
                    <time className="flex">
                      {new Date(data.eventdate).toLocaleDateString("da-DK", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </time>
                    
                  
                </div>
                <p className=" whitespace-break-spaces md:text-sm text-dim-gray mt-4 text-xs">
                  {Parse(data.content)}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default NewsDetail;
