import React, { useEffect, useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import "./styles/nav.css";
import "../../icons/menu-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX, faHome } from "@fortawesome/free-solid-svg-icons";
import DarkModeButton from "../dark-mode-button/DarkModeButton";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";
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
        |
        <DarkModeButton className="nav-icon nav-icon-dark-mode"></DarkModeButton>
      </div>

      <div className="nav-right">
        {" "}
        {user ? (
          <Link to="/" className="nav-links">
            <button type="button" onClick={onLogout}>
              Logout
            </button>
          </Link>
        ) : (
          <div>
            {" "}
            <Link to="/register" className="nav-links">
              <button type="button" className="register-button">
                Sign Up
              </button>
            </Link>
            {" / "}
            <Link to="/login" className="nav-links">
              <button type="button" className="login-button">
                Login
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Nav;
