import React from "react";
import PropTypes from "prop-types";

import { useTranslation } from "react-i18next";

import { connect } from "react-redux";

import { TOP_NEWS, CATEGORIES, SEARCH } from "../../constants/urls";

import { LANGUAGE_EN, LANGUAGE_US } from "../../constants/stringConstants";

const Header = ({
  changeLocation,
  changeLanguage,
  currentLocation,
  currentLanguage,
}) => {
  const { t } = useTranslation();

  return (
    <header className="header">
      <div className="headerThreeLeftOptions">
        <div
          onClick={() => changeLocation(TOP_NEWS)}
          className={
            currentLocation === TOP_NEWS
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
            currentLocation === CATEGORIES
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
            currentLocation === SEARCH
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
          onClick={() => changeLanguage(LANGUAGE_EN)}
          className={
            currentLanguage === LANGUAGE_EN
              ? "headerOption headerOptionHighlighted"
              : "headerOption"
          }
          role="button"
          id="gbLanguage"
          data-testid="gbLanguage"
          tabIndex={0}
          onKeyPress={() => changeLanguage(LANGUAGE_EN)}
        >
          {t("gb")}
        </div>
        <div
          onClick={() => changeLanguage(LANGUAGE_US)}
          className={
            currentLanguage === LANGUAGE_US
              ? "headerOption headerOptionHighlighted"
              : "headerOption"
          }
          role="button"
          id="usLanguage"
          data-testid="usLanguage"
          tabIndex={0}
          onKeyPress={() => changeLanguage(LANGUAGE_US)}
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
  currentLocation: PropTypes.string.isRequired,
  currentLanguage: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    currentLocation: state.configReducer.currentLocation,
    currentLanguage: state.configReducer.currentLanguage,
  };
};

export default connect(mapStateToProps)(Header);
