import { HeroSectionStyles } from "./styles";

function HeroSection({ title, subtitle, Children }) {
  return (
    <HeroSectionStyles>
      <div className="container">
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <div>{Children}</div>
      </div>
    </HeroSectionStyles>
  );
}

export default HeroSection;
