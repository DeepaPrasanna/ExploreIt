import React, { useState } from "react";
import VideoDetail from "./VideoDetail";
import VideosList from "./VideoList";

const VideoDisplay = ({ videos }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };
  return (
    <div className="ui stackable grid">
      <div className="row">
        <div className="eleven wide column">
          <VideoDetail video={selectedVideo ? selectedVideo : videos[0]} />
        </div>

        <div className="five wide column ui stackable grid">
          <VideosList onVideoSelect={onVideoSelect} videos={videos} />
        </div>
      </div>
    </div>
  );
};

export default VideoDisplay;
