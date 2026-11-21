import { useTranslation } from "react-i18next";
import AppTemplate from "../../components/app-template";
import HeroSection from "../../components/common/HeroSection";
import InfoCard from "../../components/common/InfoCard";
import PathConstants from "../../routes/pathConstants";
import { BlogStyles } from "./styles";

function Blog() {
  const { t } = useTranslation();

  const blogData = [
    {
      id: 1,
      title: t("blog.post1Title"),
      description: t("blog.post1Desc"),
      date: t("blog.post1Date"),
    },
    {
      id: 2,
      title: t("blog.post2Title"),
      description: t("blog.post2Desc"),
      date: t("blog.post2Date"),
    },
    {
      id: 3,
      title: t("blog.post3Title"),
      description: t("blog.post3Desc"),
      date: t("blog.post3Date"),
    },
  ];

  return (
    <AppTemplate pageTitle={t("blog.pageTitle")} path={PathConstants.BLOG}>
      <HeroSection
        title={t("blog.heroTitle")}
        subtitle={t("blog.heroSubtitle")}
      />
      <BlogStyles>
        <div className="container">
          {blogData.map((item) => (
            <InfoCard
              key={item.id}
              title={item.title}
              description={item.description}
              date={item.date}
            />
          ))}
        </div>
      </BlogStyles>
    </AppTemplate>
  );
}

export default Blog;