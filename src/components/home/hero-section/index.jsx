import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import PathConstants from "../../../routes/pathConstants";
import {
  HeroContainer,
  ContentWrapper,
  TextContent,
  Badge,
  Title,
  Description,
  ButtonsGroup,
  PrimaryButton,
  SecondaryButton,
  StatsGrid,
  StatCard,
  StatNumber,
  StatText,
  WaveBottom,
} from "./styles";

const HeroSection = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <HeroContainer>
      <div className="container">
        <ContentWrapper>
          <TextContent>
            <Badge>{t("home.welcomeBadge")}</Badge>
            <Title>
              {t("home.heroTitleLine1")}
              <br />
              {t("home.heroTitleWith")}{" "}
              <span>
                {t("home.heroTitleHighlight1")}
                <br />
                {t("home.heroTitleHighlight2")}
              </span>
            </Title>
            <Description>{t("home.heroDescription")}</Description>
            <ButtonsGroup>
              <PrimaryButton to={PathConstants.PRODUCTS}>
                <i className="fas fa-shopping-cart"></i>{" "}
                {t("common.exploreProducts")}
              </PrimaryButton>
              <SecondaryButton to={PathConstants.QUIZ}>
                {t("common.takeQuiz")}
              </SecondaryButton>
            </ButtonsGroup>
          </TextContent>

          <StatsGrid ref={ref}>
            <StatCard>
              <StatNumber>
                {inView ? <CountUp end={12} duration={2.5} /> : "0"}K+
              </StatNumber>
              <StatText>{t("home.statClients")}</StatText>
            </StatCard>
            <StatCard>
              <StatNumber>
                {inView ? <CountUp end={340} duration={2.5} /> : "0"}+
              </StatNumber>
              <StatText>{t("home.statProjects")}</StatText>
            </StatCard>
            <StatCard>
              <StatNumber>
                {inView ? <CountUp end={98} duration={2.5} /> : "0"}%
              </StatNumber>
              <StatText>{t("home.statSatisfaction")}</StatText>
            </StatCard>
            <StatCard>
              <StatNumber>24/7</StatNumber>
              <StatText>{t("home.statSupport")}</StatText>
            </StatCard>
          </StatsGrid>
        </ContentWrapper>
      </div>

      <WaveBottom>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C79.4,121.28,154.51,120.3,222.41,106.67,258.4,99.3,290.8,84.1,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </WaveBottom>
    </HeroContainer>
  );
};

export default HeroSection;