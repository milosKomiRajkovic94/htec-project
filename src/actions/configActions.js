import {
  SET_CURRENT_LANGUAGE,
  SET_CURRENT_LOCATION,
  SET_ARE_LANGUAGES_DISABLED,
  REDIRECTED_TO_SPECIFIC_CATEGORY,
} from "./actionTypes";

export function setCurrentLanguage(currentLanguage) {
  return {
    type: SET_CURRENT_LANGUAGE,
    currentLanguage,
  };
}

export function setCurrentLocation(currentLocation) {
  return {
    type: SET_CURRENT_LOCATION,
    currentLocation,
  };
}

export function setAreLanguagesDisabled(areLanguagesDisabled) {
  return {
    type: SET_ARE_LANGUAGES_DISABLED,
    areLanguagesDisabled,
  };
}

export function setRedirectedToSpecificCategory(
  redirectedToSpecificCategory,
  currentSpecificCategory
) {
  return {
    type: REDIRECTED_TO_SPECIFIC_CATEGORY,
    redirectedToSpecificCategory,
    currentSpecificCategory,
  };
}
