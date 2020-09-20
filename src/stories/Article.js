import React from "react";

import PropTypes from "prop-types";

import "./article.css";

export const Article = ({ singleArticleData, onMore }) => {
  return (
    <div className="singleArticle">
      <div
        className={
          singleArticleData.title
            ? "singleArticleTitle"
            : "singleArticleTitle visibilityHidden"
        }
      >
        {singleArticleData.title}
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
