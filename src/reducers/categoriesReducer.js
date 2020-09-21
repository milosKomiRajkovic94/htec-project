import {
  CATEGORIES_ENTERTAINMENT_HAVE_BEEN_LOADED_SUCCESSFULLY,
  CATEGORIES_ENTERTAINMENT_HAVE_BEEN_LOADED_WITH_ERROR,
  CATEGORIES_ENTERTAINMENT_ARE_LOADING,
  CATEGORIES_GENERAL_HAVE_BEEN_LOADED_SUCCESSFULLY,
  CATEGORIES_GENERAL_HAVE_BEEN_LOADED_WITH_ERROR,
  CATEGORIES_GENERAL_ARE_LOADING,
  CATEGORIES_HEALTH_HAVE_BEEN_LOADED_SUCCESSFULLY,
  CATEGORIES_HEALTH_HAVE_BEEN_LOADED_WITH_ERROR,
  CATEGORIES_HEALTH_ARE_LOADING,
  CATEGORIES_SCIENCE_HAVE_BEEN_LOADED_SUCCESSFULLY,
  CATEGORIES_SCIENCE_HAVE_BEEN_LOADED_WITH_ERROR,
  CATEGORIES_SCIENCE_ARE_LOADING,
  CATEGORIES_SPORT_HAVE_BEEN_LOADED_SUCCESSFULLY,
  CATEGORIES_SPORT_HAVE_BEEN_LOADED_WITH_ERROR,
  CATEGORIES_SPORT_ARE_LOADING,
  CATEGORIES_TECHNOLOGY_HAVE_BEEN_LOADED_SUCCESSFULLY,
  CATEGORIES_TECHNOLOGY_HAVE_BEEN_LOADED_WITH_ERROR,
  CATEGORIES_TECHNOLOGY_ARE_LOADING,
} from "../actions/actionTypes";

import initialState from "../initialState";

export default function categoriesReducer(
  state = initialState.categoryReducerState,
  action
) {
  switch (action.type) {
    case CATEGORIES_ENTERTAINMENT_HAVE_BEEN_LOADED_SUCCESSFULLY: {
      return {
        ...state,
        categoriesEntertainmentNews: action.categoriesEntertainmentNews,
        categoriesEntertainmentNewsFailed: false,
        categoriesEntertainmentNewsAreLoading: false,
      };
    }

    case CATEGORIES_ENTERTAINMENT_HAVE_BEEN_LOADED_WITH_ERROR: {
      return {
        ...state,
        categoriesEntertainmentNews: [],
        categoriesEntertainmentNewsFailed:
          action.categoriesEntertainmentNewsFailed,
        categoriesEntertainmentNewsAreLoading: false,
      };
    }

    case CATEGORIES_ENTERTAINMENT_ARE_LOADING: {
      return {
        ...state,
        categoriesEntertainmentNews: [],
        categoriesEntertainmentNewsFailed: false,
        categoriesEntertainmentNewsAreLoading:
          action.categoriesEntertainmentNewsAreLoading,
      };
    }

    case CATEGORIES_GENERAL_HAVE_BEEN_LOADED_SUCCESSFULLY: {
      return {
        ...state,
        categoriesGeneralNews: action.categoriesGeneralNews,
        categoriesGeneralNewsFailed: false,
        categoriesGeneralNewsAreLoading: false,
      };
    }

    case CATEGORIES_GENERAL_HAVE_BEEN_LOADED_WITH_ERROR: {
      return {
        ...state,
        categoriesGeneralNews: [],
        categoriesGeneralNewsFailed: action.categoriesGeneralNewsFailed,
        categoriesGeneralNewsAreLoading: false,
      };
    }

    case CATEGORIES_GENERAL_ARE_LOADING: {
      return {
        ...state,
        categoriesGeneralNews: [],
        categoriesGeneralNewsFailed: false,
        categoriesGeneralNewsAreLoading: action.categoriesGeneralNewsAreLoading,
      };
    }

    case CATEGORIES_HEALTH_HAVE_BEEN_LOADED_SUCCESSFULLY: {
      return {
        ...state,
        categoriesHealthNews: action.categoriesHealthNews,
        categoriesHealthNewsFailed: false,
        categoriesHealthNewsAreLoading: false,
      };
    }

    case CATEGORIES_HEALTH_HAVE_BEEN_LOADED_WITH_ERROR: {
      return {
        ...state,
        categoriesHealthNews: [],
        categoriesHealthNewsFailed: action.categoriesHealthNewsFailed,
        categoriesHealthNewsAreLoading: false,
      };
    }

    case CATEGORIES_HEALTH_ARE_LOADING: {
      return {
        ...state,
        categoriesHealthNews: [],
        categoriesHealthNewsFailed: false,
        categoriesHealthNewsAreLoading: action.categoriesHealthNewsAreLoading,
      };
    }

    case CATEGORIES_SCIENCE_HAVE_BEEN_LOADED_SUCCESSFULLY: {
      return {
        ...state,
        categoriesScienceNews: action.categoriesScienceNews,
        categoriesScienceNewsFailed: false,
        categoriesScienceNewsAreLoading: false,
      };
    }

    case CATEGORIES_SCIENCE_HAVE_BEEN_LOADED_WITH_ERROR: {
      return {
        ...state,
        categoriesScienceNews: [],
        categoriesScienceNewsFailed: action.categoriesScienceNewsFailed,
        categoriesScienceNewsAreLoading: false,
      };
    }

    case CATEGORIES_SCIENCE_ARE_LOADING: {
      return {
        ...state,
        categoriesScienceNews: [],
        categoriesScienceNewsFailed: false,
        categoriesScienceNewsAreLoading: action.categoriesScienceNewsAreLoading,
      };
    }

    case CATEGORIES_SPORT_HAVE_BEEN_LOADED_SUCCESSFULLY: {
      return {
        ...state,
        categoriesSportNews: action.categoriesSportNews,
        categoriesSportNewsFailed: false,
        categoriesSportNewsAreLoading: false,
      };
    }

    case CATEGORIES_SPORT_HAVE_BEEN_LOADED_WITH_ERROR: {
      return {
        ...state,
        categoriesSportNews: [],
        categoriesSportNewsFailed: action.categoriesSportNewsFailed,
        categoriesSportNewsAreLoading: false,
      };
    }

    case CATEGORIES_SPORT_ARE_LOADING: {
      return {
        ...state,
        categoriesSportNews: [],
        categoriesSportNewsFailed: false,
        categoriesSportNewsAreLoading: action.categoriesSportNewsAreLoading,
      };
    }

    case CATEGORIES_TECHNOLOGY_HAVE_BEEN_LOADED_SUCCESSFULLY: {
      return {
        ...state,
        categoriesTechnologyNews: action.categoriesTechnologyNews,
        categoriesTechnologyNewsFailed: false,
        categoriesTechnologyNewsAreLoading: false,
      };
    }

    case CATEGORIES_TECHNOLOGY_HAVE_BEEN_LOADED_WITH_ERROR: {
      return {
        ...state,
        categoriesTechnologyNews: [],
        categoriesTechnologyNewsFailed: action.categoriesTechnologyNewsFailed,
        categoriesTechnologyNewsAreLoading: false,
      };
    }

    case CATEGORIES_TECHNOLOGY_ARE_LOADING: {
      return {
        ...state,
        categoriesTechnologyNews: [],
        categoriesTechnologyNewsFailed: false,
        categoriesTechnologyNewsAreLoading:
          action.categoriesTechnologyNewsAreLoading,
      };
    }

    default: {
      return state;
    }
  }
}
