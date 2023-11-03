import React, { useEffect, useRef} from "react";
import useRequestData from "../../hooks/useRequestData";
import { useParams, useNavigate } from "react-router-dom";
import Error from "../../components/Error";
import Loader from "../../components/Loader";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const HerosRet = () => {
    const { herosID } = useParams();
  const Navigate = useNavigate();

  
  const { data, loading, error, makeRequest } = useRequestData();

  const {
    data: dataEdit,
    loading: loadingEdit,
    error: errorEdit,
    makeRequest: makeRequestEdit,
  } = useRequestData();

    // reference to quill
    const refQuill = useRef();
    const toolbarOptions = [
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
    ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const fd = new FormData(e.target);
    fd.append("content", refQuill.current.value); // adds content to the quill

    // Make a PUT request to your server with the form data
    makeRequestEdit("heros/admin/" + herosID, null, null, "PUT", fd);
  };

  useEffect(() => {
    // GET selected news
    // if theres no ! in front of dataEdit, it will redirect to the news admin page when the news has been updated
    if (!dataEdit) {
      //    makeRequest("news/" + newsID);
      makeRequest(`heros/${herosID}`);
    } else if (dataEdit) {
      Navigate("/admin/herosadmin");
    }
  }, [dataEdit, herosID]);

  return (
    <div>
    {error && <Error errorMessage="Admin Hero" />}
    {loading && <Loader />}

    <h1 className="text-3xl font-semibold"> Ret hero - {herosID} </h1>

    {data && (
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block">
            Subject:
            <input
              name="subject"
              defaultValue={data?.subject}
              type="text"
              placeholder="Subject"
              className="mt-1 p-2 w-full border rounded"
              required
            />
          </label>
        </div>

        <div className="mb-4">
          <label className="block">
            Suptitle:
            <input
              name="suptitle"
              defaultValue={data?.suptitle}
              type="text"
              placeholder="Suptitle"
              className="mt-1 p-2 w-full border rounded"
              required
            />
          </label>
        </div>

        <div className="mb-4">
          <label className="block">
            Title:
            <input
              name="suptitle"
              defaultValue={data?.title}
              type="text"
              placeholder="Suptitle"
              className="mt-1 p-2 w-full border rounded"
              required
            />
          </label>
        </div>

        <div className="mb-4">
          <label className="block">
            Content:
            <ReactQuill
              modules={{ toolbar: toolbarOptions }}
              defaultValue={data.content}
              theme="snow"
              placeholder="Nyhedstekst"
              ref={refQuill}
            />
          </label>
        </div>

        <div className="mb-4">
          <label className="block">
            Button Text:
            <input
              name="buttontext"
              defaultValue={data?.buttontext}
              type="text"
              placeholder="Button Text"
              className="mt-1 p-2 w-full border rounded"
              required
            />
          </label>
        </div>

        <div className="mb-4">
          <label className="block">
            Button Link:
            <input
              name="buttonlink"
              defaultValue={data?.buttonlink}
              type="text"
              placeholder="Button Link"
              className="mt-1 p-2 w-full border rounded"
              required
            />
          </label>
        </div>

        <div>
          <p>Nuværende billede:</p>
          <img
            src={"http://localhost:5888/images/hero/" + data.image}
            alt="Nyhedens billede"
            width="150px"
          />
        </div>

        <div className="mb-4">
          <label className="block">
            Vælg evt. en ny billede (overskriver det nuværende billede)
            <input name="image" type="file" className="mt-1 p-2 w-full" />
          </label>
        </div>

        <div className="mb-4">
          <label className="block">
            Video Link:
            <input
              name="buttonlink"
              defaultValue={data?.videolink}
              type="text"
              placeholder="Button Link"
              className="mt-1 p-2 w-full border rounded"
              required
            />
          </label>
        </div>

        <button
          className="bg-primary text-white cursor-pointer p-2 rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
    )}
  </div>
  )
}

export default HerosRet