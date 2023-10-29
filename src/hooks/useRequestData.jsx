import { useState } from "react";
import axios from "axios";

const apiURL = axios.create({ baseURL: "http://localhost:5333/" });

const useRequestData = () => {
  const [data, setData] = useState(false);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const makeRequest = async (
    endpoint,
    headers = null,
    params = null,
    method = "GET",
    bodydata = null
  ) => {
    setLoading(true);
    setData();

    try {
      let response;
      if (method === "GET") {
        response = await apiURL.get(endpoint, { headers: headers, params: params });
      } else if (method === "POST") {
        response = await apiURL.post(endpoint, bodydata, { headers: headers, params: params });
      }  else if (method === "DELETE") {
        response = await apiURL.delete(endpoint, { headers: headers, params: params });
      } else if (method === "PUT") {
        response = await apiURL.put(endpoint, bodydata, { headers: headers, params: params });
      } else if (method === "PATCH") {
        response = await apiURL.patch(endpoint, bodydata, { headers: headers, params: params });
      }
      else {
        throw new Error("Unsupported method");
      }

      setData(response.data);
      setError();
      
    } catch (error) {

      console.log("FEJL", error);
      setError("Der er opstået en fejl" + error.message);
      setData();

    } finally {
        setLoading(false);
        }
  };

  return { data, loading, error, makeRequest }
  
};

export default useRequestData;
