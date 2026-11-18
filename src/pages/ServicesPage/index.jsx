import { useEffect, useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import AppTemplate from "../../components/app-template";
import HeroSection from "../../components/common/HeroSection";
import InfoCard from "../../components/common/InfoCard";
import MainLoader from "../../components/main-loader";
import PathConstants from "../../routes/pathConstants";
import { getServices } from "../../services/services-page/servicesPage.service";
import { getLocalizedText } from "../../helpers/product.helpers";
import { ServicesPageStyles } from "./styles";

function ServicesPage() {
  const { i18n } = useTranslation();
  const lang = i18n?.language || "en";

  const [servicesData, setServicesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError("");
      const response = await getServices();
      if (response.status === 200 && Array.isArray(response.data)) {
        setServicesData(response.data);
      } else {
        setServicesData([]);
        setError("Failed to load services. Please try again later.");
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const displayedServices = useMemo(() => {
    const hasLangField = servicesData.some((item) => Boolean(item.lang));
    const filtered = hasLangField
      ? servicesData.filter((item) => item.lang === lang)
      : servicesData;

    const source =
      filtered.length > 0
        ? filtered
        : servicesData.filter((item) => item.lang === "en");

    return source.map((item) => ({
      id: item.id,
      title: getLocalizedText(item.title, lang),
      description: getLocalizedText(item.description, lang),
      date: item.date,
    }));
  }, [servicesData, lang]);

  return (
    <AppTemplate pageTitle="Services" path={PathConstants.SERVICES}>
      <HeroSection
        title="Our Services"
        subtitle="From web platforms to machine learning and robotics, we deliver end-to-end solutions."
      />
      <ServicesPageStyles>
        <div className="container">
          {loading ? (
            <MainLoader />
          ) : error ? (
            <p className="empty-state">{error}</p>
          ) : displayedServices.length === 0 ? (
            <p className="empty-state">No services available at the moment.</p>
          ) : (
            <div className="services-grid">
              {displayedServices.map((item) => (
                <InfoCard
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  date={item.date}
                />
              ))}
            </div>
          )}
        </div>
      </ServicesPageStyles>
    </AppTemplate>
  );
}

export default ServicesPage;