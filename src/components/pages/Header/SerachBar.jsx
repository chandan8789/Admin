import React from "react";
import "./SearchBar.css";

const SerachBar = () => {
  return (
    <div className="search-bar">
      <form
        className="search-form d-flex align-items-center"
        method="POST"
        action="#"
      >
        <input
          type="text"
          name="query"
          placeholder="Search"
          title="Enter serach here...."
        />

        <button type="submit" title="Serach">
          <i className="bi bi-search"></i>
        </button>
      </form>
    </div>
  );
};

export default SerachBar;