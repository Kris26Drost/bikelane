import { useRef } from "react";
import useRequestData from "../../hooks/useRequestData";

//quill
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// alternativ for react-quill er

const NewsCreate = () => {
  // POST
  const { data, loading, error, makeRequest } = useRequestData();

  // reference to quill
  const refQuill = useRef();
  const toolbarOptions = [["bold", "italic", "underline", "strike"], [{list : "ordered"}, {list : "bullet"}]];

 

  const handleSubmit = (event) => {
    event.preventDefault();

    const fd = new FormData(event.target);
    fd.append("content", refQuill.current.value);

    // Make a POST request to your server with the form data
    makeRequest("news/admin", null, null, "POST", fd);

    // Clear the form after successful submission
    event.target.reset();

    // Clear the quill editor
    refQuill.current.getEditor().setText("");
  };

  return (
    // dialogue box
    <div>
      {error && <div className="bg-red-300 p-2 m-2">{error}</div>}
      {loading && <div className="bg-yellow-300 p-2 m-2">Loading...</div>}
      {data && <div className="bg-green-300 p-2 m-2">{data.message}</div>}

      <div className="bg-cultured p-10">
        <h1 className="text-3xl font-semibold">Administrerer nyheder</h1>
      </div>
      
      <h1 className="text-3xl font-semibold">Opret ny nyhed</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block">
            Nyhedens Titel
            <input
              name="title"
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
            {/* <textarea
              name="content"
              className="mt-1 p-2 w-full border rounded"
              required
              defaultValue={refQuill}
            /> */}
          </label>
          <ReactQuill modules={ {toolbar: toolbarOptions} } theme="snow" placeholder="Nyhedstekst" ref={refQuill} />
        </div>

        <div className="mb-4">
          <label className="block">
            Nyhedens Billede
            <input
              name="image"
              type="file"
              className="mt-1 p-2 w-full"
              required
            />
          </label>
        </div>

        <div>
          <button
            className="bg-safety-orange-blaze-orange text-white cursor-pointer p-2 rounded "
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewsCreate;
