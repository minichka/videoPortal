import React from "react";
import VideoItem from "./videoItem";

const VideoList = props => {
  return (
    <div className="album">
      <div className="container">
        <div className="row">
          {props.videoList.map(video => (
            <VideoItem key={video.id} video={video} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoList;
