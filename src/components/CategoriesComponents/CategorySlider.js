/* eslint-disable prefer-const */
import React, { useState } from "react";

import PropTypes from "prop-types";

import { capitalizeFirstLetter } from "../../utils/capitalize-first-letter";

import Article from "../../utils/Article";

const CategorySlider = ({
  onCategoryClick,
  onMoreClick,
  dataArray,
  categoryTitle,
}) => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(true);
  let [currentIndex, setCurrentIndex] = useState(0);

  function onMoveLeft() {
    currentIndex -= 1;
    setCurrentIndex(currentIndex);
  }

  function onMoveRight() {
    currentIndex += 1;
    setCurrentIndex(currentIndex);
  }

  return (
    <div className="categorySliderContainer">
      <div className="categorySliderTitle">
        <span className="categorySliderTitleSpan cursorPointer">
          <li />
          <span
            onClick={() => onCategoryClick(categoryTitle.toLowerCase())}
            onKeyPress={() => onCategoryClick()}
            role="button"
            tabIndex={0}
          >
            {capitalizeFirstLetter(categoryTitle.toLowerCase())}
          </span>
        </span>
        <i
          className={
            isMenuExpanded
              ? "icon-arrow-down cursorPointer expandIcon noselect"
              : "icon-arrow-up cursorPointer expandIcon noselect"
          }
          onClick={() => setIsMenuExpanded(!isMenuExpanded)}
          onKeyPress={() => setIsMenuExpanded(!isMenuExpanded)}
          tabIndex={0}
          role="button"
        />
      </div>
      <div
        className={
          isMenuExpanded ? "categorySlidesFuncContainer" : "displayNone"
        }
      >
        <span
          className={
            currentIndex !== 0
              ? "categorySliderMoverLeft cursorPointer noselect"
              : "categorySliderMoveLeft cursorPointer visibilityHidden noselect"
          }
          onKeyPress={() => onMoveLeft()}
          onClick={() => onMoveLeft()}
          tabIndex={0}
          role="button"
          data-testid="moveLeftButton"
        >
          {"<"}
        </span>
        <div className="categorySlidesContainer">
          {dataArray.map((news, index) => {
            return (
              <span
                className={
                  currentIndex === index ||
                  currentIndex + 1 === index ||
                  currentIndex + 2 === index
                    ? "categoryArticle animated fadeIn"
                    : "categoryArticle displayNone"
                }
                key={categoryTitle + news.title + news.description}
              >
                <Article
                  singleArticleData={news}
                  onMore={() => onMoreClick(news)}
                />
              </span>
            );
          })}
        </div>
        <span
          className={
            currentIndex !== dataArray.length - 1
              ? "categorySliderMoverRight cursorPointer noselect"
              : "categorySliderMoverRight cursorPointer visibilityHidden noselect"
          }
          onKeyPress={() => onMoveRight()}
          onClick={() => onMoveRight()}
          tabIndex={0}
          role="button"
          data-testid="moveRightButton"
        >
          {">"}
        </span>
      </div>
    </div>
  );
};

CategorySlider.propTypes = {
  onCategoryClick: PropTypes.func,
  onMoreClick: PropTypes.func,
  dataArray: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      urlToImage: PropTypes.string,
      description: PropTypes.string,
    })
  ),
  categoryTitle: PropTypes.string,
};

CategorySlider.defaultProps = {
  onCategoryClick: () => {},
  onMoreClick: () => {},
  dataArray: [],
  categoryTitle: "",
};

export default CategorySlider;
