import React, { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Error from "../../components/Error";
import Loader from "../../components/Loader";
import useRequestData from "../../hooks/useRequestData";

//quill
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const NewsEdit = () => {
  const { newsID } = useParams(); // gets the newsID from the URL
  const Navigate = useNavigate();

  // GET (to show the current news)
  const { data, loading, error, makeRequest } = useRequestData();

  // PUT (to update the news)
  const { data: dataEdit, loading: loadingEdit, error: errorEdit, makeRequest: makeRequestEdit } = useRequestData();

  // reference to quill
  const refQuill = useRef();
  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
  ];

  // GET selected news
  // useEffect(() => {
  //    makeRequest("news/" + newsID);

  //    example of a template string
  //   makeRequest(`news/${newsID}`);

  // }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const fd = new FormData(event.target);
    fd.append("content", refQuill.current.value); // adds content to the quill

    // Make a PUT  request to your server with the form data
    makeRequestEdit("news/admin/" + newsID, null, null, "PUT", fd);
  };

  // Redirect to the news admin page when the news has been updated
  // useEffect(() => {
  //   if (dataEdit)

  //     Navigate("/admin/newsadmin");

  // }, [dataEdit]);

  // Redirect to the news admin page if the newsID is not found
  useEffect(() => {
    // GET selected news
    // if theres no ! in front of dataEdit, it will redirect to the news admin page when the news has been updated
    if (!dataEdit) {
      //    makeRequest("news/" + newsID);
      makeRequest(`news/${newsID}`);
    } else if (dataEdit) {
      Navigate("/admin/newsadmin");
    }
  }, [dataEdit, newsID]);

  return (
    <div>
      {error && <Error errorMessage="Admin Nyheder" />}
      {loading && <Loader />}

      <h1 className="text-3xl font-semibold"> Ret nyhed - {newsID} </h1>

      {data && (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block">
              Nyhedens Titel
              <input
                name="title"
                defaultValue={data?.title}
                type="text"
                placeholder="Titel"
                className="mt-1 p-2 w-full border rounded"
                required
              />
            </label>
          </div>

          <div className="mb-4">
            <label className="block">
              Nyheds Indhold
              <ReactQuill
                modules={{ toolbar: toolbarOptions }}
                defaultValue={data.content}
                theme="snow"
                placeholder="Nyhedstekst"
                ref={refQuill}
              />
            </label>
          </div>

          <div>
            <p>Nuværende billede:</p>
            <img
              src={import.meta.env.VITE_IMGPATH + "news/" + data.image}
              alt="Nyhedens billede"
              width="150"
            />
          </div>

          <div className="mb-4">
            <label className="block">
              Vælg evt. en ny billede (overskriver det nuværende billede)
              <input name="image" type="file" className="mt-1 p-2 w-full" />
            </label>
          </div>

          <button
            className="bg-safety-orange-blaze-orange text-white cursor-pointer p-2 rounded"
            type="submit"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default NewsEdit;
