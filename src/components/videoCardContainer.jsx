import React, { Component } from "react";
import Logo from "./public/logo";
import VideoCard from "./videoCard";
import BackGroundImg from "../public/img/netflix.png";
const divStyle = {
  width: "100%",
  height: "600px",
  background:
    "linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.45) )," +
    `url(${BackGroundImg})`,
  padding: "20px 100px"
};
class VideoCardContainer extends Component {
  render() {
    return (
      <div style={divStyle} className="d-flex flex-column flex-justify-between">
        <div className="d-flex flex-row">
          <Logo />
          <button
            style={{
              color: "white",
              backgroundColor: "#e81961",
              float: "right"
            }}
            className="btn align-self-end"
          >
            Search
          </button>
        </div>
        <VideoCard videoID={this.props.match.params.id} />
      </div>
    );
  }
}

export default VideoCardContainer;
