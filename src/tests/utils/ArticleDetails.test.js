import React from "react";

import ReactDOM from "react-dom";

import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom";
import ArticleDetails from "../../utils/ArticleDetails";

afterEach(cleanup);

it("renders without crashing with four required props", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <ArticleDetails
      singleArticleData={{
        title: "something",
        content: "something",
        url: "something",
      }}
    />,
    div
  );
});

it("renders language buttons correctly", () => {
  const { getByTestId } = render(
    <ArticleDetails
      singleArticleData={{
        title: "something",
        content: "something",
        url: "something",
      }}
    />
  );
  expect(getByTestId("back")).toHaveTextContent("backToList");
});

it("matches snapshot", () => {
  const tree = renderer
    .create(
      <ArticleDetails
        singleArticleData={{
          title: "something",
          content: "something",
          url: "something",
        }}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
