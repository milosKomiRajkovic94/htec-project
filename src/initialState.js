import { TOP_NEWS } from "./constants/urls";

import { LANGUAGE_EN } from "./constants/stringConstants";

export default {
  configReducerState: {
    currentLocation: TOP_NEWS,
    currentLanguage: LANGUAGE_EN,
    areLanguagesDisabled: false,
    redirectedToSpecificCategory: false,
    currentSpecificCategory: "",
  },
  topNewsReducerState: {
    topNews: [],
    topNewsLoadingFailed: false,
    topNewsAreLoading: false,
  },
  categoryReducerState: {
    categoriesEntertainmentNews: [],
    categoriesEntertainmentNewsFailed: false,
    categoriesEntertainmentNewsAreLoading: false,
    categoriesGeneralNews: [],
    categoriesGeneralNewsFailed: false,
    categoriesGeneralNewsAreLoading: false,
    categoriesHealthNews: [],
    categoriesHealthNewsFailed: false,
    categoriesHealthNewsAreLoading: false,
    categoriesScienceNews: [],
    categoriesScienceNewsFailed: false,
    categoriesScienceNewsAreLoading: false,
    categoriesSportNews: [],
    categoriesSportNewsFailed: false,
    categoriesSportNewsAreLoading: false,
    categoriesTechnologyNews: [],
    categoriesTechnologyNewsFailed: false,
    categoriesTechnologyNewsAreLoading: false,
  },
  searchReducerState: {
    searchedNews: [],
    searchedNewsLoadingFailed: false,
    searchedNewsAreLoading: false,
  },
};
