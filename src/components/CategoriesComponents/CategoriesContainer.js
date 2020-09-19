import React from "react";

import DocumentTitle from "react-document-title";

import { useTranslation } from "react-i18next";

const CategoriesContainer = () => {
  const { t } = useTranslation();
  return (
    <DocumentTitle title={`HTEC App - ${t("categories")}`}>
      <div className="containerBelow">{t("top5News")}</div>
    </DocumentTitle>
  );
};

export default CategoriesContainer;
