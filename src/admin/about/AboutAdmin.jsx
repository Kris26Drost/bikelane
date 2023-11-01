import React, { useEffect, useRef } from "react";
import Error from "../../components/Error";
import Loader from "../../components/Loader";
import useRequestData from "../../hooks/useRequestData";

//quill
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

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
    // GET about data
    makeRequest("about");
  }, [dataEdit]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const fd = new FormData(event.target);
    fd.append("content", refQuill.current.value); // adds content to the quill

    // Make a PUT request to your server with the form data
    makeRequestEdit("about/admin/", null, null, "PUT", fd);
  };

   // reference to quill
   const refQuill = useRef();
   const toolbarOptions = [["bold", "italic", "underline", "strike"],[{ list: "ordered" }, { list: "bullet" }]];

  return (
    <div>
      <h1 className="text-3xl font-semibold">Ret "Om Os"</h1>
      {error || errorEdit && <Error />}
      {loading || loadingEdit && <Loader />}
      {data &&

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label>
            Titel
            <input
              type="text"
              defaultValue={data.title}
              name="title"
              placeholder="Udfyld overskrift/titel"
              className="mt-1 p-2 w-full border rounded"
              required
            />
          </label>
        </div>

        <div className="mb-4">
          <label>
            Teaser tekst
            <input
              type="text"
              defaultValue={data.teaser}
              name="teaser"
              placeholder="Udfyld teaser-tekst"
              className="mt-1 p-2 w-full border rounded"
              required
            />
          </label>
        </div>

        <div className="mb-4">
          <label>
            Beskrivelse
           
              <ReactQuill
                defaultValue={data.content}
                theme="snow"
                placeholder="Udfyld teksten"
                ref={refQuill}
                modules={{ toolbar: toolbarOptions }}
              />
          </label>
        </div>

        <figure>
            <figcaption>Nuværende billede:</figcaption>
            <img
              src={import.meta.env.VITE_IMGPATH + "about/" + data.image}
              alt="About billede"
              width="300"
            />
          </figure>

        <div className="mb-4">
          <label>
            Vælg et billede (overskriver det nuværende) 
            <input
              type="file"
              name="image"
              className="mt-1 p-2 w-full"
            />
          </label>
        </div>
        <button
          className="bg-safety-orange-blaze-orange text-white cursor-pointer p-2 rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
      }
    </div>
  );
};

export default AboutAdmin;
