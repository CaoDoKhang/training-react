import React from "react";
import "./Search.css";

const Search = () => {
  return (
    <div className="search">
      <input type="text" placeholder="Type something to search" />
      <button>Search</button>
    </div>
  );
};

export default Search;
