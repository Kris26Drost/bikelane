import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useRequestData from "../../hooks/useRequestData";
import Error from "../../components/Error";
import Loader from "../../components/Loader";

//icons
import { FaEdit } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GoalsAdmin = () => {
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

  return (
    <section className="md:pt-10 pt-20">
      <div className="bg-primary md:p-10 p-5 text-white">
        <h1 className="text-3xl font-semibold">Administrerer Goals</h1>
      </div>
      {(error || errorEdit) && <Error errorMessage="Admin Goals" />}
      {(loading || loadingEdit) && <Loader />}

      <div className="flex items-center justify-center m-5 border table-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th className="p-2">Goal</th>
              <th className="p-2">Goalnumber</th>
              <th className="p-2">Icon</th>
              <th className="p-2">Order</th>
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
                    <FontAwesomeIcon icon={goal.icon} />
                  </td>
                  <td className="p-2">{goal.order}</td>
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
    </section>
  );
};

export default GoalsAdmin;
