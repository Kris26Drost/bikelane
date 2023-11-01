import React, { useEffect } from "react";
import useRequestData from "../../hooks/useRequestData";
import { Link } from "react-router-dom";
import Error from "../../components/Error";
import Loader from "../../components/Loader";

//icons
import { FaEdit } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutAdmin = () => {
  // GET (to show the current ABOUT)
  const { data, loading, error, makeRequest } = useRequestData();

  // PUT (to update the ABOUT)
  const {
    data: dataEdit,
    loading: loadingEdit,
    error: errorEdit,
    makeRequest: makeRequestEdit,
  } = useRequestData();

  useEffect(() => {
    makeRequest("goals");
  }, [dataEdit]);

  useEffect((goalsID) => {
    makeRequestEdit("goals/admin/" + goalsID, null, null, "PUT");
  }, [dataEdit]);

  return (
    <div>
      <div className="bg-cultured p-10">
        <h1 className="text-3xl font-semibold">Administrerer Goals</h1>
      </div>
      {(error || errorEdit) && <Error errorMessage="Admin Nyheder" />}
      {(loading || loadingEdit) && <Loader />}

      <div className="flex items-center justify-center m-5 table-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 text-xs text-gray-700 uppercase">
            <tr>
              <th className="p-2">Goal</th>
              <th className="p-2">Goalnumber</th>
              <th className="p-2">Icon</th>
              <th className="p-2">Ret</th>
            </tr>
          </thead>

          <tbody>
            {data &&
              data.map((goal) => (
                <tr key={goal._id} className="hover:bg-cultured border-b">
                  <td className="p-2"> {goal.goal}</td>
                  <td className="p-2">{goal.goalcount}</td>
                  <td className="p-2">
                    <FontAwesomeIcon icon={goal.icon}/>
                    </td>
                  <td className="p-2">
                    <Link
                      to={"/admin/goalsadmin/edit/" + goal._id}
                      className="flex items-center p-3 rounded cursor-pointer"
                    >
                      <FaEdit
                        className="hover:text-safety-orange-blaze-orange cursor-pointer"
                        style={{ fontSize: "2em" }}
                      />
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AboutAdmin;
