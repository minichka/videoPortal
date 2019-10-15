import React from "react";
import { Link } from "react-router-dom";
const VideoItem = ({ video }) => {
  return (
    <div className="col-md-4 py-5">
      <div className="card">
        <img
          src={video.poster_path}
          style={{ width: "100%", height: "400px" }}
          className="card-img-top"
          alt="..."
        ></img>
        <div className="card-body">
          <span
            style={{ borderColor: "black", float: "right" }}
            className="badge badge-light"
          >
            {video.release_date.split("-")[0]}
          </span>
          <h4 className="card-title">
            <Link to={`/film/${video.id}`}>{video.title}</Link>
          </h4>
          <h6 className="card-subtitle">
            {video.genres.slice(0, 1).join("&")}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
