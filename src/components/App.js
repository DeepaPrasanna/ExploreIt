import React, { useState } from "react";
import Unsplash from "../api/Unsplash";
import Youtube from "../api/Youtube";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import VideoDisplay from "./VideoDisplay";
import ErrMsg from "./ErrMsg";

const App = () => {
  const [images, setImages] = useState([]);
  const [searchType, setSearchType] = useState("");
  const [videos, setVideos] = useState([]);

  const onTermSubmit = async (term, searchType) => {
    setSearchType(searchType);
    if (searchType === "images") {
      const response = await Unsplash.get("/search/photos", {
        params: {
          query: term,
        },
      });
      setImages(response.data.results);
    }
    if (searchType === "videos") {
      const response = await Youtube.get("/search", {
        params: {
          q: term,
        },
      });

      setVideos(response.data.items);
    }
  };
  let content;
  if (searchType === "images") {
    if (images.length === 0) {
      content = <ErrMsg message={"No images Found!"} />;
    } else {
      content = <ImageList images={images} />;
    }
  }
  if (searchType === "videos") {
    content = <VideoDisplay videos={videos} />;
  }
  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <SearchBar onSubmit={onTermSubmit} />
      {content}
    </div>
  );
};

export default App;
