import React, { useState } from "react";
import Unsplash from "./utils/api/Unsplash";
import Youtube from "./utils/api/Youtube";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import VideoDisplay from "./components/VideoDisplay";
import ErrMsg from "./components/ErrMsg";
import Loader from "./components/Loader";

const App = () => {
  const [images, setImages] = useState([]);
  const [searchType, setSearchType] = useState("");
  const [videos, setVideos] = useState([]);
  const [showErrMsg, setShowErrMsg] = useState(false);

  const onTermSubmit = async (term, searchType) => {
    setSearchType(searchType);
    if (searchType === "images") {
      const response = await Unsplash.get("/search/photos", {
        params: {
          query: term,
        },
      });

      if (response.data.results.length) {
        setImages(response.data.results);
        setShowErrMsg(false);
      } else {
        setShowErrMsg(true);
      }
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
    if (!showErrMsg) {
      if (!images.length) {
        content = <Loader />;
      } else {
        content = <ImageList images={images} />;
      }
    } else {
      content = <ErrMsg message={"No images Found!"} />;
    }
  }

  if (searchType === "videos") {
    content = <VideoDisplay videos={videos} />;
  }
  return (
    <div className="ui container" style={{ paddingTop: "10px" }}>
      <SearchBar onSubmit={onTermSubmit} />
      {content}
    </div>
  );
};

export default App;
