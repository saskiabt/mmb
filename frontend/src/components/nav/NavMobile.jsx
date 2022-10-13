import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHome } from "@fortawesome/free-solid-svg-icons";

function NavMobile() {
  return (
    <div className="nav-mobile">
      <button
        type="button"
        className="nav-btn"
        id="nav-toggle"
        // onClick={toggleNav}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className="nav-mobile-lower">
        <Link to="/" className="nav-icon nav-icon-home">
          <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
        </Link>{" "}
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
    </div>
  );
}

export default NavMobile;
