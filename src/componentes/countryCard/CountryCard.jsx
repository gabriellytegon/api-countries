import "./style.css";
import { Link } from "react-router-dom";

export function CountryCard({ name, flag, link, population, region, capital }) {
  return (
    <Link to={link} className="countryCard">
      <div className="flagContainer">
        <img src={flag} alt={name} />
      </div>
      <div className="informationsCountryCard">
        <p className="nameCountryCard">{name}</p>
        <div className="otherInformationsCard">
          <p>
            <span className="informationCard">População:</span> {population}
          </p>
          <p>
            <span className="informationCard">Região:</span> {region}
          </p>
          <p>
            <span className="informationCard">Capital:</span> {capital}
          </p>
        </div>
      </div>
    </Link>
  );
}
