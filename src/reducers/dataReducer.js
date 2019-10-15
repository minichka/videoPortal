import {
  FETCH_DATA_BEGIN,
  FETCH_DATA_FAILURE,
  FETCH_DATA_SUCCESS
} from "./../actions/dataActions";

const initialState = {
  videoList: [],
  loading: false,
  error: null
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        videoList: action.payload.data
      };

    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        videoList: []
      };
    default:
      return state;
  }
}
