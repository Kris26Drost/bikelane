import { useState, useEffect, useRef } from "react";
import useRequestData from "../../hooks/useRequestData";

//quill
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// alternativ for react-quill er

const EventsCreate = () => {
  // POST
  const { data, loading, error, makeRequest } = useRequestData();

  // reference to quill
  const refQuill = useRef();
  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const fd = new FormData(e.target);
    fd.append("content", refQuill.current.value);

    // Make a POST request to your server with the form data
    makeRequest("events/admin", null, null, "POST", fd);

    // Clear the form after successful submission
    e.target.reset();

    // Clear the quill editor
    refQuill.current.getEditor().setText("");
  };

  // Kategorierne
  const [category, setCategory] = useState();

  const {
    data: dataCategories,
    loading: loadingCategories,
    error: errorCategories,
    makeRequest: makeCategoriesRequest,
  } = useRequestData();

  useEffect(() => {
    makeCategoriesRequest("eventcategories");
  }, []);

  return (
    // dialogue box
    <div>
      {error && <div className="p-2 m-2 bg-red-300">{error}</div>}
      {loading && <div className="p-2 m-2 bg-yellow-300">Loading...</div>}
      {data && <div className="p-2 m-2 bg-green-300">Oprettet!</div>}

      <div className="bg-cultured p-10">
        <h1 className="text-3xl font-semibold">Administrerer nyheder</h1>
      </div>

      <h1 className="text-3xl font-semibold">Opret ny nyhed</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block">
            Events Titel
            <input
              name="title"
              type="text"
              placeholder="Titel"
              className="w-full p-2 mt-1 border rounded"
              required
            />
          </label>
        </div>

        <div className="mb-4">
          <label className="block">
            Events Indhold
            {/* <textarea
              name="content"
              className="w-full p-2 mt-1 border rounded"
              required
              defaultValue={refQuill}
            /> */}
          </label>
          <ReactQuill
            modules={{ toolbar: toolbarOptions }}
            theme="snow"
            placeholder="Nyhedstekst"
            ref={refQuill}
          />
        </div>

        {/* Kategorierne u dropdown */}
        <div className="mt-3 mb-3">
          <label className="form-label me-3">
            Vælg en Event Kategorie:
            <select
              name="category"
              defaultValue="DEFAULT"
              onChange={(e) => setCategory(e.target.value)}
              className="form-select"
            >
              <option value="DEFAULT" disabled>
                Vælg en kategori
              </option>
              {dataCategories &&
                dataCategories.map((c) => (
                  <option value={c._id} key={c._id}>
                    {c.category}
                  </option>
                ))}
            </select>
          </label>
        </div>

        {/* Event time */}
        <div>
          <label>
            Event tidspunkt
            <input
              name="eventdate"
              type="datetime-local"
              placeholder="2023-11-01T17:30"
              className="w-full p-2 mt-1 border rounded"
              required
            />
          </label>
        </div>

        {/* Event destination */}
        <div>
          <label>
            Event destination
            <input
              name="destination"
              type="text"
              placeholder="Grenaa"
              className="w-full p-2 mt-1 border rounded"
              required
            />
          </label>
        </div>

        {/* Event coords */}
        <div>
          <label>
            Event coords
            <input
              name="coordinates"
              type="text"
              placeholder="55.123456, 12.123456"
              className="w-full p-2 mt-1 border rounded"
              required
            />
          </label>
        </div>

        {/* Event distance */}
        <div>
          <label>
            Event distance
            <input
              name="distance"
              type="number"
              placeholder="100"
              className="w-full p-2 mt-1 border rounded"
              required
            />
          </label>
        </div>

        {/* Event difficulty */}
        <div>
          <label>
            Event difficulty
            <input
              name="difficulty"
              type="number"
              placeholder="1"
              className="w-full p-2 mt-1 border rounded"
              required
            />
          </label>
        </div>

        {/* Event image */}
        <div className="mb-4">
          <label className="block">
            Events Billede
            <input
              name="image"
              type="file"
              className="w-full p-2 mt-1"
              required
            />
          </label>
        </div>

        <div>
          <button
            className="bg-primary  p-2 text-white rounded cursor-pointer"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventsCreate;
