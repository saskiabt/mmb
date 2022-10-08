import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles/nav.css";
import "../../icons/menu-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import DarkModeButton from "../dark-mode-button/DarkModeButton";

function Nav() {
  const [isHidden, setIsHidden] = useState(true);

  const toggleLoginButton = () => {
    if (!isHidden) {
      setIsHidden(true);
    } else setIsHidden(false);
  };
  return (
    <div className="Nav">
      <button className="nav-button" onClick={toggleLoginButton}>
        {isHidden && (
          <FontAwesomeIcon icon={faBars} className="fa-bars"></FontAwesomeIcon>
        )}
        {!isHidden && (
          <FontAwesomeIcon icon={faX} className="fa-x"></FontAwesomeIcon>
        )}
      </button>
      {!isHidden ? (
        <div className="nav-right">
          {" "}
          <Link to="/login" className="nav-links">
            <button type="button" className="login-button">
              Login
            </button>
          </Link>
          {/* <Link to="/register" className="nav-links">
            <button type="button" className="register-button">
              Sign Up
            </button>
          </Link> */}
          <DarkModeButton></DarkModeButton>
        </div>
      ) : (
        <div className="filler"></div>
      )}
    </div>
  );
}

export default Nav;
