import React from "react";
import { connect } from "react-redux";
import { searchTypeChange } from "../../actions/commonActions";

const btnSearchStyle = {
  backgroundColor: "#e81961",
  color: "white"
};

const SearchFilter = props => {
  const { searchBy, searchFilter, onSearchTypeChange } = props;
  return (
    <div className="d-flex flex-row">
      <span style={{ color: "white" }}>Search By</span>
      <div style={{ marginLeft: "20px" }}>
        {searchFilter.map(entity => (
          <button
            onClick={e => onSearchTypeChange(e.target.value)}
            className="btn"
            key={entity}
            style={
              searchBy == entity
                ? btnSearchStyle
                : { backgroundColor: "grey", color: "white" }
            }
            value={entity}
          >
            {entity[0].toUpperCase() + entity.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  searchBy: state.common.searchBy,
  searchFilter: state.common.searchFilter
});

const mapDistpachToProps = dispatch => ({
  onSearchTypeChange: type => dispatch(searchTypeChange(type))
});
export default connect(
  mapStateToProps,
  mapDistpachToProps
)(SearchFilter);
