import { InfoCardStyles } from "./styles";

function InfoCard({ title, description, date, variant }) {
  return (
    <InfoCardStyles $variant={variant}>
      {date && <span>{date}</span>}
      {title && <h3>{title}</h3>}
      {description && <p>{description}</p>}
    </InfoCardStyles>
  );
}

export default InfoCard;
