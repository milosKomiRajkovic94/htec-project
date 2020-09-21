import React from "react";

import { SearchContainer } from "./SearchContainer";

export default {
  title: "Example/Search",
  component: SearchContainer,
};

const Template = (args) => <SearchContainer {...args} />;

export const OrdinarySearchContainer = Template.bind({});

OrdinarySearchContainer.args = {};
