import React from "react";
import VideoItem from "./videoItem";

const VideoList = props => {
  return (
    <div className="album py-5">
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
