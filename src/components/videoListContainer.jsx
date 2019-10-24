import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions/dataActions";
import { Header } from "./header";
import SortBar from "./sortBar";
import VideoList from "./videoList";
import Loader from "./public/loader";

class VideoListContainer extends Component {

  async componentDidMount() {
    this.props.dispatch(fetchData());
  }

  render() {
    const { videoList, loading, queryString, searchBy } = this.props;
    let filteredVideoList = queryString
      ? videoList.filter(el =>
          searchBy == "title"
            ? el[searchBy].toLowerCase().startsWith(queryString.toLowerCase())
            : el[searchBy].includes(
                queryString[0].toUpperCase() + queryString.slice(1)
              )
        )
      : videoList;
    let sortedList = filteredVideoList.sort((a, b) =>
      this.state.sortBy == "release_date"
        ? new Date(a[this.state.sortBy]) - new Date(b[this.state.sortBy])
        : a[this.state.sortBy] - b[this.state.sortBy]
    );

    return (
      <React.Fragment>
        <Header />
        <SortBar />
        {loading ? (
          <Loader />
        ) : filteredVideoList.length ? (
          <VideoList videoList={sortedList} />
        ) : (
          <div className="d-flex justify-content-center">
            <h1>No films found</h1>
          </div>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  videoList: state.data.videoList,
  loading: state.data.loading,
  queryString: state.common.queryString,
  searchBy: state.common.searchBy
});

export default connect(mapStateToProps)(VideoListContainer);
