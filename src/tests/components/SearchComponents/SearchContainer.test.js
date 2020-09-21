import React from "react";

import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom";
import SearchContainer from "../../../components/SearchComponents/SearchContainer";

import configureStore from "../../../store";

const store = configureStore();

afterEach(cleanup);

it("renders without crashing withouth props", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <SearchContainer />
    </Provider>,
    div
  );
});

it("renders navigation buttons correctly", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <SearchContainer />
    </Provider>
  );
  expect(getByTestId("search")).toHaveTextContent("searchTopNewsByTheTerm");
});

it("matches snapshot", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <SearchContainer />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
