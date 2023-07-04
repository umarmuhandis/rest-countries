import React, { useState } from "react";
import SearchCountry from "./components/SearchCountry";
import { createRoot } from "react-dom/client";
import CountryList from "./components/CountryList";
import Header from "./components/Header";

const App = () => {
  const [countryName, setCountryName] = useState("");

  return (
    <div>
      <Header />
      <main>
        <div className="container">
          <SearchCountry
            countryName={countryName}
            setCountryName={setCountryName}
          />
          <CountryList countryName={countryName} />
        </div>
      </main>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
