import AppTemplate from "../../components/app-template";
import HeroSection from "../../components/common/HeroSection";
import InfoCard from "../../components/common/InfoCard";
import PathConstants from "../../routes/pathConstants";
import { AboutPageStyles } from "./styles";

function AboutPage() {
  return (
    <AppTemplate pageTitle="About" path={PathConstants.ABOUT}>
      <HeroSection
        title="About DKUST"
        subtitle="We build software, AI, and robotics products for modern teams."
      />
      <AboutPageStyles>
        <div className="container">
          <InfoCard
            className="about-card"
            variant="aboutPageCard"
            title="Our story"
            description="DKUST started as a technology studio focused on practical tools. Today we help teams ship analytics, automation, and industrial solutions."
          />
        </div>
      </AboutPageStyles>
    </AppTemplate>
  );
}

export default AboutPage;