import React, { useState } from "react";
import Unsplash from "./utils/api/Unsplash";
import Youtube from "./utils/api/Youtube";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import VideoDisplay from "./components/VideoDisplay";
import ErrMsg from "./components/ErrMsg";

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
    <div
      className="ui container explore-container"
      style={{ paddingTop: "10px" }}
    >
      <SearchBar onSubmit={onTermSubmit} />
      {content}
    </div>
  );
};

export default App;
