import React from "react";

const Header = () => {
  return (
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
  );
};

export default Header;
