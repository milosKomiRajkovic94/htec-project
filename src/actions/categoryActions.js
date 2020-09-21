import Axios from "axios";
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
} from "./actionTypes";

import {
  ENTERTAINMENT,
  GENERAL,
  HEALTH,
  SCIENCE,
  SPORTS,
  TECHNOLOGY,
  NEWS_API_KEY,
} from "../constants/stringConstants";

import { NEWS_API_URL } from "../constants/urls";

/* ENTERTAINMENT CATEGORY */

export function categoryEntertainmentNewsHaveLoadedSuccessfullyAction(
  categoriesEntertainmentNews
) {
  return {
    type: CATEGORIES_ENTERTAINMENT_HAVE_BEEN_LOADED_SUCCESSFULLY,
    categoriesEntertainmentNews,
  };
}

export function categoryEntertainmentLoadingFailedAction(
  categoriesEntertainmentNewsFailed
) {
  return {
    type: CATEGORIES_ENTERTAINMENT_HAVE_BEEN_LOADED_WITH_ERROR,
    categoriesEntertainmentNewsFailed,
  };
}

export function categoryEntertainmentAreLoadingAction(
  categoriesEntertainmentNewsAreLoading
) {
  return {
    type: CATEGORIES_ENTERTAINMENT_ARE_LOADING,
    categoriesEntertainmentNewsAreLoading,
  };
}

export function categoryEntertainmentNewsFetch(country, limit, page) {
  return (dispatch) => {
    dispatch(categoryEntertainmentAreLoadingAction(true));
    Axios.get(NEWS_API_URL, {
      params: {
        category: ENTERTAINMENT,
        apiKey: NEWS_API_KEY,
        pageSize: limit,
        country: country === "en" ? "gb" : country,
        page,
      },
    })
      .then((response) => {
        dispatch(
          categoryEntertainmentNewsHaveLoadedSuccessfullyAction(
            response.data.articles
          )
        );
      })
      .catch(() => {
        dispatch(categoryEntertainmentLoadingFailedAction(true));
      });
  };
}

/* GENERAL CATEGORY */

export function categoryGeneralNewsHaveLoadedSuccessfullyAction(
  categoriesGeneralNews
) {
  return {
    type: CATEGORIES_GENERAL_HAVE_BEEN_LOADED_SUCCESSFULLY,
    categoriesGeneralNews,
  };
}

export function categoryGeneralLoadingFailedAction(
  categoriesGeneralNewsFailed
) {
  return {
    type: CATEGORIES_GENERAL_HAVE_BEEN_LOADED_WITH_ERROR,
    categoriesGeneralNewsFailed,
  };
}

export function categoryGeneralAreLoadingAction(
  categoriesGeneralNewsAreLoading
) {
  return {
    type: CATEGORIES_GENERAL_ARE_LOADING,
    categoriesGeneralNewsAreLoading,
  };
}

export function categoryGeneralNewsFetch(country, limit, page) {
  return (dispatch) => {
    dispatch(categoryGeneralAreLoadingAction(true));
    Axios.get(NEWS_API_URL, {
      params: {
        category: GENERAL,
        apiKey: NEWS_API_KEY,
        pageSize: limit,
        country: country === "en" ? "gb" : country,
        page,
      },
    })
      .then((response) => {
        dispatch(
          categoryGeneralNewsHaveLoadedSuccessfullyAction(
            response.data.articles
          )
        );
      })
      .catch(() => {
        dispatch(categoryGeneralLoadingFailedAction(true));
      });
  };
}

/* HEALTH CATEGORY */

export function categoryHealthNewsHaveLoadedSuccessfullyAction(
  categoriesHealthNews
) {
  return {
    type: CATEGORIES_HEALTH_HAVE_BEEN_LOADED_SUCCESSFULLY,
    categoriesHealthNews,
  };
}

export function categoryHealthLoadingFailedAction(categoriesHealthNewsFailed) {
  return {
    type: CATEGORIES_HEALTH_HAVE_BEEN_LOADED_WITH_ERROR,
    categoriesHealthNewsFailed,
  };
}

export function categoryHealthAreLoadingAction(categoriesHealthNewsAreLoading) {
  return {
    type: CATEGORIES_HEALTH_ARE_LOADING,
    categoriesHealthNewsAreLoading,
  };
}

export function categoryHealthNewsFetch(country, limit, page) {
  return (dispatch) => {
    dispatch(categoryHealthAreLoadingAction(true));
    Axios.get(NEWS_API_URL, {
      params: {
        category: HEALTH,
        apiKey: NEWS_API_KEY,
        pageSize: limit,
        country: country === "en" ? "gb" : country,
        page,
      },
    })
      .then((response) => {
        dispatch(
          categoryHealthNewsHaveLoadedSuccessfullyAction(response.data.articles)
        );
      })
      .catch(() => {
        dispatch(categoryHealthLoadingFailedAction(true));
      });
  };
}

