import React from "react";

const CountryCard = (props) => {
  return (
    <div className="card">
      <img
        className="w-full h-auto"
        src="https://flagcdn.com/w320/uz.png"
        alt="Country Flag"
      />
      <div className="card-details">
        <h3 className="card-title">Country Title</h3>
        <p className="card-text">
          <span className="card-info-label">Population:</span> Population Value
        </p>
        <p className="card-text">
          <span className="card-info-label">Region:</span> Region Value
        </p>
        <p className="card-text">
          <span className="card-info-label">Capital:</span> Capital Value
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
