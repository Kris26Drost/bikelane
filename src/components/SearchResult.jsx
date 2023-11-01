import React, { useEffect } from "react";
import useRequestData from "../hooks/useRequestData";
import { useParams, Link } from "react-router-dom";
import Loader from "./Loader";
import Error from "./Error";

const SearchResult = () => {
  let { searchkey } = useParams();

  const { data, loading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest("search/" + searchkey);
  }, [searchkey]);

  return (
    <div>
      {loading && <Loader />}
      {error && <Error />}
      <h2 className="text-2xl font-bold">Søgeresultat i Nyheder</h2>
      {data &&
      data.searchresult &&
      // data.searchresult.news?.map(s => <h2 key={s._id}>{s.title}</h2>)}
      data.searchresult.news.length > 0 ? (
        data.searchresult.news?.map(s => 
        <div className="my-4 p-4 border border-gray-200 rounded-md">
            <h4 className="text-lg font-semibold">{s.title}</h4>
            <div className="text-gray-600">{s.content}</div>
            <img src={import.meta.env.VITE_IMGPATH + "news/" + s.image} width="100" />
            <Link to={"/news/" + s._id} className="text-blue-500 hover:underline block mt-2">
              Læs mere
            </Link> 
            </div> )
      ) : (
        <h2>Ingen match i Nyheder på "{searchkey}" </h2>
      )}

      <h2 className="text-2xl font-bold">Søgeresultat i Services</h2>
      {data && data.searchresult.services.length > 0 ? (
        data.searchresult.services?.map(s => 
        <h4 key={s._id} className="text-lg font-semibold">{s.title}</h4>)
      ) : (
        <h2>Ingen match i Services på "{searchkey}" </h2>
      )}
      <h1>Søgeresultatet {searchkey}</h1>
    </div>
  );
};

export default SearchResult;
