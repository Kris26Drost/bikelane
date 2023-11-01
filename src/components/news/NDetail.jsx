import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useRequestData from "../../hooks/useRequestData";
import Error from "../Error";
import Loading from "../Loader"
import Parse from "html-react-parser";

const NDetail = () => {
  const { newsID } = useParams();

  const { data, loading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest("events/" + newsID);
  }, []);

  return (
    <section>
      <h1>Udvalgt nyhed</h1>
      {loading && <Loading/>}
      {error && <Error />}
      {data && (
        <div>
          <h2>{data.title}</h2>
          <time>
            {" "}
            {new Date(news.received).toLocaleDateString("da-DK", {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}{" "}
          </time>
          <div>{Parse(data.content)}</div>
          <img
            src={import.meta.env.VITE_IMGPATH + "news/" + data.image}
            alt={"Foto til nyheden om" + data.title}
            className="w-full h-auto rounded-t-lg"
          />

          {/* <h3>Kommentar:</h3>
          {data.comments
          ?.filter((comment) => {
              return comment.publish === true;
            }).
            map(comment => 
                <article key={comment._id}>
                  <p>{comment.comment}</p>
                  <p>
                    {comment.name}{" "}
                    {new Date(comment.received).toLocaleString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </article>
              )
            } */}
        </div>
      )}
    </section>
  );
};

export default NDetail;
