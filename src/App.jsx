import React from "react";
import SearchCountry from "./components/SearchCountry";
import { createRoot } from "react-dom/client";
import CountryList from "./components/CountryList";

const App = () => {
  return (
    <div>
      <header>
        <div className="container">
          <div className="header-content">
            <h1 className="logo">Where in the world?</h1>
            <div className="theme-switcher">
              <label className="switch">
                <input type="checkbox" id="theme-toggle" />
                <span className="slider round"></span>
              </label>
              <span className="theme-text">Dark Mode</span>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="container">
          <SearchCountry />
          <CountryList />
        </div>
      </main>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
