import { combineReducers } from "redux";
import userReducres from "./UserReducers";

const allReducers = combineReducers({
  userReducres: userReducres,
});

export default allReducers;
