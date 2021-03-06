import React from "react";
import PropTypes from "prop-types";

import "./header.css";

import { TOP_NEWS, CATEGORIES, SEARCH } from "../constants/urls";

import { LANGUAGE_EN, LANGUAGE_US } from "../constants/stringConstants";

export const Header = ({
  changeLocation,
  changeLanguage,
  currentLocation,
  currentLanguage,
}) => {
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
          Top News
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
          Categories
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
          Search
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
          tabIndex={0}
          onKeyPress={() => changeLanguage(LANGUAGE_EN)}
        >
          GB
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
          tabIndex={0}
          onKeyPress={() => changeLanguage(LANGUAGE_US)}
        >
          US
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  changeLocation: PropTypes.func.isRequired,
  changeLanguage: PropTypes.func.isRequired,
};
