import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");

  // to manage our state (term)
  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  // to send data to parent
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // console.log("I need to tell the parent about some data");
    onSubmit(term);
  };
  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
};

export default SearchBar;
