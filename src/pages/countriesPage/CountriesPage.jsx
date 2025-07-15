import "./style.css";
import axios from "axios";
import CountryCard from "../../componentes/countryCard";
import { useEffect, useState } from "react";
import Menu from "../../componentes/menu";
import FilterBar from "../../componentes/filterBar";
import Loading from "../../componentes/loading";
import Input from "../../componentes/input";

export function CountriesPage() {
  const [loading, setLoading] = useState(true);
  const [allCountries, setAllCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          "https://restcountries.com/v3.1/all?fields=name,region,capital,population,flags,cca3"
        );
        setAllCountries(response.data);
      } catch (error) {
        console.log("Erro ao buscar países:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const filteredCountries = allCountries.filter((country) => {
    const matchesName = country.name.official
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesRegion =
      region === "" || country.region.toLowerCase() === region.toLowerCase();

    return matchesName && matchesRegion;
  });

  const regionOptions = [
    { value: "", label: "Filtre por região" },
    { value: "Africa", label: "África" },
    { value: "Americas", label: "América" },
    { value: "Asia", label: "Ásia" },
    { value: "Europe", label: "Europa" },
    { value: "Oceania", label: "Oceania" },
  ];

  return loading ? (
    <Loading text="Carregando países..." />
  ) : (
    <div className="countriesPage">
      <Menu />
      <div className="filtersAndCards">
        <div className="filters">
          <Input
            type="text"
            value={search}
            placeholder="Pesquise um país..."
            ariaLabel="Campo de pesquisa de país"
            onChange={(e) => setSearch(e.target.value)}
          />
          <FilterBar
            className="filterBar"
            region={region}
            onChangeRegion={setRegion}
            options={regionOptions}
          />
        </div>

        <div className="countriesCard">
          {filteredCountries.length > 0
            ? filteredCountries.map((country) => (
                <CountryCard
                  key={country.cca3}
                  name={country.name.official}
                  capital={country.capital}
                  population={country.population}
                  region={country.region}
                  flag={country.flags.png}
                  link={`/country/${country.cca3}`}
                />
              ))
            : "Nenhum país encontrado"}
        </div>
      </div>
    </div>
  );
}
