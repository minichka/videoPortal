export const FETCH_DATA_BEGIN = "FETCH_DATA_BEGIN";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export function fetchData() {
  return dispatch => {
    dispatch(fetchDataBegin());
    return fetch("https://reactjs-cdp.herokuapp.com/movies")
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchDataSuccess(json.data));
      })
      .catch(error => dispatch(fetchDataFailure(error)));
  };
}

export const fetchDataBegin = () => ({
  type: FETCH_DATA_BEGIN
});

export const fetchDataSuccess = data => ({
  type: FETCH_DATA_SUCCESS,
  payload: { data }
});

export const fetchDataFailure = error => ({
  type: FETCH_DATA_FAILURE,
  payload: { error }
});

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
