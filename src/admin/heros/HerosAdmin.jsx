import React, {useEffect} from "react";
import useRequestData from "../../hooks/useRequestData";
import { Link } from "react-router-dom";
import Error from "../../components/Error";
import Loader from "../../components/Loader";
import Parse from "html-react-parser";

//icons
import { FaEdit } from "react-icons/fa";

const HerosAdmin = () => {
  const { data, loading, error, makeRequest } = useRequestData();

  const {
    data: dataEdit,
    loading: loadingEdit,
    error: errorEdit,
    makeRequest: makeRequestEdit,
  } = useRequestData();

  useEffect(() => {
    makeRequest("heros");
  }, [dataEdit]);

 

  return (
    <div>
      <div className="bg-primary p-10 text-white">
        <h1 className="text-3xl font-semibold">Administrerer Heros</h1>
      </div>
      {(error || errorEdit) && <Error errorMessage="Admin Hero" />}
      {(loading || loadingEdit) && <Loader />}

      <div className="flex items-center justify-center m-5 table-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 text-xs text-gray-700 uppercase">
            <tr>
              <th className="p-2">Subject</th>
              <th className="p-2">Suptitle</th>
              <th className="p-2">Title</th>
              <th className="p-2">Content</th>
              <th className="p-2">Buttontext</th>
              <th className="p-2">Buttonlink</th>
              <th className="p-2">Image</th>
              <th className="p-2">Videolink</th>
              <th className="p-2">Ret</th>
            </tr>
          </thead>

          <tbody>
            {data &&
              data.map((heros) => (
                <tr key={heros._id} className="hover:bg-cultured border-b">
                  <td className="p-2"> {heros.subject}</td>
                  <td className="p-2">{heros.suptitle}</td>
                  <td className="p-2">{heros.title}</td>
                  <td className="p-2">{heros.content}</td>
                  <td className="p-2">{heros.buttontext}</td>
                  <td className="p-2">{heros.buttonlink}</td>
                  <td className="p-2">
                    <img
                      src={"http://localhost:5888/images/hero/" + heros.image}
                      alt=""
                    />
                  </td>
                  <td className="p-2">{heros.videolink}</td>
                  <td className="p-2">
                    <Link
                      to={"/admin/herosadmin/edit/" + heros._id}
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

export default HerosAdmin;
