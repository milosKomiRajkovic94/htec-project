import React, { useState, useEffect } from "react";

import DocumentTitle from "react-document-title";

import { useTranslation } from "react-i18next";

import { connect } from "react-redux";

import { bindActionCreators } from "redux";

import { loadCurrentTopNewsFromCountry } from "../../actions/topNewsActions";

import { setAreLanguagesDisabled } from "../../actions/configActions";

import Loader from "../../utils/Loader";

import Article from "../../utils/Article";

import ArticleDetails from "../../utils/ArticleDetails";

const TopNewsContainer = ({
  topNews,
  topNewsLoadingFailed,
  topNewsAreLoading,
  currentLocation,
  currentLanguage,
  loadCurrentTopNewsFromCountryAction,
  setAreLanguagesDisabledAction,
}) => {
  const { t } = useTranslation();
  const [currentLocationLocally, setCurrentLocationLocally] = useState("");
  const [currentLanguageLocally, setCurrentLanguageLocally] = useState("");
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

  useEffect(() => {
    if (
      currentLocation !== currentLocationLocally ||
      currentLanguage !== currentLanguageLocally
    ) {
      setCurrentLocationLocally(currentLocation);
      setCurrentLanguageLocally(currentLanguage);
      loadCurrentTopNewsFromCountryAction(currentLanguage);
    }
  }, [
    currentLocation,
    currentLocationLocally,
    currentLanguageLocally,
    currentLanguage,
    loadCurrentTopNewsFromCountryAction,
  ]);

  if (topNewsAreLoading) {
    return (
      <DocumentTitle title={`HTEC App - ${t("topNews")}`}>
        <Loader classNameOfWrapper="centered" text={t("loading")} />
      </DocumentTitle>
    );
  }

  if (topNewsLoadingFailed) {
    return (
      <DocumentTitle title={`HTEC App - ${t("topNews")}`}>
        <div className="centered">{t("failedLoading")}</div>
      </DocumentTitle>
    );
  }

  if (!isMorePressed) {
    return (
      <DocumentTitle title={`HTEC App - ${t("topNews")}`}>
        <div className="containerBelow">
          <li className="titleOfContainerBelow">{t("topNewsFrom")}</li>
          <div className="articlesContainer">
            {topNews &&
              topNews.map((news) => {
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
  }

  return (
    <DocumentTitle title={`HTEC App - ${t("topNews")}`}>
      <div className="containerBelow">
        <ArticleDetails
          onBack={onBack}
          singleArticleData={singleArticleDetailsData}
        />
      </div>
    </DocumentTitle>
  );
};

const mapStateToProps = (state) => {
  return {
    topNews: state.topNewsReducer.topNews,
    topNewsLoadingFailed: state.topNewsReducer.topNewsLoadingFailed,
    topNewsAreLoading: state.topNewsReducer.topNewsAreLoading,
    currentLocation: state.configReducer.currentLocation,
    currentLanguage: state.configReducer.currentLanguage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadCurrentTopNewsFromCountryAction: bindActionCreators(
      loadCurrentTopNewsFromCountry,
      dispatch
    ),
    setAreLanguagesDisabledAction: bindActionCreators(
      setAreLanguagesDisabled,
      dispatch
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopNewsContainer);
