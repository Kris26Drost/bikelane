import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Parse from "html-react-parser";
import useRequestData from "../../hooks/useRequestData";
import Loader from "../Loader";
import Error from "../Error";

const EventDetails = () => {
  const { eventID } = useParams();

  const { data, loading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest("events/" + eventID);
  }, []);

  return (
    <section>
      {loading && <Loader />}
      {error && <Error />}
      <div className="md:container md:pt-60 pt-40">
      {data && (
          
            <article className="md:flex p-5">
              <div className="md:p-5 p-3">
                <div className="md:flex justify-between">
                  <h2 className="md:text-3xl m-2 text-xl font-semibold text-center">
                    {data.title}
                  </h2>

                  <time className="md:text-base flex justify-end text-xs">
                    {new Date(data.eventdate).toLocaleDateString("da-DK", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </time>
                </div>

                <div className="md:flex justify-between">
                
                  <img
                    src={"http://localhost:5888/images/event/" + data.image}
                    alt={data.title}
                    className="md:w-1/2 md:mr-5 md:mb-0 h-full mb-5 rounded-lg shadow-lg"
                  />
                  <div className=" whitespace-break-spaces mt-4  md:text-sm text-dim-gray text-xs">
                   {Parse(data.content)}
                  </div>
                </div>
              </div>
            </article>
          
      )}
      </div>
    </section>
  );
};

export default EventDetails;
