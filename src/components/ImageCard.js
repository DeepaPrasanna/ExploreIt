import React, { useEffect, useRef, useState } from "react";

const ImageCard = (props) => {
  const [spans, setSpans] = useState(0);
  const myRef = useRef(null);

  useEffect(() => {
    myRef.current.addEventListener("load", setSnaps);
  }, []);

  const setSnaps = () => {
    const height = myRef.current.clientHeight;
    // console.log(myRScreenshot from 2021-02-02 21-40-56
    const spans = Math.ceil(height / 20);
    setSpans(spans);
  };

  const { description, urls } = props.image;

  return (
    <img
      style={{ gridRowEnd: `span ${spans}` }}
      ref={myRef}
      src={urls.regular}
      alt={description}
    />
  );
};
export default ImageCard;
