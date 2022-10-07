import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles/nav.css";
import "../../icons/menu-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  const [isHidden, setIsHidden] = useState(true);

  const toggleLoginButton = () => {
    if (!isHidden) {
      setIsHidden(true);
    } else setIsHidden(false);
  };
  return (
    <div className="nav-wrapper">
      <button className="nav-button" onClick={toggleLoginButton}>
        {isHidden && (
          <FontAwesomeIcon icon={faBars} className="fa-bars"></FontAwesomeIcon>
        )}
        {!isHidden && (
          <FontAwesomeIcon icon={faX} className="fa-x"></FontAwesomeIcon>
        )}
      </button>
      {!isHidden ? (
        <Link to="/login" className="login-link">
          <button type="button" className="login-button">
            Login
          </button>
        </Link>
      ) : (
        <div className="filler"></div>
      )}
    </div>
  );
}

export default Nav;
