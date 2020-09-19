import {
  SET_CURRENT_LANGUAGE,
  SET_CURRENT_LOCATION,
} from "../actions/actionTypes";

import initialState from "../initialState";

export default function configReducer(
  state = initialState.configReducerState,
  action
) {
  switch (action.type) {
    case SET_CURRENT_LOCATION: {
      return {
        ...state,
        currentLocation: action.currentLocation,
      };
    }

    case SET_CURRENT_LANGUAGE: {
      return {
        ...state,
        currentLanguage: action.currentLanguage,
      };
    }

    default: {
      return state;
    }
  }
}
