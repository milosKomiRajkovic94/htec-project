import {
  TOP_NEWS_LOADED_SUCCESSFULLY,
  TOP_NEWS_ARE_LOADING,
  TOP_NEWS_FAILED_LOADING,
} from "../actions/actionTypes";

import initialState from "../initialState";

export default function topNewsReducer(
  state = initialState.topNewsReducerState,
  action
) {
  switch (action.type) {
    case TOP_NEWS_LOADED_SUCCESSFULLY: {
      return {
        ...state,
        topNews: action.topNews,
        topNewsLoadingFailed: false,
        topNewsAreLoading: false,
      };
    }

    case TOP_NEWS_ARE_LOADING: {
      return {
        ...state,
        topNewsAreLoading: action.topNewsAreLoading,
        topNewsLoadingFailed: false,
        topNews: [],
      };
    }

    case TOP_NEWS_FAILED_LOADING: {
      return {
        ...state,
        topNewsAreLoading: false,
        topNewsLoadingFailed: action.topNewsLoadingFailed,
        topNews: [],
      };
    }

    default: {
      return state;
    }
  }
}
