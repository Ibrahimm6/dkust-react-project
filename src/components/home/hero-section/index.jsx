import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import PathConstants from '../../../routes/pathConstants';
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
  WaveBottom
} from './styles';

const HeroSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <HeroContainer>
      <div className="container">
        <ContentWrapper>
          <TextContent>
            <Badge>WELCOME TO DKUST</Badge>
            <Title>
              Powering the Future<br />with <span>Smart<br />Technology</span>
            </Title>
            <Description>
              We build AI-driven software, robotics systems, and intelligent hardware 
              solutions that help businesses automate, scale, and innovate faster than 
              ever before.
            </Description>
            <ButtonsGroup>
              <PrimaryButton to={PathConstants.PRODUCTS}>
                <i className="fas fa-shopping-cart"></i> Explore Products
              </PrimaryButton>
              <SecondaryButton to={PathConstants.QUIZ}>
                Take the Quiz
              </SecondaryButton>
            </ButtonsGroup>
          </TextContent>

          <StatsGrid ref={ref}>
            <StatCard>
              <StatNumber>
                {inView ? <CountUp end={12} duration={2.5} /> : '0'}K+
              </StatNumber>
              <StatText>Happy Clients</StatText>
            </StatCard>
            <StatCard>
              <StatNumber>
                {inView ? <CountUp end={340} duration={2.5} /> : '0'}+
              </StatNumber>
              <StatText>Projects Delivered</StatText>
            </StatCard>
            <StatCard>
              <StatNumber>
                {inView ? <CountUp end={98} duration={2.5} /> : '0'}%
              </StatNumber>
              <StatText>Satisfaction Rate</StatText>
            </StatCard>
            <StatCard>
              <StatNumber>24/7</StatNumber>
              <StatText>Support Available</StatText>
            </StatCard>
          </StatsGrid>
        </ContentWrapper>
      </div>

      <WaveBottom>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C79.4,121.28,154.51,120.3,222.41,106.67,258.4,99.3,290.8,84.1,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </WaveBottom>
    </HeroContainer>
  );
};

export default HeroSection;