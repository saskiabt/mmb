import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles/nav.css";
import "../../icons/menu-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX, faHome } from "@fortawesome/free-solid-svg-icons";
import DarkModeButton from "../dark-mode-button/DarkModeButton";

function Nav() {
  const [isHidden, setIsHidden] = useState(false);

  const toggleLoginButton = () => {
    if (!isHidden) {
      setIsHidden(true);
    } else setIsHidden(false);
  };
  return (
    <div className="Nav">
      <div className="nav-left">
        <Link to="/" className="nav-icon nav-icon-home">
          <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
        </Link>{" "}
        |
        <DarkModeButton className="nav-icon nav-icon-dark-mode"></DarkModeButton>
      </div>
      <div className="nav-right">
        {" "}
        <Link to="/login" className="nav-links">
          <button type="button" className="login-button">
            Login
          </button>
        </Link>{" "}
        /
        <Link to="/register" className="nav-links">
          <button type="button" className="register-button">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
