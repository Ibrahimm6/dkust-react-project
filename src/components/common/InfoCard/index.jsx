import { InfoCardStyles } from "./styles";

function InfoCard({ title, description, date }) {
  return (
    <InfoCardStyles>
      {date && <span>{date}</span>}
      {title && <h3>{title}</h3>}
      {description && <p>{description}</p>}
    </InfoCardStyles>
  );
}

export default InfoCard;
