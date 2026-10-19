import React from 'react';
import { FiShield, FiPackage, FiStar } from 'react-icons/fi';
import {
  FeaturesContainer,
  FeaturesGrid,
  FeatureCard,
  IconWrapper,
  FeatureTitle,
  FeatureDescription
} from './styles';

const featuresData = [
  {
    id: 1,
    icon: <FiShield />,
    title: "Enterprise Security",
    description: "AES-256 encryption and zero-log policy across all our platform services."
  },
  {
    id: 2,
    icon: <FiPackage />,
    title: "Instant Delivery",
    description: "Access your products immediately after purchase — no waiting, no friction."
  },
  {
    id: 3,
    icon: <FiStar />,
    title: "Top-Rated Support",
    description: "24/7 expert support with an average response time under 2 hours."
  }
];

const FeaturesSection = () => {
  return (
    <FeaturesContainer>
      <FeaturesGrid>
        {featuresData.map((feature) => (
          <FeatureCard key={feature.id}>
            <IconWrapper>
              {feature.icon}
            </IconWrapper>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureCard>
        ))}
      </FeaturesGrid>
    </FeaturesContainer>
  );
};

export default FeaturesSection;