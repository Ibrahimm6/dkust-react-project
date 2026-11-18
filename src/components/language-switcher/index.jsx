import React from "react";
import { useTranslation } from "react-i18next";
import { FiGlobe } from "react-icons/fi";
import { SwitcherButton } from "./styles";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language === "ar" ? "ar" : "en";

  const handleToggle = () => {
    const nextLang = currentLang === "en" ? "ar" : "en";
    i18n.changeLanguage(nextLang);
  };

  return (
    <SwitcherButton
      type="button"
      onClick={handleToggle}
      aria-label="Switch Language"
    >
      <FiGlobe />
      <span>{currentLang === "en" ? "AR" : "EN"}</span>
    </SwitcherButton>
  );
};

export default LanguageSwitcher;