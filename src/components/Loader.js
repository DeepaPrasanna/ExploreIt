import React from "react";
import "../styles/Loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <div className="ui inverted active">
        <div className="ui text big loader">Loading</div>
      </div>
    </div>
  );
};

export default Loader;
