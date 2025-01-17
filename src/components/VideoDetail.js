import React from "react";
import Loader from "./Loader";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <Loader />;
  }

  const youtubeSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe src={youtubeSrc} title={video.snippet.title} />
      </div>
      <div className="ui segment">
        <div className="ui header">{video.snippet.title}</div>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
