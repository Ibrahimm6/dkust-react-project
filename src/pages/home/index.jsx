import React from "react";
import { useTranslation } from "react-i18next";
import AppTemplate from "../../components/app-template";
import PathConstants from "../../routes/pathConstants";
import HeroSection from "../../components/home/hero-section";
import FeaturesSection from "../../components/home/features-section";
import TrendingProducts from "../../components/home/trending-products";
import CtaSection from "../../components/home/cta-section";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <AppTemplate pageTitle={t("nav.home")} path={PathConstants.HOME}>
      <HeroSection />
      <TrendingProducts />
      <FeaturesSection />
      <CtaSection />
    </AppTemplate>
  );
};

export default HomePage;