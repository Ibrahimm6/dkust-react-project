import React from "react";
import AppTemplate from "../../components/app-template";
import PathConstants from "../../routes/pathConstants";
import HeroSection from "../../components/home/hero-section";
import FeaturesSection from "../../components/home/features-section";
import TrendingProducts from "../../components/home/trending-products";
import CtaSection from "../../components/home/cta-section"; 

const HomePage = () => {
  return (
    <AppTemplate pageTitle="Home" path={PathConstants.HOME}>

      <HeroSection />
      <TrendingProducts />
      <FeaturesSection />
      <CtaSection />
      
    </AppTemplate>
  );
};

export default HomePage;