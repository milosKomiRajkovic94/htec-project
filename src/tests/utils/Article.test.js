import React from "react";

import ReactDOM from "react-dom";

import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom";
import Article from "../../utils/Article";

afterEach(cleanup);

it("renders without crashing with four required props", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Article
      singleArticleData={{
        title: "something",
        description: "something",
        url: "something",
      }}
    />,
    div
  );
});

it("renders language buttons correctly", () => {
  const { getByTestId } = render(
    <Article
      singleArticleData={{
        title: "something",
        description: "something",
        url: "something",
      }}
    />
  );
  expect(getByTestId("more")).toHaveTextContent("more");
});

it("matches snapshot", () => {
  const tree = renderer
    .create(
      <Article
        singleArticleData={{
          title: "something",
          description: "something",
          url: "something",
        }}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
