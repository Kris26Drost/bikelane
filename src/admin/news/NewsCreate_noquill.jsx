import React from "react";
import useRequestData from "../../hooks/useRequestData";

const NewsCreate = () => {
  // POST
  const { data, loading, error, makeRequest } = useRequestData();

  const handleSubmit = (event) => {
    event.preventDefault();

    const fd = new FormData(event.target);

    // Make a POST request to your server with the form data
    makeRequest("news/admin", null, null, "POST", fd);

    // Clear the form after successful submission
    event.target.reset();
  };

  return (

    // dialogue box
    <div>
      {error && <div className="bg-red-300 p-2 m-2">{error}</div>}
      {data && <div className="bg-green-300 p-2 m-2">{data.message}</div>}
      {loading && <div className="bg-yellow-300 p-2 m-2">Loading...</div>}
      
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
            <textarea
              name="content"
              placeholder="Nyhedstekst"
              className="mt-1 p-2 w-full border rounded"
              required
            />
          </label>
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

        <button
          className="bg-safety-orange-blaze-orange text-white cursor-pointer p-2 rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
    
  );
};

export default NewsCreate;
