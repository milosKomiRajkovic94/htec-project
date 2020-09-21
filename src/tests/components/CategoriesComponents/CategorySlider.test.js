import React from "react";

import ReactDOM from "react-dom";

import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom";
import CategorySlider from "../../../components/CategoriesComponents/CategorySlider";

afterEach(cleanup);

it("renders without crashing withouth props", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CategorySlider />, div);
});

it("renders navigation buttons correctly", () => {
  const { getByTestId } = render(<CategorySlider />);
  expect(getByTestId("moveLeftButton")).toHaveTextContent("<");
  expect(getByTestId("moveRightButton")).toHaveTextContent(">");
});

it("matches snapshot", () => {
  const tree = renderer.create(<CategorySlider />).toJSON();
  expect(tree).toMatchSnapshot();
});
