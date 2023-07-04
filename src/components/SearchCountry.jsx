import React from "react";
import { COUNTRY_REGIONS } from "../constant";

const SearchCountry = ({ countryName, setCountryName }) => {
  return (
    <div className="search-container">
      <div className="search-input">
        <input
          type="text"
          id="search-input"
          placeholder="Search for a country..."
          value={countryName}
          onChange={(e) => setCountryName(e.target.value)}
        />
        <i className="fas fa-search"></i>
      </div>
      <div className="select-container p-3">
        <select className="text-sm p-3" id="continent-select">
          {COUNTRY_REGIONS.map((region) => {
            return (
              <option key={region.label} value={region.value}>
                {region.label}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default SearchCountry;
