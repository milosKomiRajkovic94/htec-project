import React from "react";

import { Header } from "./Header";

import { CATEGORIES } from "../constants/urls";

import { LANGUAGE_EN } from "../constants/stringConstants";

export default {
  title: "Example/Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const OrdinaryHeader = Template.bind({});
OrdinaryHeader.args = {
  changeLocation: () => {
    console.log("I have changed the location");
  },
  changeLanguage: () => {
    console.log("I have changed language");
  },
  currentLocation: CATEGORIES,
  currentLanguage: LANGUAGE_EN,
};
