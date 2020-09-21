import React, { useState, useEffect } from "react";

import DocumentTitle from "react-document-title";

import { useTranslation } from "react-i18next";

import { connect } from "react-redux";

import { bindActionCreators } from "redux";

import { searchNews } from "../../actions/searchActions";

import Loader from "../../utils/Loader";

import Article from "../../utils/Article";

import ArticleDetails from "../../utils/ArticleDetails";

import { setAreLanguagesDisabled } from "../../actions/configActions";

const SearchContainer = ({
  currentLanguage,
  searchNewsAction,
  searchedNews,
  searchedNewsLoadingFailed,
  searchedNewsAreLoading,
  setAreLanguagesDisabledAction,
}) => {
  const { t } = useTranslation();

  const [searchQuery, setSearchQuery] = useState("");
  const [currentLanguageLocally, setCurrentLanguageLocally] = useState("");
  const [isMorePressed, setIsMorePressed] = useState(false);
  const [singleArticleDetailsData, setSingleArticleDetailsData] = useState({});

  function handleInputChange(e) {
    setSearchQuery(e.target.value);
    searchNewsAction(e.target.value, currentLanguage);
  }

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

  useEffect(() => {
    if (currentLanguage !== currentLanguageLocally) {
      setCurrentLanguageLocally(currentLanguage);
      searchNewsAction(searchQuery, currentLanguage);
    }
  }, [
    currentLanguage,
    currentLanguageLocally,
    setCurrentLanguageLocally,
    searchNewsAction,
    searchQuery,
  ]);

  if (isMorePressed) {
    return (
      <DocumentTitle title={`HTEC App - ${t("search")}`}>
        <div className="containerBelow">
          <ArticleDetails
            onBack={onBack}
            singleArticleData={singleArticleDetailsData}
          />
        </div>
      </DocumentTitle>
    );
  }

  return (
    <DocumentTitle title={`HTEC App - ${t("search")}`}>
      <div className="containerBelow">
        <div className="titleOfContainerBelow" data-testid="search">
          <li>{t("searchTopNewsByTheTerm")}</li>
        </div>
        <form className="searchForm">
          <input
            placeholder={`${t("searchTerm")}...`}
            value={searchQuery}
            onChange={handleInputChange}
            className="searchTermInputField"
          />
        </form>
        <div
          className={
            !searchedNewsLoadingFailed && !searchedNewsAreLoading
              ? "articlesContainer"
              : "displayNone"
          }
        >
          {searchedNews &&
            searchedNews.map((news) => {
              return (
                <Article
                  key={`topNews${currentLanguage}${news.source.name}${news.title}`}
                  singleArticleData={news}
                  onMore={onMore}
                />
              );
            })}
        </div>
        <Loader
          classNameOfWrapper={
            searchedNewsAreLoading ? "centered" : "displayNone"
          }
          text={t("loading")}
        />
        <div className={searchedNewsLoadingFailed ? "centered" : "displayNone"}>
          {t("failedLoading")}
        </div>
      </div>
    </DocumentTitle>
  );
};

const mapStateToProps = (state) => {
  return {
    currentLanguage: state.configReducer.currentLanguage,
    searchedNews: state.searchReducer.searchedNews,
    searchedNewsLoadingFailed: state.searchReducer.searchedNewsLoadingFailed,
    searchedNewsAreLoading: state.searchReducer.searchedNewsAreLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchNewsAction: bindActionCreators(searchNews, dispatch),
    setAreLanguagesDisabledAction: bindActionCreators(
      setAreLanguagesDisabled,
      dispatch
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
