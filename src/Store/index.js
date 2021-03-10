import React from "react";
import { createStore } from "redux";
import allReducers from "../Reducer/index";

export default createStore(allReducers);
