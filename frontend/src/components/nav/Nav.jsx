import React from "react";
import "./styles/nav.css";
import "../../icons/menu-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

function Nav({ isHidden, setIsHidden }) {
  const toggleForm = () => {
    if (!isHidden) {
      setIsHidden(true);
    } else setIsHidden(false);
  };
  return (
    <div className="nav-wrapper">
      <button className="nav-button" onClick={toggleForm}>
        {isHidden && (
          <FontAwesomeIcon icon={faBars} className="fa-bars"></FontAwesomeIcon>
        )}
        {!isHidden && (
          <FontAwesomeIcon icon={faX} className="fa-x"></FontAwesomeIcon>
        )}
      </button>
    </div>
  );
}

export default Nav;
