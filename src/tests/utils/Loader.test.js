import React from "react";

import ReactDOM from "react-dom";

import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom";
import Loader from "../../utils/Loader";

afterEach(cleanup);

it("renders without crashing without props", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Loader />, div);
});

it("matches snapshot", () => {
  const tree = renderer
    .create(
      <Loader
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
