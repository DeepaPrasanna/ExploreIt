import React from "react";

const ErrMsg = ({ message }) => {
  return (
    <div className="ui negative message">
      <div className="header">{message}</div>
      <p>No images are found for this search term in UnSplash</p>
    </div>
  );
};

export default ErrMsg;
