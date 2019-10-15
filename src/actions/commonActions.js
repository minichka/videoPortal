export const QUERY_STRING_CHANGE = "QUERY_STRING_CHANGE";
export const SEARCH_TYPE_CHANGE = "SEARCH_TYPE_CHANGE";
export const SORT_BY_CHANGE = "SORT_BY_CHANGE";

export const queryStringChange = newQuery => ({
  type: QUERY_STRING_CHANGE,
  payload: newQuery
});

export const searchTypeChange = newType => ({
  type: SEARCH_TYPE_CHANGE,
  payload: newType
});

export const sortByChange = newSort => ({
  type: SORT_BY_CHANGE,
  payload: newSort
});
