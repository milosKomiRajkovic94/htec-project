import Axios from "axios";

import {
  SEARCH_HAS_BEEN_PERFORMED,
  SEARCH_HAS_FAILED,
  SEARCH_IS_LOADING,
} from "./actionTypes";

import { NEWS_API_KEY } from "../constants/stringConstants";

import { NEWS_API_URL } from "../constants/urls";

export function searchHasBeenPerformedSuccessfullyAction(searchedNews) {
  return {
    type: SEARCH_HAS_BEEN_PERFORMED,
    searchedNews,
  };
}

export function searchLoadingFailedAction(searchedNewsLoadingFailed) {
  return {
    type: SEARCH_HAS_FAILED,
    searchedNewsLoadingFailed,
  };
}

export function searchNewsAreLoadingAction(searchedNewsAreLoading) {
  return {
    type: SEARCH_IS_LOADING,
    searchedNewsAreLoading,
  };
}

export function searchNews(keyword, country) {
  return (dispatch) => {
    dispatch(searchNewsAreLoadingAction(true));
    Axios.get(NEWS_API_URL, {
      params: {
        apiKey: NEWS_API_KEY,
        country: country === "en" ? "gb" : country,
        q: keyword,
      },
    })
      .then((response) => {
        dispatch(
          searchHasBeenPerformedSuccessfullyAction(response.data.articles)
        );
      })
      .catch(() => {
        dispatch(searchLoadingFailedAction(true));
      });
  };
}
