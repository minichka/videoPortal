import React, { Component } from "react";
import SearchFilter from "./public/searchFilter";
import { withRouter } from "react-router-dom";

import queryString from "query-string";
import { queryStringChange, searchTypeChange } from "../actions/commonActions";
import { connect } from "react-redux";

const searchStyle = {
  backgroundColor: "black",
  borderColor: "black",
  color: "white",
  borderBottomColor: "#e81961",
  height: "50px"
};

const btnSearchStyle = {
  backgroundColor: "#e81961",
  color: "white"
};

class Search extends Component {
  constructor(props) {
    super(props);
    this.searchRef = React.createRef();
  }
  componentDidMount() {
    if (this.props.location.pathname == "/search") {
      const values = queryString.parse(this.props.location.search);
      const [type, value] = Object.entries(values)[0];

      if (this.props.searchFilter.includes(type)) {
        this.props.onSearchTypeChange(type);
        this.props.onSearchInputChange(value);
      } else {
        this.props.onSearchInputChange("");
        this.props.history.push("/");
      }
    }
  }
  handleSearchClick = e => {
    e.preventDefault();
    const value = this.searchRef.current.value;
    this.props.onSearchInputChange(value);
    this.props.history.push(`/search?${this.props.searchBy}=${value}`);
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <h4 style={{ color: "white" }}>FIND YOUR MOVIE</h4>
          <input
            style={searchStyle}
            type="search"
            className="form-control"
            placeholder="Search"
            ref={this.searchRef}
            onKeyDown={e =>
              e.keyCode == 13 ? this.handleSearchClick(e) : null
            }
          />
        </div>

        <div className="d-flex flex-row justify-content-between">
          <SearchFilter />
          <div>
            <button
              style={btnSearchStyle}
              onClick={e => this.handleSearchClick(e)}
              className="btn"
              type="submit"
            >
              Search
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  searchBy: state.common.searchBy,
  searchFilter: state.common.searchFilter
});

const mapDispatchToProps = dispatch => ({
  onSearchInputChange: query => dispatch(queryStringChange(query)),
  onSearchTypeChange: type => dispatch(searchTypeChange(type))
});
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Search)
);
