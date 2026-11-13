import { useEffect, useState } from "react";
import AppTemplate from "../../components/app-template";
import HeroSection from "../../components/common/HeroSection";
import InfoCard from "../../components/common/InfoCard";
import PathConstants from "../../routes/pathConstants";
import { ServicesPageStyles } from "./styles";
import { getServices } from "../../services/services-page/servicesPage.service";

// const servicesData = [
//   {
//     title: "Web Development",
//     description:
//       "Custom websites and product platforms built for performance and growth.",
//   },
//   {
//     title: "Machine Learning",
//     description:
//       "Predictive models, pipelines, and applied AI for business data.",
//   },
//   {
//     title: "Robotics",
//     description: "Industrial robotics design, integration, and support.",
//   },
//   {
//     title: "Industrial Consulting",
//     description:
//       "Process improvement and technology strategy for operations teams.",
//   },
//   {
//     title: "Data Analytics",
//     description:
//       "Dashboards, reporting, and insight systems for decision makers.",
//   },
// ];

function ServicesPage() {
  const [servicesData, setServicesData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    const response = await getServices();
    console.log(response);
    if (response.status === 200) {
      console.log("Services fetched successfully");
      setServicesData(response.data);
    } else {
      console.error("Failed to fetch services");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppTemplate pageTitle="Services" path={PathConstants.SERVICES}>
      <HeroSection
        title="Our Services"
        subtitle="From web platforms to machine learning and robotics, we deliver end-to-end solutions."
      />
      <ServicesPageStyles>
        <div className="container">
          {loading ? (
            <p>Loading services...</p>
          ) : (
            servicesData.map((item) => {
              if (item.lang === "en")
                return (
                  <InfoCard
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    date={item.date}
                  />
                );
            })
          )}
        </div>
      </ServicesPageStyles>
    </AppTemplate>
  );
}

export default ServicesPage;
