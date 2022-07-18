import React, { useState } from "react";

function SearchBar({ onFormSubmit }) {
  const [term, setTerm] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    //TODO: MAke sure we call callbak from paren component
    onFormSubmit(term);
  };

  return (
    <div>
      <div className="search-bar ui segment">
        <form onSubmit={onSubmit} action="" className="ui form">
          <div className="field">
            <label htmlFor="search">Video Search</label>
            <input
              type="text"
              name="search"
              id="search"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
