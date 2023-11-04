import React, { useEffect } from "react";
import useRequestData from "../../hooks/useRequestData";
import Error from "../../components/Error";
import Loader from "../../components/Loader";
import { Link } from "react-router-dom";

//icons
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

const EventsAdmin = () => {
  // GET
  const { data, loading, error, makeRequest } = useRequestData();
  // DELETE
  const {
    data: dataDelete,
    loading: loadingDelete,
    error: errorDelete,
    makeRequest: makeRequestDelete,
  } = useRequestData();

  useEffect(() => {
    makeRequest("events");
  }, [dataDelete]);

  const handleDelete = (eventID, eventTitle) => {
    console.log("Nyhed der skal slettes:" + eventID);
    if (
      window.confirm(
        "Er du sikker på at du vil slette denne nyhed:" + eventTitle
      )
    ) {
      makeRequestDelete("events/admin/" + eventID, null, null, "DELETE");
    }
  };

  return (
    <section className="md:pt-10 pt-20">
      <div className="bg-primary md:p-10 p-5 text-white">
        <h1 className="text-3xl font-semibold">Administrerer Events</h1>
      </div>
      {(error || errorDelete) && <Error errorMessage="Admin Nyheder" />}
      {(loading || loadingDelete) && <Loader />}

      <div className="flex items-center justify-center m-5 table-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th></th>
              <th></th>
              <th>
                <Link
                  to={"/admin/eventsadmin/create"}
                  className="text-primary flex items-center w-1/2 p-3 rounded cursor-pointer"
                >
                  <FaPlus className="mr-2" /> Opret ny
                </Link>
              </th>
            </tr>

            <tr>
              <th className="p-2">Nyhedstitel</th>
              <th className="p-2">Ret</th>
              <th className="p-2">Slet</th>
            </tr>
          </thead>

          <tbody>
            {data &&
              data.map((event) => (
                <tr key={event._id} className="hover:bg-cultured border-b">
                  <td className="p-2"> {event.title}</td>

                  <td className="p-2">
                    <Link
                      to={"/admin/eventsadmin/edit/" + event._id}
                      className="flex items-center p-3 rounded cursor-pointer"
                    >
                      <FaEdit
                        className="hover:text-safety-orange-blaze-orange cursor-pointer"
                        style={{ fontSize: "2em" }}
                      />
                    </Link>
                  </td>
                  <td className="p-2">
                    <FaTrash
                      onClick={() => handleDelete(event._id, event.title)}
                      className="hover:text-safety-orange-blaze-orange cursor-pointer"
                      style={{ fontSize: "2em" }}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default EventsAdmin;
