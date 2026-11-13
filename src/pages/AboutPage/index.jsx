import { useEffect, useState } from "react";
import AppTemplate from "../../components/app-template";
import HeroSection from "../../components/common/HeroSection";
import InfoCard from "../../components/common/InfoCard";
import PathConstants from "../../routes/pathConstants";
import { getAboutData } from "../../services/about-page/about.service";
import { AboutPageStyles } from "./styles";

function AboutPage() {
  // the following logic is not in use right now, but it is initialized in case there will be in the future.

  const [aboutData, setAboutData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    // const response = await getAboutData();
    // console.log(response);
    // if (response.status === 200) {
    //   console.log("About data fetched successfully");
    //   setAboutData(response.data);
    // } else {
    //   console.error("Failed to fetch about data");
    // }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppTemplate pageTitle="About" path={PathConstants.ABOUT}>
      <HeroSection
        title="About DKUST"
        subtitle="We build software, AI, and robotics products for modern teams."
      />
      <AboutPageStyles>
        <div className="container">
          {loading ? (
            <p>Loading about page...</p>
          ) : (
            <InfoCard
              className="about-card"
              variant="aboutPageCard"
              title="Our story"
              description="DKUST started as a technology studio focused on practical tools. Today we help teams ship analytics, automation, and industrial solutions."
            />
          )}
        </div>
      </AboutPageStyles>
    </AppTemplate>
  );
}

export default AboutPage;
