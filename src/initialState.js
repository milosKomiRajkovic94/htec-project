import { TOP_NEWS } from "./constants/urls";

import { LANGUAGE_EN } from "./constants/stringConstants";

export default {
  configReducerState: {
    currentLocation: TOP_NEWS,
    currentLanguage: LANGUAGE_EN,
    areLanguagesDisabled: false,
  },
  topNewsReducerState: {
    topNews: [],
    topNewsLoadingFailed: false,
    topNewsAreLoading: false,
  },
};
