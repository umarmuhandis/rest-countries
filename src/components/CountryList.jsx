import React from "react";
import { useAllCountries } from "../hooks/useAllCountries";
import { useCountry } from "../hooks/useCountry";
import CountryCard from "./CountryCard";
import Loader from "./Loader";

const CountryList = ({ countryName }) => {
  const { allCountries } = useAllCountries();
  const { countryList, isLoading } = useCountry(countryName);
  const displayedCountries = countryName ? countryList : allCountries;

  if (isLoading) {
    return <Loader className="mt-5" />;
  }

  return (
    <section className="cards-section mt-5">
      {displayedCountries.map((country) => {
        return (
          <CountryCard
            key={country.cca3}
            title={country.name.common}
            population={country.population}
            regionValue={country.region}
            capital={country.capital}
            flag={country.flags.png}
          />
        );
      })}
    </section>
  );
};

export default CountryList;
