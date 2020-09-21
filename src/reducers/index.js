import { combineReducers } from "redux";

import configReducer from "./configReducer";

import topNewsReducer from "./topNewsReducer";

import categoriesReducer from "./categoriesReducer";

export default combineReducers({
  configReducer,
  topNewsReducer,
  categoriesReducer,
});
