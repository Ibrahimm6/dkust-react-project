import React from "react";
import { FiShield, FiPackage, FiStar } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import {
  FeaturesContainer,
  FeaturesGrid,
  FeatureCard,
  IconWrapper,
  FeatureTitle,
  FeatureDescription,
} from "./styles";

const FeaturesSection = () => {
  const { t } = useTranslation();

  const featuresData = [
    {
      id: 1,
      icon: <FiShield />,
      title: t("home.feature1Title"),
      description: t("home.feature1Desc"),
    },
    {
      id: 2,
      icon: <FiPackage />,
      title: t("home.feature2Title"),
      description: t("home.feature2Desc"),
    },
    {
      id: 3,
      icon: <FiStar />,
      title: t("home.feature3Title"),
      description: t("home.feature3Desc"),
    },
  ];

  return (
    <FeaturesContainer>
      <FeaturesGrid className="container">
        {featuresData.map((feature) => (
          <FeatureCard key={feature.id}>
            <IconWrapper>{feature.icon}</IconWrapper>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureCard>
        ))}
      </FeaturesGrid>
    </FeaturesContainer>
  );
};

export default FeaturesSection;