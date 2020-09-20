import React from "react";

import { ArticleDetails } from "./ArticleDetails";

export default {
  title: "Example/ArticleDetails",
  component: ArticleDetails,
};

const Template = (args) => <ArticleDetails {...args} />;

export const SingleArticleDetails = Template.bind({});

SingleArticleDetails.args = {
  singleArticleData: {
    source: {
      id: null,
      name: "Daily Mail",
    },
    author: "By Frances Mulraney For Dailymail.com",
    title:
      "Joe Biden said in 2016 that it is a president's 'constitutional duty' to fill a SCOTUS seat - Daily Mail",
    description:
      "Joe Biden claimed in 2016 that it was the 'constitutional duty' of a president to name a Supreme Court nominee even in an election year despite his claim Friday that it should wait.",
    url:
      "https://www.dailymail.co.uk/news/article-8752197/Joe-Biden-said-2016-presidents-constitutional-duty-SCOTUS-seat.html",
    urlToImage:
      "https://i.dailymail.co.uk/1s/2020/09/20/07/33391224-0-image-a-29_1600582081393.jpg",
    publishedAt: "2020-09-20T06:40:14Z",
    content:
      "Joe Biden is accused of hypocrisy after a 2016 op-ed emerged in which he slammed Republicans for holding up a Supreme Court appointment, stating that it is the 'constitutional duty' of a president to… [+9457 chars]",
  },
  onBack: () => {
    console.log("Clicked on back");
  },
};
