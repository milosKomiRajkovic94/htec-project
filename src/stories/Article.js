import React, { useState, useRef } from "react";

import PropTypes from "prop-types";

import "./article.css";

export const Article = ({ singleArticleData, onMore }) => {
  const [popUpDialogWithFullTitle, setPopUpDialogWithFullTitle] = useState(
    false
  );
  const titleRef = useRef(null);

  function onMouseOverOrLeave() {
    setPopUpDialogWithFullTitle(!popUpDialogWithFullTitle);
  }

  function onFocus() {
    titleRef.focus();
  }

  return (
    <div className="articleWrapper">
      <div
        className={
          popUpDialogWithFullTitle
            ? "animated fadeIn singleArticleFullTitle"
            : "displayNone"
        }
        style={
          document.getElementById("originalTitle")
            ? {
                top: `${
                  document
                    .getElementById("originalTitle")
                    .getBoundingClientRect().top + window.scrollY
                }px`,
                left: `${
                  document
                    .getElementById("originalTitle")
                    .getBoundingClientRect().left + 260
                }px`,
              }
            : {}
        }
      >
        {singleArticleData.title}
      </div>
      <div className="singleArticle">
        <div
          className={
            singleArticleData.title
              ? "singleArticleTitle"
              : "singleArticleTitle visibilityHidden"
          }
          onMouseOver={onMouseOverOrLeave}
          onMouseLeave={onMouseOverOrLeave}
          onFocus={onFocus}
          role="banner"
          id="originalTitle"
          ref={titleRef}
        >
          {singleArticleData.title.length > 50
            ? `${singleArticleData.title.substring(0, 47)}...`
            : singleArticleData.title}
        </div>
        <div className="singleArticleImage">
          <img
            src={
              singleArticleData.urlToImage
                ? singleArticleData.urlToImage
                : require("../assets/images/boxImage.png")
            }
            className="singleArticleImageTag"
            alt="singleArticleImageTag"
          />
        </div>
        <div
          className={
            singleArticleData.description
              ? "singleArticleDescription"
              : "singleArticleDescription visibilityHidden"
          }
        >
          {singleArticleData.description}
        </div>
        <div className="singleArticleMoreOption">
          <span
            className="cursorPointer"
            role="button"
            onClick={() => onMore()}
            onKeyPress={() => onMore()}
            tabIndex={0}
          >
            {"More >"}
          </span>
        </div>
      </div>
    </div>
  );
};

Article.propTypes = {
  singleArticleData: PropTypes.shape({
    title: PropTypes.string,
    urlToImage: PropTypes.string,
    description: PropTypes.string,
  }),
  onMore: PropTypes.func,
};

Article.defaultProps = {
  singleArticleData: PropTypes.shape({
    title: "",
    urlToImage: "",
    description: "",
  }),
  onMore: () => {},
};
