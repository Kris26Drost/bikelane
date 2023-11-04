import React from "react";
import { useParams } from "react-router-dom";
import Error from "../Error";

const NewsDetails = () => {
  const { eventID } = useParams();

  const staticData = [
    {
      _id: 1,
      eventdate: "2023-11-03",
      image: "./images/12.jpg",
      title: "Cykel Konkurrence!",
      author: "Peder Jensen",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod voluptatem...",
    },
    {
      _id: 2,
      eventdate: "2023-11-04",
      image: "./images/about.jpg",
      title: "Hvad er det bedste cykel mærke?",
      author: "Lone Andersen",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod voluptatem...",
    },
    {
      _id: 3,
      eventdate: "2023-11-02",
      image: "./images/12.jpg",
      title: "Hvem vil cykler?",
      author: "Gustav Olesen",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod voluptatem...",
    },
  ];

  const data = staticData.find((data) => data._id === Number(eventID));

  return (
    <section>
      {data ? (
        <div className="container pt-40">
          <div>
            <div className="flex p-5">
              <div className="w-full h-full">
                <img
                  src={data.image}
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
                  {data.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Error errorMessage={"News not found"} />
      )}
    </section>
  );
};

export default NewsDetails;
