import React from "react";

import DocumentTitle from "react-document-title";

import { useTranslation } from "react-i18next";

const TopNewsContainer = () => {
  const { t } = useTranslation();
  return (
    <DocumentTitle title={`HTEC App - ${t("topNews")}`}>
      <div className="containerBelow">{t("topNewsFrom")}</div>
    </DocumentTitle>
  );
};

export default TopNewsContainer;
