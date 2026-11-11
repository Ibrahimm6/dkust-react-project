import { HeroSectionStyles } from "./styles";

function HeroSection({ title, subtitle, children }) {
  return (
    <HeroSectionStyles>
      <div className="container">
        <h2>{title}</h2>
        <p>{subtitle}</p>
        {children && <div>{children}</div>}
      </div>
    </HeroSectionStyles>
  );
}

export default HeroSection;