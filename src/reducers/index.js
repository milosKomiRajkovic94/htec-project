import { combineReducers } from "redux";

import configReducer from "./configReducer";

import topNewsReducer from "./topNewsReducer";

export default combineReducers({
  configReducer,
  topNewsReducer,
});
