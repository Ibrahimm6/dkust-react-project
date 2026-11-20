import React from "react";
import { useTranslation } from "react-i18next";
import { Loader } from "./styles";

const MainLoader = () => {
  const { t } = useTranslation();

  return (
    <Loader role="status">
      {t("common-loading")}
    </Loader>
  );
};

export default MainLoader;
