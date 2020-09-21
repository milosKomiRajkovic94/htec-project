import {
  SET_CURRENT_LANGUAGE,
  SET_CURRENT_LOCATION,
  SET_ARE_LANGUAGES_DISABLED,
  REDIRECTED_TO_SPECIFIC_CATEGORY,
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

    case REDIRECTED_TO_SPECIFIC_CATEGORY: {
      return {
        ...state,
        redirectedToSpecificCategory: action.redirectedToSpecificCategory,
        currentSpecificCategory: action.currentSpecificCategory,
      };
    }

    default: {
      return state;
    }
  }
}
