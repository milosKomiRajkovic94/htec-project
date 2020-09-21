import React from "react";
import PropTypes from "prop-types";

import { useTranslation } from "react-i18next";

import { connect } from "react-redux";

import { TOP_NEWS, CATEGORIES, SEARCH, HOME } from "../../constants/urls";

import { LANGUAGE_EN, LANGUAGE_US } from "../../constants/stringConstants";

const Header = ({
  changeLocation,
  changeLanguage,
  currentLanguage,
  areLanguagesDisabled,
  location,
}) => {
  const { t } = useTranslation();

  const classNameForDisablement = areLanguagesDisabled
    ? "headerOptionHighlightedDisabled"
    : "";

  return (
    <header className="header">
      <div className="headerThreeLeftOptions">
        <div
          onClick={() => changeLocation(TOP_NEWS)}
          className={
            location.pathname === TOP_NEWS || location.pathname === HOME
              ? "headerOption headerOptionHighlighted"
              : "headerOption"
          }
          role="button"
          tabIndex={0}
          onKeyPress={() => changeLocation(TOP_NEWS)}
        >
          {t("topNews")}
        </div>
        <div
          onClick={() => changeLocation(CATEGORIES)}
          className={
            location.pathname === CATEGORIES
              ? "headerOption headerOptionHighlighted"
              : "headerOption"
          }
          role="button"
          tabIndex={0}
          onKeyPress={() => changeLocation(CATEGORIES)}
        >
          {t("categories")}
        </div>
        <div
          onClick={() => changeLocation(SEARCH)}
          className={
            location.pathname === SEARCH
              ? "headerOption headerOptionHighlighted"
              : "headerOption"
          }
          role="button"
          tabIndex={0}
          onKeyPress={() => changeLocation(SEARCH)}
        >
          {t("search")}
        </div>
      </div>
      <div className="headerTwoRightOptions">
        <div
          onClick={() => {
            if (!areLanguagesDisabled) {
              changeLanguage(LANGUAGE_EN);
            }
          }}
          className={
            currentLanguage === LANGUAGE_EN
              ? `headerOption headerOptionHighlighted ${classNameForDisablement}`
              : `headerOption ${classNameForDisablement}`
          }
          role="button"
          id="gbLanguage"
          data-testid="gbLanguage"
          tabIndex={0}
          onKeyPress={() => {
            if (!areLanguagesDisabled) {
              changeLanguage(LANGUAGE_EN);
            }
          }}
        >
          {t("gb")}
        </div>
        <div
          onClick={() => {
            if (!areLanguagesDisabled) {
              changeLanguage(LANGUAGE_US);
            }
          }}
          className={
            currentLanguage === LANGUAGE_US
              ? `headerOption headerOptionHighlighted ${classNameForDisablement}`
              : `headerOption ${classNameForDisablement}`
          }
          role="button"
          id="usLanguage"
          data-testid="usLanguage"
          tabIndex={0}
          onKeyPress={() => {
            if (!areLanguagesDisabled) {
              changeLanguage(LANGUAGE_US);
            }
          }}
        >
          {t("us")}
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  changeLocation: PropTypes.func.isRequired,
  changeLanguage: PropTypes.func.isRequired,
  currentLanguage: PropTypes.string.isRequired,
  location: PropTypes.string,
};

Header.defaultProps = {
  location: "",
};

const mapStateToProps = (state) => {
  return {
    currentLanguage: state.configReducer.currentLanguage,
    areLanguagesDisabled: state.configReducer.areLanguagesDisabled,
  };
};

export default connect(mapStateToProps)(Header);
