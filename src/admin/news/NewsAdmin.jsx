import { useEffect } from "react";
import Error from "../../components/Error";
import Loader from "../../components/Loader";
import { Link } from "react-router-dom";

//icons
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

// import axios hook
import useRequestData from "../../hooks/useRequestData";

// 1- Hent alle nyheder og vis dem

const NewsAdmin = () => {
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
    makeRequest("news");
  }, [dataDelete]);

  const handleDelete = (newsID, newsTitle) => {
    console.log("Nyhed der skal slettes:" + newsID);
    if (
      window.confirm(
        "Er du sikker på at du vil slette denne nyhed:" + newsTitle
      )
    ) {
      makeRequestDelete("news/admin/" + newsID, null, null, "DELETE");
    }
  };

  return (
    <div>
      <div className="bg-cultured p-10">
        <h1 className="text-3xl font-semibold">Administrerer nyheder</h1>
      </div>
      {(error || errorDelete) && <Error errorMessage="Admin Nyheder" />}
      {(loading || loadingDelete) && <Loader />}

      <div className="flex justify-center items-center m-5 table-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th></th>
              <th></th>
              <th>
                <Link
                  to="/admin/newsadmin/create"
                  className="text-safety-orange-blaze-orange cursor-pointer rounded p-3 flex items-center w-1/2"
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
              data.map((news) => (
                <tr key={news._id} className="hover:bg-cultured border-b">
                  <td className="p-2">{news.title}</td>

                  <td className="p-2">
                    <Link
                      to={"/admin/newsadmin/edit/" + news._id}
                      className="cursor-pointer rounded p-3 flex items-center"
                    >
                      <FaEdit
                        className="hover:text-safety-orange-blaze-orange cursor-pointer"
                        style={{ fontSize: "2em" }}
                      />
                    </Link>
                  </td>
                  <td className="p-2">
                    <FaTrash
                      onClick={() => handleDelete(news._id, news.title)}
                      className="hover:text-safety-orange-blaze-orange cursor-pointer"
                      style={{ fontSize: "2em" }}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NewsAdmin;
