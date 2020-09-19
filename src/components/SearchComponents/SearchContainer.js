import React from "react";

import DocumentTitle from "react-document-title";

import { useTranslation } from "react-i18next";

const SearchContainer = () => {
  const { t } = useTranslation();
  return (
    <DocumentTitle title={`HTEC App - ${t("search")}`}>
      <div className="containerBelow">{t("searchTopNewsByTheTerm")}</div>
    </DocumentTitle>
  );
};

export default SearchContainer;
