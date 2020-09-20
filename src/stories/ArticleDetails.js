import React from "react";

import PropTypes from "prop-types";

import "./articleDetails.css";

export const ArticleDetails = ({ singleArticleData, onBack }) => {
  return (
    <div className="singleArticleDetails">
      <div
        className={
          singleArticleData.title
            ? "singleArticleDetailsTitle"
            : "singleArticleDetailsTitle visibilityHidden"
        }
      >
        <li>{singleArticleData.title}</li>
      </div>
      <div className="singleArticleDetailsImage">
        <img
          src={
            singleArticleData.urlToImage
              ? singleArticleData.urlToImage
              : require("../assets/images/boxImage.png")
          }
          alt="singleArticleDetailsImageTag"
          className="singleArticleDetailsImageTag"
        />
      </div>
      <div
        className={
          singleArticleData.content
            ? "singleArticleDetailsContent"
            : "singleArticleDetailsContent visibilityHidden"
        }
      >
        {singleArticleData.content}
      </div>
      <div className="singleArticleDetailsContentBack">
        <span
          className="cursorPointer"
          onClick={() => onBack()}
          onKeyPress={() => onBack()}
          tabIndex={0}
          role="button"
        >
          {"< Back to list"}
        </span>
      </div>
    </div>
  );
};

ArticleDetails.propTypes = {
  singleArticleData: PropTypes.shape({
    title: PropTypes.string,
    urlToImage: PropTypes.string,
    content: PropTypes.string,
  }),
  onBack: PropTypes.func,
};

ArticleDetails.defaultProps = {
  singleArticleData: PropTypes.shape({
    title: "",
    urlToImage: "",
    content: "",
  }),
  onBack: () => {},
};
