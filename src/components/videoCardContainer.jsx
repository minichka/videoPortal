import React, { Component } from "react";
import Logo from "./public/logo";
import VideoCard from "./videoCard";
import BackGroundImg from "../public/img/netflix.png";
import VideoList from "./videoList";
import { connect } from "react-redux";
const divStyle = {
  width: "100%",
  height: "500px",
  background:
    "linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.45) )," +
    `url(${BackGroundImg})`,
  padding: "20px 100px"
};
class VideoCardContainer extends Component {
  constructor(props) {
    super(props);

    this.focus = React.createRef();
    this.state = {
      video: {}
    };
  }

  handleClick = e => {
    e.preventDefault();
    this.props.history.push("/");
  };
  async getData() {
    let data = await fetch(
      "https://reactjs-cdp.herokuapp.com/movies/" + this.props.videoID
    );
    let response = await data.json();
    this.setState({ video: response });
  }
  async componentDidMount() {
    this.focus.current.scrollIntoView();
    this.getData();
  }
  async componentDidUpdate() {
    this.focus.current.scrollIntoView();
    if (this.state.video.id != this.props.videoID) {
      this.getData();
    }
  }
  render() {
    const relatedVideos = this.state.video.id
      ? this.props.videoList.filter(
          video =>
            video.genres.includes(this.state.video.genres[0]) &&
            video.id != this.state.video.id
        )
      : [];
    return (
      <React.Fragment>
        <div
          ref={this.focus}
          style={divStyle}
          className="d-flex flex-column justify-content-around"
        >
          <div className="d-flex flex-row justify-content-between">
            <Logo />
            <button
              onClick={e => this.handleClick(e)}
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
          <VideoCard videoItem={this.state.video} />
        </div>
        <div>
          <div className="container">
            <p>Related Videos</p>
          </div>
          <VideoList videoList={relatedVideos} />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  videoList: state.data.videoList
});
export default connect(mapStateToProps)(VideoCardContainer);
