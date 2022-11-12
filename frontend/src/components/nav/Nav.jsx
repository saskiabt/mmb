import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./styles/nav.css";
import "../../icons/menu-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRss } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";
import "../../styles/darkMode.css";

function Nav() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
    console.log("navigated!");
  };

  return (
    <div className="Nav">
      <div className="nav-left">
        <NavLink to="/" className="nav-icon nav-btn">
          <button type="button" className="nav-icon nav-btn" id="home-btn">
            <FontAwesomeIcon icon={faRss} />
          </button>
        </NavLink>
      </div>

      {user ? (
        <div className="nav-right">
          <NavLink to="/dashboard" className="nav-links">
            <button type="button" className="nav-icon nav-btn" id="profile-btn">
              <FontAwesomeIcon icon={faUser} /> {user.username}
            </button>
          </NavLink>
          <NavLink to="/" className="nav-links">
            <button
              type="button"
              onClick={onLogout}
              className="nav-btn"
              id="logout-btn"
            >
              Logout
            </button>
          </NavLink>
        </div>
      ) : (
        <div className="nav-right">
          {" "}
          <NavLink to="/register" className="nav-links">
            <button type="button" className="nav-btn" id="signup-btn">
              Sign Up
            </button>
          </NavLink>
          <NavLink to="/login" className="nav-links">
            <button type="button" className="nav-btn" id="login-btn">
              Login
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Nav;
