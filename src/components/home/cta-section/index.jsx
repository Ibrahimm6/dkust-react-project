import React from "react";
import { useTranslation } from "react-i18next";
import PathConstants from "../../../routes/pathConstants";
import {
  CtaContainer,
  Title,
  Description,
  ButtonsGroup,
  PrimaryButton,
  SecondaryButton,
} from "./styles";

const CtaSection = () => {
  const { t } = useTranslation();

  return (
    <CtaContainer>
      <div className="container">
        <Title>{t("home.ctaTitle")}</Title>
        <Description>{t("home.ctaDesc")}</Description>
        <ButtonsGroup>
          <PrimaryButton to={PathConstants.REGISTER}>
            {t("home.ctaRegister")}
          </PrimaryButton>
          <SecondaryButton to={PathConstants.LOGIN}>
            {t("home.ctaLogin")}
          </SecondaryButton>
        </ButtonsGroup>
      </div>
    </CtaContainer>
  );
};

export default CtaSection;