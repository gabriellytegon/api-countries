import "./style.css";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Menu from "../../componentes/menu";
import Loading from "../../componentes/loading";
import Button from "../../componentes/button";
import { useTheme } from "../../contexts/ThemeContext";

export function CountryDetail() {
  const { id } = useParams();
  const [chosenCountry, setChosenCountry] = useState(null);
  //TODO: usar loading
  const [loading, setLoading] = useState(true);
  const { darkMode } = useTheme();

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/alpha/${id}`
        );
        setChosenCountry(response.data[0]);
      } catch (error) {
        console.log("Erro ao buscar países:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, [id]);

  if (!chosenCountry) return <Loading text="Carregando país..." />;

  console.log(chosenCountry);

  const nativeName =
    chosenCountry.name.nativeName &&
    Object.values(chosenCountry.name.nativeName)[0]?.official;
  const currency = Object.values(chosenCountry.currencies)[0]?.name;
  const languages = Object.values(chosenCountry.languages).join(", ");

  return (
    <>
      <Menu></Menu>
      <div className="countryDetailContainer">
        <Link to="/">
          {darkMode ? (
            <Button
              text="Voltar"
              srcIcon="/assets/leftArrowIconDark.svg"
              alt="Seta para a esquerda"
            />
          ) : (
            <Button
              text="Voltar"
              srcIcon="/assets/leftArrowIconLight.svg"
              alt="Seta para a esquerda"
            />
          )}
        </Link>
        <div className="countryDetailContent">
          <img
            src={chosenCountry.flags.svg}
            alt={chosenCountry.flags.alt}
            className="countryImage"
          />
          <div className="informationsCountryDetailAndTitle">
            <h1>{chosenCountry.name.official}</h1>
            <div className="informationsCountryDetail">
              <div>
                <p>
                  <span className="information">Nome nativo:</span> {nativeName}
                </p>
                <p>
                  <span className="information">População:</span>{" "}
                  {chosenCountry.population.toLocaleString()}
                </p>
                <p>
                  <span className="information">Região:</span>{" "}
                  {chosenCountry.region}
                </p>
                <p>
                  <span className="information">Sub região:</span>{" "}
                  {chosenCountry.subregion}
                </p>
                <p>
                  <span className="information">Capital:</span>{" "}
                  {chosenCountry.capital?.[0] || "Sem capital"}
                </p>
              </div>
              <div>
                <p>
                  <span className="information">
                    Domínio de nível superior:
                  </span>{" "}
                  {chosenCountry.tld?.join(", ")}
                </p>
                <p>
                  <span className="information">Moeda:</span> {currency}
                </p>
                <p>
                  <span className="information">Línguas:</span> {languages}
                </p>
              </div>
            </div>
            <div>
              <div className="bordersCountryInformation">
                <span className="information">Países de fronteira:</span>{" "}
                <div className="bordersCountry">
                  {chosenCountry.borders?.length > 0 ? (
                    chosenCountry.borders.map((border) => {
                      return (
                        <Link key={border} to={`/country/${border}`}>
                          <Button text={border} />
                        </Link>
                      );
                    })
                  ) : (
                    <p>Nenhum país fronteira</p>
                  )}
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
