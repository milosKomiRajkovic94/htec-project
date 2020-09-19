import { SET_CURRENT_LANGUAGE, SET_CURRENT_LOCATION } from "./actionTypes";

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
