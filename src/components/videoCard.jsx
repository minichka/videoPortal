import React, { Component } from "react";

class VideoCard extends Component {
  render() {
    const video = this.props.videoItem;
    return (
      <React.Fragment>
        {video.id && (
          <div className="d-flex flex-row justify-content-between">
            <div className="container">
              <img
                src={video.poster_path}
                style={{ height: "400px", width: "300px" }}
                className="card-img-top"
                alt="..."
              ></img>
            </div>

            <div className="d-flex flex-column">
              <div className="d-flex flex-row">
                <h2 style={{ color: "#e81961" }}>
                  {video.title}
                  <span class="badge badge-pill badge-dark">
                    {video.vote_average}
                  </span>
                </h2>
              </div>
              <h5 style={{ color: "white" }}>{video.tagline}</h5>
              <div className="d-flex flex-row">
                <span style={{ color: "white" }}>
                  {}
                  {`${video.release_date.split("-")[0]}   ${video.runtime} min`}
                </span>
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
