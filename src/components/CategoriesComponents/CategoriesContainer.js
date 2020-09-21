import React, { useState, useEffect } from "react";

import DocumentTitle from "react-document-title";

import { useTranslation } from "react-i18next";

import { bindActionCreators } from "redux";

import { connect } from "react-redux";

import {
  categoryEntertainmentNewsFetch,
  categoryGeneralNewsFetch,
  categoryHealthNewsFetch,
  categoryScienceNewsFetch,
  categorySportsNewsFetch,
  categoryTechnologyNewsFetch,
} from "../../actions/categoryActions";

import Loader from "../../utils/Loader";

import {
  ENTERTAINMENT,
  GENERAL,
  HEALTH,
  SCIENCE,
  SPORTS,
  TECHNOLOGY,
} from "../../constants/stringConstants";

import CategorySlider from "./CategorySlider";

import {
  setAreLanguagesDisabled,
  setRedirectedToSpecificCategory,
} from "../../actions/configActions";

import ArticleDetails from "../../utils/ArticleDetails";

import Article from "../../utils/Article";

const CategoriesContainer = ({
  categoriesEntertainmentNews,
  categoriesEntertainmentNewsFailed,
  categoriesEntertainmentNewsAreLoading,
  categoriesGeneralNews,
  categoriesGeneralNewsFailed,
  categoriesGeneralNewsAreLoading,
  categoriesHealthNews,
  categoriesHealthNewsFailed,
  categoriesHealthNewsAreLoading,
  categoriesScienceNews,
  categoriesScienceNewsFailed,
  categoriesScienceNewsAreLoading,
  categoriesSportNews,
  categoriesSportNewsFailed,
  categoriesSportNewsAreLoading,
  categoriesTechnologyNews,
  categoriesTechnologyNewsFailed,
  categoriesTechnologyNewsAreLoading,
  currentLocation,
  currentLanguage,
  categoryEntertainmentNewsFetchAction,
  categoryGeneralNewsFetchAction,
  categoryHealthNewsFetchAction,
  categoryScienceNewsFetchAction,
  categorySportsNewsFetchAction,
  categoryTechnologyNewsFetchAction,
  setAreLanguagesDisabledAction,
  setRedirectedToSpecificCategoryAction,
  redirectedToSpecificCategory,
  currentSpecificCategory,
}) => {
  const { t } = useTranslation();
  const [currentLocationLocally, setCurrentLocationLocally] = useState("");
  const [currentLanguageLocally, setCurrentLanguageLocally] = useState("");
  const [redirectedToCategory, setRedirectedToCategory] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("");
  const [isMorePressed, setIsMorePressed] = useState(false);
  const [singleArticleDetailsData, setSingleArticleDetailsData] = useState({});

  function onMore(data) {
    setIsMorePressed(true);
    setAreLanguagesDisabledAction(true);
    setSingleArticleDetailsData(data);
  }

  function onBack() {
    setIsMorePressed(false);
    setAreLanguagesDisabledAction(false);
    setSingleArticleDetailsData({});
  }

  function categoryHasBeenClicked(clickedCategory) {
    if (clickedCategory === ENTERTAINMENT) {
      categoryEntertainmentNewsFetchAction(currentLanguageLocally);
    }

    if (clickedCategory === GENERAL) {
      categoryGeneralNewsFetchAction(currentLanguageLocally);
    }

    if (clickedCategory === HEALTH) {
      categoryHealthNewsFetchAction(currentLanguageLocally);
    }

    if (clickedCategory === SCIENCE) {
      categoryScienceNewsFetchAction(currentLanguageLocally);
    }

    if (clickedCategory === SPORTS) {
      categorySportsNewsFetchAction(currentLanguageLocally);
    }

    if (clickedCategory === TECHNOLOGY) {
      categoryTechnologyNewsFetchAction(currentLanguageLocally);
    }

    setRedirectedToCategory(true);
    setCurrentCategory(clickedCategory);
    setRedirectedToSpecificCategoryAction(true, clickedCategory);
  }

  useEffect(() => {
    if (
      (currentLocation !== currentLocationLocally ||
        currentLanguage !== currentLanguageLocally) &&
      !redirectedToSpecificCategory
    ) {
      categoryEntertainmentNewsFetchAction(currentLanguage, 5, 1);
      categoryGeneralNewsFetchAction(currentLanguage, 5, 1);
      categoryHealthNewsFetchAction(currentLanguage, 5, 1);
      categoryScienceNewsFetchAction(currentLanguage, 5, 1);
      categorySportsNewsFetchAction(currentLanguage, 5, 1);
      categoryTechnologyNewsFetchAction(currentLanguage, 5, 1);
      setCurrentLocationLocally(currentLocation);
      setCurrentLanguageLocally(currentLanguage);
    } else if (redirectedToSpecificCategory) {
      categoryEntertainmentNewsFetchAction(currentLanguage);
      categoryGeneralNewsFetchAction(currentLanguage);
      categoryHealthNewsFetchAction(currentLanguage);
      categoryScienceNewsFetchAction(currentLanguage);
      categorySportsNewsFetchAction(currentLanguage);
      categoryTechnologyNewsFetchAction(currentLanguage);
      setCurrentLocationLocally(currentLocation);
      setCurrentLanguageLocally(currentLanguage);
      setCurrentCategory(currentSpecificCategory);
      setRedirectedToCategory(true);
    }
  }, [
    currentLocationLocally,
    currentLanguageLocally,
    categoryEntertainmentNewsFetchAction,
    categoryGeneralNewsFetchAction,
    categoryHealthNewsFetchAction,
    categoryScienceNewsFetchAction,
    categorySportsNewsFetchAction,
    categoryTechnologyNewsFetchAction,
    currentLanguage,
    currentLocation,
    currentSpecificCategory,
    redirectedToSpecificCategory,
  ]);

  if (
    categoriesEntertainmentNewsAreLoading ||
    categoriesGeneralNewsAreLoading ||
    categoriesHealthNewsAreLoading ||
    categoriesScienceNewsAreLoading ||
    categoriesSportNewsAreLoading ||
    categoriesTechnologyNewsAreLoading
  ) {
    return (
      <DocumentTitle title={`HTEC App - ${t("categories")}`}>
        <Loader classNameOfWrapper="centered" text={t("loading")} />
      </DocumentTitle>
    );
  }

  if (
    categoriesEntertainmentNewsFailed ||
    categoriesGeneralNewsFailed ||
    categoriesHealthNewsFailed ||
    categoriesScienceNewsFailed ||
    categoriesSportNewsFailed ||
    categoriesTechnologyNewsFailed
  ) {
    return (
      <DocumentTitle title={`HTEC App - ${t("categories")}`}>
        <div className="centered">{t("failedLoading")}</div>
      </DocumentTitle>
    );
  }

  if (isMorePressed) {
    return (
      <DocumentTitle title={`HTEC App - ${t("categories")}`}>
        <div className="containerBelow">
          <ArticleDetails
            onBack={onBack}
            singleArticleData={singleArticleDetailsData}
          />
        </div>
      </DocumentTitle>
    );
  }

  if (!isMorePressed && !redirectedToCategory) {
    return (
      <DocumentTitle title={`HTEC App - ${t("categories")}`}>
        <div className="containerBelow containerSliderBelow">
          <div className="titleOfContainerBelow">
            <li>{t("top5News")}</li>
          </div>
          <div className="categoriesListsContainer">
            <div className="categoriesListContainer">
              <CategorySlider
                dataArray={categoriesEntertainmentNews}
                categoryTitle={ENTERTAINMENT}
                onMoreClick={onMore}
                onCategoryClick={categoryHasBeenClicked}
              />
            </div>
            <div className="categoriesListContainer">
              <CategorySlider
                dataArray={categoriesGeneralNews}
                categoryTitle={GENERAL}
                onMoreClick={onMore}
                onCategoryClick={categoryHasBeenClicked}
              />
            </div>
            <div className="categoriesListContainer">
              <CategorySlider
                dataArray={categoriesHealthNews}
                categoryTitle={HEALTH}
                onMoreClick={onMore}
                onCategoryClick={categoryHasBeenClicked}
              />
            </div>
            <div className="categoriesListContainer">
              <CategorySlider
                dataArray={categoriesScienceNews}
                categoryTitle={SCIENCE}
                onMoreClick={onMore}
                onCategoryClick={categoryHasBeenClicked}
              />
            </div>
            <div className="categoriesListContainer">
              <CategorySlider
                dataArray={categoriesSportNews}
                categoryTitle={SPORTS}
                onMoreClick={onMore}
                onCategoryClick={categoryHasBeenClicked}
              />
            </div>
            <div className="categoriesListContainer">
              <CategorySlider
                dataArray={categoriesTechnologyNews}
                categoryTitle={TECHNOLOGY}
                onMoreClick={onMore}
                onCategoryClick={categoryHasBeenClicked}
              />
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }

  let currentNews = [];

  if (currentCategory === ENTERTAINMENT) {
    currentNews = categoriesEntertainmentNews;
  }

  if (currentCategory === GENERAL) {
    currentNews = categoriesGeneralNews;
  }

  if (currentCategory === SCIENCE) {
    currentNews = categoriesScienceNews;
  }

  if (currentCategory === SPORTS) {
    currentNews = categoriesSportNews;
  }

  if (currentCategory === TECHNOLOGY) {
    currentNews = categoriesTechnologyNews;
  }

  if (currentCategory === HEALTH) {
    currentNews = categoriesHealthNews;
  }

  return (
    <DocumentTitle title={`HTEC App - ${t("topNews")}`}>
      <div className="containerBelow">
        <li className="titleOfContainerBelow">
          {`${t("top")} ${currentCategory} ${t("newsFrom")} `}
        </li>
        <div className="articlesContainer">
          {currentNews &&
            currentNews.map((news) => {
              return (
                <Article
                  key={`topNews${currentLanguage}${news.source.name}${news.title}`}
                  singleArticleData={news}
                  onMore={onMore}
                />
              );
            })}
        </div>
      </div>
    </DocumentTitle>
  );
};

const mapStateToProps = (state) => {
  return {
    categoriesEntertainmentNews:
      state.categoriesReducer.categoriesEntertainmentNews,
    categoriesEntertainmentNewsFailed:
      state.categoriesReducer.categoriesEntertainmentNewsFailed,
    categoriesEntertainmentNewsAreLoading:
      state.categoriesReducer.categoriesEntertainmentNewsAreLoading,
    categoriesGeneralNews: state.categoriesReducer.categoriesGeneralNews,
    categoriesGeneralNewsFailed:
      state.categoriesReducer.categoriesGeneralNewsFailed,
    categoriesGeneralNewsAreLoading:
      state.categoriesReducer.categoriesGeneralNewsAreLoading,
    categoriesHealthNews: state.categoriesReducer.categoriesHealthNews,
    categoriesHealthNewsFailed:
      state.categoriesReducer.categoriesHealthNewsFailed,
    categoriesHealthNewsAreLoading:
      state.categoriesReducer.categoriesHealthNewsAreLoading,
    categoriesScienceNews: state.categoriesReducer.categoriesScienceNews,
    categoriesScienceNewsFailed:
      state.categoriesReducer.categoriesScienceNewsFailed,
    categoriesScienceNewsAreLoading:
      state.categoriesReducer.categoriesScienceNewsAreLoading,
    categoriesSportNews: state.categoriesReducer.categoriesSportNews,
    categoriesSportNewsFailed:
      state.categoriesReducer.categoriesSportNewsFailed,
    categoriesSportNewsAreLoading:
      state.categoriesReducer.categoriesSportNewsAreLoading,
    categoriesTechnologyNews: state.categoriesReducer.categoriesTechnologyNews,
    categoriesTechnologyNewsFailed:
      state.categoriesReducer.categoriesTechnologyNewsFailed,
    categoriesTechnologyNewsAreLoading:
      state.categoriesReducer.categoriesTechnologyNewsAreLoading,
    currentLocation: state.configReducer.currentLocation,
    currentLanguage: state.configReducer.currentLanguage,
    redirectedToSpecificCategory:
      state.configReducer.redirectedToSpecificCategory,
    currentSpecificCategory: state.configReducer.currentSpecificCategory,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    categoryEntertainmentNewsFetchAction: bindActionCreators(
      categoryEntertainmentNewsFetch,
      dispatch
    ),
    categoryGeneralNewsFetchAction: bindActionCreators(
      categoryGeneralNewsFetch,
      dispatch
    ),
    categoryHealthNewsFetchAction: bindActionCreators(
      categoryHealthNewsFetch,
      dispatch
    ),
    categoryScienceNewsFetchAction: bindActionCreators(
      categoryScienceNewsFetch,
      dispatch
    ),
    categorySportsNewsFetchAction: bindActionCreators(
      categorySportsNewsFetch,
      dispatch
    ),
    categoryTechnologyNewsFetchAction: bindActionCreators(
      categoryTechnologyNewsFetch,
      dispatch
    ),
    setAreLanguagesDisabledAction: bindActionCreators(
      setAreLanguagesDisabled,
      dispatch
    ),
    setRedirectedToSpecificCategoryAction: bindActionCreators(
      setRedirectedToSpecificCategory,
      dispatch
    ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesContainer);
