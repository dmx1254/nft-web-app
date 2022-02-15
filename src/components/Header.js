import React from "react";
import "./header.css";
import punkLogo from "../assets/header/punkLogo.png";
import searchIcon from "../assets/header/search.png";
import themeSwitchIcon from "../assets/header/theme-switch.png";

const Header = ({ handleToggleSwitchItem, toggleSwitchItem }) => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={punkLogo} className="punkLogo" alt="logo" />
      </div>
      <div
        className="searchBar"
        style={{
          background: toggleSwitchItem && "#80848b",
        }}
      >
        <div className="searchIconContainer">
          {toggleSwitchItem ? (
            <i
              className="fas fa-search"
              style={{
                color: "#373a47",
                marginLeft: "10px",
              }}
            ></i>
          ) : (
            <img src={searchIcon} alt="searchicon" />
          )}
        </div>
        <input
          className="searchInput"
          placeholder="Rechercher des punks..."
          style={{
            color: toggleSwitchItem && "#000",
          }}
        />
      </div>
      <div
        className="headerItems"
        style={{
          color: toggleSwitchItem && "#000",
        }}
      >
        <p>Drops</p>
        <p>Marchets</p>
        <p>Creer</p>
      </div>
      <div className="headerActions">
        <div className="themeSwitchContainer" onClick={handleToggleSwitchItem}>
          <img src={themeSwitchIcon} alt="theme-dark" />
        </div>
      </div>
      <div className="loginButton">OBTENIR</div>
      <div
        className="navbar-search"
        style={{
          color: toggleSwitchItem && "#000",
        }}
      >
        <i className="fas fa-bars"></i>
      </div>
    </div>
  );
};

export default Header;
