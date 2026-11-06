import AppTemplate from "../../components/app-template";
import HeroSection from "../../components/common/HeroSection";
import InfoCard from "../../components/common/InfoCard";
import PathConstants from "../../routes/pathConstants";
import { BlogStyles } from "./styles";

const blogData = [
  {
    title: "How AI dashboards change operations",
    description: `A look at real-time analytics and why teams adopt predictive views.`,
    date: "Sep 10, 2026",
  },
  {
    title: "Choosing a robotics kit for the lab",
    description: `What to check before buying an industrial arm for research.`,
    date: "Aug 22, 2026",
  },
  {
    title: "Cloud sync without losing control",
    description: `Multi-cloud data movement with encryption and conflict handling.`,
    date: "Jul 04, 2026",
  },
];

function Blog() {
  return (
    <AppTemplate pageTitle="Blog" path={PathConstants.BLOG}>
      <HeroSection
        title="DKUST Blog"
        subtitle="Updates, product notes, and engineering stories from the team."
      />
      <BlogStyles>
        <div className="container">
          {blogData.map((item, index) => (
            <InfoCard
              key={index}
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
