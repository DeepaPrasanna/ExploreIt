import React from "react";

const ImageCard = (props) => {
  const { description, urls } = props.image;

  return <img src={urls.regular} alt={description} />;
};
export default ImageCard;