/* SCIENCE CATEGORY */

export function categoryScienceNewsHaveLoadedSuccessfullyAction(
  categoriesScienceNews
) {
  return {
    type: CATEGORIES_SCIENCE_HAVE_BEEN_LOADED_SUCCESSFULLY,
    categoriesScienceNews,
  };
}

export function categoryScienceLoadingFailedAction(
  categoriesScienceNewsFailed
) {
  return {
    type: CATEGORIES_SCIENCE_HAVE_BEEN_LOADED_WITH_ERROR,
    categoriesScienceNewsFailed,
  };
}

export function categoryScienceAreLoadingAction(
  categoriesScienceNewsAreLoading
) {
  return {
    type: CATEGORIES_SCIENCE_ARE_LOADING,
    categoriesScienceNewsAreLoading,
  };
}

export function categoryScienceNewsFetch(country, limit, page) {
  return (dispatch) => {
    dispatch(categoryScienceAreLoadingAction(true));
    Axios.get(NEWS_API_URL, {
      params: {
        category: SCIENCE,
        apiKey: NEWS_API_KEY,
        pageSize: limit,
        country: country === "en" ? "gb" : country,
        page,
      },
    })
      .then((response) => {
        dispatch(
          categoryScienceNewsHaveLoadedSuccessfullyAction(
            response.data.articles
          )
        );
      })
      .catch(() => {
        dispatch(categoryScienceLoadingFailedAction(true));
      });
  };
}

/* SPORTS CATEGORY */

export function categorySportsNewsHaveLoadedSuccessfullyAction(
  categoriesSportNews
) {
  return {
    type: CATEGORIES_SPORT_HAVE_BEEN_LOADED_SUCCESSFULLY,
    categoriesSportNews,
  };
}

export function categorySportsLoadingFailedAction(categoriesSportNewsFailed) {
  return {
    type: CATEGORIES_SPORT_HAVE_BEEN_LOADED_WITH_ERROR,
    categoriesSportNewsFailed,
  };
}

export function categorySportsAreLoadingAction(categoriesSportNewsAreLoading) {
  return {
    type: CATEGORIES_SPORT_ARE_LOADING,
    categoriesSportNewsAreLoading,
  };
}

export function categorySportsNewsFetch(country, limit, page) {
  return (dispatch) => {
    dispatch(categorySportsAreLoadingAction(true));
    Axios.get(NEWS_API_URL, {
      params: {
        category: SPORTS,
        apiKey: NEWS_API_KEY,
        pageSize: limit,
        country: country === "en" ? "gb" : country,
        page,
      },
    })
      .then((response) => {
        dispatch(
          categorySportsNewsHaveLoadedSuccessfullyAction(response.data.articles)
        );
      })
      .catch(() => {
        dispatch(categorySportsLoadingFailedAction(true));
      });
  };
}

/* TECHNOLOGY CATEGORY */

export function categoryTechnologyNewsHaveLoadedSuccessfullyAction(
  categoriesTechnologyNews
) {
  return {
    type: CATEGORIES_TECHNOLOGY_HAVE_BEEN_LOADED_SUCCESSFULLY,
    categoriesTechnologyNews,
  };
}

export function categoryTechnologyLoadingFailedAction(
  categoriesTechnologyNewsFailed
) {
  return {
    type: CATEGORIES_TECHNOLOGY_HAVE_BEEN_LOADED_WITH_ERROR,
    categoriesTechnologyNewsFailed,
  };
}

export function categoryTechnologyAreLoadingAction(
  categoriesTechnologyNewsAreLoading
) {
  return {
    type: CATEGORIES_TECHNOLOGY_ARE_LOADING,
    categoriesTechnologyNewsAreLoading,
  };
}

export function categoryTechnologyNewsFetch(country, limit, page) {
  return (dispatch) => {
    dispatch(categoryTechnologyAreLoadingAction(true));
    Axios.get(NEWS_API_URL, {
      params: {
        category: TECHNOLOGY,
        apiKey: NEWS_API_KEY,
        pageSize: limit,
        country: country === "en" ? "gb" : country,
        page,
      },
    })
      .then((response) => {
        dispatch(
          categoryTechnologyNewsHaveLoadedSuccessfullyAction(
            response.data.articles
          )
        );
      })
      .catch(() => {
        dispatch(categoryTechnologyLoadingFailedAction(true));
      });
  };
}
