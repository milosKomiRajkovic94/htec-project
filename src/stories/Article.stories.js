import React from "react";

import { Article } from "./Article";

export default {
  title: "Example/Article",
  component: Article,
};

const Template = (args) => <Article {...args} />;

export const SingleArticle = Template.bind({});

SingleArticle.args = {
  singleArticleData: {
    source: {
      id: null,
      name: "BBC News",
    },
    author: "https://www.facebook.com/bbcnews",
    title:
      "Ricin: Letter containing poison addressed to Trump at White House - BBC News",
    description:
      "The FBI and the Secret Service investigate the letter, intercepted before it reached the White House.",
    url: "https://www.bbc.com/news/world-us-canada-54221893",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/C903/production/_114495415_gettyimages-167852887-594x594.jpg",
    publishedAt: "2020-09-20T07:26:57Z",
    content:
      "Image copyrightGetty ImagesImage caption\r\n The letter was intercepted by law enforcement before it reached the White House, officials said\r\nA package containing ricin poison that was addressed to US … [+2020 chars]",
  },
};
