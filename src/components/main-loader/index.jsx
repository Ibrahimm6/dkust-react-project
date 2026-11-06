import React from "react";
import { useTranslation } from "react-i18next";
import { Loader } from "./styles";

const MainLoader = () => {
  const { t } = useTranslation();

  return (
    <Loader role="status">
      {t("Loading")}
    </Loader>
  );
};

export default MainLoader;
