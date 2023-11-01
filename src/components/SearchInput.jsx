import React from "react";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        const searchValue = e.target.search.value;

        e.target.reset()

        // Send to search result - and send the search value with it (as a param - check the route in App.jsx)
        navigate(`/search/${searchValue}`);
    }

  return (
    <form onSubmit={handleSearch}>
      <input
      name="search"
        type="search"
        aria-label="Search"
        placeholder="Søg"
        className="px-2 py-1  rounded-md border-2 border-platinum focus:outline-none flex justify-end"
      />
        
    </form>
  );
};

export default SearchInput;
