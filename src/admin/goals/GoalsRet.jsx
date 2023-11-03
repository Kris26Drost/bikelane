import React, { useEffect} from "react";
import useRequestData from "../../hooks/useRequestData";
import { useParams, useNavigate } from "react-router-dom";
import Error from "../../components/Error";
import Loader from "../../components/Loader";

import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faHandshake,
  faBiking,
  faCrown,
  faMap,
} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faHandshake, faBiking, faCrown, faMap);

const GoalsRet = () => {
  const { goalsID } = useParams();
  const Navigate = useNavigate();

  // GET 
  const { data, loading, error, makeRequest } = useRequestData();

  // PUT 
  const {
    data: dataEdit,
    loading: loadingEdit,
    error: errorEdit,
    makeRequest: makeRequestEdit,
  } = useRequestData();

  const handleEdit = (e) => {
    e.preventDefault();

    const fd = new FormData(e.target);
    // Make a PUT request to your server with the form data
    makeRequestEdit("goals/admin/" + goalsID, null, null, "PUT", fd);
  };

  useEffect(() => {
    // GET selected news
    // if theres no ! in front of dataEdit, it will redirect to the news admin page when the news has been updated
    if (!dataEdit) {
      //    makeRequest("news/" + newsID);
      makeRequest(`goals/${goalsID}`);
    } else if (dataEdit) {
      Navigate("/admin/goalsadmin");
    }
  }, [dataEdit, goalsID]);

  return (
    <div>
      {error && errorEdit && <Error errorMessage="Admin Goals" />}
      {loading || (loadingEdit && <Loader />)}
      <h1 className="text-3xl font-semibold"> Ret - {goalsID} </h1>
      {data && (
        <form onSubmit={handleEdit}>
          <div className="mb-4">
            <label>
              Goal
              <input
                type="text"
                defaultValue={data.goal}
                name="goal"
                placeholder={data.goal}
                className="w-full p-2 mt-1 border rounded"
                required
              />
            </label>
          </div>

          <div className="mb-4">
            <label>
              Goal Count
              <input
                type="number"
                defaultValue={data.goalcount}
                name="goalcount"
                placeholder={data.goalcount}
                className="w-full p-2 mt-1 border rounded"
                required
              />
            </label>
          </div>

          <div>
            <label>Nuværende icon:</label>
            <input
              type="text"
              name="icon"
              placeholder="Skrive icon navn her (fx. fa-crown)"
              className="w-full p-2 mt-1 border rounded"
              required
            />
            
          </div>

          <div className="mb-4">
            <label>
              Order
              <input
                type="number"
                defaultValue={data.order}
                name="order"
                placeholder={data.order}
                className="w-full p-2 mt-1 border rounded"
                required
              />
            </label>
          </div>

          <button
            className="bg-primary p-2 text-white rounded cursor-pointer"
            type="submit"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default GoalsRet;
