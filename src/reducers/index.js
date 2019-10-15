import { combineReducers } from "redux";
import data from "./dataReducer";
import common from "./commonReducer";

export default combineReducers({
  data,
  common
});
