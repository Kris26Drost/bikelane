import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useRequestData from "../../hooks/useRequestData";
import Error from "../Error";
import Loading from "../Loader";
import Parse from "html-react-parser";

const NDetail = () => {
  const { eventID } = useParams();

  const { data, loading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest("events/" + eventID);
  }, []);

  return (
    <section>
      <h1>Udvalgt nyhed</h1>
      
      {loading && <Loading />}
      {error && <Error />}
      {data && (
        <div>
          <h2>{data.title}</h2>
          <time>
            {" "}
            {new Date(data.eventdate).toLocaleDateString("da-DK", {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}{" "}
          </time>
          <div>{Parse(data.content)}</div>
          <div className="container">
        <div className="flex flex-wrap">
          <div className="md:w-1/2 w-full p-5">
            <div className="bg-white rounded-lg shadow-lg">
              <img
                src={"http://localhost:5888/images/event/" + data.image}
                alt={data.title}
                className="w-full h-auto rounded-t-lg"
              />
              <div className="md:p-5 p-3">
                <h2 className="text-2xl font-semibold">{data.title}</h2>
                <p className="md:text-sm mt-4 text-xs text-gray-400">
                  {data.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
      )}
    </section>
  );
};

export default NDetail;
