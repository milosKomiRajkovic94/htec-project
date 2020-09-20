import {
  SET_CURRENT_LANGUAGE,
  SET_CURRENT_LOCATION,
  SET_ARE_LANGUAGES_DISABLED,
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
