import React, { useState } from "react";
import "../styles/SearchBar.css";

const SearchBar = (props) => {
  const [term, setTerm] = useState("");
  const [searchType, setSearchType] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(term, searchType);
  };

  return (
    <div className="ui segment search-container">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="ui three fields">
          <label> Search here:</label>
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          ></input>
          <button
            className="ui grey button search-box-buttons"
            data-searchtype="images"
            onClick={(e) =>
              setSearchType(e.currentTarget.getAttribute("data-searchtype"))
            }
            style={{ marginLeft: "5px" }}
          >
            Images
          </button>
          <button
            className="ui red button search-box-buttons"
            data-searchtype="videos"
            onClick={(e) =>
              setSearchType(e.currentTarget.getAttribute("data-searchtype"))
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
