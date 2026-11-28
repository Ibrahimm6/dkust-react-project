import { useEffect, useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import AppTemplate from "../../components/app-template";
import HeroSection from "../../components/common/HeroSection";
import InfoCard from "../../components/common/InfoCard";
import { InfoCardSkeleton } from "../../components/common/skeleton";
import PathConstants from "../../routes/pathConstants";
import { getServices } from "../../services/services-page/servicesPage.service";
import { getLocalizedText } from "../../helpers/product.helpers";
import { ServicesPageStyles } from "./styles";

function ServicesPage() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "ar" ? "ar" : "en";

  const [servicesData, setServicesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setHasError(false);
      const response = await getServices();
      if (response.status === 200 && Array.isArray(response.data)) {
        setServicesData(response.data);
      } else {
        setServicesData([]);
        setHasError(true);
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
    <AppTemplate
      pageTitle={t("services.pageTitle")}
      path={PathConstants.SERVICES}
    >
      <HeroSection
        title={t("services.heroTitle")}
        subtitle={t("services.heroSubtitle")}
      />
      <ServicesPageStyles>
        <div className="container">
          {loading ? (
            <div className="services-grid">
              {Array.from({ length: 6 }).map((_, idx) => (
                <InfoCardSkeleton key={idx} />
              ))}
            </div>
          ) : hasError ? (
            <p className="empty-state">{t("services.loadError")}</p>
          ) : displayedServices.length === 0 ? (
            <p className="empty-state">{t("services.empty")}</p>
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