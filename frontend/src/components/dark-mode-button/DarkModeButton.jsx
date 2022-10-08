import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function DarkModeButton({ isDarkMode, toggleDarkMode }) {
  return (
    <button className="nav-icon" onClick={toggleDarkMode} type="button">
      {isDarkMode ? (
        <FontAwesomeIcon icon={faSun} color="#FFA500" />
      ) : (
        <FontAwesomeIcon icon={faMoon} />
      )}
    </button>
  );
}

export default DarkModeButton;
