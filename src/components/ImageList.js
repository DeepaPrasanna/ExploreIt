import React from "react";
import Masonry from "react-masonry-css";

import "../styles/ImageList.css";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
  };
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {images}
    </Masonry>
  );
};

export default ImageList;
