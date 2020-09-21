import {
  SEARCH_HAS_BEEN_PERFORMED,
  SEARCH_IS_LOADING,
  SEARCH_HAS_FAILED,
} from "../actions/actionTypes";

import initialState from "../initialState";

export default function searchReducer(
  state = initialState.searchReducerState,
  action
) {
  switch (action.type) {
    case SEARCH_HAS_BEEN_PERFORMED: {
      return {
        ...state,
        searchedNewsLoadingFailed: false,
        searchedNewsAreLoading: false,
        searchedNews: action.searchedNews,
      };
    }

    case SEARCH_IS_LOADING: {
      return {
        ...state,
        searchedNewsLoadingFailed: false,
        searchedNewsAreLoading: action.searchedNewsAreLoading,
        searchedNews: [],
      };
    }

    case SEARCH_HAS_FAILED: {
      return {
        ...state,
        searchedNewsLoadingFailed: action.searchedNewsLoadingFailed,
        searchedNewsAreLoading: false,
        searchedNews: [],
      };
    }

    default: {
      return state;
    }
  }
}
