import React, { Component } from "react";

class VideoCard extends Component {
  render() {
    const video = this.props.videoItem;
    return (
      <React.Fragment>
        {video.id && (
          <div className="d-flex flex-row flex-justify-between">
            <img
              src={video.poster_path}
              style={{ width: "50%", height: "400px" }}
              className="card-img-top"
              alt="..."
            ></img>
            <div className="d-flex flex-column">
              <div className="d-flex flex-row">
                <h2 style={{ color: "#e81961" }}>{video.title}</h2>
                <span style={{ color: "white" }} className="border border-dark">
                  {video.vote_average}
                </span>
              </div>
              <h5 style={{ color: "white" }}>{video.tagline}</h5>
              <div className="d-flex flex-row">
                <span style={{ color: "white" }}>
                  {video.release_date.split("-")[0]}
                </span>
                <span
                  className="align-self-center"
                  style={{ color: "white" }}
                >{`${video.runtime} min`}</span>
              </div>
              <div className="d-flex flex-row"></div>
              <p style={{ color: "white" }}>{video.overview}</p>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default VideoCard;
