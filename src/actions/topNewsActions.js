import Axios from "axios";
import {
  TOP_NEWS_LOADED_SUCCESSFULLY,
  TOP_NEWS_FAILED_LOADING,
  TOP_NEWS_ARE_LOADING,
} from "./actionTypes";

import { NEWS_API_URL } from "../constants/urls";

import { NEWS_API_KEY } from "../constants/stringConstants";

export function topNewsLoadedSuccessfullyAction(topNews) {
  return {
    type: TOP_NEWS_LOADED_SUCCESSFULLY,
    topNews,
  };
}

export function topNewsLoadingFailedAction(topNewsLoadingFailed) {
  return {
    type: TOP_NEWS_FAILED_LOADING,
    topNewsLoadingFailed,
  };
}

export function topNewsAreLoadingAction(topNewsAreLoading) {
  return {
    type: TOP_NEWS_ARE_LOADING,
    topNewsAreLoading,
  };
}

export function loadCurrentTopNewsFromCountry(currentCountry) {
  return (dispatch) => {
    const currentCountryAxiosParam =
      currentCountry === "en" ? "gb" : currentCountry;
    dispatch(topNewsAreLoadingAction(true));
    Axios.get(NEWS_API_URL, {
      params: {
        country: currentCountryAxiosParam,
        apiKey: NEWS_API_KEY,
      },
    })
      .then((response) => {
        dispatch(topNewsLoadedSuccessfullyAction(response.data.articles));
      })
      .catch(() => {
        dispatch(topNewsLoadingFailedAction(true));
      });
  };
}
