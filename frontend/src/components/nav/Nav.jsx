import React, { useEffect, useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import "./styles/nav.css";
import "../../icons/menu-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX, faHome } from "@fortawesome/free-solid-svg-icons";
import DarkModeButton from "../dark-mode-button/DarkModeButton";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";
import "../../styles/darkMode.css";
function Nav() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const [isHidden, setIsHidden] = useState(false);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
    console.log("navigated!");
  };
  return (
    <div className="Nav">
      <div className="nav-left">
        <Link to="/" className="nav-icon nav-icon-home">
          <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
        </Link>{" "}
        {/* |
        <DarkModeButton className="nav-icon nav-icon-dark-mode"></DarkModeButton> */}
      </div>{" "}
      {user ? (
        <div className="nav-right">
          <Link to="/dashboard" className="nav-links">
            <button type="button" className="nav-btn">
              My Posts
            </button>
          </Link>
          <Link to="/" className="nav-links">
            <button
              type="button"
              onClick={onLogout}
              className="nav-btn"
              id="logout-btn"
            >
              Logout
            </button>
          </Link>
        </div>
      ) : (
        <div className="nav-right">
          {" "}
          <Link to="/register" className="nav-links">
            <button type="button" className="nav-btn">
              Sign Up
            </button>
          </Link>
          <Link to="/login" className="nav-links">
            <button type="button" className="nav-btn" id="login-btn">
              Login
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Nav;
