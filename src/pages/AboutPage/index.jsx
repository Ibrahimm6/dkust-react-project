import { useTranslation } from "react-i18next";
import AppTemplate from "../../components/app-template";
import HeroSection from "../../components/common/HeroSection";
import InfoCard from "../../components/common/InfoCard";
import PathConstants from "../../routes/pathConstants";
import { AboutPageStyles } from "./styles";

function AboutPage() {
  const { t } = useTranslation();

  return (
    <AppTemplate pageTitle={t("about.pageTitle")} path={PathConstants.ABOUT}>
      <HeroSection
        title={t("about.heroTitle")}
        subtitle={t("about.heroSubtitle")}
      />
      <AboutPageStyles>
        <div className="container">
          <InfoCard
            className="about-card"
            variant="aboutPageCard"
            title={t("about.storyTitle")}
            description={t("about.storyDesc")}
          />
        </div>
      </AboutPageStyles>
    </AppTemplate>
  );
}

export default AboutPage;