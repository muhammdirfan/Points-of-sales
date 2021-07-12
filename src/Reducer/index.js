import { combineReducers } from "redux";
import userReducres from "./UserReducers/index";

const allReducers = combineReducers({
  userData: userReducres,
});

export default allReducers;
