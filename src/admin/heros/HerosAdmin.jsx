import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useRequestData from "../../hooks/useRequestData";
import Error from "../../components/Error";
import Loader from "../../components/Loader";

//icons
import { FaEdit } from "react-icons/fa";

const HerosAdmin = () => {
  const { data, loading, error, makeRequest } = useRequestData();

  const [isMobile, setIsMobile] = useState(false);
  const [showMobileTable, setShowMobileTable] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
    <div className="md:pt-10 pt-20">
      <div className="bg-primary md:p-10 p-5 text-white">
        <h1 className="text-3xl font-semibold">Administrerer Heros</h1>
      </div>
      {(error || errorEdit) && <Error errorMessage="Admin Hero" />}
      {(loading || loadingEdit) && <Loader />}

      <div className="lg:flex items-center justify-center m-5 table-auto">
        <table className=" w-full text-sm text-left">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
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
                    <figure>
                      <img
                        src={
                          "http://localhost:5888/images/hero/" + heros?.image
                        }
                        alt={heros.title}
                      />
                    </figure>
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

        {/* TODO Table for mobile admin - ikke færdig */}
        {showMobileTable && (
          <div className="lg:hidden top-30 bg-secondary absolute right-0 block w-full text-white rounded shadow-lg">
            <div className="md:flex md:table-auto items-center justify-center m-5">
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
                      <tr
                        key={heros._id}
                        className="hover:bg-cultured border-b"
                      >
                        <td className="p-2"> {heros.subject}</td>
                        <td className="p-2">{heros.suptitle}</td>
                        <td className="p-2">{heros.title}</td>
                        <td className="p-2">{heros.content}</td>
                        <td className="p-2">{heros.buttontext}</td>
                        <td className="p-2">{heros.buttonlink}</td>
                        <td className="p-2">
                          <figure>
                            <img
                              src={
                                "http://localhost:5888/images/hero/" +
                                heros?.image
                              }
                              alt={heros.title}
                            />
                          </figure>
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
        )}
      </div>
    </div>
  );
};

export default HerosAdmin;
