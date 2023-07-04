import React from "react";

const CountryCard = ({ title, population, regionValue, capital, flag }) => {
  return (
    <div className="card">
      <img className="w-full h-auto" src={flag} alt="Country Flag" />
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">
          <span className="card-info-label">Population:</span> {population}
        </p>
        <p className="card-text">
          <span className="card-info-label">Region:</span> {regionValue}
        </p>
        <p className="card-text">
          <span className="card-info-label">Capital:</span> {capital}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
