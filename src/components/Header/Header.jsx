// import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import "./Header.css";

const Header = ({ setSelectedCity, selectedCity }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    if (inputValue.trim()) {
      setSelectedCity(inputValue.trim() && inputValue[0].toUpperCase() + inputValue.slice(1));
      setInputValue("");
    }
  };

  return (
    <section className="header-section">
      <div>
        <ion-icon name="location-outline"></ion-icon>
        <span>{selectedCity || "Search a City"}</span>
      </div>
      <div>
        <ion-icon name="search-outline"></ion-icon>
        <input
          type="text"
          placeholder="Search here"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSearch()} // Search on Enter key
        />
      </div>
      <div>
        <ion-icon name="partly-sunny-outline"></ion-icon>
        <ion-icon name="calendar-outline"></ion-icon>
        <ion-icon name="notifications-outline"></ion-icon>
      </div>
    </section>
  );
};

Header.propTypes = {
  setSelectedCity: PropTypes.func.isRequired,
  selectedCity: PropTypes.string.isRequired
};

export default Header;
