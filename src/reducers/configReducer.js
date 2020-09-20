import {
  SET_CURRENT_LANGUAGE,
  SET_CURRENT_LOCATION,
  SET_ARE_LANGUAGES_DISABLED,
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

    case SET_ARE_LANGUAGES_DISABLED: {
      return {
        ...state,
        areLanguagesDisabled: action.areLanguagesDisabled,
      };
    }

    default: {
      return state;
    }
  }
}
