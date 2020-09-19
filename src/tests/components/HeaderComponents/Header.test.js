import React from "react";

import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom";
import Header from "../../../components/HeaderComponents/Header";

import configureStore from "../../../store";

const store = configureStore();

afterEach(cleanup);

it("renders without crashing with four required props", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <Header
        changeLanguage={() => {
          console.log("Change language");
        }}
        changeLocation={() => {
          console.log("Change location");
        }}
      />
    </Provider>,
    div
  );
});

it("renders language buttons correctly", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Header
        changeLanguage={() => {
          console.log("Change language");
        }}
        changeLocation={() => {
          console.log("Change location");
        }}
      />
    </Provider>
  );
  expect(getByTestId("gbLanguage")).toHaveTextContent("gb");
  expect(getByTestId("usLanguage")).toHaveTextContent("us");
});

it("matches snapshot", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Header
          changeLanguage={() => {
            console.log("Change language");
          }}
          changeLocation={() => {
            console.log("Change location");
          }}
        />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
