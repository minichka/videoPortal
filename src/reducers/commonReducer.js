import {
  QUERY_STRING_CHANGE,
  SEARCH_TYPE_CHANGE,
  SORT_BY_CHANGE
} from "./../actions/commonActions";

const initialState = {
  queryString: "",
  searchBy: "title",
  sortBy: "release_date",
  searchFilter: ["title", "genres"],
  sortFilter: ["release_date", "vote_average"]
};

export default function commonReducer(state = initialState, action) {
  switch (action.type) {
    case QUERY_STRING_CHANGE:
      return {
        ...state,
        queryString: action.payload
      };
    case SEARCH_TYPE_CHANGE:
      return {
        ...state,
        searchBy: action.payload
      };
    case SORT_BY_CHANGE:
      return {
        ...state,
        sortBy: action.payload
      };
    default:
      return state;
  }
}
