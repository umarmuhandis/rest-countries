import React from "react";
import CountryCard from "./CountryCard";

const CountryList = () => {
  return (
    <section className="cards-section mt-5">
      <div className="card-row">
        <CountryCard />
      </div>
    </section>
  );
};

export default CountryList;
