import React, { useState } from "react";

const SearchBar = (props) => {
  const [term, setTerm] = useState("");
  const [searchType, setSearchType] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(term, searchType);
  };

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="ui three fields">
          <label> Search here:</label>
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          ></input>
          <button
            className="ui button"
            data-searchtype="images"
            onClick={(e) =>
              setSearchType(e.target.getAttribute("data-searchtype"))
            }
          >
            Images
          </button>
          <button
            className="ui button"
            data-searchtype="videos"
            onClick={(e) =>
              setSearchType(e.target.getAttribute("data-searchtype"))
            }
          >
            Videos
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;