import React from "react";
import { sortByChange } from "../actions/commonActions";
import { connect } from "react-redux";

const SortBar = ({ videoListLength, sortFilter, onSortChange, sortBy }) => {
  return (
    <div
      style={{ height: "70px", marginTop: "10px" }}
      className="container d-flex justify-content-between"
    >
      <span>{videoListLength} Movies found</span>
      <div className="d-flex flex-row">
        <span>Sort By</span>
        <div>
          {sortFilter.map(sort => (
            <button
              onClick={e => onSortChange(e)}
              style={sortBy == sort ? { color: "#e81961" } : { color: "grey" }}
              className="btn"
              key={sort}
              value={sort}
            >
              {sort.replace("_", " ")}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  videoListLength: state.data.videoList.length,
  sortFilter: state.common.sortFilter,
  sortBy: state.common.sortBy
});

const mapDistpachToProps = dispatch => ({
  onSortChange: e => dispatch(sortByChange(e.target.value))
});
export default connect(
  mapStateToProps,
  mapDistpachToProps
)(SortBar);
